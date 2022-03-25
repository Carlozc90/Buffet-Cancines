import useBuffet from "../hooks/useBuffet";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useBuffet();
  console.log(categorias);
  return (
    <div className="mt-10">
      <div className="ml-10 bg-teal-500 mt-2">
        <p className="uppercase text-3xl text-red-700 font-bold">Carta</p>
        {categorias.map((cate) => (
          <Categoria key={cate.id} cate={cate} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
