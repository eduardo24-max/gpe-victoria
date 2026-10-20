window.MENUS_DATA = {
  "marca": {
    "titulo": "Menús Guadalupe Victoria",
    "subtitulo": "Pedidos con VelozEat",
    "logo": "logo.jpg",
    "iniciales": "GV",
    "telefono": "676 112 6618",
    "whatsapp": "526761126618"
  },
  "restaurantes": [
    {
      "id": "la-maruca",
      "nombre": "La Maruca",
      "emoji": "\ud83c\udf2e",
      "etiqueta": "Tacos y Burritos",
      "eslogan": "Tacos, burritos, kekas, gringas y tortas de asada, adobada o mixtas.",
      "secciones": [
        {
          "titulo": "Burritos",
          "emoji": "\ud83c\udf2f",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Adobada", "Mixtas"],
          "items": [
            { "nombre": "Burrito", "precio": 30 }
          ]
        },
        {
          "titulo": "Tacos",
          "emoji": "\ud83c\udf2e",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Adobada", "Mixtas"],
          "items": [
            { "nombre": "Taco", "precio": 20 }
          ]
        },
        {
          "titulo": "Kekas",
          "emoji": "\ud83e\uded3",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Adobada", "Mixtas"],
          "items": [
            { "nombre": "Keka", "precio": 30 }
          ]
        },
        {
          "titulo": "Gringas",
          "emoji": "\ud83e\udd6a",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Adobada", "Mixtas"],
          "items": [
            { "nombre": "Gringa", "precio": 50 }
          ]
        },
        {
          "titulo": "Tortas",
          "emoji": "\ud83c\udf5e",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Adobada", "Mixtas"],
          "items": [
            { "nombre": "Torta", "precio": 65 }
          ]
        },
        {
          "titulo": "Bebidas",
          "emoji": "\ud83e\udd64",
          "layout": "chips",
          "items": [
            { "nombre": "Coca-Cola" },
            { "nombre": "Refresco de Sabor" },
            { "nombre": "Agua" }
          ]
        }
      ]
    },
    {
      "id": "burritos-el-sirloncito",
      "nombre": "Burritos El Sirloncito",
      "emoji": "\ud83c\udf2f",
      "etiqueta": "Burros y tacos",
      "eslogan": "Burros y tacos de asada, adobada y mixto.",
      "secciones": [
        {
          "titulo": "Burros y Tacos",
          "emoji": "\ud83c\udf2e",
          "nota": "Carne de tu elecci\u00f3n: Asada, Adobada o Mixto.",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Adobada", "Mixto"],
          "items": [
            { "nombre": "Burro", "sinPrecio": true },
            { "nombre": "Taco", "sinPrecio": true }
          ]
        }
      ]
    },
    {
      "id": "la-unica",
      "nombre": "La Única",
      "emoji": "\ud83c\udf54",
      "etiqueta": "Hamburguesas \u2022 Tacos \u2022 Burros",
      "eslogan": "Hamburguesas, tacos y burros \u2014 Comida r\u00e1pida.",
      "direccion": "Calzada L\u00e1zaro C\u00e1rdenas, frente al parque del tri\u00e1ngulo.",
      "secciones": [
        {
          "titulo": "Hamburguesas",
          "emoji": "\ud83c\udf54",
          "layout": "cartas",
          "items": [
            { "nombre": "Sencilla", "sinPrecio": true, "descripcion": "Carne de hamburguesa artesanal, queso americano, jam\u00f3n, verduras y aderezos." },
            { "nombre": "Doble", "sinPrecio": true, "descripcion": "Doble carne de hamburguesa artesanal, queso americano, queso blanco, jam\u00f3n, verduras, aguacate y aderezos." },
            { "nombre": "Especial", "sinPrecio": true, "descripcion": "Carne de hamburguesa artesanal, carne asada, adobada o mixta, jam\u00f3n, queso americano y blanco, aguacate, verduras y aderezos." },
            { "nombre": "Norte\u00f1a", "sinPrecio": true, "descripcion": "Carne de hamburguesa artesanal, salchicha asada al carb\u00f3n, jam\u00f3n, queso americano y blanco, aguacate, verduras y aderezos." }
          ]
        },
        {
          "titulo": "Tacos",
          "emoji": "\ud83c\udf2e",
          "nota": "Tortilla de ma\u00edz y carne de su elecci\u00f3n.",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Adobada", "Birria", "Mixtos"],
          "items": [
            { "nombre": "Taco", "sinPrecio": true }
          ]
        },
        {
          "titulo": "Taco Costra",
          "emoji": "\ud83e\uddc0",
          "nota": "Tortilla de ma\u00edz, costra de queso doradita y carne de su elecci\u00f3n.",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Adobada", "Birria", "Mixtos"],
          "items": [
            { "nombre": "Taco Costra", "sinPrecio": true }
          ]
        },
        {
          "titulo": "Quesabirria",
          "emoji": "\ud83e\udd6c",
          "layout": "cartas",
          "items": [
            { "nombre": "Quesabirria", "sinPrecio": true, "descripcion": "Tortilla de harina, queso derretido y carne de birria de res." }
          ]
        },
        {
          "titulo": "Burros",
          "emoji": "\ud83c\udf2f",
          "nota": "Tortilla de harina y carne de tu elecci\u00f3n.",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Adobada", "Birria", "Mixtos"],
          "items": [
            { "nombre": "Burro", "sinPrecio": true }
          ]
        },
        {
          "titulo": "Burro Macho",
          "emoji": "\ud83d\udd25",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Adobada", "Birria", "Mixtos"],
          "items": [
            { "nombre": "Burro Macho", "sinPrecio": true, "descripcion": "Tortilla de harina, carne de tu elecci\u00f3n, salchicha asada, chile asado y queso derretido." }
          ]
        },
        {
          "titulo": "Gringas",
          "emoji": "\ud83e\uded3",
          "nota": "Tortilla de harina, queso derretido y carne de su elecci\u00f3n.",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Birria", "Adobada", "Mixtos"],
          "items": [
            { "nombre": "Gringa", "sinPrecio": true }
          ]
        },
        {
          "titulo": "Volc\u00e1n",
          "emoji": "\ud83c\udf0b",
          "nota": "Tortilla de ma\u00edz tostada, queso derretido y carne de su elecci\u00f3n.",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsasUnico": true,
          "salsas": ["Asada", "Birria", "Adobada", "Mixtos"],
          "items": [
            { "nombre": "Volc\u00e1n", "sinPrecio": true }
          ]
        }
      ]
    },
    {
      "id": "hamburguesas-olimpo",
      "nombre": "Hamburguesas Olimpo",
      "emoji": "\ud83d\udc51",
      "etiqueta": "Hamburguesas, hotchos y papas",
      "eslogan": "Sabor de Dioses \u2014 Tu antojo, nuestra prioridad.",
      "secciones": [
        {
          "titulo": "Hamburguesas",
          "emoji": "\ud83c\udf54",
          "nota": "Todas nuestras hamburguesas llevan: aguacate, lechuga italiana, pepinillos, jalape\u00f1os y aderezos.",
          "layout": "cartas",
          "items": [
            { "nombre": "Cl\u00e1sica", "precio": 60, "descripcion": "Carne, queso amarillo, queso blanco y jam\u00f3n." },
            { "nombre": "H\u00e9rcules", "precio": 85, "descripcion": "2 carnes, 2 quesos amarillos, 2 quesos blancos y 2 jamones." },
            { "nombre": "Poseid\u00f3n", "precio": 85, "descripcion": "Carne, queso amarillo, queso blanco, jam\u00f3n y boneless. Salsa de su preferencia.", "salsasLabel": "salsas", "salsasUnico": true, "salsas": ["B\u00fafalo", "BBQ", "Mango Habanero", "Lemon Pepper", "Miel y Mostaza", "Ajo Parmesano", "Natural"] },
            { "nombre": "Atenea", "precio": 85, "descripcion": "Carne, queso amarillo, queso blanco, jam\u00f3n y tiras de tocino." },
            { "nombre": "Tit\u00e1n", "precio": 100, "descripcion": "Carne, queso amarillo, queso blanco, jam\u00f3n, salchicha para asar y chorizo." },
            { "nombre": "Zeus", "precio": 100, "descripcion": "2 carnes, 2 quesos amarillos, 2 quesos blancos, 2 jamones y boneless. Salsa de su preferencia.", "salsasLabel": "salsas", "salsasUnico": true, "salsas": ["B\u00fafalo", "BBQ", "Mango Habanero", "Lemon Pepper", "Miel y Mostaza", "Ajo Parmesano", "Natural"] },
            { "nombre": "Od\u00edn", "precio": 120, "descripcion": "2 carnes, 2 quesos amarillos, 2 quesos blancos, 2 jamones, tiras de tocino y boneless. Salsa de su preferencia.", "salsasLabel": "salsas", "salsasUnico": true, "salsas": ["B\u00fafalo", "BBQ", "Mango Habanero", "Lemon Pepper", "Miel y Mostaza", "Ajo Parmesano", "Natural"] },
            { "nombre": "Aquiles", "precio": 80, "descripcion": "Carne, queso amarillo, queso blanco, jam\u00f3n y pi\u00f1a." },
            { "nombre": "Apolo", "precio": 85, "descripcion": "Filete de pechuga de pollo, queso amarillo, queso blanco y salsa BBQ." },
            { "nombre": "Afrodita", "precio": 95, "descripcion": "Carne, queso amarillo, queso blanco, jam\u00f3n, tiras de tocino y pi\u00f1a." }
          ]
        },
        {
          "titulo": "Hotchos",
          "emoji": "\ud83c\udf2d",
          "layout": "tabla",
          "items": [
            { "nombre": "Salchicha de Pavo", "precio": 50 },
            { "nombre": "Salchicha para Asar", "precio": 55 },
            { "nombre": "Salchicha Polaca", "precio": 70 }
          ]
        },
        {
          "titulo": "Hotchos Monchosos",
          "emoji": "\ud83c\udf36\ufe0f",
          "nota": "Queso amarillo, mayonesa, aderezo, c\u00e1tsup, salsa BBQ / mango habanero y tocino (chorizo y boneless).",
          "layout": "tabla",
          "items": [
            { "nombre": "Salchicha de Pavo", "precio": 70 },
            { "nombre": "Salchicha para Asar", "precio": 75 },
            { "nombre": "Salchicha Polaca", "precio": 90 }
          ]
        },
        {
          "titulo": "Extras y Papas",
          "emoji": "\ud83c\udf5f",
          "layout": "tabla",
          "items": [
            { "nombre": "Carne con queso", "precio": 25 },
            { "nombre": "Tiras de tocino", "precio": 25 },
            { "nombre": "Boneless", "precio": 25 },
            { "nombre": "Pi\u00f1a", "precio": 20 },
            { "nombre": "Chorizo", "precio": 20 },
            { "nombre": "Salchicha para asar", "precio": 20 },
            { "nombre": "Salchicha de pavo", "precio": 15 },
            { "nombre": "Salsa / Queso l\u00edquido y parmesano (papas o hamburguesa)", "precio": 5 },
            { "nombre": "Papas a la Francesa", "precio": 35 },
            { "nombre": "Salchipapas (papas y salchicha de pavo)", "precio": 55 },
            { "nombre": "Salchipapas Cargadas (papas, salchicha de pavo, salchicha para asar y carne)", "precio": 80 },
            { "nombre": "Salchipulpos", "precio": 55 }
          ]
        },
        {
          "titulo": "Bebidas",
          "emoji": "\ud83e\udd64",
          "layout": "tabla",
          "items": [
            { "nombre": "Refrescos", "precio": 20 },
            { "nombre": "Aguas Frescas 1/2 Lt", "precio": 20 },
            { "nombre": "Aguas Frescas 1 Lt", "precio": 25 }
          ]
        }
      ]
    },
    {
      "id": "chilaquiles-don-pancho",
      "nombre": "Chilaquiles Don Pancho",
      "emoji": "\ud83c\uddf2\ud83c\uddfd",
      "etiqueta": "Chilaquiles",
      "eslogan": "Chilaquiles con salsa de tu preferencia y todos los complementos.",
      "secciones": [
        {
          "titulo": "Chilaquiles",
          "emoji": "\ud83c\udf5b",
          "nota": "Todos nuestros chilaquiles se preparan con cebolla morada, queso, cilantro y salsa de tu preferencia. Incluye salsa de frijoles de cortesía. Precio desde $65 e incluye tu elección de proteína y toppings.",
          "layout": "cartas",
          "items": [
            {
              "nombre": "Chilaquiles Don Pancho",
              "precio": 65,
              "descripcion": "Desde $65. Elige tu salsa, tu proteína y los toppings que quieras; se suman al precio base.",
              "salsasLabel": "salsas",
              "salsasUnico": true,
              "salsas": ["Roja", "Verde"],
              "extrasPregunta": "Elige tu complemento (proteína y toppings)",
              "extrasLabel": "Complementos",
              "extrasEmptyLabel": "Solo chilaquiles",
              "extras": [
                { "label": "Al Pastor", "precio": 30 },
                { "label": "Asada", "precio": 25 },
                { "label": "Pollo", "precio": 25 },
                { "label": "Chicharrón P.", "precio": 25 },
                { "label": "Huevo", "precio": 20 },
                { "label": "Chiltepin", "precio": 20 },
                { "label": "Extra Queso", "precio": 15 },
                { "label": "Aguacate", "precio": 10 },
                { "label": "Extra Crema", "precio": 15 },
                { "label": "Crema Habanera", "precio": 10 }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "sushi-kraken-roll",
      "nombre": "Sushi Kraken Roll",
      "emoji": "\ud83c\udf63",
      "telefono": "676 112 6618",
      "whatsapp": "526761126618",
      "etiqueta": "Menú completo",
      "eslogan": "El sabor que te llega hasta donde estés.",
      "secciones": [
        {
          "titulo": "Entradas",
          "emoji": "\ud83e\udd62",
          "layout": "tabla",
          "items": [
            { "nombre": "Brochetas de queso", "precio": 70 },
            { "nombre": "Rollos Primavera Carne", "precio": 70 },
            { "nombre": "Rollos Primavera Camarón", "precio": 75 },
            { "nombre": "Rollos Primavera Mixto", "precio": 80 },
            { "nombre": "Papas tradicionales", "precio": 50 },
            { "nombre": "Papas sazonadas", "precio": 70 },
            { "nombre": "Papas de gajo", "precio": 50 },
            { "nombre": "Orden de apio y zanahoria", "precio": 45 }
          ]
        },
        {
          "titulo": "Dumplings",
          "emoji": "\ud83e\udd5f",
          "layout": "tabla",
          "items": [
            { "nombre": "Dumplings", "precio": 80 }
          ]
        },
        {
          "titulo": "Sushi — Primera Sección",
          "emoji": "\ud83c\udf63",
          "layout": "cartas",
          "columnas": ["Regular", "Empanizado"],
          "items": [
            { "nombre": "Max Roll", "precio": 125, "precio2": 130, "descripcion": "Queso crema, surimi, camarón, tocino y aguacate." },
            { "nombre": "Bacon Shrimp", "precio": 100, "precio2": 110, "descripcion": "Queso crema, camarón, tocino y aguacate." },
            { "nombre": "Black Roll", "precio": 120, "precio2": 125, "descripcion": "Queso crema, camarón empanizado y aguacate." },
            { "nombre": "Victoria Roll", "precio": 120, "precio2": 125, "descripcion": "Queso crema, camarón empanizado, aguacate y pepino." },
            { "nombre": "Premium Roll", "precio": 125, "precio2": 130, "descripcion": "Queso crema, camarón, frijol, aguacate, gratinado con queso y tocino." },
            { "nombre": "Tempura Roll", "precio": 120, "precio2": 125, "descripcion": "Queso crema, camarón, aguacate con topping de tampico y aguacate." },
            { "nombre": "Mantehgo Roll", "precio": 125, "precio2": 130, "descripcion": "Queso crema, camarón, aguacate y gratinado con queso, con topping de tampico." },
            { "nombre": "Apueto Roll", "precio": 125, "precio2": 130, "descripcion": "Queso crema, camarón, aguacate con pollo Crunch (Picorito)." },
            { "nombre": "Mary Tierra", "precio": 130, "precio2": 135, "descripcion": "Queso crema, camarón, aguacate, con topping de tocino frío." },
            { "nombre": "Arachera Roll", "precio": 120, "precio2": 125, "descripcion": "Queso crema, arrachera, aguacate, con topping de tampico y aguacate." }
          ]
        },
        {
          "titulo": "Especial de la Casa",
          "emoji": "\ud83c\udf64",
          "layout": "tabla",
          "nota": "KRAKEN BOX: 1/2 de camarón, 1/2 de res, chile o pollo, naranja.",
          "items": [
            { "nombre": "Camarones Louisaina", "precio": 170 },
            { "nombre": "KRAKEN BOX", "precio": 85 }
          ]
        },
        {
          "titulo": "Yakimeshi",
          "emoji": "\ud83c\udf5a",
          "layout": "cartas",
          "items": [
            { "nombre": "Yakimeshi Vegetariano", "precio": 95, "descripcion": "Arroz frito con verduras mixtas con el sazón de la casa." },
            { "nombre": "Yakimeshi Especial", "precio": 120, "descripcion": "Arroz frito con verduras mixtas con arrachera, camarón y aguacate." }
          ]
        },
        {
          "titulo": "Ensalada Black",
          "emoji": "\ud83e\udd57",
          "layout": "cartas",
          "items": [
            { "nombre": "Ensalada Black", "precio": 120, "descripcion": "Lechuga, tomate, pepino, zanahoria, aguacate y cacahuate, acompañada de pollo, camarón o mixto." }
          ]
        },
        {
          "titulo": "Sushi — Segunda Sección",
          "emoji": "\ud83c\udf63",
          "layout": "cartas",
          "columnas": ["Regular", "Empanizado"],
          "items": [
            { "nombre": "Chemita Roll", "precio": 125, "precio2": 130, "descripcion": "Queso crema, camarón, aguacate con pulpo fresco." },
            { "nombre": "Aguachile Black", "precio": 170, "precio2": null, "descripcion": "Queso crema con aguacate y topping de aguachile de camarón en salsa chiltepín." },
            { "nombre": "Vuelve a la Vida", "precio": 170, "precio2": null, "descripcion": "Queso crema, camarón, aguacate y topping de aguachile de pulpo y camarón en salsa chiltepín." },
            { "nombre": "Tropical Roll", "precio": 170, "precio2": null, "descripcion": "Queso crema, camarón, aguacate y topping de aguachile de camarón en mango en salsa chiltepín." },
            { "nombre": "New York Roll", "precio": 140, "precio2": null, "descripcion": "Queso crema, camarón, aguacate con topping de aguacate, de atún con camarón en salsa chiltepín." },
            { "nombre": "Philadelphia", "precio": 130, "precio2": 135, "descripcion": "Queso crema, surimi y aguacate con salmón fresco y salsa de anguila." },
            { "nombre": "Onigiri Ball", "precio": 130, "precio2": 135, "descripcion": "Bolita de arroz con aguacate, arrachera, relleno de queso crema, aguacate y amaranto con topping de serrano." },
            { "nombre": "Kanikama Roll", "precio": 140, "precio2": 145, "descripcion": "Queso crema, surimi, pepino y aguacate." },
            { "nombre": "California Roll", "precio": 100, "precio2": 105, "descripcion": "Queso crema, surimi, pepino y aguacate." }
          ]
        },
        {
          "titulo": "Promociones",
          "emoji": "\ud83d\udd25",
          "layout": "promos",
          "items": [
            { "etiqueta": "2x1", "cuando": "Martes", "nombre": "Sushi 2x1", "descripcion": "En rollo, camarón, salmón, atún, California, Kanikama y tempura." },
            { "etiqueta": "2x1", "cuando": "Jueves", "nombre": "Boneless 2x1", "descripcion": "De 100 piezas." },
            { "etiqueta": "2x1", "cuando": "Sábado y domingo", "nombre": "Micheladas 2x1", "descripcion": "Solo aplica en cerveza, indio." }
          ]
        },
        {
          "titulo": "Alitas Black",
          "emoji": "\ud83c\udf57",
          "layout": "tabla",
          "salsas": ["BBQ", "BBQ Hot", "Buffalo Hot", "Buffalo", "Parmesano", "Fresa-habanero", "Limón Pepper", "Cajún", "Orange (Naranja)", "Mango Habanero", "Pelón Pelo Rico", "Carolina Reaper", "Piña ahumada"],
          "items": [
            { "nombre": "5 piezas", "precio": 80 },
            { "nombre": "10 piezas", "precio": 120 },
            { "nombre": "15 piezas", "precio": 145 }
          ]
        },
        {
          "titulo": "Boneless",
          "emoji": "\ud83c\udf57",
          "layout": "tabla",
          "salsas": ["BBQ", "BBQ Hot", "Buffalo Hot", "Buffalo", "Parmesano", "Fresa-habanero", "Limón Pepper", "Cajún", "Orange (Naranja)", "Mango Habanero", "Pelón Pelo Rico", "Carolina Reaper", "Piña ahumada"],
          "items": [
            { "nombre": "10 piezas", "precio": 110 },
            { "nombre": "15 piezas", "precio": 155 }
          ]
        },
        {
          "titulo": "Burgers",
          "emoji": "\ud83c\udf54",
          "layout": "cartas",
          "items": [
            { "nombre": "Black Burger", "precio": 145, "descripcion": "Hamburguesa con pan brioche con 200 g de carne de res, arrachera, tocino, aguacate, queso y aderezo especial, acompañada con papas fritas." },
            { "nombre": "Americana Burger", "precio": 160, "descripcion": "Hamburguesa con 180 g de carne de res, tocino, queso amarillo, tomate, lechuga y cebolla morada. Papas fritas." },
            { "nombre": "Cheese Burger", "precio": 110, "descripcion": "Hamburguesa con 150 g de carne de res, queso amarillo y papas fritas." },
            { "nombre": "Chicken Burger Sauce", "precio": 145, "descripcion": "Pechuga de pollo en pan brioche con las salsas de la casa, verduras, queso amarillo y papas fritas." },
            { "nombre": "Chicken Burger", "precio": 125, "descripcion": "Pechuga de pollo en pan brioche con las salsas de la casa, verduras, queso amarillo y papas fritas." }
          ]
        },
        {
          "titulo": "Cheve",
          "emoji": "\ud83c\udf7a",
          "layout": "tabla",
          "items": [
            { "nombre": "Cerveza nacional (Tecate, Indio, XX Lager)", "precio": 28 },
            { "nombre": "Miller Lite", "precio": 32 },
            { "nombre": "XX Lager Ultra", "precio": 32 },
            { "nombre": "Indio Caguamón", "precio": 65 },
            { "nombre": "Ultra", "precio": 32 },
            { "nombre": "Bohemia", "precio": 32 }
          ]
        },
        {
          "titulo": "Salsas",
          "emoji": "\ud83c\udf36\ufe0f",
          "layout": "chips",
          "items": [
            { "nombre": "BBQ" },
            { "nombre": "BBQ Hot" },
            { "nombre": "Buffalo Hot" },
            { "nombre": "Buffalo" },
            { "nombre": "Parmesano" },
            { "nombre": "Fresa-habanero" },
            { "nombre": "Limón Pepper" },
            { "nombre": "Cajún" },
            { "nombre": "Orange (Naranja)" },
            { "nombre": "Mango Habanero" },
            { "nombre": "Pelón Pelo Rico" },
            { "nombre": "Carolina Reaper" },
            { "nombre": "Piña ahumada" }
          ]
        },
        {
          "titulo": "Bebidas",
          "emoji": "\ud83e\udd64",
          "layout": "tabla",
          "items": [
            { "nombre": "Mojito Clásico", "precio": 75 },
            { "nombre": "Mojito Frutos Rojos", "precio": 90 },
            { "nombre": "Margarita", "precio": 80 },
            { "nombre": "Michelada", "precio": 60 },
            { "nombre": "Tarto Chelado", "precio": 25 },
            { "nombre": "Té de limón", "precio": 30 },
            { "nombre": "Té de jazmín", "precio": 30 },
            { "nombre": "Limonada", "precio": 30 },
            { "nombre": "Refrescos (Coca-Cola, Sprite, Fresca, Fanta, Fresa y Fanta Naranja)", "precio": 30 },
            { "nombre": "Piña Colada", "precio": 40 },
            { "nombre": "Fresada", "precio": 40 },
            { "nombre": "Soda Italiana", "precio": 55 }
          ]
        },
        {
          "titulo": "Postres",
          "emoji": "\ud83c\udf70",
          "layout": "tabla",
          "items": [
            { "nombre": "Nieve Tempura", "precio": 85 },
            { "nombre": "Daniki", "precio": 85 },
            { "nombre": "Black Brownie", "precio": 70 },
            { "nombre": "Rol Glasado", "precio": 25 },
            { "nombre": "Rol de Nuez", "precio": 25 }
          ]
        }
      ]
    },
    {
      "id": "taiyo-sushi",
      "nombre": "Taiyo Sushi",
      "emoji": "\ud83c\udf63",
      "etiqueta": "Menú completo",
      "secciones": [
        {
          "titulo": "Entradas",
          "emoji": "\ud83c\udf64",
          "layout": "tabla",
          "nota": "Brochetas al coco: Cangrejo, queso, Philadelphia y coco (empanizado).",
          "items": [
            { "nombre": "Edamames", "precio": 70 },
            { "nombre": "Brochetas de camarón", "precio": 65 },
            { "nombre": "Brochetas de queso", "precio": 50 },
            { "nombre": "Brochetas al coco", "precio": 75 }
          ]
        },
        {
          "titulo": "Rollos Empanizados",
          "emoji": "\ud83c\udf63",
          "layout": "cartas",
          "items": [
            { "nombre": "Texas Roll", "precio": 245, "descripcion": "Rib eye, camarón, aguacate, queso manchego, ajonjolí tostado y toppings de spicy anguila." },
            { "nombre": "Furay Roll", "precio": 195, "descripcion": "Camarón empanizado, aguacate, queso Philadelphia, camarón, cangrejo y topping tampico." },
            { "nombre": "Emy Roll", "precio": 185, "descripcion": "Arrachera, aguacate, queso manchego, spicy, salsa anguila y ajonjolí." },
            { "nombre": "Villa Rolls", "precio": 185, "descripcion": "Cangrejo, salmón empanizado, aguacate, queso Philadelphia y salsa spicy." }
          ]
        },
        {
          "titulo": "Rollos Frescos",
          "emoji": "\ud83c\udf63",
          "layout": "cartas",
          "items": [
            { "nombre": "Acevichado Roll", "precio": 235, "descripcion": "Salmón, cubierto de ceviche, relleno de cangrejo, aguacate, pepino y su leche de tigre." },
            { "nombre": "Llanos Rolls", "precio": 185, "descripcion": "Cubierto de plátano frito, relleno de salmón, queso Philadelphia y salsa anguila." },
            { "nombre": "Tuna Roll", "precio": 225, "descripcion": "Cubierto de atún, relleno de camarón empanizado y aguacate." },
            { "nombre": "Spicy Tuna", "precio": 195, "descripcion": "Cubierto con lomo de atún marinado al spicy, relleno de camarón y aguacate." },
            { "nombre": "Tora Roll", "precio": 195, "descripcion": "Cubierto de aguacate y burbujas crujientes; relleno de camarón, tocino y cangrejo, cubierto con salsa spicy y anguila." },
            { "nombre": "Dragon Fly", "precio": 185, "descripcion": "Cubierto de aguacate, relleno de camarón, pasta de cangrejo, pepino y queso Philadelphia, bañado con anguila y ajonjolí." },
            { "nombre": "Taiyo Roll", "precio": 205, "descripcion": "Camarón por fuera, relleno de aguacate, cangrejo, queso y camarón a la mantequilla por fuera." }
          ]
        },
        {
          "titulo": "Arroz y Pastas",
          "emoji": "\ud83c\udf5a",
          "layout": "cartas",
          "items": [
            { "nombre": "Yakimeshi Mixto", "precio": 155, "descripcion": "Arroz, verduras, carne, camarón y pollo." },
            { "nombre": "Yakimeshi Verduras", "precio": 110, "descripcion": "Arroz, zanahoria y calabaza." },
            { "nombre": "Sopa Ramen", "precio": 175, "descripcion": "Verduras, fideo, carne, pollo, camarón y huevo cocido." },
            { "nombre": "Pasta Udon", "precio": 250, "descripcion": "Fideos udon, vegetales, pollo, res y camarón a la mantequilla." }
          ]
        },
        {
          "titulo": "Hot Dogs",
          "emoji": "\ud83c\udf2d",
          "layout": "cartas",
          "items": [
            { "nombre": "Cotsco", "precio": 80, "descripcion": "Delicioso hot dog de Costco con ensalada de la casa." }
          ]
        }
      ]
    },
    {
      "id": "mexicanisimo",
      "nombre": "Mexicanísimo",
      "emoji": "\ud83c\udf2e",
      "etiqueta": "Menú completo",
      "eslogan": "Desayunos, comidas y coctelería.",
      "secciones": [
        {
          "titulo": "Desayunos",
          "emoji": "\u2600\ufe0f",
          "nota": "Todos los desayunos van acompañados de chilaquiles y frijoles puercos. Guiso extra: $30 (Chicharrón prensado, puerco en chile pasado, bisteck, asada, pastor, arrachera).",
          "grupos": [
            {
              "titulo": "Huevos al Gusto",
              "layout": "cartas",
              "items": [
                { "nombre": "En Chipotle", "precio": 120, "descripcion": "Dos huevos estrellados montados en tortilla sofrita con jamón bañados en salsa de crema de chipotle." },
                { "nombre": "A la Mexicana", "precio": 99, "descripcion": "Huevos revueltos con pico de gallo." },
                { "nombre": "Divorciados", "precio": 120, "descripcion": "Huevos estrellados bañados en salsa roja y salsa verde." },
                { "nombre": "Rancheros", "precio": 120, "descripcion": "Huevos estrellados montados en una tortilla sofrita con salsa ranchera." },
                { "nombre": "Con Chorizo", "precio": 110, "descripcion": "Huevo revuelto con chorizo y cebolla." },
                { "nombre": "Con Jamón", "precio": 99, "descripcion": "Huevo revuelto con jamón." },
                { "nombre": "Con Salchicha", "precio": 99, "descripcion": "Huevo revuelto con salchicha." },
                { "nombre": "Encobijados \u2605", "precio": 120, "descripcion": "Huevos estrellados envueltos en una tortilla de maíz, bañados en una salsa especial de la casa." },
                { "nombre": "Con Machaca \u2605", "precio": 140, "descripcion": "Huevos revueltos con machaca de res." },
                { "nombre": "Americano Texano \u2605", "precio": 150, "descripcion": "Huevos estrellados acompañados con una salchicha de pavo, 2 hotcakes y tocino." },
                { "nombre": "El Empresarial \u2605", "precio": 199, "descripcion": "Huevos al gusto acompañado de chilaquiles, frijoles puercos y un guiso de tu elección, café americano de refil o jugo de naranja 355 ml y 2 pz de hot cake." }
              ]
            },
            {
              "titulo": "Omelette",
              "layout": "cartas",
              "items": [
                { "nombre": "Tradicional", "precio": 110, "descripcion": "Con jamón y queso." },
                { "nombre": "Campestre", "precio": 115, "descripcion": "Tocino, salchicha y queso." },
                { "nombre": "Parrillero \u2605", "precio": 130, "descripcion": "Arrachera y queso." },
                { "nombre": "Hacienda", "precio": 120, "descripcion": "Morrón, tomate, cebolla, champiñones y queso." }
              ]
            },
            {
              "titulo": "Chilaquiles",
              "layout": "cartas",
              "nota": "Salsas: Rojas, Verdes, Poblanos \u2605, Chipotle Cremosos, Majada Cremosa.",
              "items": [
                { "nombre": "Chilaquiles", "precio": 145, "descripcion": "Acompañados de frijoles puercos, un guiso o huevo a su elección." }
              ]
            },
            {
              "titulo": "Sandwich",
              "layout": "cartas",
              "items": [
                { "nombre": "Club Sandwich", "precio": 110, "descripcion": "Pechuga de pollo, tocino, aguacate, jamón, lechuga, chile en vinagre con aderezo de la casa y papas francesas." },
                { "nombre": "Mexicanísimo \u2605", "precio": 140, "descripcion": "Relleno de arrachera gratinado con queso, pimientos morrones, cebolla caramelizada con tocino, aguacate, un huevo estrellado y papas francesas." }
              ]
            },
            {
              "titulo": "Burritos (Desayuno)",
              "layout": "tabla",
              "items": [
                { "nombre": "Asada ó Al Pastor", "precio": 70 },
                { "nombre": "Chicharrón Prens.", "precio": 45 },
                { "nombre": "Puerco en Chile Pasado", "precio": 50 },
                { "nombre": "Bisteck a la Mex.", "precio": 50 },
                { "nombre": "El Chihuahua", "precio": 45, "descripcion": "Con tocino, queso y huevo." },
                { "nombre": "El Fit", "precio": 55, "descripcion": "Relleno de pechuga de pollo con queso, aderezo chipotle y verdura." }
              ]
            },
            {
              "titulo": "Tacos (Desayuno)",
              "layout": "tabla",
              "items": [
                { "nombre": "Asada ó Al Pastor", "precio": 28 },
                { "nombre": "Arrachera", "precio": 38 },
                { "nombre": "Chicharrón Prens.", "precio": 25 },
                { "nombre": "Puerco en Chile Pasado", "precio": 25 },
                { "nombre": "Bisteck a la Mex.", "precio": 28 }
              ]
            },
            {
              "titulo": "Mexicanas",
              "layout": "tabla",
              "items": [
                { "nombre": "Asada ó Al Pastor", "precio": 95 },
                { "nombre": "Arrachera", "precio": 110 },
                { "nombre": "Chicharrón Prens.", "precio": 75 },
                { "nombre": "Puerco en Chile Pasado", "precio": 80 },
                { "nombre": "Bisteck a la Mex.", "precio": 80 }
              ]
            },
            {
              "titulo": "Lo Dulce",
              "layout": "cartas",
              "nota": "Coronados con frutos rojos, fresas, plátano y espolv. con azúcar glass.",
              "items": [
                { "nombre": "Hotcakes (3 pz) \u2605", "precio": 90 },
                { "nombre": "Hotcakes Inf. (2 pz)", "precio": 60 },
                { "nombre": "Waffles (3 pz)", "precio": 99 }
              ]
            },
            {
              "titulo": "Bebidas (Desayunos)",
              "layout": "tabla",
              "items": [
                { "nombre": "Jugo Verde", "precio": 45 },
                { "nombre": "Jugo de Naranja", "precio": 40 },
                { "nombre": "Café Americano (Refil)", "precio": 40 },
                { "nombre": "Café de Olla", "precio": 40 },
                { "nombre": "Refrescos", "precio": 35 },
                { "nombre": "Limonada", "precio": 38 },
                { "nombre": "Naranjada", "precio": 40 },
                { "nombre": "Licuados", "precio": 45, "descripcion": "Rompope, Fresa, Chocomilk ó Plátano." }
              ]
            }
          ]
        },
        {
          "titulo": "Comidas y Menú Principal",
          "emoji": "\ud83c\udf2e",
          "grupos": [
            {
              "titulo": "Entradas",
              "layout": "cartas",
              "items": [
                { "nombre": "Frijoles Charros", "precio": 40 },
                { "nombre": "Queso Fundido", "precio": 140 },
                { "nombre": "Salchichas Ribs", "precio": 140, "descripcion": "Acompañadas de guacamole." },
                { "nombre": "Alitas (10 pz)", "precio": 140, "descripcion": "BBQ, habanero o búfalo; acompañadas con aderezo, apio y zanahoria." },
                { "nombre": "Guacamole Mexicanísimo", "precio": 110 }
              ]
            },
            {
              "titulo": "Tacos",
              "layout": "tabla",
              "items": [
                { "nombre": "Asada", "precio": 28 },
                { "nombre": "Adobada", "precio": 28 },
                { "nombre": "Al Pastor", "precio": 28 },
                { "nombre": "Mar y Tierra", "precio": 38 },
                { "nombre": "Arrachera", "precio": 38 },
                { "nombre": "Carnitas", "precio": 28 },
                { "nombre": "Rib-Eye con tuétano", "precio": 210 },
                { "nombre": "Gobernador Camarón", "precio": 140, "descripcion": "Orden de 3 tacos." }
              ]
            },
            {
              "titulo": "Burritos",
              "layout": "cartas",
              "items": [
                { "nombre": "Champiburro", "precio": 85, "descripcion": "Asada, champiñones, tocino y queso." },
                { "nombre": "Asada", "precio": 70 },
                { "nombre": "Adobada", "precio": 70 },
                { "nombre": "Al Pastor", "precio": 70 },
                { "nombre": "Camarón Gobernador", "precio": 80 },
                { "nombre": "Arrachera", "precio": 80 },
                { "nombre": "Carnitas", "precio": 70 },
                { "nombre": "Mar y Tierra", "precio": 80, "descripcion": "Pídalos con queso por $5 más." },
                { "nombre": "Mixta", "precio": 80, "descripcion": "Asada, camarón, morrón, tocino y queso." }
              ]
            },
            {
              "titulo": "Mexicanas",
              "layout": "tabla",
              "nota": "Quesadilla de harina con la carne a tu elección.",
              "items": [
                { "nombre": "Asada", "precio": 95 },
                { "nombre": "Adobada", "precio": 95 },
                { "nombre": "Al Pastor", "precio": 90 },
                { "nombre": "Camarón Gobernador", "precio": 110 },
                { "nombre": "Arrachera", "precio": 110 },
                { "nombre": "Carnitas", "precio": 90 },
                { "nombre": "Mixta", "precio": 90 },
                { "nombre": "Mar y Tierra", "precio": 110 }
              ]
            },
            {
              "titulo": "Bombas",
              "layout": "tabla",
              "nota": "Tortilla de maíz doradas con queso gratinado y carne a tu elección.",
              "items": [
                { "nombre": "Asada", "precio": 40 },
                { "nombre": "Adobada", "precio": 40 },
                { "nombre": "Al Pastor", "precio": 40 },
                { "nombre": "Camarón Gobernador", "precio": 50 },
                { "nombre": "Arrachera", "precio": 50 },
                { "nombre": "Carnitas", "precio": 40 },
                { "nombre": "Mixta", "precio": 40 }
              ]
            },
            {
              "titulo": "Ensaladas",
              "layout": "cartas",
              "items": [
                { "nombre": "Mexicanísima", "precio": 165, "descripcion": "Pollo gratinado con champiñón, lechuga, pepino, crutones y aderezo." },
                { "nombre": "De Camarón", "precio": 165, "descripcion": "Lechuga, morrón, tomate, pepino, cebolla y camarones a la mantequilla." }
              ]
            }
          ]
        },
        {
          "titulo": "Amantes de la Carne & Alambres",
          "emoji": "\ud83c\udf56",
          "grupos": [
            {
              "titulo": "Alambres",
              "layout": "cartas",
              "items": [
                { "nombre": "Especial", "precio": 175, "descripcion": "Asada, tocino, pimiento morrón, cebolla y queso gratinado." },
                { "nombre": "Hawaiano", "precio": 175, "descripcion": "Asada, piña, carne adobada, tocino, cebolla y queso gratinado." },
                { "nombre": "Mar y Tierra", "precio": 195, "descripcion": "Sirloin, camarón, pimiento morrón, cebolla, tocino y queso gratinado." },
                { "nombre": "Mexicanísimo", "precio": 195, "descripcion": "Arrachera, chorizo, pimiento morrón, cebolla, chiles toreados, pimiento morrón y queso gratinado." }
              ]
            },
            {
              "titulo": "Cortes al Carbón",
              "layout": "tabla",
              "items": [
                { "nombre": "T-Bone 350 g", "precio": 320 },
                { "nombre": "Rib-Eye 300 g", "precio": 350 },
                { "nombre": "Sirloin (reserva especial) 350 g", "precio": 280 },
                { "nombre": "Costilla Cargada 350 g", "precio": 280 },
                { "nombre": "Aguja Norteña (premium) 250 g", "precio": 265 },
                { "nombre": "Arrachera 300 g", "precio": 295 }
              ]
            },
            {
              "titulo": "Molcajetes",
              "layout": "cartas",
              "nota": "Acompañado por frijoles charros, cebollitas, salchicha asada, queso fundido, nopales y cebollas asadas.",
              "items": [
                { "nombre": "Mexicanísimo", "precios": [ { "label": "S", "valor": 280 }, { "label": "Supremo", "valor": 310 } ] }
              ]
            }
          ]
        },
        {
          "titulo": "Parrilladas",
          "emoji": "\ud83e\udeb5",
          "grupos": [
            {
              "titulo": "Para compartir",
              "layout": "cartas",
              "items": [
                { "nombre": "Tradicional", "descripcion": "Fajitas de sirloin, salchichas asadas, frijoles charros, cebolla y papa asada.", "precios": [ { "label": "Para 2", "valor": 330 }, { "label": "Para 4", "valor": 590 }, { "label": "Para 6", "valor": 890 } ] },
                { "nombre": "Mixta", "descripcion": "Fajitas de sirloin, fajitas de pollo, costilla de cerdos, cebollas, papa asada y chiles toreados.", "precios": [ { "label": "Para 2", "valor": 330 }, { "label": "Para 4", "valor": 595 }, { "label": "Para 6", "valor": 890 } ] },
                { "nombre": "Mar y Tierra", "descripcion": "Fajitas de sirloin, fajitas de pollo, queso gratinado, cebollas, papa asada y chiles toreados.", "precios": [ { "label": "Para 2", "valor": 360 }, { "label": "Para 4", "valor": 650 }, { "label": "Para 6", "valor": 990 } ] },
                { "nombre": "Especial", "descripcion": "Carnitas, carne al pastor, salchicha asada, frijoles charros, cebollas y papa asada.", "precios": [ { "label": "Para 2", "valor": 330 }, { "label": "Para 4", "valor": 590 }, { "label": "Para 6", "valor": 890 } ] },
                { "nombre": "Mexicanísima", "descripcion": "Arrachera, fajitas de pollo, queso gratinado, salchicha asada, frijoles charros, cebollas y papa asada.", "precios": [ { "label": "Para 2", "valor": 330 }, { "label": "Para 4", "valor": 590 }, { "label": "Para 6", "valor": 890 } ] }
              ]
            },
            {
              "titulo": "Por Kilo",
              "layout": "cartas",
              "items": [
                { "nombre": "Arrachera", "precios": [ { "label": "1/2 Kilo", "valor": 330 }, { "label": "1 Kilo", "valor": 560 } ] },
                { "nombre": "Carne Asada", "precios": [ { "label": "1/2 Kilo", "valor": 320 }, { "label": "1 Kilo", "valor": 530 } ] },
                { "nombre": "Costillitas Asadas", "precios": [ { "label": "1/2 Kilo", "valor": 330 }, { "label": "1 Kilo", "valor": 560 } ] }
              ]
            }
          ]
        },
        {
          "titulo": "Platillos Especiales y Tortas",
          "emoji": "\ud83c\udf7d\ufe0f",
          "grupos": [
            {
              "titulo": "Platillos",
              "layout": "cartas",
              "items": [
                { "nombre": "Torre de Carnes", "precio": 210, "descripcion": "Sirloin, pastor, cebollitas y guacamole, bañada con queso fundido." },
                { "nombre": "Fajitas de Pechuga", "precio": 180 },
                { "nombre": "Fajitas de Sirloin", "precio": 195 },
                { "nombre": "Arrieros", "precio": 210, "descripcion": "Costillitas de res gratinadas con frijoles charros y guacamole." },
                { "nombre": "Costillitas BBQ", "precio": 230, "descripcion": "Costilla de cerdo horneada." },
                { "nombre": "Filete BBQ", "precio": 190, "descripcion": "Asado o empanizado." },
                { "nombre": "Fajitas Mar y Tierra", "precio": 210, "descripcion": "Fajitas de res, pollo y camarón." },
                { "nombre": "Fajitas Especiales", "precio": 210, "descripcion": "Con guacamole, salchicha, frijoles y queso gratinado." },
                { "nombre": "Fajitas Supremas", "precio": 265, "descripcion": "Fajitas de arrachera con camarón, tocino y queso gratinado." }
              ]
            },
            {
              "titulo": "Tortas",
              "layout": "tabla",
              "items": [
                { "nombre": "Asada", "precio": 95 },
                { "nombre": "Adobada", "precio": 95 },
                { "nombre": "Al Pastor", "precio": 95 },
                { "nombre": "Carnitas", "precio": 95 },
                { "nombre": "Arrachera", "precio": 110 },
                { "nombre": "Mixta", "precio": 95 }
              ]
            }
          ]
        },
        {
          "titulo": "Hamburguesas, Camarones, Papas y Postres",
          "emoji": "\ud83c\udf54",
          "grupos": [
            {
              "titulo": "Burgers",
              "layout": "cartas",
              "items": [
                { "nombre": "Mexicanísima", "precio": 120, "descripcion": "Carne de hamburguesa, carne de sirloin, queso amarillo, tocino, aguacate, champiñones y cebollitas." },
                { "nombre": "Especial", "precio": 120, "descripcion": "Carne de hamburguesa, salchicha, aguacate, tocino, champiñones y cebollitas." },
                { "nombre": "Super Burger", "precio": 110, "descripcion": "Carne de hamburguesa, salchicha, aguacate, champiñones, piña, aguacate y cebollitas." },
                { "nombre": "Hawaiana", "precio": 110, "descripcion": "Carne de hamburguesa, piña, jamón, queso amarillo, tocino, aguacate y cebollitas." },
                { "nombre": "De Pollo", "precio": 90, "descripcion": "Pechuga de pollo empanizada, jamón, queso amarillo, tocino, aguacate, salchicha y cebollitas." },
                { "nombre": "Arrachera Especial", "precio": 125, "descripcion": "Arrachera especial, tocino, champiñón, jamón, queso amarillo, tocino, aguacate y cebollitas." }
              ]
            },
            {
              "titulo": "Camarones y Barra Fría",
              "layout": "tabla",
              "items": [
                { "nombre": "Camarones Empanizados", "precio": 190 },
                { "nombre": "Camarones Al Mojo de Ajo", "precio": 190 },
                { "nombre": "Camarones Fiesta", "precio": 210 },
                { "nombre": "Comala al Carbón", "precio": 210 },
                { "nombre": "Arrieros", "precio": 195, "descripcion": "Con champiñones, morrón, cebolla y queso gratinado." },
                { "nombre": "Filete a la Planché", "precio": 170 },
                { "nombre": "Aguachiles Verdes", "precio": 180 },
                { "nombre": "Aguachiles Comala", "precio": 180 },
                { "nombre": "Tostada de Camarón", "precio": 60 },
                { "nombre": "Tostada de Aguachile", "precio": 60 },
                { "nombre": "Ceviche de Camarón", "precio": 195 },
                { "nombre": "Coctel de Camarón Med.", "precio": 145 },
                { "nombre": "Coctel de Camarón Gde.", "precio": 175 }
              ]
            },
            {
              "titulo": "Papas",
              "layout": "tabla",
              "items": [
                { "nombre": "Asada", "precio": 110 },
                { "nombre": "Adobada", "precio": 110 },
                { "nombre": "Al Pastor", "precio": 110 },
                { "nombre": "Mexicanísima", "precio": 135, "descripcion": "Arrachera, tocino y queso gratinado." },
                { "nombre": "Camarón", "precio": 120 },
                { "nombre": "Mixta", "precio": 110 }
              ]
            },
            {
              "titulo": "Infantiles",
              "layout": "cartas",
              "items": [
                { "nombre": "Cajita", "precio": 99, "descripcion": "Incluye hamburguesa o nuggets, con papas, jugo y juguete sorpresa." },
                { "nombre": "Salchicha con Queso", "precio": 40 },
                { "nombre": "Papas a la Francesa", "precio": 60 },
                { "nombre": "Mini Pizza c/Papas", "precio": 80 },
                { "nombre": "Dedos de Queso", "precio": 85 }
              ]
            },
            {
              "titulo": "Postres",
              "layout": "tabla",
              "items": [
                { "nombre": "Chocoflan", "precio": 65 },
                { "nombre": "Pastel 3 Leches", "precio": 65 },
                { "nombre": "Copa de Nieve", "precio": 65 },
                { "nombre": "Combinado", "precio": 70 },
                { "nombre": "Banana Split", "precio": 70 }
              ]
            }
          ]
        },
        {
          "titulo": "Bebidas y Coctelería",
          "emoji": "\ud83e\udd64",
          "grupos": [
            {
              "titulo": "Sin Alcohol",
              "layout": "tabla",
              "items": [
                { "nombre": "Refresco", "precio": 38 },
                { "nombre": "Té Espumoso", "precio": 38, "descripcion": "Fresa, mango, naranja, uva o piña." },
                { "nombre": "Iguana", "precio": 45, "descripcion": "Roja, verde o azul." },
                { "nombre": "Café", "precio": 30 },
                { "nombre": "Té Caliente", "precio": 30 },
                { "nombre": "Chocolate", "precio": 45 },
                { "nombre": "Capuccino", "precio": 50 },
                { "nombre": "Agua Natural (500 ml)", "precio": 15 },
                { "nombre": "Agua Natural (1 Lt)", "precio": 30 },
                { "nombre": "Jugo", "precio": 25 },
                { "nombre": "Mini Agua Fresca", "precio": 25, "descripcion": "Tamarindo, horchata o jamaica." },
                { "nombre": "Mini Limonada Natural", "precio": 25 },
                { "nombre": "Agua Mineral Peñafiel", "precio": 38 }
              ]
            },
            {
              "titulo": "Jarra de Agua / Limonada",
              "layout": "tabla",
              "items": [
                { "nombre": "Limonada Natural", "precios": [ { "label": "1/2 Lt", "valor": 38 }, { "label": "1 Lt", "valor": 65 }, { "label": "Jarra", "valor": 120 } ] },
                { "nombre": "Limonada Rosada", "precios": [ { "label": "1 Lt", "valor": 65 }, { "label": "Jarra", "valor": 120 } ] },
                { "nombre": "Limonada Mineral", "precios": [ { "label": "1 Lt", "valor": 65 }, { "label": "Jarra", "valor": 120 } ] },
                { "nombre": "Naranjada Natural", "precios": [ { "label": "1 Lt", "valor": 65 }, { "label": "Jarra", "valor": 120 } ] },
                { "nombre": "Naranjada Mineral", "precios": [ { "label": "1 Lt", "valor": 65 }, { "label": "Jarra", "valor": 120 } ] },
                { "nombre": "Agua Fresca", "descripcion": "Tamarindo, horchata, jamaica, fresa y mango.", "precios": [ { "label": "1/2 Lt", "valor": 40 }, { "label": "1 Lt", "valor": 65 }, { "label": "Jarra", "valor": 120 } ] },
                { "nombre": "Piñada", "precios": [ { "label": "1/2 Lt", "valor": 65 }, { "label": "1 Lt", "valor": 110 }, { "label": "Jarra", "valor": 220 } ] },
                { "nombre": "Fresada", "precios": [ { "label": "1/2 Lt", "valor": 65 }, { "label": "1 Lt", "valor": 110 }, { "label": "Jarra", "valor": 220 } ] }
              ]
            },
            {
              "titulo": "Frappes Sin Alcohol",
              "layout": "cartas",
              "items": [
                { "nombre": "Mango Chamoy", "precio": 80 },
                { "nombre": "Mono Loco", "precio": 80, "descripcion": "Helado de chocolate, crema de coco, leche y galleta Oreo." },
                { "nombre": "Mono Fresa", "precio": 80, "descripcion": "Helado de fresa, crema de coco, leche y galleta." },
                { "nombre": "Matcha", "precio": 80 },
                { "nombre": "Mango Cream", "precio": 80 }
              ]
            },
            {
              "titulo": "Frappes Con Alcohol",
              "layout": "cartas",
              "items": [
                { "nombre": "Mono Sucio", "precio": 90, "descripcion": "Baileys, chocolate, crema de coco y leche evaporada." },
                { "nombre": "Margarita Mexicana", "precio": 90 },
                { "nombre": "Margarita Tamarindo", "precio": 90 }
              ]
            }
          ]
        },
        {
          "titulo": "Cervezas y Micheladas",
          "emoji": "\ud83c\udf7a",
          "grupos": [
            {
              "titulo": "Cerveza Indio / Tecate / Heineken",
              "layout": "tabla",
              "items": [
                { "nombre": "Indio", "precios": [ { "label": "1/4", "valor": 28 }, { "label": "1/2", "valor": 38 } ] },
                { "nombre": "Lager", "precios": [ { "label": "1/4", "valor": 28 }, { "label": "1/2", "valor": 38 } ] },
                { "nombre": "Tecate Light", "precios": [ { "label": "1/4", "valor": 28 }, { "label": "1/2", "valor": 38 }, { "label": "Caguama", "valor": 95 } ] },
                { "nombre": "Miller High Life", "precios": [ { "label": "1/2", "valor": 38 }, { "label": "Caguama", "valor": 95 } ] },
                { "nombre": "Ultra", "precios": [ { "label": "1/2", "valor": 45 }, { "label": "Caguama", "valor": 95 } ] },
                { "nombre": "Heineken", "precios": [ { "label": "1/2", "valor": 45 } ] },
                { "nombre": "Cubetazo (10 de 1/4 Indio o Tecate Light)", "precio": 240 },
                { "nombre": "Cubetazo (8 de 1/2 Indio, Lager, Tecate Light, Corona, Victoria o Pacífico)", "precio": 280 }
              ]
            },
            {
              "titulo": "Cerveza Modelo",
              "layout": "tabla",
              "items": [
                { "nombre": "Corona", "precio": 38 },
                { "nombre": "Pacífico", "precio": 38 },
                { "nombre": "Victoria", "precio": 38 },
                { "nombre": "Modelo Especial", "precio": 45 },
                { "nombre": "Negra Modelo", "precio": 45 }
              ]
            },
            {
              "titulo": "Micheladas",
              "layout": "tabla",
              "items": [
                { "nombre": "Rompe Crudas", "precios": [ { "label": "1/4", "valor": 75 }, { "label": "1/2", "valor": 120 } ] },
                { "nombre": "Botanera", "precio": 120 },
                { "nombre": "Clamatos", "precios": [ { "label": "1/4", "valor": 70 }, { "label": "1/2", "valor": 110 } ] },
                { "nombre": "Clásica", "precios": [ { "label": "1/4", "valor": 70 }, { "label": "1/2", "valor": 110 } ] },
                { "nombre": "Vampira", "precios": [ { "label": "1/4", "valor": 70 }, { "label": "1/2", "valor": 110 } ] },
                { "nombre": "MicheFresa", "precios": [ { "label": "1/4", "valor": 70 }, { "label": "1/2", "valor": 110 } ] },
                { "nombre": "MicheMango", "precios": [ { "label": "1/4", "valor": 70 }, { "label": "1/2", "valor": 110 } ] },
                { "nombre": "Chelada", "precios": [ { "label": "1/4", "valor": 70 }, { "label": "1/2", "valor": 110 } ] }
              ]
            }
          ]
        },
        {
          "titulo": "Tragos y Cocteles con Alcohol",
          "emoji": "\ud83c\udf78",
          "layout": "cartas",
          "items": [
            { "nombre": "Piña Colada", "precio": 80 },
            { "nombre": "Margarita Tradicional", "precio": 80 },
            { "nombre": "Sunrise", "precio": 80, "descripcion": "Tequila tradicional, jugo de naranja y granadina." },
            { "nombre": "Vampiro", "precio": 80, "descripcion": "Tequila, jugo de naranja y granadina." },
            { "nombre": "Desarmador", "precio": 80, "descripcion": "Vodka, jugo de naranja y granadina." },
            { "nombre": "Paloma", "precio": 80, "descripcion": "Tequila, refresco de toronja, limón y sal." },
            { "nombre": "Ruso Blanco", "precio": 80, "descripcion": "Vodka, licor de café y leche evaporada." },
            { "nombre": "Medias de Seda", "precio": 80, "descripcion": "Amaretto, canela, leche evaporada y granadina." },
            { "nombre": "Amaretto Sower", "precio": 80, "descripcion": "Amaretto, jugo de naranja y granadina." },
            { "nombre": "Cantarito (700 ml)", "precio": 85 },
            { "nombre": "Vino Tinto (Copa)", "precio": 80 },
            { "nombre": "Sexo en la Playa", "precio": 80, "descripcion": "Vodka, jugo de piña, jugo de arándano y licor de durazno." },
            { "nombre": "Chidita", "precio": 80, "descripcion": "Tequila, sangrita y limón." },
            { "nombre": "Dulce Mezcal", "precio": 80, "descripcion": "Mezcal, granadina y jaimica." }
          ]
        },
        {
          "titulo": "Tequila & Whisky",
          "emoji": "\ud83e\udd43",
          "layout": "tabla",
          "items": [
            { "nombre": "Tradicional", "precio": 90 },
            { "nombre": "Hacienda", "precio": 90 },
            { "nombre": "1800 Añejo", "precio": 120 },
            { "nombre": "Don Julio 70", "precio": 130 },
            { "nombre": "Don Julio Reposado", "precio": 120 },
            { "nombre": "De la Casa", "precio": 60 },
            { "nombre": "Mezcal", "precio": 75 },
            { "nombre": "Red Label", "precio": 85 },
            { "nombre": "Buchanas 12", "precio": 110 }
          ]
        },
        {
          "titulo": "Digestivos",
          "emoji": "\ud83c\udf77",
          "layout": "tabla",
          "items": [
            { "nombre": "Baileys", "precio": 80 },
            { "nombre": "Amaretto", "precio": 90 },
            { "nombre": "Licor 43", "precio": 80 }
          ]
        }
      ]
    },
    {
      "id": "taqueria-santana",
      "nombre": "Taquería Santana",
      "emoji": "\ud83c\udf2e",
      "etiqueta": "Menú completo",
      "eslogan": "Tacos, antojitos y boneless con el sazón de la casa.",
      "direccion": "Av. Allende 108, Gpe. Victoria, Dgo.",
      "horario": "13:00 P.M. \u2013 23:00 P.M.",
      "secciones": [
        {
          "titulo": "Antojitos y Especialidades",
          "emoji": "\ud83c\udf2e",
          "nota": "Carnes a elegir: Asada, Suadero y Tripitas. La carne de tripitas tiene un costo extra de $10 en cualquier platillo.",
          "layout": "cartas",
          "salsasLabel": "carnes",
          "salsas": ["Asada", "Suadero", "Tripitas"],
          "items": [
            { "nombre": "Tacos (c/u)", "precios": [ { "label": "Carne", "valor": 25 }, { "label": "Tripitas", "valor": 30 } ] },
            { "nombre": "Burritos", "precios": [ { "label": "Carne", "valor": 50 }, { "label": "Tripitas", "valor": 60 } ] },
            { "nombre": "Santana Fries", "precio": 119, "descripcion": "Papas a la francesa con frijoles, carne de tu elección, queso, crema y aguacate." },
            { "nombre": "Huarache", "precio": 109, "descripcion": "Tortilla de maíz hecha a mano con frijoles, queso, carne de tu elección, lechuga, crema, queso cotija y tomate." },
            { "nombre": "Quesadillas", "precio": 99, "descripcion": "Dos tortillas de harina con queso, carne de tu elección, lechuga con tomate, crema y aguacate para acompañar." },
            { "nombre": "Gringas", "precio": 99, "descripcion": "Tortilla de harina con queso, carne de tu elección, lechuga, crema, queso cotija y aguacate." },
            { "nombre": "Mulitas", "precio": 89, "descripcion": "Dos tortillas de maíz hechas a mano con queso, carne de tu elección y lechuga con tomate para acompañar." },
            { "nombre": "Burrito Mexicano", "precio": 109, "descripcion": "Tortilla de harina grande, frijoles, arroz, carne de tu elección, cebolla con cilantro y salsa picante." },
            { "nombre": "Burrito California", "precio": 129, "descripcion": "Tortilla de harina grande con frijoles, papas a la francesa, carne de tu elección, queso, crema y salsa picante." },
            { "nombre": "Tortas", "precio": 99, "descripcion": "Pan blanco con frijoles, carne de tu elección, lechuga, tomate, queso, aguacate, mayonesa, chiles en rajas y papas a la francesa para acompañar." },
            { "nombre": "Tacos Dorados", "precio": 75, "descripcion": "5 tacos dorados con carne deshebrada con verdura, crema y salsas.", "salsas": [] }
          ]
        },
        {
          "titulo": "Bebidas",
          "emoji": "\ud83e\udd64",
          "layout": "tabla",
          "items": [
            { "nombre": "Bebidas", "precio": 25 },
            { "nombre": "Refresco de Lata", "precio": 29 },
            { "nombre": "Cerveza 1/2", "precio": 35 },
            { "nombre": "Cerveza 1/4", "precio": 25 },
            { "nombre": "Caguamón", "precio": 65 }
          ]
        },
        {
          "titulo": "Hamburguesas, Alitas y Boneless",
          "emoji": "\ud83c\udf54",
          "grupos": [
            {
              "titulo": "Hamburguesas",
              "layout": "cartas",
              "items": [
                { "nombre": "Hamburguesa de Res", "precio": 90, "descripcion": "Pan, carne de res, lechuga, tomate, jamón, queso amarillo, pepinillos, aguacate, jalapeños, mayonesa y ketchup. Incluye papas a la francesa ($65 sin papas)." },
                { "nombre": "Hamburguesa de Pollo", "precio": 90, "descripcion": "Pan, boneless, lechuga, tomate, ketchup, mayonesa, aguacate y pepinillos. Incluye papas a la francesa ($65 sin papas)." }
              ]
            },
            {
              "titulo": "Extras",
              "layout": "tabla",
              "items": [
                { "nombre": "Papas a la Francesa", "precio": 45 },
                { "nombre": "Papas Gajo", "precio": 55 },
                { "nombre": "Aros de Cebolla (9)", "precio": 55 },
                { "nombre": "Dedos de Queso (7)", "precio": 89 },
                { "nombre": "Ranch", "precio": 10 }
              ]
            },
            {
              "titulo": "Boneless y Alitas",
              "layout": "cartas",
              "nota": "Todas las órdenes incluyen papas a la francesa, zanahoria, apio y aderezo.",
              "salsas": ["Mango Habanero", "BBQ Hot", "BBQ", "Búfalo", "Lemon Pepper", "Miel y Mostaza", "Ajo Parmesano", "Tamarindo", "Natural"],
              "items": [
                { "nombre": "Boneless", "descripcion": "Papas en gajo $10 extra.", "precios": [ { "label": "125 g", "valor": 89 }, { "label": "250 g", "valor": 139 }, { "label": "357 g", "valor": 199 } ] },
                { "nombre": "Alitas", "precios": [ { "label": "4 Piezas", "valor": 79 }, { "label": "8 Piezas", "valor": 139 }, { "label": "10 Piezas", "valor": 149 }, { "label": "15 Piezas", "valor": 199 } ] }
              ]
            },
            {
              "titulo": "Salsas",
              "layout": "chips",
              "nota": "Más 🔥 = más picante.",
              "items": [
                { "nombre": "Mango Habanero" },
                { "nombre": "BBQ Hot 🔥🔥🔥🔥🔥" },
                { "nombre": "BBQ 🔥🔥🔥🔥🔥" },
                { "nombre": "Búfalo 🔥🔥🔥" },
                { "nombre": "Lemon Pepper 🔥🔥" },
                { "nombre": "Miel y Mostaza" },
                { "nombre": "Ajo Parmesano" },
                { "nombre": "Tamarindo" },
                { "nombre": "Natural" }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "deli-flame-burger",
      "nombre": "Deli Flame Burger",
      "emoji": "🍔",
      "etiqueta": "Menú completo",
      "eslogan": "Hamburguesas, alitas y papas recién hechas.",
      "direccion": "Lázaro Cárdenas #944, Guadalupe Victoria",
      "secciones": [
        {
          "titulo": "Entradas y Papas",
          "emoji": "🔥",
          "grupos": [
            {
              "titulo": "Papas y Entradas",
              "layout": "cartas",
              "items": [
                { "nombre": "Papas a la Francesa", "precio": 64, "descripcion": "Papas fritas corte regular." },
                { "nombre": "Papas en Gajo", "precio": 69, "descripcion": "Papas sazonadas corte gajo." },
                { "nombre": "Papas Crisscutt", "precio": 69, "descripcion": "Papas sazonadas corte reja." },
                { "nombre": "A la Parmesano", "precio": 79, "descripcion": "Papas a la francesa con especias y queso parmesano." },
                { "nombre": "Aros de Cebolla", "precio": 94, "descripcion": "Orden con 10 piezas." },
                { "nombre": "Dedos de Queso", "precio": 114, "descripcion": "Bastones de queso mozzarella · 6 piezas." },
                { "nombre": "Papa-Nachos", "precio": 94, "descripcion": "Papas a la francesa acompañadas con aderezo de nachos, chiles y aderezos." },
                { "nombre": "Salchipapas", "precio": 107, "descripcion": "Papas a la francesa acompañadas con salchicha de pavo, cátsup, pico de gallo y aderezo de nachos." },
                { "nombre": "Buffalo-Fries", "precio": 94, "descripcion": "Papas a la francesa bañadas con nuestra salsa original de alitas, aderezo de nachos y tocino." },
                { "nombre": "Carne Asada Fries", "precio": 124, "descripcion": "Papas a la francesa acompañadas con aderezo de nachos, carne asada, pico de gallo y aderezos." },
                { "nombre": "Papas Salvajes ★", "precio": 94, "descripcion": "Crujientes papas a la francesa bañadas en queso, nuestra salsa secreta especial y un toque de cebolla caramelizada." }
              ]
            },
            {
              "titulo": "Nachos",
              "layout": "cartas",
              "items": [
                { "nombre": "Nachos Sencillos", "precio": 107, "descripcion": "Crujientes totopos, bañados con frijoles, queso de nachos, pico de gallo, queso blanco gratinado y guacamole al centro." },
                { "nombre": "Pulled Pork Nachos", "precio": 124, "descripcion": "Crujientes totopos, bañados con queso de nachos, pulled pork, pico de gallo, crema y queso blanco." },
                { "nombre": "Asada Nachos ★", "precio": 137, "descripcion": "Crujientes totopos con carne asada, bañados con frijoles, queso de nachos, pico de gallo, queso blanco gratinado y guacamole al centro." }
              ]
            }
          ]
        },
        {
          "titulo": "Alitas, Boneless y Tenders",
          "emoji": "🔥",
          "nota": "Todas las órdenes incluyen papas a la francesa, zanahoria, apio y aderezos.",
          "grupos": [
            {
              "titulo": "Very Hot 🔥🔥🔥🔥🔥",
              "layout": "chips",
              "items": [
                { "nombre": "Diabla" },
                { "nombre": "BBQ X-Hot" },
                { "nombre": "Mango Habanero" },
                { "nombre": "Piña Habanero" }
              ]
            },
            {
              "titulo": "Hot 🔥🔥🔥🔥",
              "layout": "chips",
              "items": [
                { "nombre": "Ranch Habanero" },
                { "nombre": "Spicy Buffalo" },
                { "nombre": "Miel Picante" },
                { "nombre": "Spicy Jamaica" }
              ]
            },
            {
              "titulo": "Spicy 🔥🔥🔥",
              "layout": "chips",
              "items": [
                { "nombre": "Buffalo" },
                { "nombre": "Buffalo Ranch" },
                { "nombre": "Frambuesa Chipotle" },
                { "nombre": "Fresa Chipotle" }
              ]
            },
            {
              "titulo": "Medium 🔥🔥",
              "layout": "chips",
              "items": [
                { "nombre": "Chabacano Chipotle" },
                { "nombre": "Tamarindo" }
              ]
            },
            {
              "titulo": "Mild 🔥",
              "layout": "chips",
              "items": [
                { "nombre": "BBQ Miel" },
                { "nombre": "BBQ" },
                { "nombre": "Teriyaki" },
                { "nombre": "Ajo Parmesano" },
                { "nombre": "Parmesano" },
                { "nombre": "Pimienta Limón" }
              ]
            },
            {
              "titulo": "Alitas",
              "layout": "cartas",
              "salsas": ["Diabla", "BBQ X-Hot", "Mango Habanero", "Piña Habanero", "Ranch Habanero", "Spicy Buffalo", "Miel Picante", "Spicy Jamaica", "Buffalo", "Buffalo Ranch", "Frambuesa Chipotle", "Fresa Chipotle", "Chabacano Chipotle", "Tamarindo", "BBQ Miel", "BBQ", "Teriyaki", "Ajo Parmesano", "Parmesano", "Pimienta Limón"],
              "items": [
                { "nombre": "Alitas", "precios": [ { "label": "10 Piezas", "valor": 179 }, { "label": "15 Piezas", "valor": 219 }, { "label": "20 Piezas", "valor": 259 }, { "label": "25 Piezas", "valor": 299 } ] }
              ]
            },
            {
              "titulo": "Boneless",
              "layout": "cartas",
              "salsas": ["Diabla", "BBQ X-Hot", "Mango Habanero", "Piña Habanero", "Ranch Habanero", "Spicy Buffalo", "Miel Picante", "Spicy Jamaica", "Buffalo", "Buffalo Ranch", "Frambuesa Chipotle", "Fresa Chipotle", "Chabacano Chipotle", "Tamarindo", "BBQ Miel", "BBQ", "Teriyaki", "Ajo Parmesano", "Parmesano", "Pimienta Limón"],
              "items": [
                { "nombre": "Boneless", "precios": [ { "label": "250 g", "valor": 189 }, { "label": "375 g", "valor": 237 } ] }
              ]
            },
            {
              "titulo": "Tenders",
              "layout": "cartas",
              "salsas": ["Diabla", "BBQ X-Hot", "Mango Habanero", "Piña Habanero", "Ranch Habanero", "Spicy Buffalo", "Miel Picante", "Spicy Jamaica", "Buffalo", "Buffalo Ranch", "Frambuesa Chipotle", "Fresa Chipotle", "Chabacano Chipotle", "Tamarindo", "BBQ Miel", "BBQ", "Teriyaki", "Ajo Parmesano", "Parmesano", "Pimienta Limón"],
              "items": [
                { "nombre": "Tenders", "precios": [ { "label": "250 g", "valor": 189 }, { "label": "375 g", "valor": 237 } ] }
              ]
            }
          ]
        },
        {
          "titulo": "Hamburguesas",
          "emoji": "🍔",
          "grupos": [
            {
              "titulo": "Hamburguesas",
              "layout": "cartas",
              "items": [
                { "nombre": "Sencilla", "precio": 89, "descripcion": "Jamón, queso, aguacate, lechuga, tomate y jalapeños." },
                { "nombre": "Hawaiana", "precio": 104, "descripcion": "Piña, jamón, queso, aguacate, lechuga, tomate y jalapeños." },
                { "nombre": "Champiñón", "precio": 104, "descripcion": "Champiñones, jamón, queso, aguacate, lechuga, tomate y jalapeños." },
                { "nombre": "Tocino", "precio": 124, "descripcion": "Tocino, jamón, queso, aguacate, lechuga, tomate y jalapeños." },
                { "nombre": "B.B.Q", "precio": 124, "descripcion": "Tocino, salsa B.B.Q, jamón, queso, aguacate, lechuga, tomate y jalapeños." },
                { "nombre": "Campestre", "precio": 159, "descripcion": "Mezcla de tocino con champiñones, salchicha para asar, lechuga, tomate, aguacate y jalapeños." },
                { "nombre": "Guacamole", "precio": 167, "descripcion": "Dos carnes, tocino, lechuga, tomate y guacamole preparado en el momento." },
                { "nombre": "Americana", "precio": 89, "descripcion": "Tocino, queso amarillo y jalapeños." },
                { "nombre": "Texas", "precio": 109, "descripcion": "Salsa B.B.Q, tocino, queso amarillo y aros de cebolla." },
                { "nombre": "Tex-Mex", "precio": 124, "descripcion": "Queso amarillo, aros de cebolla, salsa búfalo y salchicha para asar." },
                { "nombre": "Bacon Cheese", "precio": 144, "descripcion": "2 carnes + 2 quesos amarillos, pepinillos, tocino y cebolla caramelizada." },
                { "nombre": "Jalapeño-Popper", "precio": 144, "descripcion": "Tocino, costra de queso blanco y mezcla de jalapeño Popper." },
                { "nombre": "Cheese-Burger", "precio": 89, "descripcion": "Queso amarillo, verduras frescas, cebolla caramelizada, aderezo de la casa y jalapeños." },
                { "nombre": "Dos X Dos", "precio": 144, "descripcion": "2 carnes + 2 quesos amarillos, verduras frescas, cebolla caramelizada, aderezo de la casa y jalapeños." }
              ]
            },
            {
              "titulo": "De Pollo",
              "layout": "cartas",
              "items": [
                { "nombre": "Chicken-Burger", "precio": 114, "descripcion": "Pechuga de pollo empanizada, jamón, queso, lechuga, tomate, aguacate y jalapeños." },
                { "nombre": "Buffalo-Chicken", "precio": 127, "descripcion": "Pechuga de pollo empanizada con salsa búfalo, jamón, queso, lechuga, tomate, aguacate y jalapeños." },
                { "nombre": "B.B.Q-Chicken", "precio": 134, "descripcion": "Pechuga de pollo empanizada con salsa BBQ, tocino, jamón, queso, lechuga, tomate, aguacate y jalapeños." },
                { "nombre": "Habanero-Chicken", "precio": 134, "descripcion": "Pechuga de pollo empanizada con salsa de mango habanero, tocino, jamón, queso, verduras frescas y jalapeños." },
                { "nombre": "Norteña", "precio": 134, "descripcion": "Pechuga de pollo empanizada, aros de cebolla, tocino, jamón, queso, lechuga, tomate, aguacate y jalapeños." }
              ]
            }
          ]
        },
        {
          "titulo": "Hot-Dogs",
          "emoji": "🌭",
          "nota": "Todos los hot-dogs incluyen mayonesa, cátsup y mostaza.",
          "layout": "cartas",
          "items": [
            { "nombre": "Sencillo", "precio": 59, "descripcion": "Salchicha de pavo, tocino, pico de gallo y aderezos." },
            { "nombre": "Grande", "precio": 69, "descripcion": "Salchicha para asar, tocino, pico de gallo y aderezos." },
            { "nombre": "Pizza Dog", "precio": 79, "descripcion": "Salchicha de pavo, salsa de tomate, pepperoni y mezcla de quesos." },
            { "nombre": "El Texano", "precio": 84, "descripcion": "Salchicha de pavo con tocino, queso americano, cebolla caramelizada y salsa BBQ." },
            { "nombre": "Jalapeño Dogo", "precio": 84, "descripcion": "Salchicha de pavo, tocino, jalapeño Popper, aguacate, pico de gallo y aderezos." }
          ]
        },
        {
          "titulo": "Papas Horneadas ★",
          "emoji": "🥔",
          "nota": "Todas nuestras papas son horneadas y acompañadas con totopos y salsas.",
          "layout": "cartas",
          "items": [
            { "nombre": "Rib Eye", "precio": 137, "descripcion": "Rib Eye asada, acompañada de queso, mantequilla, crema y cebollín." },
            { "nombre": "Pollo", "precio": 134, "descripcion": "Pollo a la plancha acompañada de queso, mantequilla, crema y cebollín." },
            { "nombre": "Mar y Tierra", "precio": 134, "descripcion": "Carne asada, camarones, champiñones, tocino, queso, mantequilla, crema y cebollín." },
            { "nombre": "Clásica", "precio": 104, "descripcion": "Queso, mantequilla, crema y cebollín." },
            { "nombre": "Champi-Asada", "precio": 129, "descripcion": "Carne asada, champiñones, pimiento morrón, queso, mantequilla, crema y cebollín." }
          ]
        },
        {
          "titulo": "Costillas B.B.Q y Pulled Pork",
          "emoji": "🍖",
          "layout": "cartas",
          "items": [
            { "nombre": "Costillas Deli", "precio": 259, "descripcion": "Orden de 350 g de costilla de cerdo deliciosamente ahumadas con leña de manzano, glaseadas con nuestra salsa BBQ, acompañadas con ensalada de col, puré de papa y elote dulce." },
            { "nombre": "Mega Bowl", "precio": 289, "descripcion": "Costillas de cerdo, tender de pollo, elote dulce, ensalada de col y papas de tu elección." },
            { "nombre": "Pulled Pork Honey", "precio": 134, "descripcion": "Nuestra carne pulled pork cubierta con nuestra salsa B.B.Q, ensalada de col preparada en el momento y un toque de salsa de mango habanero." },
            { "nombre": "Monster Pulled Pork", "precio": 159, "descripcion": "Pechuga de pollo acompañada con nuestra carne pulled pork cubierta con salsa B.B.Q, aros de cebolla, ensalada de col preparada en el momento y un toque de salsa de mango habanero." }
          ]
        },
        {
          "titulo": "Sandwiches y Ensaladas",
          "emoji": "🥪",
          "grupos": [
            {
              "titulo": "Sandwiches",
              "layout": "cartas",
              "nota": "Todos los sandwiches incluyen media orden de papas a la francesa.",
              "items": [
                { "nombre": "BLT Chicken Sandwich", "precio": 127, "descripcion": "Pan de 12 granos en la plancha con pechuga de pollo a la plancha, tocino, lechuga y tomate." },
                { "nombre": "Special Chicken Sandwich", "precio": 134, "descripcion": "Pan de 12 granos tostado con pechuga de pollo a la plancha, calabaza, jamón, queso amarillo o blanco." }
              ]
            },
            {
              "titulo": "Ensaladas",
              "layout": "cartas",
              "nota": "Opciones: Empanizado · Plancha.",
              "items": [
                { "nombre": "A la Pasta", "precios": [ { "label": "Empanizado", "valor": 137 }, { "label": "Plancha", "valor": 149 } ], "descripcion": "Mezcla de lechugas, espinacas, brócoli, tomate cherry y pasta a la mantequilla, zanahoria y crotones." },
                { "nombre": "Buffalo Chicken", "precios": [ { "label": "Empanizado", "valor": 137 }, { "label": "Plancha", "valor": 149 } ], "descripcion": "Mezcla de lechugas, espinacas, jícama, pepino, col morada, zanahoria y crotones." },
                { "nombre": "Primavera", "precios": [ { "label": "Empanizado", "valor": 137 }, { "label": "Plancha", "valor": 149 } ], "descripcion": "Mezcla de lechugas, espinacas, fresa, manzana, arándanos, nuez, almendras, zanahoria y queso parmesano." }
              ]
            },
            {
              "titulo": "Aderezos Disponibles",
              "layout": "chips",
              "items": [
                { "nombre": "Ranch" },
                { "nombre": "Mil Islas" },
                { "nombre": "Mostaza Dulce" },
                { "nombre": "Cesar's" }
              ]
            }
          ]
        },
        {
          "titulo": "Kids (Menú Infantil)",
          "emoji": "🧒",
          "layout": "cartas",
          "items": [
            { "nombre": "Nuggets de Pollo", "precio": 89, "descripcion": "6 nuggets de pollo acompañados con papas a la francesa y jugo infantil." },
            { "nombre": "Mini Cheese Burger", "precio": 89, "descripcion": "Cheese Burger acompañada con papas a la francesa y jugo infantil." },
            { "nombre": "Salchipulpos", "precio": 89, "descripcion": "Salchicha de pavo en forma de pulpos, acompañada con papas a la francesa y jugo infantil." }
          ]
        }
      ]
    },
    {
      "id": "plebes-birria",
      "nombre": "Plebes Birria",
      "emoji": "👑",
      "etiqueta": "Birria y tacos",
      "eslogan": "Sabor tradicional, con todo.",
      "secciones": [
        {
          "titulo": "Menú",
          "emoji": "🌮",
          "layout": "cartas",
          "items": [
            { "nombre": "Tacos dorados", "descripcion": "Doble tortilla, jugosa birria, fritos en manteca para darles un sabor único y crujiente. Acompañados de consomé caliente, cebolla, limón y salsa roja picosa." },
            { "nombre": "Una riquísima birria", "descripcion": "Jugosa carne de birria servida con consomé bien caliente. Prepárala como más te guste con cebolla, cilantro, salsa picosa y tortillas bien calientitas." },
            { "nombre": "Maruchan Ramen", "descripcion": "¡Bien caliente! Maruchan servida con birria, con un sabor único y riquísimo. Acompañada de cebolla, cilantro, limón, salsa picosa y tortillas doradas en aceite." },
            { "nombre": "Tacos con queso", "descripcion": "¡Mucho queso! Doble tortilla, jugosa birria y queso derretido, dorados hasta quedar bien calientitos. Acompañados de consomé, cilantro, cebolla, limón y salsa roja picosa." }
          ]
        }
      ]
    },
    {
      "id": "las-tres-marias",
      "nombre": "Las Tres Marías",
      "emoji": "🍲",
      "etiqueta": "Menudo y barbacoa",
      "eslogan": "Menudo, barbacoa y tacos de la casa.",
      "secciones": [
        {
          "titulo": "Menú",
          "emoji": "🍲",
          "layout": "cartas",
          "items": [
            { "nombre": "Menudo" },
            { "nombre": "Barbacoa Roja" },
            { "nombre": "Barbacoa Blanca" },
            { "nombre": "Tortas" },
            { "nombre": "Tacos" },
            { "nombre": "Tortillas" }
          ]
        }
      ]
    },
    {
      "id": "monster-tenders",
      "nombre": "Monster Tenders",
      "emoji": "🐔",
      "etiqueta": "Tenders y hamburguesas",
      "eslogan": "Sabor que te hace volver.",
      "secciones": [
        {
          "titulo": "Tenders, Alitas y Boneless",
          "emoji": "🐔",
          "grupos": [
            {
              "titulo": "Tenders",
              "layout": "cartas",
              "salsas": ["Mango Habanero", "BBQ", "Búfalo", "Lemon Pepper", "Habanero Cream", "Hot Honey"],
              "items": [
                { "nombre": "Tenders", "precios": [ { "label": "100 g", "valor": 85 }, { "label": "200 g", "valor": 145 }, { "label": "300 g", "valor": 205 }, { "label": "400 g", "valor": 265 } ] }
              ]
            },
            {
              "titulo": "Alitas",
              "layout": "cartas",
              "salsas": ["Mango Habanero", "BBQ", "Búfalo", "Lemon Pepper", "Habanero Cream", "Hot Honey"],
              "items": [
                { "nombre": "Alitas", "precios": [ { "label": "100 g", "valor": 80 }, { "label": "200 g", "valor": 130 }, { "label": "300 g", "valor": 185 }, { "label": "400 g", "valor": 230 } ] }
              ]
            },
            {
              "titulo": "Boneless",
              "layout": "cartas",
              "salsas": ["Mango Habanero", "BBQ", "Búfalo", "Lemon Pepper", "Habanero Cream", "Hot Honey"],
              "items": [
                { "nombre": "Boneless", "precios": [ { "label": "100 g", "valor": 85 }, { "label": "200 g", "valor": 145 }, { "label": "300 g", "valor": 205 }, { "label": "400 g", "valor": 265 } ] }
              ]
            }
          ]
        },
        {
          "titulo": "Hamburguesas",
          "emoji": "🍔",
          "nota": "Agrega papas a la francesa a tu hamburguesa por $40.",
          "layout": "cartas",
          "items": [
            { "nombre": "Hamburguesa Clásica", "precio": 90, "descripcion": "150 g carne de res, queso amarillo, queso blanco, aguacate, jitomate, cebolla, lechuga, jamón y tocino." },
            { "nombre": "Hamburguesa de Pollo", "precio": 90, "salsas": ["Mango Habanero", "BBQ", "Búfalo", "Lemon Pepper", "Habanero Cream", "Hot Honey"], "descripcion": "100 g tender de pollo, queso amarillo, queso blanco, aguacate, jitomate, cebolla, lechuga, jamón y tocino." },
            { "nombre": "Hamburguesa Especial", "precio": 115, "salsas": ["Mango Habanero", "BBQ", "Búfalo", "Lemon Pepper", "Habanero Cream", "Hot Honey"], "descripcion": "150 g carne de res, 60 g tender de pollo, queso amarillo, queso blanco, aguacate, jitomate, cebolla, lechuga, jamón y tocino." },
            { "nombre": "Hamburguesa Doble Carne", "precio": 140, "descripcion": "2x150 g carne de res, queso amarillo, queso blanco, aguacate, jitomate, cebolla, lechuga, jamón y tocino." },
            { "nombre": "Hamburguesa Monster", "precio": 170, "salsas": ["Mango Habanero", "BBQ", "Búfalo", "Lemon Pepper", "Habanero Cream", "Hot Honey"], "descripcion": "2x150 g carne de res, 60 g tender de pollo, queso amarillo, queso blanco, aguacate, jitomate, cebolla, lechuga, jamón y tocino." },
            { "nombre": "Agrega papas a la francesa", "precio": 40 }
          ]
        },
        {
          "titulo": "También Tenemos",
          "emoji": "🌮",
          "layout": "chips",
          "items": [
            { "nombre": "Burritos" },
            { "nombre": "Tacos" },
            { "nombre": "Quesadillas" },
            { "nombre": "Pizza Individual" },
            { "nombre": "Aros de Cebolla" },
            { "nombre": "Dedos de Queso" },
            { "nombre": "Papas Gajo" }
          ]
        }
      ]
    },
    {
      "id": "coffee-toby",
      "nombre": "Coffee Toby",
      "emoji": "\u2615",
      "etiqueta": "Cafetería",
      "eslogan": "El café más guau.",
      "telefono": "676 100 6240",
      "horario": "Lun a Sáb: 7:00 a.m. \u2013 10:00 p.m. \u00b7 Dom: 10:00 a.m. \u2013 10:00 p.m.",
      "secciones": [
        {
          "titulo": "Bebidas Calientes",
          "emoji": "\u2615",
          "grupos": [
            {
              "titulo": "Con Café",
              "layout": "tabla",
              "columnas": ["Chico", "Grande"],
              "items": [
                { "nombre": "Espresso doble", "precio": 30 },
                { "nombre": "Americano", "precio": 35, "precio2": 45 },
                { "nombre": "Capuchino", "precio": 35, "precio2": 45 },
                { "nombre": "Latte", "precio": 35, "precio2": 45 },
                { "nombre": "Moka", "precio": 35, "precio2": 45 },
                { "nombre": "Moka blanco", "precio": 45, "precio2": 55 },
                { "nombre": "Español", "precio": 35, "precio2": 45 }
              ]
            },
            {
              "titulo": "Especiales",
              "layout": "tabla",
              "columnas": ["Chico", "Grande"],
              "nota": "Sabores extras: Chocoreta, mazapán, snickers, m&m's, oreo.",
              "items": [
                { "nombre": "Caramelo", "precio": 45, "precio2": 55 },
                { "nombre": "Matcha", "precio": 55, "precio2": 65 },
                { "nombre": "Taro", "precio": 45, "precio2": 55 },
                { "nombre": "Chocolate blanco", "precio": 45, "precio2": 55 },
                { "nombre": "Kinder Delice", "precio": 45, "precio2": 55 },
                { "nombre": "Chocolate", "precio": 45, "precio2": 55 },
                { "nombre": "Cookies and cream", "precio": 45, "precio2": 55 },
                { "nombre": "Cajeta", "precio": 45, "precio2": 55 },
                { "nombre": "Algodón de azúcar", "precio": 45, "precio2": 55 },
                { "nombre": "Fresas con crema", "precio": 45, "precio2": 55 },
                { "nombre": "Horchata", "precio": 45, "precio2": 55 }
              ]
            },
            {
              "titulo": "Masala Chai",
              "layout": "tabla",
              "columnas": ["Chico", "Grande"],
              "items": [
                { "nombre": "Vainilla", "precio": 45, "precio2": 55 },
                { "nombre": "Frutos rojos", "precio": 45, "precio2": 55 },
                { "nombre": "Verde", "precio": 45, "precio2": 55 },
                { "nombre": "Negro", "precio": 45, "precio2": 55 },
                { "nombre": "Rosa Fresa", "precio": 45, "precio2": 55 },
                { "nombre": "Menta", "precio": 45, "precio2": 55 },
                { "nombre": "Blue", "precio": 45, "precio2": 55 },
                { "nombre": "Manzana", "precio": 45, "precio2": 55 },
                { "nombre": "Mango", "precio": 45, "precio2": 55 },
                { "nombre": "Golden", "precio": 45, "precio2": 55 }
              ]
            },
            {
              "titulo": "Tisanas (Calientes)",
              "layout": "tabla",
              "columnas": ["Chico", "Grande"],
              "items": [
                { "nombre": "Moras", "precio": 45, "precio2": 55 },
                { "nombre": "Frutos rojos", "precio": 45, "precio2": 55 },
                { "nombre": "Cereza", "precio": 45, "precio2": 55 },
                { "nombre": "Toby ginger", "precio": 45, "precio2": 55 },
                { "nombre": "Té rojo", "precio": 45, "precio2": 55 },
                { "nombre": "Té verde", "precio": 45, "precio2": 55 },
                { "nombre": "Toby Blue", "precio": 45, "precio2": 55 },
                { "nombre": "Manzana", "precio": 45, "precio2": 55 },
                { "nombre": "Fresa Kiwi", "precio": 45, "precio2": 55 },
                { "nombre": "Kiwi", "precio": 45, "precio2": 55 }
              ]
            }
          ]
        },
        {
          "titulo": "A las Rocas y Frappés",
          "emoji": "\ud83e\uddca",
          "grupos": [
            {
              "titulo": "Con Café",
              "layout": "tabla",
              "columnas": ["Chico", "Grande"],
              "nota": "Precio a las rocas / frappé.",
              "items": [
                { "nombre": "Espresso doble", "precio": 30 },
                { "nombre": "Americano", "precio": 45, "precio2": 55 },
                { "nombre": "Capuchino", "precio": 45, "precio2": 55 },
                { "nombre": "Latte", "precio": 45, "precio2": 55 },
                { "nombre": "Moka", "precio": 45, "precio2": 55 },
                { "nombre": "Moka blanco", "precio": 55, "precio2": 65 },
                { "nombre": "Español", "precio": 45, "precio2": 55 }
              ]
            },
            {
              "titulo": "Especiales",
              "layout": "tabla",
              "columnas": ["Chico", "Grande"],
              "nota": "Precio de frappé.",
              "items": [
                { "nombre": "Caramelo", "precio": 55, "precio2": 65 },
                { "nombre": "Matcha", "precio": 65, "precio2": 75 },
                { "nombre": "Taro", "precio": 55, "precio2": 65 },
                { "nombre": "Chocolate blanco", "precio": 55, "precio2": 65 },
                { "nombre": "Kinder", "precio": 55, "precio2": 65 },
                { "nombre": "Chocolate", "precio": 55, "precio2": 65 },
                { "nombre": "Cookies and cream", "precio": 55, "precio2": 65 },
                { "nombre": "Cajeta", "precio": 55, "precio2": 65 },
                { "nombre": "Algodón de azúcar", "precio": 55, "precio2": 65 },
                { "nombre": "Fresas con crema", "precio": 55, "precio2": 65 },
                { "nombre": "Horchata", "precio": 55, "precio2": 65 },
                { "nombre": "Frapuchino (Chocoreta, mazapán, snickers, m&m's, oreo)", "precio": 55, "precio2": 65 }
              ]
            },
            {
              "titulo": "Masala Chai",
              "layout": "tabla",
              "columnas": ["Chico", "Grande"],
              "nota": "Precio a las rocas y frappé.",
              "items": [
                { "nombre": "Vainilla", "precio": 55, "precio2": 65 },
                { "nombre": "Frutos rojos", "precio": 55, "precio2": 65 },
                { "nombre": "Verde", "precio": 55, "precio2": 65 },
                { "nombre": "Negro", "precio": 55, "precio2": 65 },
                { "nombre": "Rosa Fresa", "precio": 55, "precio2": 65 },
                { "nombre": "Menta", "precio": 55, "precio2": 65 },
                { "nombre": "Blue", "precio": 55, "precio2": 65 },
                { "nombre": "Manzana", "precio": 55, "precio2": 65 },
                { "nombre": "Mango", "precio": 55, "precio2": 65 },
                { "nombre": "Golden", "precio": 55, "precio2": 65 }
              ]
            },
            {
              "titulo": "Smoothies",
              "layout": "tabla",
              "columnas": ["Chico", "Grande"],
              "items": [
                { "nombre": "Mora azul", "precio": 45, "precio2": 55 },
                { "nombre": "Frutos rojos", "precio": 45, "precio2": 55 },
                { "nombre": "Frutos tropicales", "precio": 45, "precio2": 55 },
                { "nombre": "Fresa", "precio": 45, "precio2": 55 },
                { "nombre": "Sandía", "precio": 45, "precio2": 55 },
                { "nombre": "Mango", "precio": 45, "precio2": 55 },
                { "nombre": "Piña", "precio": 45, "precio2": 55 },
                { "nombre": "Coco", "precio": 45, "precio2": 55 },
                { "nombre": "Piña colada", "precio": 45, "precio2": 55 },
                { "nombre": "Zarzamora", "precio": 45, "precio2": 55 }
              ]
            },
            {
              "titulo": "Sodas Italianas",
              "layout": "tabla",
              "columnas": ["Chico", "Grande"],
              "nota": "Perlas explosivas de sabores (costo extra).",
              "items": [
                { "nombre": "Mora azul", "precio": 45, "precio2": 55 },
                { "nombre": "Frutos rojos", "precio": 45, "precio2": 55 },
                { "nombre": "Manzana verde", "precio": 45, "precio2": 55 },
                { "nombre": "Fresa", "precio": 45, "precio2": 55 },
                { "nombre": "Kiwi", "precio": 45, "precio2": 55 },
                { "nombre": "Cereza", "precio": 45, "precio2": 55 },
                { "nombre": "Frambuesa", "precio": 45, "precio2": 55 },
                { "nombre": "Limón dulce", "precio": 45, "precio2": 55 },
                { "nombre": "Sandía", "precio": 45, "precio2": 55 },
                { "nombre": "Grosella", "precio": 45, "precio2": 55 },
                { "nombre": "Uva", "precio": 45, "precio2": 55 }
              ]
            },
            {
              "titulo": "Tisanas (Frías)",
              "layout": "tabla",
              "columnas": ["Chico", "Grande"],
              "nota": "Precio a las rocas. Perlas explosivas de sabores (costo extra).",
              "items": [
                { "nombre": "Moras", "precio": 55, "precio2": 65 },
                { "nombre": "Frutos rojos", "precio": 55, "precio2": 65 },
                { "nombre": "Cereza", "precio": 55, "precio2": 65 },
                { "nombre": "Toby ginger", "precio": 55, "precio2": 65 },
                { "nombre": "Té rojo", "precio": 55, "precio2": 65 },
                { "nombre": "Té verde", "precio": 55, "precio2": 65 },
                { "nombre": "Toby Blue", "precio": 55, "precio2": 65 },
                { "nombre": "Manzana", "precio": 55, "precio2": 65 }
              ]
            }
          ]
        },
        {
          "titulo": "Esencias TOP para tu Café",
          "emoji": "\ud83c\udf6f",
          "layout": "chips",
          "nota": "Agrega esencias a tu café.",
          "items": [
            { "nombre": "Caramelo" },
            { "nombre": "Vainilla" },
            { "nombre": "Avellana" },
            { "nombre": "Malvavisco tostado" },
            { "nombre": "Cajeta" },
            { "nombre": "Canela" },
            { "nombre": "Nuez garapiñada" },
            { "nombre": "Pistache" },
            { "nombre": "Amaretto" },
            { "nombre": "Lavanda" },
            { "nombre": "Maple" },
            { "nombre": "Tiramisú" },
            { "nombre": "Crema irlandesa" },
            { "nombre": "Menta" },
            { "nombre": "Chocolate blanco" },
            { "nombre": "Dulce de leche" }
          ]
        }
      ]
    },
    {
      "id": "hanoi-coffee",
      "nombre": "Hanoi Coffee Restaurante",
      "emoji": "🍜",
      "etiqueta": "Vietnamita y más",
      "eslogan": "Việt Menu.",
      "secciones": [
        {
          "titulo": "Việt Menu",
          "emoji": "🍜",
          "layout": "cartas",
          "items": [
            { "nombre": "Phở", "precio": 130, "descripcion": "Sopa vietnamita de caldo, fideos de arroz, hierbas y carne de res. Un plato muy tradicional." },
            { "nombre": "Mì Xào", "precios": [ { "label": "Carne / Camarón", "valor": 120 }, { "label": "Mixto", "valor": 140 } ], "descripcion": "Plato típico de fideos, verduras y carne de res salteados con salsa de soya y especias." },
            { "nombre": "Nem", "precios": [ { "label": "1 pieza", "valor": 30 }, { "label": "5 piezas (incluye arroz)", "valor": 150 } ], "descripcion": "Originario del norte de Vietnam, relleno de cerdo, pollo y verduras, envuelto en papel de arroz y frito con salsa de pescado." },
            { "nombre": "Bún Chả", "precio": 110, "descripcion": "Fideos de arroz servidos con cerdo asado y caldo de pescado dulce y salado. Se suele servir con ensalada de pepino." },
            { "nombre": "Việt Poke", "precio": 140, "descripcion": "Salsa de pescado o salsa de soja. Añadir camarón +$20. Originario del centro de Vietnam; combina carne de res y Nem con muchas verduras, un plato saludable." },
            { "nombre": "Arroz Frito", "precios": [ { "label": "Carne / Camarón", "valor": 140 }, { "label": "Mixto", "valor": 160 } ], "descripcion": "Arroz frito tradicional con muchos ingredientes y sabores diferentes." }
          ]
        },
        {
          "titulo": "Especialidades Asiáticas",
          "emoji": "🥢",
          "layout": "cartas",
          "items": [
            { "nombre": "Onigiri", "precio": 120, "descripcion": "Atún, camarones o carne a la parrilla (elija solo 1 tipo en el mismo pedido). Comida rápida japonesa: arroz suave que cubre varios rellenos." },
            { "nombre": "Pad Thai 🌶️", "precio": 150, "descripcion": "Destaca por su sabor agridulce y suave picante; plato nacional del pueblo tailandés." },
            { "nombre": "Bulgogi", "precio": 125, "descripcion": "Plato coreano de carne de res marinada y asada a la parrilla, se sirve con arroz." },
            { "nombre": "Ramen", "precio": 150, "descripcion": "Ramen Tonkotsu de Fukuoka con caldo cremoso de miso, fideos finos, chashu (cerdo braseado), cebollines y alga marina." }
          ]
        },
        {
          "titulo": "Bánh Mì (Sándwiches Vietnamitas)",
          "emoji": "🥖",
          "layout": "cartas",
          "nota": "El bánh mì es un sándwich vietnamita hecho con pan crujiente, carne (cerdo o huevo), verduras frescas, cilantro y salsas. Combina sabores y texturas, muy popular en la comida callejera de Vietnam.",
          "items": [
            { "nombre": "Egg Bánh Mì (Sándwich de huevo)", "precio": 60 },
            { "nombre": "Meat Bánh Mì (Sándwich de cerdo)", "precio": 85 },
            { "nombre": "Xá Xíu Bánh Mì (Sándwich de char siu)", "precio": 85 },
            { "nombre": "Salchicha Bánh Mì (Chorizo de asar)", "precio": 100 },
            { "nombre": "Bacon Bánh Mì (Sándwich de bacon)", "precio": 120 },
            { "nombre": "Queso Bánh Mì (Carne con queso)", "precio": 120 },
            { "nombre": "Mix Bánh Mì (Sándwich mixto)", "precio": 120, "descripcion": "Elija 2 categorías entre: Huevo, Cerdo, Salchicha, Carne, Char Siu, Salchicha Vietnamita." }
          ]
        },
        {
          "titulo": "Coffee Menu",
          "emoji": "☕",
          "grupos": [
            {
              "titulo": "Hot Drink (Caliente)",
              "layout": "tabla",
              "columnas": ["M", "L"],
              "items": [
                { "nombre": "Americano", "precio": 30, "precio2": 40 },
                { "nombre": "Latte", "precio": 50, "precio2": 60 },
                { "nombre": "Matcha latte", "precio": 60, "precio2": 70 },
                { "nombre": "Capuchino", "precio": 45, "precio2": 55 },
                { "nombre": "Capuchino con sabor (Vainilla, Avellana, Granada, Arándano, Frutos rojos)", "precio": 50, "precio2": 60 },
                { "nombre": "Kyoto", "precio": 55, "precio2": 65 },
                { "nombre": "Moka", "precio": 50, "precio2": 60 },
                { "nombre": "Expreso", "precio": 25 },
                { "nombre": "Doble expreso", "precio": 35 }
              ]
            },
            {
              "titulo": "Ice Drink (Bebida Fría)",
              "layout": "tabla",
              "columnas": ["M", "L"],
              "items": [
                { "nombre": "Kyoto (Café y Matcha)", "precio": 55, "precio2": 70 },
                { "nombre": "Việt Coffee (Café vietnamita)", "precio": 40, "precio2": 55 },
                { "nombre": "Violet (Café y Taro)", "precio": 45, "precio2": 60 },
                { "nombre": "Blanco y Negro (Café y leche)", "precio": 50, "precio2": 65 },
                { "nombre": "Cold brew Negro", "precio": 45, "precio2": 60 },
                { "nombre": "Cold brew Tropical", "precio": 50, "precio2": 65 },
                { "nombre": "Coco Coffee", "precio": 50, "precio2": 65 },
                { "nombre": "Matcha latte", "precio": 60, "precio2": 75 },
                { "nombre": "Moka", "precio": 50, "precio2": 65 },
                { "nombre": "Cacao chocolate", "precio": 45, "precio2": 55 },
                { "nombre": "Cacao coco", "precio": 50, "precio2": 65 },
                { "nombre": "Capuchino frío con sabor (Vainilla, Arándano, Avellana, Granada, Frutos rojos)", "precio": 50, "precio2": 65 }
              ]
            }
          ]
        },
        {
          "titulo": "Té, Frappes y Otras Bebidas",
          "emoji": "🥤",
          "grupos": [
            {
              "titulo": "Sabor a Té (Frío / Caliente)",
              "layout": "cartas",
              "nota": "Sabores: Té de fresa, mango, uva, piña, naranja, lichi, manzana, cereza, rosa, arándano, Limón Encantado, durazno, jengibre caliente, matcha con perlas y Milk tea con perlas. Add on: Chía +$10 · Boba / Perlas negras +$10.",
              "items": [
                { "nombre": "Té", "precios": [ { "label": "S", "valor": 40 }, { "label": "L", "valor": 55 } ] },
                { "nombre": "Té especial (Durazno / Milk Tea)", "precios": [ { "label": "S", "valor": 50 }, { "label": "L", "valor": 65 } ] },
                { "nombre": "Té con Agua Mineral", "precios": [ { "label": "S", "valor": 50 }, { "label": "L", "valor": 65 } ] }
              ]
            },
            {
              "titulo": "Frappe Drink & Freeze",
              "layout": "cartas",
              "items": [
                { "nombre": "Frappuccino / Frappes (Matcha, Taro, Cookies & Cream, Chocolate, Moka, Chai Tea, Caramelo, Fresa)", "precios": [ { "label": "S", "valor": 50 }, { "label": "L", "valor": 65 } ] },
                { "nombre": "Cappuccino Freeze", "precios": [ { "label": "S", "valor": 65 }, { "label": "L", "valor": 75 } ] },
                { "nombre": "Matcha Freeze", "precios": [ { "label": "S", "valor": 70 }, { "label": "L", "valor": 85 } ] },
                { "nombre": "Chocolate Freeze", "precios": [ { "label": "S", "valor": 65 }, { "label": "L", "valor": 75 } ] },
                { "nombre": "Latte Macchiato", "precios": [ { "label": "S", "valor": 60 }, { "label": "L", "valor": 70 } ] },
                { "nombre": "Matcha Macchiato", "precios": [ { "label": "S", "valor": 70 }, { "label": "L", "valor": 80 } ] },
                { "nombre": "Milk Tea Macchiato", "precios": [ { "label": "S", "valor": 60 }, { "label": "L", "valor": 75 } ] },
                { "nombre": "Isla Verde", "precios": [ { "label": "S", "valor": 55 }, { "label": "L", "valor": 65 } ] }
              ]
            }
          ]
        },
        {
          "titulo": "Dessert Menu (Postres)",
          "emoji": "🥞",
          "layout": "cartas",
          "items": [
            { "nombre": "French Toast (Pan Francés)", "precio": 60, "descripcion": "Con chocolate o miel. Añadir fruta +$30." },
            { "nombre": "Waffle", "precio": 40, "descripcion": "Con chocolate o miel. Doble +$25, fruta +$30." },
            { "nombre": "Korean Coin (Pastel de queso de moneda)", "precio": 50 }
          ]
        }
      ]
    },
    {
      "id": "rinconcito-casero",
      "nombre": "Rinconcito Casero",
      "emoji": "🏠",
      "etiqueta": "Comida casera",
      "eslogan": "Con un exquisito sabor como en casa. Cocinamos con amor para alimentar tu alma.",
      "secciones": [
        {
          "titulo": "Desayunos",
          "emoji": "🍳",
          "grupos": [
            {
              "titulo": "Al Gusto",
              "layout": "cartas",
              "items": [
                { "nombre": "Huevo al Gusto", "precio": 60, "descripcion": "Opciones: Jamón, Estrellados, Salchicha, A la mexicana, Rancheros, Chorizo, Naturales u Omelet. Acompañados de chilaquiles, frijoles y raciones." },
                { "nombre": "Orden de Chilaquiles", "precio": 60, "descripcion": "Salsas: Rojos, Verdes, Mixtos. Acompañados de frijoles y panecillos con mantequilla." },
                { "nombre": "Orden de Hot Cakes", "precio": 40 },
                { "nombre": "Pan con mantequilla", "precio": 15 }
              ]
            },
            {
              "titulo": "Extras",
              "layout": "tabla",
              "items": [
                { "nombre": "Porción de huevo", "precio": 30 },
                { "nombre": "Huevo extra (1)", "precio": 15 },
                { "nombre": "Porción de guiso", "precio": 20 }
              ]
            }
          ]
        },
        {
          "titulo": "Antojitos",
          "emoji": "🌮",
          "grupos": [
            {
              "titulo": "Antojitos",
              "layout": "tabla",
              "salsasLabel": "guisos",
              "salsasUnico": true,
              "salsas": ["Huevo rojo", "Picadillo rojo", "Deshebrada", "Papas con queso", "Frijoles con queso", "Guisos a la mexicana", "Huevo verde", "Asada roja", "Asada verde", "Discada", "Requesón", "Queso", "Chicharrón prensado", "Picadillo a la mexicana", "Rajas con queso", "Nopales con huevo", "Chicharrón de cuera", "Picadillo verde"],
              "items": [
                { "nombre": "Gorditas", "precio": 10 },
                { "nombre": "Burritos", "precio": 18 },
                { "nombre": "Sopes", "precio": 15 },
                { "nombre": "Empanadas de carne molida", "precio": 35, "salsas": [] },
                { "nombre": "Gorditas doradas", "precio": 15 },
                { "nombre": "Tacos dorados (con 4 verduritas)", "precio": 35, "salsas": [] },
                { "nombre": "Tacos dorados (8) — Sencillos con verdura", "precio": 50, "salsas": [] },
                { "nombre": "Tacos dorados (8) — Especiales con cochinito", "precio": 80, "salsas": [] },
                { "nombre": "Molletes Sencillos", "precio": 20, "salsas": [] },
                { "nombre": "Molletes con guiso", "precio": 25 },
                { "nombre": "Molletes con salchicha", "precio": 25, "salsas": [] },
                { "nombre": "Quesadilla de Maíz Sencilla", "precio": 12, "salsas": [] },
                { "nombre": "Quesadilla de Maíz con guiso", "precio": 20 },
                { "nombre": "Quesadilla de Harina Sencilla", "precio": 20, "salsas": [] },
                { "nombre": "Quesadilla de Harina con jamón", "precio": 25, "salsas": [] }
              ]
            },
            {
              "titulo": "Guisos para Antojitos",
              "layout": "chips",
              "nota": "Cualquier antojito con deshebrada o con queso $5 adicionales.",
              "items": [
                { "nombre": "Huevo rojo" },
                { "nombre": "Picadillo rojo" },
                { "nombre": "Deshebrada" },
                { "nombre": "Papas con queso" },
                { "nombre": "Frijoles con queso" },
                { "nombre": "Guisos a la mexicana" },
                { "nombre": "Huevo verde" },
                { "nombre": "Asada roja" },
                { "nombre": "Asada verde" },
                { "nombre": "Discada" },
                { "nombre": "Requesón" },
                { "nombre": "Queso" },
                { "nombre": "Chicharrón prensado" },
                { "nombre": "Picadillo a la mexicana" },
                { "nombre": "Rajas con queso" },
                { "nombre": "Nopales con huevo" },
                { "nombre": "Chicharrón de cuera" },
                { "nombre": "Picadillo verde" }
              ]
            }
          ]
        },
        {
          "titulo": "Platillos",
          "emoji": "🍲",
          "layout": "cartas",
          "items": [
            { "nombre": "Milanesa de pollo", "precio": 95, "descripcion": "Acompañada de arroz y ensalada de verdura." },
            { "nombre": "Bistec", "precio": 95, "descripcion": "Acompañado de arroz, frijoles, papas fritas y ensalada de verdura." },
            { "nombre": "Chile relleno de queso", "precio": 95, "descripcion": "Acompañado de arroz, espagueti o frijoles y ensalada de verdura." },
            { "nombre": "Pescado empanizado", "precio": 95, "descripcion": "Acompañado de arroz, panecitos con mantequilla y ensalada de verdura." },
            { "nombre": "Guisado", "precio": 75, "descripcion": "Asado rojo, asado verde o bistec a la mexicana; acompañado de arroz, espagueti o frijoles." },
            { "nombre": "Enchiladas verdes / rojas", "precio": 75, "descripcion": "Acompañadas de arroz, espagueti y frijoles." }
          ]
        },
        {
          "titulo": "Para Llevar",
          "emoji": "🥡",
          "layout": "chips",
          "nota": "De lunes a viernes te ofrecemos comida 100% casera para llevar. Pregunta por nuestro menú del día.",
          "items": [
            { "nombre": "1 Litro" },
            { "nombre": "1/2 Litro" },
            { "nombre": "1/4 Litro" }
          ]
        },
        {
          "titulo": "Infantil",
          "emoji": "🧒",
          "layout": "tabla",
          "items": [
            { "nombre": "Salchipapas", "precio": 40 },
            { "nombre": "Orden de papas fritas", "precio": 40 },
            { "nombre": "Orden de nuggets de pollo (con papas fritas)", "precio": 40 },
            { "nombre": "Orden de mini pizzas (3 mini pizzas con papas fritas)", "precio": 40 }
          ]
        },
        {
          "titulo": "Bebidas y Licuados",
          "emoji": "🥤",
          "grupos": [
            {
              "titulo": "Bebidas",
              "layout": "tabla",
              "items": [
                { "nombre": "Refrescos", "precio": 20 },
                { "nombre": "Aguas frescas", "precio": 15 },
                { "nombre": "Café", "precio": 20 },
                { "nombre": "Té", "precio": 15 }
              ]
            },
            {
              "titulo": "Licuados",
              "layout": "cartas",
              "nota": "$35 c/u.",
              "items": [
                { "nombre": "Plátano con ChocoMilk", "precio": 35 },
                { "nombre": "Plátano con Avena", "precio": 35 },
                { "nombre": "Fresa", "precio": 35 },
                { "nombre": "Mixto", "precio": 35 }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "pizzeria-el-oso",
      "nombre": "El Oso Pizzer\u00eda",
      "emoji": "🍕",
      "etiqueta": "Pizzas",
      "eslogan": "Bienvenido al territorio del sabor.",
      "horario": "Mi\u00e9rcoles a Lunes de 1:00 p.m. a 9:00 p.m.",
      "secciones": [
        {
          "titulo": "Tama\u00f1os y Precios",
          "emoji": "🍕",
          "layout": "cartas",
          "nota": "Elige hasta 2 especialidades por pizza. Costo de ingrediente extra: $15.",
          "salsasLabel": "especialidades",
          "salsas": ["Pepperoni", "3 Quesos", "Hawaiana", "BBQ", "El Oso", "Cl\u00e1sica", "Orizaba", "Mexicana"],
          "items": [
            { "nombre": "Pizza Chica", "precio": 135, "descripcion": "25 cm, 6 rebanadas." },
            { "nombre": "Pizza Grande", "precio": 220, "descripcion": "35 cm, 8 rebanadas." },
            { "nombre": "Pizza Familiar", "precio": 340, "descripcion": "45 cm, 16 rebanadas." }
          ]
        },
        {
          "titulo": "Especialidades",
          "emoji": "🍕",
          "layout": "cartas",
          "nota": "Una mordida y lo entender\u00e1s. Se pueden elegir 2 especialidades.",
          "items": [
            { "nombre": "Pepperoni", "descripcion": "Pepperoni." },
            { "nombre": "3 Quesos", "descripcion": "Mezcla de tres quesos." },
            { "nombre": "Hawaiana", "descripcion": "Jam\u00f3n, pi\u00f1a y cereza." },
            { "nombre": "BBQ", "descripcion": "Jam\u00f3n, pi\u00f1a, tocino y BBQ." },
            { "nombre": "El Oso", "descripcion": "Pepperoni, tocino y chorizo." },
            { "nombre": "Cl\u00e1sica", "descripcion": "Champi\u00f1\u00f3n, jam\u00f3n y pepperoni." },
            { "nombre": "Orizaba", "descripcion": "Pepperoni, chorizo, crema y salsa macha." },
            { "nombre": "Mexicana", "descripcion": "Jam\u00f3n, tocino, chorizo y jalape\u00f1o." }
          ]
        },
        {
          "titulo": "Bebidas y Complementos",
          "emoji": "\ud83e\udd64",
          "layout": "tabla",
          "items": [
            { "nombre": "Coca-Cola 250 ml", "precio": 15 },
            { "nombre": "Coca-Cola 450 ml", "precio": 25 },
            { "nombre": "Coca-Cola 1.75 L", "precio": 45 },
            { "nombre": "Agua Natural 1 L", "precio": 15 },
            { "nombre": "Fuze Tea 600 ml", "precio": 25 },
            { "nombre": "Papas a la Francesa", "precio": 45 }
          ]
        },
        {
          "titulo": "Promociones por D\u00eda",
          "emoji": "\ud83c\udf81",
          "layout": "promos",
          "items": [
            { "etiqueta": "Lunes", "cuando": "Lunes", "nombre": "Pizza Chica", "precio": 99.99 },
            { "etiqueta": "Lunes", "cuando": "Lunes", "nombre": "Pizza Grande B\u00e1sica", "precio": 145 },
            { "etiqueta": "Mi\u00e9rcoles", "cuando": "Mi\u00e9rcoles", "nombre": "Pizza Grande", "precio": 195 },
            { "etiqueta": "Jueves", "cuando": "Jueves", "nombre": "Combo Jueves", "precio": 245, "descripcion": "Pizza Grande + Papas + Coca-Cola 1.75 L." },
            { "etiqueta": "Jueves", "cuando": "Jueves", "nombre": "Pizza Familiar", "precio": 299.99 },
            { "etiqueta": "Viernes", "cuando": "Viernes", "nombre": "Pizza Grande", "precio": 199.99 },
            { "etiqueta": "Viernes", "cuando": "Viernes", "nombre": "Papas", "precio": 30 },
            { "etiqueta": "S\u00e1bado", "cuando": "S\u00e1bado", "nombre": "Combo S\u00e1bado", "precio": 199.99, "descripcion": "Pizza Chica + 2 Papas + 2 Coca-Cola 250 ml." },
            { "etiqueta": "Domingo", "cuando": "Domingo", "nombre": "Combo Domingo", "precio": 385, "descripcion": "Pizza Familiar + 2 Papas." },
            { "etiqueta": "Domingo", "cuando": "Domingo", "nombre": "Coca-Cola 1.75 L", "precio": 20 },
            { "etiqueta": "Domingo", "cuando": "Domingo", "nombre": "Agua 1 L", "precio": 10 }
          ]
        }
      ]
    },
    {
      "id": "el-jardin-pizzeria",
      "nombre": "El Jard\u00edn Pizzer\u00eda",
      "emoji": "🍕",
      "etiqueta": "Pizzas y burgers",
      "eslogan": "Pizzas grandes, sabor que te encanta \u2014 D\u00f3nde el fuego toma sabor.",
      "direccion": "Calzada Jos\u00e9 Ram\u00f3n Valdez 804 pte.",
      "secciones": [
        {
          "titulo": "Tama\u00f1os y Especialidades de Pizza",
          "emoji": "🍕",
          "grupos": [
            {
              "titulo": "Precios Generales por Tama\u00f1o (Premium)",
              "layout": "cartas",
              "nota": "Elige una o m\u00e1s variedades para tu pizza premium.",
              "salsasLabel": "variedades",
              "salsas": ["Pepperoni Extrema", "Hawaiana", "Especial", "Mexicana", "Italiana", "Espa\u00f1ola", "Tocino-BBQ", "Campestre", "El Jard\u00edn", "3 Quesos", "Orizaba", "Regia"],
              "items": [
                { "nombre": "Chica 12\"", "precio": 135, "descripcion": "6 rebanadas, 1 a 2 personas." },
                { "nombre": "Grande 14\"", "precio": 220, "descripcion": "8 rebanadas, 2 a 3 personas." },
                { "nombre": "Cuadrada", "precio": 240, "descripcion": "16 cuadritos." },
                { "nombre": "Orilla de Queso", "precio": 239, "descripcion": "8 rebanadas." },
                { "nombre": "Familiar 18\"", "precio": 330, "descripcion": "16 rebanadas, 4 a 6 personas." }
              ]
            },
            {
              "titulo": "Variedades de Pizzas Premium",
              "layout": "cartas",
              "items": [
                { "nombre": "Pepperoni Extrema", "descripcion": "Pepperoni." },
                { "nombre": "Hawaiana", "descripcion": "Jam\u00f3n, pi\u00f1a y cereza." },
                { "nombre": "Especial", "descripcion": "Pepperoni, jam\u00f3n y champi\u00f1\u00f3n." },
                { "nombre": "Mexicana", "descripcion": "Jam\u00f3n, chorizo y jalape\u00f1o." },
                { "nombre": "Italiana", "descripcion": "Salami, jam\u00f3n y chistorra." },
                { "nombre": "Espa\u00f1ola", "descripcion": "Salami, pepperoni y pimiento." },
                { "nombre": "Tocino-BBQ", "descripcion": "Jam\u00f3n, tocino y pi\u00f1a." },
                { "nombre": "Campestre", "descripcion": "Champi\u00f1\u00f3n, chorizo y pimiento." },
                { "nombre": "El Jard\u00edn", "descripcion": "Pepperoni, tocino y pi\u00f1a." },
                { "nombre": "3 Quesos", "descripcion": "Mezcla de quesos de la casa." },
                { "nombre": "Orizaba", "descripcion": "Pepperoni, chorizo, crema blanca y salsa macha." },
                { "nombre": "Regia", "descripcion": "Especialidad de la casa." }
              ]
            },
            {
              "titulo": "Otras Pizzas y Especiales",
              "layout": "cartas",
              "items": [
                { "nombre": "Pizza B\u00e1sica (14\" / 8 rebanadas)", "precio": 165, "descripcion": "Opciones: Jam\u00f3n, Pepperoni o Parmesano.", "salsasLabel": "opciones", "salsasUnico": true, "salsas": ["Jam\u00f3n", "Pepperoni", "Parmesano"] },
                { "nombre": "Pizza Suprema (Delux)", "precios": [ { "label": "Grande", "valor": 259 }, { "label": "Familiar", "valor": 399 } ], "descripcion": "Pepperoni, salami, champi\u00f1\u00f3n, cebolla morada, aceituna negra, carne de res y pimiento verde." }
              ]
            }
          ]
        },
        {
          "titulo": "Hamburguesas (Fontana Burgers)",
          "emoji": "🍔",
          "layout": "cartas",
          "nota": "Carne y pan hechos en casa. Todas las burgers incluyen papas.",
          "items": [
            { "nombre": "Fontana Classic Burger", "precio": 99, "descripcion": "Carne 150 g, tocino, aderezo de la casa, aguacate, lechuga, tomate, queso blanco, queso amarillo y jam\u00f3n, en pan brioche." },
            { "nombre": "Fontana Cowboy Bacon", "precio": 109, "descripcion": "Carne 150 g, tocino, cebolla crispy, BBQ, aderezo de la casa, aguacate, lechuga, tomate, queso amarillo, queso blanco y jam\u00f3n, en pan brioche." },
            { "nombre": "Fontana Hawaiana Spicy", "precio": 109, "descripcion": "Carne 150 g, pi\u00f1a asada, salsa de pi\u00f1a habanero, tocino, aguacate, queso blanco, queso amarillo, lechuga, tomate y jam\u00f3n, en pan brioche." }
          ]
        },
        {
          "titulo": "Complementos",
          "emoji": "🍟",
          "layout": "tabla",
          "items": [
            { "nombre": "Papas", "precio": 45 },
            { "nombre": "Nuggets (6 piezas)", "precio": 35 },
            { "nombre": "Nuggets (10 piezas)", "precio": 60 },
            { "nombre": "Aros de cebolla (10 piezas)", "precio": 60 }
          ]
        },
        {
          "titulo": "Bebidas",
          "emoji": "\ud83e\udd64",
          "layout": "cartas",
          "nota": "Precio por confirmar al pedir.",
          "items": [
            { "nombre": "Agua 1 Lt", "sinPrecio": true },
            { "nombre": "Coca-Cola 400 ml", "sinPrecio": true },
            { "nombre": "Coca-Cola 1.75 Lt", "sinPrecio": true },
            { "nombre": "Jugo del Valle 413 ml", "sinPrecio": true },
            { "nombre": "Fuze Tea 600 ml", "sinPrecio": true },
            { "nombre": "ICEE 32 oz", "sinPrecio": true },
            { "nombre": "Refil ICEE", "sinPrecio": true },
            { "nombre": "2 ICEE Cartón", "sinPrecio": true }
          ]
        },
        {
          "titulo": "Combos y Promociones",
          "emoji": "\ud83c\udf81",
          "grupos": [
            {
              "titulo": "Combos",
              "layout": "cartas",
              "items": [
                { "nombre": "Combo 1", "precio": 199, "descripcion": "Pizza Chica Premium + 2 Cocas 400 ml + orden de papas." },
                { "nombre": "Combo 2", "precio": 280, "descripcion": "Pizza Grande Premium + 1 Coca 1.75 L + orden de papas." }
              ]
            },
            {
              "titulo": "Promociones por D\u00eda",
              "layout": "promos",
              "items": [
                { "etiqueta": "Lun \u00b7 Mar", "cuando": "Lunes y Martes", "nombre": "Papas a $35", "precio": 35 },
                { "etiqueta": "Mi\u00e9rcoles", "cuando": "Mi\u00e9rcoles", "nombre": "2 Pizzas Premium Grandes", "precio": 395, "descripcion": "2 pizzas premium grandes por $395." },
                { "etiqueta": "Jueves", "cuando": "Jueves", "nombre": "Coca-Cola 1.75 L", "precio": 10, "descripcion": "Agrega $10 a tu Pizza Grande Premium y ll\u00e9vate una Coca-Cola 1.75 L." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "gorditas-don-berna",
      "nombre": "Gorditas Don Berna",
      "emoji": "\ud83e\udd5f",
      "etiqueta": "Gorditas, burritos y taquitos",
      "eslogan": "Gorditas, burritos y taquitos con el sabor de la casa.",
      "direccion": "Av. Ju\u00e1rez #114 sur, Barrio El Hormiguero.",
      "secciones": [
        {
          "titulo": "Precios",
          "emoji": "\ud83d\udcb0",
          "layout": "tabla",
          "items": [
            { "nombre": "Gorditas", "precio": 10 },
            { "nombre": "Burritos", "precio": 12 },
            { "nombre": "Taquitos Dorados", "precio": 25, "descripcion": "Precio por la orden." }
          ]
        },
        {
          "titulo": "Antojitos",
          "emoji": "\ud83e\udd59",
          "layout": "tabla",
          "nota": "Elige tus guisos. Disponibles: Deshebrada, Bisteck, Picadillo verde, Picadillo rojo, Chicharr\u00f3n prensado, Rajas con queso y Frijoles con queso.",
          "salsasLabel": "guisos",
          "salsasUnico": true,
          "salsas": [
            "Deshebrada",
            "Bisteck",
            "Picadillo verde",
            "Picadillo rojo",
            "Chicharr\u00f3n prensado",
            "Rajas con queso",
            "Frijoles con queso"
          ],
          "items": [
            { "nombre": "Gorditas", "precio": 10 },
            { "nombre": "Burritos", "precio": 12 },
            { "nombre": "Taquitos Dorados", "precio": 25, "descripcion": "Precio por la orden." }
          ]
        }
      ]
    },
    {
      "id": "burgueratti",
      "nombre": "Burgueratti",
      "emoji": "\ud83c\udf54",
      "etiqueta": "Burgers, dogos y papas",
      "eslogan": "Hamburguesas y dogos reci\u00e9n hechos.",
      "secciones": [
        {
          "titulo": "Men\u00fa Burgers",
          "emoji": "\ud83c\udf54",
          "layout": "cartas",
          "nota": "Todas nuestras hamburguesas llevan aguacate, lechuga, cebolla caramelizada, pepinillos, jalape\u00f1os y aderezos.",
          "items": [
            { "nombre": "Burger Cl\u00e1sica", "precio": 60, "descripcion": "Carne, queso amarillo y/o blanco, jam\u00f3n y aderezo de la casa." },
            { "nombre": "Burger Norte\u00f1a", "precio": 80, "descripcion": "Carne, queso amarillo y/o blanco, jam\u00f3n, salchicha p/asar y aderezo de la casa." },
            { "nombre": "Burger Doble Carne", "precio": 90, "descripcion": "2 carnes, queso amarillo y/o blanco, jam\u00f3n, tocino y aderezo de la casa." },
            { "nombre": "Aro-Burger", "precio": 85, "descripcion": "Carne, queso amarillo y/o blanco, jam\u00f3n, tocino, 2 aros de cebolla, aderezo de la casa y salsa de tu elecci\u00f3n (BBQ / Mango Habanero).", "salsas": ["BBQ", "Mango Habanero"], "salsasLabel": "salsas" },
            { "nombre": "Burger Hawaiana", "precio": 90, "descripcion": "Carne, queso amarillo y/o blanco, jam\u00f3n, tocino, pi\u00f1a y aderezo de la casa." },
            { "nombre": "Burger Boneless", "precio": 85, "descripcion": "Carne, queso amarillo y/o blanco, jam\u00f3n, boneless, aderezo de la casa y salsa de tu elecci\u00f3n.", "salsas": ["BBQ", "Mango Habanero", "Buffalo", "Chipotle"], "salsasLabel": "salsas" }
          ]
        },
        {
          "titulo": "Dogos",
          "emoji": "\ud83c\udf2d",
          "layout": "tabla",
          "items": [
            { "nombre": "Dogo Salchicha de Pavo", "precio": 50, "descripcion": "Mayonesa, c\u00e1tsup, mostaza, cebolla caramelizada y queso amarillo." },
            { "nombre": "Dogo Salchicha de Asar", "precio": 55, "descripcion": "Mayonesa, c\u00e1tsup, mostaza, cebolla caramelizada y queso amarillo." }
          ]
        },
        {
          "titulo": "Complementos",
          "emoji": "\ud83c\udf5f",
          "layout": "tabla",
          "items": [
            { "nombre": "Papas a la Francesa", "precio": 40 },
            { "nombre": "Papas Especiales", "precio": 80 },
            { "nombre": "Salchipapas", "precio": 55 },
            { "nombre": "Orden de Aros de Cebolla", "precio": 60 }
          ]
        },
        {
          "titulo": "Bebidas",
          "emoji": "\ud83e\udd64",
          "layout": "tabla",
          "items": [
            { "nombre": "Refresco", "precio": 20 },
            { "nombre": "Arizona", "precio": 20 },
            { "nombre": "Agua Natural", "precio": 15 }
          ]
        },
        {
          "titulo": "Nota",
          "emoji": "\u2139\ufe0f",
          "layout": "chips",
          "items": [
            { "nombre": "Cualquier ingrediente extra tiene un costo adicional." }
          ]
        }
      ]
    },
    {
      "id": "zona-wings",
      "nombre": "Zona Wings",
      "emoji": "\ud83c\udf57",
      "etiqueta": "Alitas, boneless y burgers",
      "eslogan": "Alitas, boneless y burgers con el saz\u00f3n de la casa.",
      "secciones": [
        {
          "titulo": "Alitas y Boneless",
          "emoji": "\ud83c\udf57",
          "grupos": [
            {
              "titulo": "Alitas",
              "layout": "cartas",
              "nota": "Incluye porci\u00f3n de vegetales y aderezos. Elige tus salsas seg\u00fan el tama\u00f1o.",
              "salsasLabel": "salsas",
              "salsas": ["Natural", "Oriental", "BBQ", "Parmesano", "Mantequilla Parmesano", "Miel Mostaza", "Pimienta Lim\u00f3n", "Hot BBQ", "Buffalo", "Tamarindo Spicy", "Buffalo Hot", "Pi\u00f1a Habanero", "Mango Habanero", "Habanero de la Casa"],
              "items": [
                { "nombre": "Alitas Chico", "precios": [{ "label": "8 alitas \u00b7 1 salsa", "valor": 83, "max": 1 }] },
                { "nombre": "Alitas Mediano", "precios": [{ "label": "12 alitas \u00b7 2 salsas", "valor": 116, "max": 2 }] },
                { "nombre": "Alitas Grande", "precios": [{ "label": "20 alitas \u00b7 4 salsas", "valor": 188, "max": 4 }] }
              ]
            },
            {
              "titulo": "Boneless",
              "layout": "cartas",
              "nota": "Incluye porci\u00f3n de vegetales y aderezos. Elige tus salsas seg\u00fan el tama\u00f1o.",
              "salsasLabel": "salsas",
              "salsas": ["Natural", "Oriental", "BBQ", "Parmesano", "Mantequilla Parmesano", "Miel Mostaza", "Pimienta Lim\u00f3n", "Hot BBQ", "Buffalo", "Tamarindo Spicy", "Buffalo Hot", "Pi\u00f1a Habanero", "Mango Habanero", "Habanero de la Casa"],
              "items": [
                { "nombre": "Boneless Chico", "precios": [{ "label": "250 gr \u00b7 1 salsa", "valor": 93, "max": 1 }] },
                { "nombre": "Boneless Mediano", "precios": [{ "label": "375 gr \u00b7 2 salsas", "valor": 126, "max": 2 }] },
                { "nombre": "Boneless Grande", "precios": [{ "label": "625 gr \u00b7 4 salsas", "valor": 198, "max": 4 }] }
              ]
            },
            {
              "titulo": "Costillitas",
              "layout": "tabla",
              "items": [
                { "nombre": "Costillitas en Salsa", "precio": 159 }
              ]
            }
          ]
        },
        {
          "titulo": "Nuestras Salsas",
          "emoji": "\ud83c\udf36\ufe0f",
          "layout": "chips",
          "nota": "De menor a mayor picante.",
          "items": [
            { "nombre": "Natural" }, { "nombre": "Oriental" }, { "nombre": "BBQ" }, { "nombre": "Parmesano" },
            { "nombre": "Mantequilla Parmesano" }, { "nombre": "Miel Mostaza" }, { "nombre": "Pimienta Lim\u00f3n" },
            { "nombre": "Hot BBQ" }, { "nombre": "Buffalo" }, { "nombre": "Tamarindo Spicy" }, { "nombre": "Buffalo Hot" },
            { "nombre": "Pi\u00f1a Habanero" }, { "nombre": "Mango Habanero" }, { "nombre": "Habanero de la Casa" }
          ]
        },
        {
          "titulo": "Hamburguesas",
          "emoji": "\ud83c\udf54",
          "layout": "cartas",
          "nota": "Incluyen porci\u00f3n de papas a la francesa.",
          "items": [
            { "nombre": "Cl\u00e1sica", "precio": 62, "descripcion": "Queso americano, pepinillos, jalape\u00f1os, tomate, cebolla, lechuga y carne de res." },
            { "nombre": "Hawaiana", "precio": 68, "descripcion": "Pi\u00f1a en rodaja sazonada, aguacate, queso americano, pepinillos, jalape\u00f1os, tomate, cebolla, lechuga y carne de res." },
            { "nombre": "Doble Carne", "precio": 83, "descripcion": "Doble carne, aguacate, queso amarillo, pepinillos, jalape\u00f1os, tomate, cebolla, lechuga, carne de res." },
            { "nombre": "Tocinosa", "precio": 78, "descripcion": "Tiras de tocino, aguacate, queso americano, pepinillos, jalape\u00f1os, tomate, lechuga y carne de res." },
            { "nombre": "Hamburguesa Kids", "precio": 45, "descripcion": "Pan, carne de res y aderezos." },
            { "nombre": "BBQ", "precio": 68, "descripcion": "Salsa BBQ, aros de cebolla, aguacate, queso americano, pepinillos, jalape\u00f1os, tomate, cebolla, lechuga y carne de res." },
            { "nombre": "Mango Spicy", "precio": 68, "descripcion": "Salsa mango spicy, aros de cebolla, aguacate, queso americano, pepinillos, jalape\u00f1os, tomate, cebolla, lechuga y carne de res." },
            { "nombre": "Malecha", "precio": 95, "descripcion": "Aros de cebolla, dedos de queso, salsa de tu elecci\u00f3n, aguacate, queso americano, pepinillos, jalape\u00f1os, tomate, cebolla, lechuga y carne de res.", "salsas": ["Natural", "Oriental", "BBQ", "Parmesano", "Miel Mostaza", "Buffalo", "Mango Habanero", "Habanero de la Casa"], "salsasLabel": "salsas" },
            { "nombre": "Tender", "precio": 74, "descripcion": "Pechuga tender, aguacate, pepinillos, jalape\u00f1os, tomate, cebolla y lechuga." },
            { "nombre": "Tender Spicy", "precio": 79, "descripcion": "Pechuga tender, aguacate, pepinillos, jalape\u00f1os, tomate, cebolla y lechuga, con salsa picosa de tu elecci\u00f3n.", "salsas": ["Hot BBQ", "Buffalo", "Buffalo Hot", "Tamarindo Spicy", "Mango Habanero", "Habanero de la Casa"], "salsasLabel": "salsas" },
            { "nombre": "Americana", "precio": 59, "descripcion": "Pan, carne de res, aderezos, lechuga, queso americano y pepinillos." }
          ]
        },
        {
          "titulo": "Hot Dogs",
          "emoji": "\ud83c\udf2d",
          "layout": "tabla",
          "items": [
            { "nombre": "Sencillo", "precio": 27, "descripcion": "Cebolla, tomate, jalape\u00f1o y aderezos." },
            { "nombre": "Tocino", "precio": 37, "descripcion": "Cubierta de tocino, cebolla, tomate, jalape\u00f1o y aderezos." },
            { "nombre": "Misil Jr.", "precio": 47, "descripcion": "Carne de res, tocino, cebolla, tomate, jalape\u00f1o y aderezos." },
            { "nombre": "Extras (c/u)", "precio": 5, "descripcion": "Queso, aguacate, tocino, pepinillos o jalape\u00f1os." }
          ]
        },
        {
          "titulo": "Snacks y Antojitos",
          "emoji": "\ud83c\udf5f",
          "layout": "tabla",
          "items": [
            { "nombre": "Papas Waffle / Crisscut", "precio": 60, "descripcion": "Incluye queso amarillo." },
            { "nombre": "Papas a la francesa", "precio": 31 },
            { "nombre": "Papas preparadas", "precio": 37 },
            { "nombre": "Papas Gajo", "precio": 45 },
            { "nombre": "Papas Gajo preparadas", "precio": 51 },
            { "nombre": "Salchipapas", "precio": 42 },
            { "nombre": "Aros de Cebolla", "precio": 52 },
            { "nombre": "Dedos de Queso", "precio": 83 },
            { "nombre": "Nachos", "precio": 42 },
            { "nombre": "Nachos de la casa", "precio": 58 },
            { "nombre": "Nuggets de Pollo", "precio": 49 },
            { "nombre": "Elotitos", "precio": 55 },
            { "nombre": "Ensalada Tender", "precio": 74 },
            { "nombre": "Postre del d\u00eda / Pay de la casa", "precio": 25 }
          ]
        },
        {
          "titulo": "Combos y Paquetes",
          "emoji": "\ud83c\udf81",
          "layout": "cartas",
          "items": [
            { "nombre": "Combo Kids", "precios": [{ "label": "Agua de la casa", "valor": 69 }, { "label": "Coca-Cola Kids", "valor": 79 }], "descripcion": "Hamburguesa Kids, papas a la francesa, nuggets y bebida." },
            { "nombre": "Combo Chicken", "precio": 89, "descripcion": "Boneless naturales, nuggets y papas a la francesa." },
            { "nombre": "Combo Nuggets", "precio": 89, "descripcion": "Nuggets de pollo y dedos de queso." },
            { "nombre": "Combo 1", "precio": 69, "descripcion": "Hamburguesa Cl\u00e1sica, papas a la francesa y agua de la casa refil." },
            { "nombre": "Combo 2", "precio": 75, "descripcion": "Hamburguesa Cl\u00e1sica, papas a la francesa y Coca-Cola." },
            { "nombre": "Combo Wings", "precio": 159, "descripcion": "Tarro michelado Lt (cerveza normal) y alitas medianas." },
            { "nombre": "Combo Boneless", "precio": 169, "descripcion": "Tarro michelado Lt (cerveza normal) y boneless medianos." },
            { "nombre": "Combo Platicador", "precio": 179, "descripcion": "2 tarros michelados Lt, papas a la francesa y papas gajo." },
            { "nombre": "Combo Cl\u00e1sico", "precio": 169, "descripcion": "2 hamburguesas cl\u00e1sicas, papas a la francesa y 2 bebidas." },
            { "nombre": "Combo Snacks", "precio": 169, "descripcion": "Papas a la francesa, papas gajo, aros de cebolla y dedos de queso." },
            { "nombre": "Combo Mix", "precio": 229, "descripcion": "2 hot dogs, alitas (6 piezas), boneless chicas, papas a la francesa y papas gajo." }
          ]
        },
        {
          "titulo": "Aguas y Limonadas",
          "emoji": "\ud83e\udd64",
          "layout": "tabla",
          "columnas": ["1/2 Lt", "Litro", "Jarra"],
          "items": [
            { "nombre": "Limonada natural", "precios": [{ "label": "1/2 Lt", "valor": 27 }, { "label": "Litro", "valor": 37 }, { "label": "Jarra", "valor": 70 }] },
            { "nombre": "Limonada mineral", "precios": [{ "label": "1/2 Lt", "valor": 30 }, { "label": "Litro", "valor": 53 }, { "label": "Jarra", "valor": 85 }] },
            { "nombre": "Fresada", "precios": [{ "label": "1/2 Lt", "valor": 42 }, { "label": "Litro", "valor": 79 }] },
            { "nombre": "Naranjada", "precios": [{ "label": "1/2 Lt", "valor": 30 }, { "label": "Litro", "valor": 53 }, { "label": "Jarra", "valor": 85 }] },
            { "nombre": "Pi\u00f1ada", "precios": [{ "label": "1/2 Lt", "valor": 42 }, { "label": "Litro", "valor": 79 }] },
            { "nombre": "Horchata", "precios": [{ "label": "1/2 Lt", "valor": 27 }, { "label": "Litro", "valor": 42 }, { "label": "Jarra", "valor": 70 }] },
            { "nombre": "Jamaica", "precios": [{ "label": "1/2 Lt", "valor": 27 }, { "label": "Litro", "valor": 42 }, { "label": "Jarra", "valor": 70 }] },
            { "nombre": "T\u00e9 Helado", "precios": [{ "label": "1/2 Lt", "valor": 27 }, { "label": "Litro", "valor": 42 }, { "label": "Jarra", "valor": 70 }] }
          ]
        },
        {
          "titulo": "Otras Bebidas",
          "emoji": "\ud83e\udd5b",
          "layout": "tabla",
          "items": [
            { "nombre": "Root-Beer (original)", "precio": 30, "descripcion": "1/2 Lt." },
            { "nombre": "Clamato", "precios": [{ "label": "1/2 Lt", "valor": 42 }, { "label": "Litro", "valor": 63 }] },
            { "nombre": "Coca-Cola", "precio": 27 },
            { "nombre": "Fuze Tea", "precio": 26 },
            { "nombre": "Jugo del Valle", "precio": 26 },
            { "nombre": "Sprite", "precio": 26 },
            { "nombre": "Manzana de Sidral", "precio": 26 },
            { "nombre": "Fresca", "precio": 26 },
            { "nombre": "Coca Cola Kids", "precio": 20 },
            { "nombre": "Agua Ciel", "precio": 19 },
            { "nombre": "Agua Topochico", "precio": 26 },
            { "nombre": "Coca Cola vidrio", "precio": 29 },
            { "nombre": "Dr. Pepper", "precio": 30 }
          ]
        },
        {
          "titulo": "Tarros y Cerveza",
          "emoji": "\ud83c\udf7a",
          "grupos": [
            {
              "titulo": "Tarros",
              "layout": "tabla",
              "nota": "Michelada: +$5 (1/2 Lt) / +$10 (Litro).",
              "items": [
                { "nombre": "Normal", "precios": [{ "label": "1/2 Lt", "valor": 37 }, { "label": "Litro", "valor": 63 }] },
                { "nombre": "Ultra", "precios": [{ "label": "1/2 Lt", "valor": 48 }, { "label": "Litro", "valor": 84 }] },
                { "nombre": "Modelo", "precios": [{ "label": "1/2 Lt", "valor": 48 }, { "label": "Litro", "valor": 84 }] },
                { "nombre": "Miller", "precios": [{ "label": "1/2 Lt", "valor": 48 }, { "label": "Litro", "valor": 84 }] }
              ]
            },
            {
              "titulo": "Cerveza de Botella",
              "layout": "tabla",
              "items": [
                { "nombre": "Modelo", "precio": 30 },
                { "nombre": "Ultra", "precio": 30 },
                { "nombre": "Corona", "precio": 27 }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "tacos-la-joyita",
      "nombre": "Tacos La Joyita",
      "emoji": "\ud83c\udf2e",
      "etiqueta": "Tacos",
      "eslogan": "Tacos de asada, suadero, adobada y buche.",
      "secciones": [
        {
          "titulo": "Tacos",
          "emoji": "\ud83c\udf2e",
          "layout": "cartas",
          "nota": "Precio por confirmar al pedir. Elige si quieres la verdura aparte.",
          "items": [
            { "nombre": "Taco de Asada", "sinPrecio": true, "extras": ["Verdura aparte"], "extrasLabel": "\u00bfVerdura aparte?", "extrasUnico": true, "extrasEmptyLabel": "Con verdura" },
            { "nombre": "Taco de Suadero", "sinPrecio": true, "extras": ["Verdura aparte"], "extrasLabel": "\u00bfVerdura aparte?", "extrasUnico": true, "extrasEmptyLabel": "Con verdura" },
            { "nombre": "Taco de Adobada", "sinPrecio": true, "extras": ["Verdura aparte"], "extrasLabel": "\u00bfVerdura aparte?", "extrasUnico": true, "extrasEmptyLabel": "Con verdura" },
            { "nombre": "Taco de Buche", "sinPrecio": true, "extras": ["Verdura aparte"], "extrasLabel": "\u00bfVerdura aparte?", "extrasUnico": true, "extrasEmptyLabel": "Con verdura" }
          ]
        }
      ]
    },
    {
      "id": "wings-station",
      "nombre": "Wings Station",
      "emoji": "\ud83c\udf57",
      "etiqueta": "Alitas, boneless y burgers",
      "eslogan": "El sabor que te hace volver \u2014 5 a\u00f1os de experiencia.",
      "direccion": "Calz. J. Ram\u00f3n Valdez #309 Bis pte.",
      "secciones": [
        {
          "titulo": "Salsas",
          "emoji": "\ud83c\udf36\ufe0f",
          "layout": "chips",
          "nota": "De m\u00e1s a menos picante.",
          "items": [
            { "nombre": "Habanero" }, { "nombre": "Fantasma" }, { "nombre": "Lim\u00f3n Habanero" }, { "nombre": "Mango Habanero" },
            { "nombre": "B\u00fafalo explosivo" }, { "nombre": "B\u00fafalo serrano" }, { "nombre": "B\u00fafalo" }, { "nombre": "Flaming Hot" },
            { "nombre": "Fuego" }, { "nombre": "Tamarindo Habanero" }, { "nombre": "BBQ Picante" }, { "nombre": "Queso Jalape\u00f1o" },
            { "nombre": "Caj\u00fan" }, { "nombre": "Ajo Especial" }, { "nombre": "Teriyaki" }, { "nombre": "BBQ" },
            { "nombre": "Agridulce" }, { "nombre": "Lim\u00f3n Pimienta" }, { "nombre": "Parmesano" }, { "nombre": "Natural" }
          ]
        },
        {
          "titulo": "Alitas",
          "emoji": "\ud83e\udd57",
          "layout": "cartas",
          "salsasLabel": "salsas",
          "salsas": ["Habanero", "Fantasma", "Lim\u00f3n Habanero", "Mango Habanero", "B\u00fafalo explosivo", "B\u00fafalo serrano", "B\u00fafalo", "Flaming Hot", "Fuego", "Tamarindo Habanero", "BBQ Picante", "Queso Jalape\u00f1o", "Caj\u00fan", "Ajo Especial", "Teriyaki", "BBQ", "Agridulce", "Lim\u00f3n Pimienta", "Parmesano", "Natural"],
          "items": [
            { "nombre": "8 alitas", "precio": 105, "descripcion": "254 grs." },
            { "nombre": "12 alitas", "precio": 149, "descripcion": "318 grs." },
            { "nombre": "20 alitas", "precio": 249, "descripcion": "600 grs." },
            { "nombre": "30 alitas", "precio": 369, "descripcion": "954 grs." }
          ]
        },
        {
          "titulo": "Boneless",
          "emoji": "\ud83c\udf57",
          "layout": "cartas",
          "salsasLabel": "salsas",
          "salsas": ["Habanero", "Fantasma", "Lim\u00f3n Habanero", "Mango Habanero", "B\u00fafalo explosivo", "B\u00fafalo serrano", "B\u00fafalo", "Flaming Hot", "Fuego", "Tamarindo Habanero", "BBQ Picante", "Queso Jalape\u00f1o", "Caj\u00fan", "Ajo Especial", "Teriyaki", "BBQ", "Agridulce", "Lim\u00f3n Pimienta", "Parmesano", "Natural"],
          "items": [
            { "nombre": "8 boneless", "precio": 125, "descripcion": "276 grs." },
            { "nombre": "10 boneless", "precio": 155, "descripcion": "325 grs." },
            { "nombre": "12 boneless", "precio": 185, "descripcion": "385 grs." }
          ]
        },
        {
          "titulo": "Hamburguesas",
          "emoji": "\ud83c\udf54",
          "layout": "cartas",
          "items": [
            { "nombre": "Cl\u00e1sica", "precio": 60, "descripcion": "Queso, pepinillos, lechuga y aderezo especial." },
            { "nombre": "Texana BBQ", "precio": 75, "descripcion": "Aros de cebolla, tocino, queso y salsa BBQ." }
          ]
        },
        {
          "titulo": "Extras",
          "emoji": "\ud83c\udf5f",
          "layout": "tabla",
          "items": [
            { "nombre": "Papas fritas", "precio": 40 },
            { "nombre": "Papas gajo", "precio": 50 },
            { "nombre": "Papas preparadas", "precio": 80 },
            { "nombre": "Hotdog con tocino", "precio": 40 },
            { "nombre": "Salchipapas", "precio": 50 },
            { "nombre": "Salchipulpos", "precio": 50 },
            { "nombre": "Papa boneless", "precio": 70 },
            { "nombre": "Aros de cebolla", "precio": 50 },
            { "nombre": "Dedos de queso", "precio": 80 },
            { "nombre": "Ranch extra", "precio": 10 }
          ]
        },
        {
          "titulo": "Postres",
          "emoji": "\ud83e\udd67",
          "layout": "tabla",
          "items": [
            { "nombre": "Brownies", "precio": 25 },
            { "nombre": "Pay de Lim\u00f3n", "precio": 15 },
            { "nombre": "Pay de Queso", "precio": 15 }
          ]
        },
        {
          "titulo": "Bebidas",
          "emoji": "\ud83e\udd64",
          "layout": "tabla",
          "items": [
            { "nombre": "Refresco", "precio": 20 }
          ]
        },
        {
          "titulo": "Combos Wings Station",
          "emoji": "\ud83c\udf81",
          "layout": "cartas",
          "nota": "Modificaciones para cualquier combo: cambia tus papas por gajo +$10 \u00b7 a\u00f1ade brownie +$20.",
          "items": [
            { "nombre": "Combo Cl\u00e1sico", "precio": 165, "descripcion": "8 boneless (276 grs.), 1 papas y 1 refresco." },
            { "nombre": "Combo Alitas", "precio": 189, "descripcion": "12 alitas (318 grs.), 1 papas y 1 refresco." },
            { "nombre": "Combo Doble", "precio": 230, "descripcion": "10 boneless (276 grs.), 1 papas, 1 aros de cebolla y 1 refresco." },
            { "nombre": "Combo para Dos", "precio": 365, "descripcion": "20 alitas (600 grs.), 1 papas, 1 dedos de queso y 2 refrescos." }
          ]
        }
      ]
    }
  ]
};
