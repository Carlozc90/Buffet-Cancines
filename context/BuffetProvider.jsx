import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BuffetContext = createContext();

const lomasPedido = [
  {
    nombre: "CHICHARRÓN DE PESCADO",
    precio: 32.9,
    imagen: "5chichapescado",
    descripcion:
      "Trozos de filete de pescado frito, acompañado de yuca frita y salsa criolla.",
    categoriaId: 5,
  },
  {
    nombre: "Alitas BBQ",
    precio: 24.9,
    imagen: "2alitasbbq",
    descripcion: "Alitas bañadas de salsa barbebue.",
    categoriaId: 2,
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
    nombre: "LASAGNA DE JAMÓN Y QUESO",
    precio: 19.9,
    imagen: "6lasagnaqueso",
    descripcion: "Lasagna de jamón y queso con salsa blanca y queso gratinado.",
    categoriaId: 6,
  },
];

const BuffetProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  const handleCategoriaClick = (id) => {
    const categoria = categorias.filter((cate) => cate.id === id);
    setCategoriaActual(categoria[0]);
  };

  // cuando la pagina esta lista
  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  return (
    <BuffetContext.Provider
      value={{ categorias, handleCategoriaClick, categoriaActual, lomasPedido }}
    >
      {children}
    </BuffetContext.Provider>
  );
};

export { BuffetProvider };

export default BuffetContext;
