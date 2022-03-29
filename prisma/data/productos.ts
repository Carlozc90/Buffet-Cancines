const productos = [
  {
    nombre: "Ensalada hawaiana",
    precio: 17.9,
    imagen: "1ensaladahawaiana",
    descripcion: "Ensalada con jamón, papas, durazno, manzana y mayonesa.",
    categoriaId: 1,
  },
  {
    nombre: "Ensalada mixta",
    precio: 17.9,
    imagen: "1ensaladamixta",
    descripcion: "Ensalada de lechuga, tomate, pepino y palta y vinagreta.",
    categoriaId: 1,
  },
  {
    nombre: "Ensalada Rusa",
    precio: 17.9,
    imagen: "1ensaladarusa",
    descripcion:
      "Ensalada con betarraga, zanahoria, papa, vainita y arverjas con mayonesa.",
    categoriaId: 1,
  },
  {
    nombre: "Ocopa Arequipeña",
    precio: 17.9,
    imagen: "1ocopaarequipena",
    descripcion: "Clásica ocopa con rodajas de papa blanca.",
    categoriaId: 1,
  },
  {
    nombre: "Papa a la Huancaina",
    precio: 17.9,
    imagen: "1papahuancaina",
    descripcion: "Rodajas de papa con salsa huancaína con huevo y aceituna.",
    categoriaId: 1,
  },
  {
    nombre: "Salpicon de pollo",
    precio: 17.9,
    imagen: "1salpicondepollo",
    descripcion:
      "Pollo sancochado deshilachado, lechuga, papa, vainita, zanahoria, arverja y mayonesa.",
    categoriaId: 1,
  },
  {
    nombre: "Pollo Broaster (5 UND)",
    precio: 15.9,
    imagen: "2pollobroaster",
    descripcion:
      "Pollo broaster  (5 und) + con papas fritas .Salsas : mayonesa, mostaza, ketchup y ají.",
    categoriaId: 2,
  },
  {
    nombre: "Salchipapas",
    precio: 15.9,
    imagen: "2salchipapas",
    descripcion:
      "Salchicha vienesa con papas fritas. Salsas : mayonesa, mostaza, ketchup y ají",
    categoriaId: 2,
  },
  {
    nombre: "Chicharron de pollo",
    precio: 19.9,
    imagen: "2chicharrondepollo",
    descripcion:
      "Trozos de filete de pollo frito + papas fritas + mayonesa y ketchup.",
    categoriaId: 2,
  },
  {
    nombre: "Alitas BBQ",
    precio: 24.9,
    imagen: "2alitasbbq",
    descripcion: "Alitas bañadas de salsa barbebue.",
    categoriaId: 2,
  },
  {
    nombre: "Arroz blanco",
    precio: 6.9,
    imagen: "3arrozblanco",
    descripcion: "Porción para tres",
    categoriaId: 3,
  },
  {
    nombre: "Papas fritas",
    precio: 6.9,
    imagen: "3papafritas",
    descripcion: "",
    categoriaId: 3,
  },
  {
    nombre: "Camotes Fritos",
    precio: 9.9,
    imagen: "3camotefritos",
    descripcion: "Porción para dos",
    categoriaId: 3,
  },
  {
    nombre: "Pure de Papas",
    precio: 14.9,
    imagen: "3puredepapas",
    descripcion: "Porción para dos",
    categoriaId: 3,
  },
  {
    nombre: "carapulcra",
    precio: 15.9,
    imagen: "3carapulcra",
    descripcion:
      "Carapulcra de cerdo acompañada de salsa criolla. Porción para dos",
    categoriaId: 3,
  },
  {
    nombre: "frejoles",
    precio: 15.9,
    imagen: "3frejoles",
    descripcion: "Porción de frejoles canario. Porción para dos",
    categoriaId: 3,
  },
  {
    nombre: "tallarines verdes",
    precio: 15.9,
    imagen: "3tallarinesverde",
    descripcion:
      "Espaguetis con pesto criollo, a base de albahaca, leche, pecanas y queso.",
    categoriaId: 3,
  },
  {
    nombre: "Aji de Pollo",
    precio: 19.9,
    imagen: "3ajipollo",
    descripcion:
      "Ají de pollo con queso parmesano, pecanas, huevo duro y aceituna. Porción para dos",
    categoriaId: 3,
  },
  {
    nombre: "Arroz con pollo",
    precio: 19.9,
    imagen: "3arrozpollo",
    descripcion: "Aromatizado con cerveza, culantro y vegetales.",
    categoriaId: 3,
  },
  {
    nombre: "CAUSA DE POLLO",
    precio: 19.9,
    imagen: "3causapollo",
    descripcion:
      "Causa de papa amarilla con crema de ají amarillo, rellena de pollo, vegetales y mayonesa. Porción para dos",
    categoriaId: 3,
  },
  {
    nombre: "ESCABECHE DE POLLO",
    precio: 19.9,
    imagen: "3escabechepollo",
    descripcion:
      "Pollo en salsa de escabeche a base de ají panca, ají amarillo, vinagre y cebolla. Porción para dos.",
    categoriaId: 3,
  },
  {
    nombre: "CAU CAU",
    precio: 21.9,
    imagen: "3caucau",
    descripcion:
      "Cau cau de mondongo aromatizado con hierba buena. Porción para dos",
    categoriaId: 3,
  },
  {
    nombre: "MONDONGUITO A LA ITALIANA",
    precio: 21.9,
    imagen: "3mondongoitaliana",
    descripcion:
      "Hecho con tomate, ají panca, vino blanco, pimiento, zanahoria, alverja acompañado de papa frita. Porción para dos",
    categoriaId: 3,
  },
  {
    nombre: "BISTECK SALTADO",
    precio: 34.9,
    imagen: "3bistecksaltado",
    descripcion: "A la criolla acompañado de papas fritas. Porción para dos",
    categoriaId: 3,
  },
  {
    nombre: "CHICHARRÓN DE CERDO",
    precio: 34.9,
    imagen: "3chicharroncerdo",
    descripcion:
      "Cerdo en trozos frito, acompañado de mote, camote frito y salsa criolla. Porción para dos",
    categoriaId: 3,
  },
  {
    nombre: "COMBINE 4 PLATOS A SU ELECCIÓN",
    precio: 82.9,
    imagen: "3combine4platos",
    descripcion:
      "Bisteck saltado a la criolla o seco o chicharrón de cerdo + ají de pollo o arroz con pollo o escabeche de pollo + mondongo a la italiana o cau cau + tallarín verde, frejoles o carapulcra.",
    categoriaId: 3,
  },
  {
    nombre: "SECO A LA NORTEÑA",
    precio: 34.9,
    imagen: "3seconorte",
    descripcion:
      "Tradicional seco de res a la norteño con chicha de jora, zapallo loche y culantro picado.",
    categoriaId: 3,
  },
  {
    nombre: "PANCETA CROCANTE (PARA 4)",
    precio: 89.9,
    imagen: "3panceta4",
    descripcion:
      "Panceta crocante (700gr) + ensalada mixta familiar + papitas cóctel salteadas al chimichurri porción familiar.",
    categoriaId: 3,
  },
  {
    nombre: "SIU MAI X 6",
    precio: 11.9,
    imagen: "4siumai",
    descripcion:
      "Clásicos bocaditos chinos de carne de cerdo, hongos y especies cocinado al vapor , acompañado de salsa hoisin.",
    categoriaId: 4,
  },
  {
    nombre: "WANTÁN FRITO X 6",
    precio: 11.9,
    imagen: "4wanta12",
    descripcion:
      "Wantanes fritos (6 und) relleno de carne de cerdo con salsa tamarindo.",
    categoriaId: 4,
  },
  {
    nombre: "CHAUFA VEGETARIANO",
    precio: 12.9,
    imagen: "4chaufavege",
    descripcion: "Arroz chaufa hecho con vegetales.",
    categoriaId: 4,
  },
  {
    nombre: "AEROPUERTO",
    precio: 16.9,
    imagen: "4aeropuerto",
    descripcion: "Arroz chaufa de pollo saltado con tallarín y frijol chino.",
    categoriaId: 4,
  },
  {
    nombre: "CHAUFA DE POLLO",
    precio: 16.9,
    imagen: "4chaufapollo",
    descripcion: "Arroz chaufa de pollo, huevo y cebolla china.",
    categoriaId: 4,
  },
  {
    nombre: "TALLARÍN SALTADO DE POLLO",
    precio: 16.9,
    imagen: "4tallapollo",
    descripcion:
      "Tallarín saltado de pollo oriental con vegetales y salsa de ostión.",
    categoriaId: 4,
  },
  {
    nombre: "CERDO CON FRUTAS",
    precio: 19.9,
    imagen: "4cerdofruta",
    descripcion:
      "Carne de cerdo en láminas, con durazno, piña y salsa tamarindo.",
    categoriaId: 4,
  },

  {
    nombre: "POLLO AL SILLAU",
    precio: 19.9,
    imagen: "4pollosillau",
    descripcion: "Pollo horneado con salsa de soja, holantao y pimiento.",
    categoriaId: 4,
  },

  {
    nombre: "POLLO CHI JAU KAY",
    precio: 19.9,
    imagen: "4pollochikay",
    descripcion: "Filete de pollo frito con salsa de ostión.",
    categoriaId: 4,
  },

  {
    nombre: "POLLO CON FRUTAS",
    precio: 19.9,
    imagen: "4pollofruta",
    descripcion: "Filete de pollo con durazno, piña y salsa tamarindo.",
    categoriaId: 4,
  },

  {
    nombre: "POLLO CON VERDURAS",
    precio: 19.9,
    imagen: "4polloverdura",
    descripcion: "Pollo saltado con salsa de ostión y vegetales.",
    categoriaId: 4,
  },

  {
    nombre: "POLLO TIPAKAY",
    precio: 19.9,
    imagen: "4pollotipakay",
    descripcion: "Filete de pollo frito con durazno, piña y salsa tamarindo.",
    categoriaId: 4,
  },

  {
    nombre: "SIU MAI X 12",
    precio: 21.9,
    imagen: "4siumai12",
    descripcion:
      "Clásicos bocaditos chinos de carne de cerdo, hongos y especies cocinado al vapor, acompañado de salsa hoisin.",
    categoriaId: 4,
  },

  {
    nombre: "WANTÁN FRITO X 12",
    precio: 21.9,
    imagen: "4wanta12",
    descripcion:
      "Wantanes fritos ( 12 und ) relleno de carne de cerdo con salsa tamarindo.",
    categoriaId: 4,
  },

  {
    nombre: "COMBINE 2 PLATOS A SU ELECCIÓN",
    precio: 34.9,
    imagen: "4combine2platos",
    descripcion:
      "Cerdo con frutas ó  pollo chijaukay ó pollo al sillau ó pollo con frutas ó pollo con verduras ó pollo tipakay + chaufa de pollo ó aeropuerto ó tallarín saltado.",
    categoriaId: 4,
  },

  {
    nombre: "CAUSA DE ATÚN",
    precio: 19.9,
    imagen: "5causaatun",
    descripcion:
      "Causa de papa amarilla con crema de ají amarillo, rellena con atún, cebolla y mayonesa. Porción para dos ",
    categoriaId: 5,
  },
  {
    nombre: "ARROZ CON MARISCOS",
    precio: 22.9,
    imagen: "5arrozmarisco",
    descripcion:
      "Delicioso arroz con mixturas de mariscos, ajíes soazados, vino blanco y queso.",
    categoriaId: 5,
  },
  {
    nombre: "CEVICHE DE PESCADO",
    precio: 22.9,
    imagen: "5cevichepescado",
    descripcion:
      "Clásico ceviche de pescado con leche de tigre acompañado de camote, choclo y canchita. Porción persona",
    categoriaId: 5,
  },
  {
    nombre: "CHAUFA DE MARISCOS",
    precio: 22.9,
    imagen: "5chaufamarico",
    descripcion: "Arroz chaufa con mixtura de mariscos.  ",
    categoriaId: 5,
  },
  {
    nombre: "CHICHARRÓN DE PESCADO",
    precio: 32.9,
    imagen: "5chichapescado",
    descripcion:
      "Trozos de filete de pescado frito, acompañado de yuca frita y salsa criolla.",
    categoriaId: 5,
  },
  {
    nombre: "ESPAGUETI A LA BOLOGNESA",
    precio: 19.9,
    imagen: "6espabolognesa",
    descripcion:
      "Espagueti bañado de salsa bolognesa hecha a base de carne de res, tomate, vino y especies.",
    categoriaId: 6,
  },
  {
    nombre: "FETUCCINI A LO ALFREDO",
    precio: 19.9,
    imagen: "6fetuccinialfredo",
    descripcion: "Fetuccini con salsa blanca, crema de leche y jamón.",
    categoriaId: 6,
  },
  {
    nombre: "LASAGNA DE CARNE",
    precio: 19.9,
    imagen: "6lasagnacarne",
    descripcion:
      "Clásica lasagna de salsa bolognesa y salsa blanca con queso gratinado.",
    categoriaId: 6,
  },
  {
    nombre: "LASAGNA DE JAMÓN Y QUESO",
    precio: 19.9,
    imagen: "6lasagnaqueso",
    descripcion: "Lasagna de jamón y queso con salsa blanca y queso gratinado.",
    categoriaId: 6,
  },
  {
    nombre: "DIETA DE POLLO",
    precio: 14.9,
    imagen: "7dietapollo",
    descripcion:
      "Sopa a base de pechuga de pollo, papa amarilla, zanahoria y cabello de ángel. .",
    categoriaId: 7,
  },
  {
    nombre: "CALDO DE GALLINA",
    precio: 17.9,
    imagen: "7caldogallina",
    descripcion:
      "Caldo de gallina con presa, huevo, papa amarilla y fideos espagueti. .",
    categoriaId: 7,
  },
  {
    nombre: "MENESTRÓN",
    precio: 17.9,
    imagen: "7menestron",
    descripcion: "Clásico menestrón con pesto y vegetales. .",
    categoriaId: 7,
  },
  {
    nombre: "SOPA DE MOTE",
    precio: 17.9,
    imagen: "7sopamote",
    descripcion: "Sopa de carne de cerdo, mondongo, mote y arroz. .",
    categoriaId: 7,
  },
  {
    nombre: "EMOLIENTE 1/2 L",
    precio: 5.9,
    imagen: "8emoliente",
    descripcion: "",
    categoriaId: 8,
  },
  {
    nombre: "MARACUYA 1/2 L",
    precio: 5.9,
    imagen: "8maracuya",
    descripcion: "",
    categoriaId: 8,
  },
  {
    nombre: "CHICHA MORADA 1L",
    precio: 8.9,
    imagen: "8chichamorada",
    descripcion: "",
    categoriaId: 8,
  },
  {
    nombre: "ARROZ CON LECHE PERSONAL",
    precio: 6.5,
    imagen: "9arrozleche",
    descripcion: "",
    categoriaId: 9,
  },
  {
    nombre: "ARROZ ZAMBITO PERSONAL",
    precio: 6.5,
    imagen: "9arrozambito",
    descripcion: "",
    categoriaId: 9,
  },
  {
    nombre: "MAZAMORRA MORADA PERSONAL",
    precio: 6.5,
    imagen: "9mazamorramorada",
    descripcion: "",
    categoriaId: 9,
  },
];

export { productos };
