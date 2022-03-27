import useBuffet from "../hooks/useBuffet";

const NuestraCarta = () => {
  const { categorias } = useBuffet();
  console.log(categorias);
  return (
    <div className=" m-6 grid grid-cols-3 gap-4">
      {/* {lomasPedido.map((pedido) => (
        <Producto producto={pedido} key={pedido.nombre} />
      ))} */}
    </div>
  );
};

export default NuestraCarta;
