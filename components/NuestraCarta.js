import useBuffet from "../hooks/useBuffet";
import Producto from "./Producto";

const NuestraCarta = () => {
  const { categorias } = useBuffet();
  // console.log(categorias);
  return (
    <>
      <p className="ml-6 my-14 text-red-600 uppercase text-4xl font-bold">
        Nuestra Carta
      </p>
      <div className=" m-6 grid md:grid-cols-4 gap-4">
        {categorias &&
          categorias.map((cat) => (
            <Producto padre={"nuestracarta"} producto={cat} key={cat.id} />
          ))}
      </div>
    </>
  );
};

export default NuestraCarta;
