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
    nombre: "Alitas BBQ",
    precio: 24.9,
    imagen: "2alitasbbq",
    descripcion: "Alitas bañadas de salsa barbebue.",
    categoriaId: 2,
  },
  {
    nombre: "Arroz blanco",
    precio: 6.9,
    imagen: "2alitasbbq",
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
    precio: 6.9,
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
    descripcion:
      "Aromatizado con cerveza, culantro y vegetales. Porción personal",
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
    nombre: "PANCETA CROCANTE (PARA 4)",
    precio: 89.9,
    imagen: "3panceta4",
    descripcion:
      "Panceta crocante (700gr) + ensalada mixta familiar + papitas cóctel salteadas al chimichurri porción familiar.",
    categoriaId: 3,
  },
];

export { productos };
