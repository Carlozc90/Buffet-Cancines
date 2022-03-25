import useBuffet from "../hooks/useBuffet";

const Categoria = ({ cate }) => {
  const { handleCategoriaClick, categoriaActual } = useBuffet();
  const { nombre, id } = cate;
  return (
    <div className={`pt-3 ${categoriaActual?.id === id ? "text-red-800" : ""}`}>
      <button
        type="button"
        className="text-2xl uppercase font-semibold"
        onClick={() => handleCategoriaClick(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
