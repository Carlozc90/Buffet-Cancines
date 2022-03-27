import useBuffet from "../hooks/useBuffet";
import Producto from "./Producto";

const PedidoMas = () => {
  const { lomasPedido } = useBuffet();
  return (
    <div>
      <p className="ml-6 my-14 text-red-600 uppercase text-4xl font-bold">
        Lo más Pedido
      </p>
      <div className=" m-6 grid grid-cols-4 gap-4">
        {lomasPedido.map((pedido) => (
          <Producto padre={"pedidomas"} producto={pedido} key={pedido.nombre} />
        ))}
      </div>
    </div>
  );
};

export default PedidoMas;
