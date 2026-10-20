(function () {
  "use strict";

  var data = window.MENUS_DATA;
  var CART_KEY = "gv_cart_v1";
  var CHECKOUT_KEY = "gv_checkout_v1";
  var cart = loadCart();
  var geo = loadGeo();
  var pago = loadPago();

  /* ---------- Helpers ---------- */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function money(n) {
    if (n === null || n === undefined) return null;
    return "$" + n;
  }

  function slug(text) {
    return String(text)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function restId(rest) {
    return rest.id || slug(rest.nombre);
  }

  function contactOf(rest) {
    return {
      telefono: rest.telefono || data.marca.telefono || null,
      whatsapp: rest.whatsapp || data.marca.whatsapp || null
    };
  }

  function restById(rid) {
    var lista = data.restaurantes || [];
    for (var i = 0; i < lista.length; i++) {
      if (restId(lista[i]) === rid) return lista[i];
    }
    return null;
  }

  function origenLines(rest) {
    if (!rest || !rest.direccion) return [];
    return ["\ud83d\udcd0 Sale desde: " + rest.direccion];
  }

  function waLink(rest, contacto, message) {
    if (!contacto.whatsapp) return null;
    var msg = message || ("Hola, quiero hacer un pedido de " + rest.nombre + " \ud83d\ude0a");
    return "https://wa.me/" + contacto.whatsapp + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- Cart state ---------- */
  function loadCart() {
    try {
      var raw = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) { /* almacenamiento no disponible */ }
    updateCartUI();
  }

  function cartCount() {
    return cart.reduce(function (sum, it) { return sum + it.qty; }, 0);
  }

  function cartTotal() {
    return cart.reduce(function (sum, it) {
      if (it.sinPrecio || it.precio === null || it.precio === undefined) return sum;
      return sum + it.precio * it.qty;
    }, 0);
  }

  function cartItemKey(rest, item, precio, label, contexto, salsas, salsasLabel, sinPrecio) {
    var salsaKey = (salsas && salsas.length) ? salsas.slice().sort().join(",") : "";
    return [restId(rest), item.nombre, label || "", sinPrecio ? "sp" : (precio || 0), contexto || "", salsaKey, salsasLabel || ""].join("|");
  }

  function addToCart(rest, item, precio, label, contexto, salsas, salsasLabel, sinPrecio) {
    if (!sinPrecio && (precio === null || precio === undefined)) return;
    var list = (salsas && salsas.length) ? salsas : null;
    var key = cartItemKey(rest, item, precio, label, contexto, list, salsasLabel, sinPrecio);
    var found = null;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].key === key) { found = cart[i]; break; }
    }
    if (found) {
      found.qty += 1;
    } else {
      cart.push({
        key: key,
        restId: restId(rest),
        restNombre: rest.nombre,
        nombre: item.nombre,
        precio: sinPrecio ? null : precio,
        sinPrecio: !!sinPrecio,
        label: label || null,
        contexto: contexto || null,
        salsas: list,
        salsasLabel: salsasLabel || null,
        qty: 1
      });
    }
    saveCart();
    toast(item.nombre + (label ? " (" + label + ")" : "") + (list ? " \u00b7 " + list.join(", ") : "") + " agregado");
  }

  function changeQty(key, delta) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].key === key) {
        cart[i].qty += delta;
        if (cart[i].qty <= 0) cart.splice(i, 1);
        break;
      }
    }
    saveCart();
  }

  function clearCart() {
    cart = [];
    saveCart();
  }

  /* ---------- Checkout data ---------- */
  function loadCheckout() {
    try {
      var raw = JSON.parse(localStorage.getItem(CHECKOUT_KEY) || "{}");
      return raw && typeof raw === "object" ? raw : {};
    } catch (e) {
      return {};
    }
  }

  function loadGeo() {
    var saved = loadCheckout();
    if (saved.geo && typeof saved.geo.lat === "number" && typeof saved.geo.lon === "number") {
      return saved.geo;
    }
    return { lat: null, lon: null };
  }

  function loadPago() {
    var saved = loadCheckout();
    return {
      metodo: saved.metodo || null,
      exacto: !!saved.exacto,
      pagaCon: saved.pagaCon || null
    };
  }

  function fieldValue(id) {
    var node = document.getElementById(id);
    return node && typeof node.value === "string" ? node.value.trim() : "";
  }

  function readCheckout() {
    if (geo.lat === null || geo.lon === null) return null;
    if (!pago.metodo) return null;

    var customer = {
      geo: geo,
      metodo: pago.metodo,
      exacto: false,
      pagaCon: null,
      cambio: null
    };

    if (pago.metodo === "efectivo") {
      if (pago.exacto) {
        customer.exacto = true;
      } else {
        var amount = parseFloat(fieldValue("co-change"));
        if (!isNaN(amount) && amount > 0) {
          customer.pagaCon = amount;
          var diff = amount - cartTotal();
          if (diff >= 0) customer.cambio = diff;
        }
      }
    }
    return customer;
  }

  function saveCheckout() {
    try {
      var cambio = parseFloat(fieldValue("co-change"));
      localStorage.setItem(CHECKOUT_KEY, JSON.stringify({
        geo: geo,
        metodo: pago.metodo,
        exacto: pago.exacto,
        pagaCon: !isNaN(cambio) && cambio > 0 ? cambio : null
      }));
    } catch (e) { /* almacenamiento no disponible */ }
  }

  function showGeoStatus() {
    var label = document.getElementById("geo-label");
    var status = document.getElementById("geo-status");
    if (geo.lat === null || geo.lon === null) return;
    if (label) label.textContent = "Ubicación compartida";
    if (status) {
      status.hidden = false;
      status.textContent = geo.lat.toFixed(5) + ", " + geo.lon.toFixed(5);
    }
  }

  function updateChangeInfo() {
    var info = document.getElementById("change-info");
    if (!info) return;
    var amount = parseFloat(fieldValue("co-change"));
    if (pago.metodo !== "efectivo" || pago.exacto || isNaN(amount) || amount <= 0) {
      info.hidden = true;
      info.textContent = "";
      return;
    }
    var diff = amount - cartTotal();
    info.hidden = false;
    info.textContent = diff >= 0
      ? "Tu cambio: " + money(diff)
      : "El monto es menor al total (" + money(cartTotal()) + ")";
  }

  function updatePayUI() {
    var ef = document.getElementById("pay-efectivo");
    var tj = document.getElementById("pay-tarjeta");
    if (ef) {
      if (pago.metodo === "efectivo") ef.classList.add("pay-btn--on");
      else ef.classList.remove("pay-btn--on");
    }
    if (tj) {
      if (pago.metodo === "tarjeta") tj.classList.add("pay-btn--on");
      else tj.classList.remove("pay-btn--on");
    }

    var ex = document.getElementById("co-exacto");
    if (ex) {
      if (pago.exacto) ex.classList.add("pay-btn--on");
      else ex.classList.remove("pay-btn--on");
    }

    var changeInput = document.getElementById("co-change");
    if (changeInput) changeInput.hidden = pago.exacto;

    var box = document.getElementById("change-box");
    if (box) box.hidden = pago.metodo !== "efectivo";
    updateChangeInfo();
  }

  function setPayMethod(metodo) {
    pago.metodo = metodo;
    saveCheckout();
    updatePayUI();
  }

  function setExacto() {
    pago.exacto = !pago.exacto;
    if (pago.exacto) {
      var input = document.getElementById("co-change");
      if (input) input.value = "";
    }
    saveCheckout();
    updatePayUI();
  }

  function requestLocation() {
    var label = document.getElementById("geo-label");
    var status = document.getElementById("geo-status");

    if (typeof navigator === "undefined" || !navigator.geolocation) {
      toast("Tu navegador no permite ubicación");
      return;
    }

    if (label) label.textContent = "Buscando ubicación…";
    if (status) { status.hidden = false; status.textContent = "…"; }

    navigator.geolocation.getCurrentPosition(
      function (pos) {
        geo.lat = pos.coords.latitude;
        geo.lon = pos.coords.longitude;
        saveCheckout();
        showGeoStatus();
        toast("Ubicación compartida");
      },
      function (err) {
        if (label) label.textContent = "Compartir mi ubicación actual";
        if (status) { status.hidden = true; }
        var msg = "No se pudo obtener la ubicación";
        if (err && err.code === 1) msg = "Permiso de ubicación denegado";
        else if (err && err.code === 2) msg = "Ubicación no disponible";
        else if (err && err.code === 3) msg = "Tiempo agotado, intenta de nuevo";
        toast(msg);
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
    );
  }

  function restoreCheckout() {
    showGeoStatus();
    updatePayUI();
    var change = document.getElementById("co-change");
    if (change && !pago.exacto && pago.pagaCon) change.value = pago.pagaCon;
    updateChangeInfo();
  }

  function groupCart() {
    var map = {};
    cart.forEach(function (it) {
      if (!map[it.restId]) map[it.restId] = { nombre: it.restNombre, items: [] };
      map[it.restId].items.push(it);
    });
    return map;
  }

  function itemTitle(it) {
    var title = it.nombre;
    if (it.label) title += " (" + it.label + ")";
    var salsas = it.salsas && it.salsas.length ? it.salsas : (it.salsa ? [it.salsa] : []);
    if (salsas.length) {
      var opLabel = it.salsasLabel || "salsas";
      title += " \u00b7 " + opLabel.charAt(0).toUpperCase() + opLabel.slice(1) + ": " + salsas.join(", ");
    }
    if (it.contexto) title += " \u00b7 " + it.contexto;
    return title;
  }

  function buildOrderMessage(customer) {
    var grupos = groupCart();
    var lines = ["\ud83d\uded2 *Nuevo pedido \u2014 " + data.marca.titulo + "*", ""];

    if (customer) {
      lines.push("*Entrega*");
      if (customer.geo) {
        lines.push("\ud83d\uddfa\ufe0f Ubicación exacta: https://maps.google.com/?q=" + customer.geo.lat + "," + customer.geo.lon);
      }
      lines.push("");
      lines.push("*Pago*");
      if (customer.metodo === "efectivo") {
        var pagoLine = "\ud83d\udcb5 Efectivo";
        if (customer.exacto) {
          pagoLine += " (pago exacto)";
        } else if (customer.pagaCon) {
          pagoLine += " \u2014 paga con " + money(customer.pagaCon);
          if (customer.cambio !== null) pagoLine += " (cambio " + money(customer.cambio) + ")";
        }
        lines.push(pagoLine);
      } else {
        lines.push("\ud83d\udcb3 Tarjeta");
      }
      lines.push("");
    }

    var porConfirmar = false;
    Object.keys(grupos).forEach(function (rid) {
      var grupo = grupos[rid];
      lines.push("*" + grupo.nombre + "*");
      origenLines(restById(rid)).forEach(function (l) { lines.push(l); });
      grupo.items.forEach(function (it) {
        if (it.sinPrecio) {
          porConfirmar = true;
          lines.push("\u2022 " + it.qty + "x " + itemTitle(it) + " \u2014 precio por confirmar");
        } else {
          lines.push("\u2022 " + it.qty + "x " + itemTitle(it) + " \u2014 " + money(it.precio * it.qty));
        }
      });
      lines.push("");
    });
    lines.push("*Total: " + money(cartTotal()) + (porConfirmar ? " + (art\u00edculos por confirmar)*" : "*"));
    return lines.join("\n");
  }

  function openWhatsAppOrder(rest, contacto, allowEmpty) {
    var customer = readCheckout();

    if (cart.length && !customer) {
      openCart();
      if (geo.lat === null || geo.lon === null) toast("Comparte tu ubicación para el pedido");
      else toast("Elige cómo vas a pagar");
      return;
    }

    if (!cart.length && (!allowEmpty || !rest)) {
      openCart();
      toast("Agrega productos a tu pedido");
      return;
    }

    var num = (contacto && contacto.whatsapp) || (rest && contactOf(rest).whatsapp) || data.marca.whatsapp;
    if (!num) {
      toast("No hay número de WhatsApp configurado");
      return;
    }

    var msg;
    if (cart.length) {
      msg = buildOrderMessage(customer);
    } else {
      msg = "Hola, quiero pedir de " + rest.nombre + " \ud83d\ude0a";
      var orig = origenLines(rest);
      if (orig.length) msg += "\n" + orig.join("\n");
      if (customer) {
        msg += "\n\n\ud83d\uddfa\ufe0f Ubicación: https://maps.google.com/?q=" + customer.geo.lat + "," + customer.geo.lon;
        msg += customer.metodo === "efectivo" ? "\n\ud83d\udcb5 Pago: Efectivo" : "\n\ud83d\udcb3 Pago: Tarjeta";
      }
    }
    window.open("https://wa.me/" + num + "?text=" + encodeURIComponent(msg), "_blank");
  }

  function sendMandado() {
    var box = document.getElementById("mandado-notes");
    var texto = box && typeof box.value === "string" ? box.value.trim() : "";
    if (!texto) {
      toast("Escribe qué necesitas");
      return;
    }
    var num = data.marca.whatsapp;
    if (!num) {
      toast("No hay número de WhatsApp configurado");
      return;
    }
    var msg = "\ud83d\udce6 *Mandado / extra*\n\n" + texto;
    window.open("https://wa.me/" + num + "?text=" + encodeURIComponent(msg), "_blank");
  }

  function toast(message) {
    var node = document.getElementById("toast");
    if (!node) return;
    node.textContent = message;
    node.hidden = false;
    node.classList.add("toast--show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () {
      node.classList.remove("toast--show");
      setTimeout(function () { node.hidden = true; }, 250);
    }, 1900);
  }

  /* ---------- Option picker (salsas / guisos / extras) ---------- */
  function openOptionPicker(title, options, onConfirm, emptyLabel, single, limit) {
    var modal = document.getElementById("option-modal");
    var list = document.getElementById("option-list");
    var actions = document.getElementById("option-actions");
    var titleEl = document.getElementById("option-title");
    if (!modal || !list) { onConfirm([]); return; }

    var emptyText = emptyLabel || "Agregar sin salsa";
    var max = single ? 1 : (limit || 0);

    if (titleEl) titleEl.textContent = title;
    list.innerHTML = "";
    if (actions) actions.innerHTML = "";

    var selected = {};
    var optionBtns = [];

    function chosen() {
      return options.filter(function (option) { return selected[option]; });
    }
    function refresh() {
      if (confirmBtn) {
        var n = chosen().length;
        confirmBtn.textContent = n ? "Agregar (" + (single ? 1 : n) + ")" : emptyText;
        var tope = "";
        if (max > 1) tope = "Elige hasta " + max;
        confirmBtn.title = tope;
      }
    }
    function clearSelection() {
      selected = {};
      optionBtns.forEach(function (b) { b.classList.remove("option-item--on"); });
    }

    options.forEach(function (option) {
      var btn = el("button", "option-item", option);
      btn.type = "button";
      btn.addEventListener("click", function () {
        if (selected[option]) {
          delete selected[option];
          btn.classList.remove("option-item--on");
        } else if (single) {
          clearSelection();
          selected[option] = true;
          btn.classList.add("option-item--on");
        } else if (max > 1 && chosen().length >= max) {
          toast("Puedes elegir hasta " + max);
        } else {
          selected[option] = true;
          btn.classList.add("option-item--on");
        }
        refresh();
      });
      optionBtns.push(btn);
      list.appendChild(btn);
    });

    var confirmBtn = null;
    if (actions) {
      confirmBtn = el("button", "btn btn--wa option-confirm", emptyText);
      confirmBtn.type = "button";
      confirmBtn.addEventListener("click", function () {
        closeOptionPicker();
        onConfirm(chosen());
      });
      actions.appendChild(confirmBtn);
    }

    refresh();
    modal.hidden = false;
    modal.classList.add("modal--show");
  }

  function closeOptionPicker() {
    var modal = document.getElementById("option-modal");
    if (!modal) return;
    modal.classList.remove("modal--show");
    modal.hidden = true;
  }

  /* ---------- Cart UI ---------- */
  function updateCartUI() {
    var count = cartCount();

    var badge = document.getElementById("cart-count");
    if (badge) {
      badge.textContent = String(count);
      badge.hidden = count === 0;
    }

    var fab = document.getElementById("cart-fab");
    if (fab) {
      if (count > 0) fab.classList.add("has-items");
      else fab.classList.remove("has-items");
    }

    var totalEl = document.getElementById("cart-total");
    if (totalEl) totalEl.textContent = money(cartTotal()) || "$0";

    var itemsBox = document.getElementById("cart-items");
    if (itemsBox) {
      itemsBox.innerHTML = "";

      if (!cart.length) {
        itemsBox.appendChild(el("p", "cart-empty", "Tu carrito está vacío. Toca un precio para agregar productos."));
      } else {
        var grupos = groupCart();
        Object.keys(grupos).forEach(function (rid) {
          var grupo = grupos[rid];
          itemsBox.appendChild(el("div", "cart-rest", grupo.nombre));
          grupo.items.forEach(function (it) {
            var row = el("div", "cart-item");

            var info = el("div", "cart-item__info");
            info.appendChild(el("span", "cart-item__name", itemTitle(it)));
            info.appendChild(el("span", "cart-item__price", it.sinPrecio ? "Precio por confirmar" : money(it.precio)));
            row.appendChild(info);

            var ctr = el("div", "cart-item__qty");
            var minus = el("button", "qty-btn", "\u2212");
            minus.type = "button";
            minus.setAttribute("aria-label", "Quitar uno");
            minus.addEventListener("click", function () { changeQty(it.key, -1); });
            ctr.appendChild(minus);

            ctr.appendChild(el("span", "qty-num", String(it.qty)));

            var plus = el("button", "qty-btn", "+");
            plus.type = "button";
            plus.setAttribute("aria-label", "Agregar uno");
            plus.addEventListener("click", function () { changeQty(it.key, 1); });
            ctr.appendChild(plus);

            row.appendChild(ctr);
            itemsBox.appendChild(row);
          });
        });
      }
    }

    updateChangeInfo();
  }

  function openCart() {
    var panel = document.getElementById("cart-panel");
    var backdrop = document.getElementById("cart-backdrop");
    if (panel) panel.hidden = false;
    if (backdrop) backdrop.hidden = false;
    document.body.classList.add("cart-open");
  }

  function closeCart() {
    var panel = document.getElementById("cart-panel");
    var backdrop = document.getElementById("cart-backdrop");
    if (panel) panel.hidden = true;
    if (backdrop) backdrop.hidden = true;
    document.body.classList.remove("cart-open");
  }

  /* ---------- Header ---------- */
  function renderHeader(marca) {
    var header = document.getElementById("site-header");
    header.innerHTML = "";

    var logoWrap = el("div", "logo");
    var img = new Image();
    img.alt = marca.titulo;
    img.onerror = function () {
      logoWrap.classList.add("logo--fallback");
      logoWrap.textContent = marca.iniciales || "GV";
    };
    img.src = marca.logo;
    logoWrap.appendChild(img);

    var titles = el("div", "titles");
    titles.appendChild(el("h1", null, marca.titulo));
    titles.appendChild(el("p", "subtitle", marca.subtitulo));

    header.appendChild(logoWrap);
    header.appendChild(titles);
  }

  /* ---------- Grid (cuadros) ---------- */
  function renderGrid() {
    var grid = document.getElementById("restaurants");
    grid.innerHTML = "";

    data.restaurantes.forEach(function (rest) {
      var card = el("a", "tile");
      card.href = "#/" + restId(rest);
      card.setAttribute("aria-label", "Ver menú de " + rest.nombre);

      var top = el("div", "tile__top");
      top.appendChild(el("span", "tile__emoji", rest.emoji || "\ud83c\udf7d\ufe0f"));
      top.appendChild(el("span", "tile__arrow", "\u2192"));
      card.appendChild(top);

      card.appendChild(el("h3", "tile__name", rest.nombre));

      if (rest.etiqueta) card.appendChild(el("span", "tile__tag", rest.etiqueta));
      if (rest.eslogan) card.appendChild(el("p", "tile__slogan", rest.eslogan));

      var meta = el("div", "tile__meta");
      meta.appendChild(el("span", null, rest.secciones.length + " secciones"));
      var contacto = contactOf(rest);
      if (contacto.telefono) meta.appendChild(el("span", "tile__phone", "\ud83d\udcde " + contacto.telefono));
      card.appendChild(meta);

      grid.appendChild(card);
    });
  }

  /* ---------- Prices ---------- */
  function pricePill(label, value, onAdd) {
    var pill = onAdd ? el("button", "pill pill--add") : el("span", "pill");
    if (onAdd) {
      pill.type = "button";
      pill.title = "Agregar al carrito";
      pill.addEventListener("click", onAdd);
    }
    if (label) pill.appendChild(el("span", "pill__label", label));
    pill.appendChild(el("span", "pill__value", value));
    if (onAdd) pill.appendChild(el("span", "pill__plus", "+"));
    return pill;
  }

  function priceParts(item, columnas) {
    if (item.precios && item.precios.length) {
      return item.precios.map(function (p) {
        return { label: p.label || null, value: money(p.valor), raw: p.valor, max: p.max };
      }).filter(function (p) { return p.value !== null; });
    }
    var parts = [];
    if (item.precio !== undefined && item.precio !== null) {
      parts.push({ label: columnas && columnas[0] ? columnas[0] : null, value: money(item.precio), raw: item.precio });
    }
    if (item.precio2 !== undefined && item.precio2 !== null) {
      parts.push({ label: columnas && columnas[1] ? columnas[1] : null, value: money(item.precio2), raw: item.precio2 });
    }
    return parts;
  }

  function fillPrices(box, parts, onAddFor, sinPrecio) {
    if (!parts.length) {
      if (onAddFor && sinPrecio) {
        var sp = el("button", "price price--add price--add-text");
        sp.type = "button";
        sp.title = "Agregar al carrito";
        sp.appendChild(el("span", null, "Precio por confirmar"));
        sp.appendChild(el("span", "price__plus", "+"));
        sp.addEventListener("click", function () { onAddFor({ sinPrecio: true }); });
        box.appendChild(sp);
      }
      return;
    }
    if (parts.length === 1 && !parts[0].label) {
      var p = parts[0];
      if (onAddFor) {
        var btn = el("button", "price price--add");
        btn.type = "button";
        btn.title = "Agregar al carrito";
        btn.appendChild(el("span", null, p.value));
        btn.appendChild(el("span", "price__plus", "+"));
        btn.addEventListener("click", function () { onAddFor(p); });
        box.appendChild(btn);
      } else {
        box.appendChild(el("span", "price", p.value));
      }
      return;
    }
    parts.forEach(function (part) {
      var onAdd = onAddFor ? function () { onAddFor(part); } : null;
      box.appendChild(pricePill(part.label, part.value, onAdd));
    });
  }

  /* ---------- Item renderers ---------- */
  function renderItemTabla(item, columnas, onAddFor) {
    var row = el("div", "row");

    var main = el("div", "row__main");
    main.appendChild(el("span", "row__name", item.nombre));
    if (item.descripcion) main.appendChild(el("span", "row__desc", item.descripcion));
    row.appendChild(main);

    row.appendChild(el("span", "row__dots"));
    var priceCell = el("span", "row__price");
    fillPrices(priceCell, priceParts(item, columnas), onAddFor, item.sinPrecio);
    row.appendChild(priceCell);
    return row;
  }

  function renderItemCarta(item, columnas, onAddFor) {
    var card = el("article", "card");

    var head = el("div", "card__head");
    head.appendChild(el("h4", "card__name", item.nombre));

    var priceBox = el("div", "card__prices");
    fillPrices(priceBox, priceParts(item, columnas), onAddFor, item.sinPrecio);
    head.appendChild(priceBox);
    card.appendChild(head);

    if (item.descripcion) card.appendChild(el("p", "card__desc", item.descripcion));
    return card;
  }

  function renderPromo(item, onAddFor) {
    var card = el("article", "promo");
    if (item.etiqueta) card.appendChild(el("span", "promo__badge", item.etiqueta));
    if (item.cuando) card.appendChild(el("span", "promo__when", item.cuando));
    card.appendChild(el("h4", "promo__name", item.nombre));
    if (item.descripcion) card.appendChild(el("p", "promo__desc", item.descripcion));
    var priceBox = el("div", "promo__price");
    fillPrices(priceBox, priceParts(item), onAddFor, item.sinPrecio);
    if (priceBox.children.length) card.appendChild(priceBox);
    return card;
  }

  function singularize(w) {
    if (w.slice(-4) === "ones") return w.slice(0, -4) + "\u00f3n";
    if (w.slice(-4) === "ores") return w.slice(0, -4) + "or";
    if (w.slice(-3) === "des") return w.slice(0, -2);
    if (w.slice(-2) === "as" || w.slice(-2) === "os" || w.slice(-2) === "es") return w.slice(0, -1);
    if (w.charAt(w.length - 1) === "s") return w.slice(0, -1);
    return w;
  }

  function makeAdder(rest, item, contexto, salsas, salsasLabel, salsasUnico, salsasMax) {
    var opLabel = salsasLabel || "salsas";
    var opSingular = singularize(opLabel);
    return function (part) {
      var tope = (part && part.max) || salsasMax;
      if (salsas && salsas.length) {
        openOptionPicker("Elige tus " + opLabel + " para " + item.nombre, salsas, function (elegidas) {
          addToCart(rest, item, part.raw, part.label, contexto, elegidas, opLabel, part.sinPrecio);
        }, "Agregar sin " + opSingular, !!salsasUnico, tope);
      } else {
        addToCart(rest, item, part.raw, part.label, contexto, null, null, part.sinPrecio);
      }
    };
  }

  function renderItems(items, layout, columnas, rest, contexto, salsas, salsasLabel, salsasUnico, salsasMax) {
    var body = el("div", "menu-block__body");

    if (layout === "chips") {
      body.classList.add("menu-block__body--chips");
      var wrap = el("div", "chips");
      items.forEach(function (item) { wrap.appendChild(el("span", "chip", item.nombre)); });
      body.appendChild(wrap);
    } else if (layout === "promos") {
      body.classList.add("menu-block__body--grid");
      items.forEach(function (item) {
        var adder = rest && (item.precio != null || (item.precios && item.precios.length) || item.sinPrecio)
          ? makeAdder(rest, item, contexto, item.salsas || salsas, item.salsasLabel || salsasLabel, item.salsasUnico !== undefined ? item.salsasUnico : salsasUnico, item.salsasMax || salsasMax)
          : null;
        body.appendChild(renderPromo(item, adder));
      });
    } else if (layout === "cartas") {
      body.classList.add("menu-block__body--grid");
      items.forEach(function (item) {
        var hasPrice = (item.precio !== undefined && item.precio !== null) || (item.precios && item.precios.length) || item.sinPrecio;
        var adder = rest && hasPrice ? makeAdder(rest, item, contexto, item.salsas || salsas, item.salsasLabel || salsasLabel, item.salsasUnico !== undefined ? item.salsasUnico : salsasUnico, item.salsasMax || salsasMax) : null;
        body.appendChild(renderItemCarta(item, columnas, adder));
      });
    } else {
      if (columnas && columnas.length) {
        var legend = el("div", "legend");
        legend.appendChild(el("span", "legend__name", "Producto"));
        columnas.forEach(function (c) { legend.appendChild(el("span", "legend__col", c)); });
        body.appendChild(legend);
      }
      items.forEach(function (item) {
        var adder = rest ? makeAdder(rest, item, contexto, item.salsas || salsas, item.salsasLabel || salsasLabel, item.salsasUnico !== undefined ? item.salsasUnico : salsasUnico, item.salsasMax || salsasMax) : null;
        body.appendChild(renderItemTabla(item, columnas, adder));
      });
    }

    return body;
  }

  function renderSection(section, rest) {
    var block = el("section", "menu-block");
    block.id = "sec-" + slug(section.titulo);

    var heading = el("h3", "menu-block__title");
    if (section.emoji) heading.appendChild(el("span", "menu-block__emoji", section.emoji));
    heading.appendChild(el("span", null, section.titulo));
    block.appendChild(heading);

    if (section.nota) block.appendChild(el("p", "menu-block__note", section.nota));

    if (section.grupos && section.grupos.length) {
      section.grupos.forEach(function (grupo) {
        var g = el("div", "menu-group");
        if (grupo.titulo) g.appendChild(el("h4", "menu-group__title", grupo.titulo));
        if (grupo.nota) g.appendChild(el("p", "menu-group__note", grupo.nota));
        var contexto = grupo.titulo || section.titulo;
        var salsas = grupo.salsas || section.salsas;
        var salsasLabel = grupo.salsasLabel || section.salsasLabel;
        var salsasUnico = grupo.salsasUnico !== undefined ? grupo.salsasUnico : section.salsasUnico;
        var salsasMax = grupo.salsasMax || section.salsasMax;
        g.appendChild(renderItems(grupo.items, grupo.layout || "tabla", grupo.columnas, rest, contexto, salsas, salsasLabel, salsasUnico, salsasMax));
        block.appendChild(g);
      });
    } else {
      block.appendChild(renderItems(section.items, section.layout || "tabla", section.columnas, rest, section.titulo, section.salsas, section.salsasLabel, section.salsasUnico, section.salsasMax));
    }

    return block;
  }

  /* ---------- Restaurant detail ---------- */
  function scrollToSection(title) {
    var target = document.getElementById("sec-" + slug(title));
    if (target && target.scrollIntoView) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function renderDetail(rest) {
    var wrap = document.getElementById("restaurant-detail");
    wrap.innerHTML = "";

    var article = el("article", "restaurant");
    article.id = restId(rest);

    var head = el("div", "restaurant__head");
    var info = el("div", "restaurant__info");

    var nameLine = el("h2", "restaurant__name");
    if (rest.emoji) nameLine.appendChild(el("span", "restaurant__emoji", rest.emoji));
    nameLine.appendChild(el("span", null, rest.nombre));
    info.appendChild(nameLine);

    if (rest.etiqueta) info.appendChild(el("span", "restaurant__tag", rest.etiqueta));
    if (rest.eslogan) info.appendChild(el("p", "restaurant__slogan", rest.eslogan));
    if (rest.direccion) info.appendChild(el("p", "restaurant__slogan", "\ud83d\udccd " + rest.direccion));
    if (rest.horario) info.appendChild(el("p", "restaurant__slogan", "\ud83d\udd52 " + rest.horario));
    head.appendChild(info);

    var contacto = contactOf(rest);
    var actions = el("div", "restaurant__actions");

    if (contacto.telefono) {
      var tel = el("a", "btn btn--ghost");
      tel.href = "tel:" + contacto.telefono.replace(/\s/g, "");
      tel.appendChild(el("span", null, "\ud83d\udcde"));
      tel.appendChild(el("span", null, contacto.telefono));
      actions.appendChild(tel);
    }

    var wa = el("a", "btn btn--wa");
    wa.href = "#";
    wa.appendChild(el("span", null, "\ud83d\udcac"));
    wa.appendChild(el("span", null, "Pedir por WhatsApp"));
    wa.addEventListener("click", function (ev) {
      ev.preventDefault();
      openWhatsAppOrder(rest, contacto, true);
    });
    actions.appendChild(wa);

    head.appendChild(actions);
    article.appendChild(head);

    var nav = el("nav", "sec-nav");
    rest.secciones.forEach(function (section) {
      var link = el("a", "sec-nav__link");
      link.href = "#";
      if (section.emoji) link.appendChild(el("span", null, section.emoji));
      link.appendChild(el("span", null, section.titulo));
      link.addEventListener("click", function (ev) {
        ev.preventDefault();
        scrollToSection(section.titulo);
      });
      nav.appendChild(link);
    });
    article.appendChild(nav);

    var sections = el("div", "restaurant__sections");
    rest.secciones.forEach(function (section) {
      sections.appendChild(renderSection(section, rest));
    });
    article.appendChild(sections);

    wrap.appendChild(article);
  }

  /* ---------- Footer ---------- */
  function renderFooter(restaurantes) {
    var footer = document.getElementById("site-footer");
    footer.innerHTML = "";

    var cta = el("div", "footer__cta");
    cta.appendChild(el("h3", null, "\u00a1Pide ahora! \ud83d\udcf2"));

    var grupos = [];
    var vistos = {};
    restaurantes.forEach(function (rest) {
      var contacto = contactOf(rest);
      if (!contacto.telefono) return;
      var clave = contacto.whatsapp || contacto.telefono;
      if (vistos[clave]) {
        vistos[clave].nombres.push(rest.nombre);
        return;
      }
      vistos[clave] = { contacto: contacto, nombres: [rest.nombre], rest: rest };
      grupos.push(vistos[clave]);
    });

    grupos.forEach(function (grupo) {
      var line = el("p", "footer__rest");
      line.appendChild(el("strong", null, grupo.nombres.join(" \u00b7 ") + " \u2014 "));
      var href = waLink(grupo.rest, grupo.contacto);
      if (href) {
        var a = el("a", null, grupo.contacto.telefono);
        a.href = href;
        a.target = "_blank";
        a.rel = "noopener";
        line.appendChild(a);
      } else {
        line.appendChild(el("span", null, grupo.contacto.telefono));
      }
      cta.appendChild(line);
    });

    var perks = el("ul", "footer__perks");
    ["Entrega rápida.", "Variedad de platillos.", "Sabor inigualable.", "Servicio para llevar o a domicilio."].forEach(function (t) {
      perks.appendChild(el("li", null, t));
    });
    cta.appendChild(perks);

    footer.appendChild(cta);
    footer.appendChild(el("p", "footer__brand", data.marca.titulo + " \u00b7 " + data.marca.subtitulo));
    footer.appendChild(el("p", "footer__copy", "\u00a9 " + new Date().getFullYear()));
  }

  /* ---------- Routing ---------- */
  function findRestaurante(key) {
    if (!key) return null;
    for (var i = 0; i < data.restaurantes.length; i++) {
      var rest = data.restaurantes[i];
      if (restId(rest) === key || slug(rest.nombre) === key) return rest;
    }
    return null;
  }

  function applyRoute() {
    var gridView = document.getElementById("grid-view");
    var detailView = document.getElementById("detail-view");
    var key = (location.hash || "").replace(/^#\/?/, "");

    if (key.indexOf("sec-") === 0) return;

    var rest = findRestaurante(key);

    if (rest) {
      renderDetail(rest);
      gridView.hidden = true;
      detailView.hidden = false;
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      gridView.hidden = false;
      detailView.hidden = true;
    }
  }

  /* ---------- Init ---------- */
  function init() {
    if (!data) {
      document.body.innerHTML = "<p style='padding:2rem;color:#fff'>No se pudieron cargar los menús.</p>";
      return;
    }
    document.title = data.marca.titulo + " \u00b7 " + data.marca.subtitulo;

    renderHeader(data.marca);
    renderGrid();
    renderFooter(data.restaurantes);
    updateCartUI();

    var back = document.getElementById("back-btn");
    if (back) {
      back.addEventListener("click", function () {
        if (history.length > 1) history.back();
        else location.hash = "";
      });
    }

    var fab = document.getElementById("cart-fab");
    if (fab) fab.addEventListener("click", openCart);

    var close = document.getElementById("cart-close");
    if (close) close.addEventListener("click", closeCart);

    var backdrop = document.getElementById("cart-backdrop");
    if (backdrop) backdrop.addEventListener("click", closeCart);

    var clear = document.getElementById("cart-clear");
    if (clear) {
      clear.addEventListener("click", function () {
        if (!cart.length) return;
        clearCart();
        toast("Carrito vaciado");
      });
    }

    var order = document.getElementById("cart-order");
    if (order) {
      order.addEventListener("click", function (ev) {
        ev.preventDefault();
        openWhatsAppOrder(null, null);
      });
    }

    restoreCheckout();
    var changeInput = document.getElementById("co-change");
    if (changeInput) {
      changeInput.addEventListener("input", function () {
        saveCheckout();
        updateChangeInfo();
      });
    }

    var payEf = document.getElementById("pay-efectivo");
    if (payEf) payEf.addEventListener("click", function () { setPayMethod("efectivo"); });

    var payTj = document.getElementById("pay-tarjeta");
    if (payTj) payTj.addEventListener("click", function () { setPayMethod("tarjeta"); });

    var payEx = document.getElementById("co-exacto");
    if (payEx) payEx.addEventListener("click", setExacto);

    var geoBtn = document.getElementById("co-geo");
    if (geoBtn) geoBtn.addEventListener("click", requestLocation);

    var mandadoBtn = document.getElementById("mandado-send");
    if (mandadoBtn) mandadoBtn.addEventListener("click", sendMandado);

    var optClose = document.getElementById("option-close");
    if (optClose) optClose.addEventListener("click", closeOptionPicker);

    var optModal = document.getElementById("option-modal");
    if (optModal) {
      optModal.addEventListener("click", function (ev) {
        if (ev.target === optModal) closeOptionPicker();
      });
    }

    window.addEventListener("hashchange", applyRoute);
    applyRoute();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
