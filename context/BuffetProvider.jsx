import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BuffetContext = createContext();

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
      value={{ categorias, handleCategoriaClick, categoriaActual }}
    >
      {children}
    </BuffetContext.Provider>
  );
};

export { BuffetProvider };

export default BuffetContext;
