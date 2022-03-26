import useBuffet from "../hooks/useBuffet";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useBuffet();
  console.log(categorias);
  return (
    <div className="mt-20">
      <div className="ml-10 mt-2">
        <p className="uppercase mb-5 text-3xl text-red-700 font-bold">Carta</p>
        {categorias.map((cate) => (
          <Categoria key={cate.id} cate={cate} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
