import useBuffet from "../hooks/useBuffet";
import Producto from "./Producto";
import Image from "next/image";
import { formatearDinero, obtenerNombre } from "../helpers";

const PedidoMas = () => {
  const { lomasPedido, handleChangeModal, handleProducto, tagMenuimg } =
    useBuffet();

  const obtenerUrl = (objmongol, bdcloinari) => {
    // console.log("1", objmongol);
    // console.log("2", bdcloinari);

    const respuesta = bdcloinari.find(
      (items) => obtenerNombre(items) === objmongol.imagen
    );
    const { secure_url: res } = respuesta;
    // console.log("respuesta", res);
    return res;
  };

  return (
    <div>
      <p className="ml-6 my-14 text-red-600 uppercase text-4xl font-bold">
        Lo más Pedido
      </p>
      <div className=" m-6 grid grid-cols-4 gap-4">
        {lomasPedido.map((pedido, i) => (
          <div key={i} className="border p-3 text-center rounded">
            {tagMenuimg.length && (
              <Image
                width={250}
                height={300}
                src={obtenerUrl(pedido, tagMenuimg)}
                alt={`imagen ${pedido.nombre}`}
                className={"rounded-2xl"}
              />
            )}

            <div className="p-5">
              <h3 className="text-xl font-bold uppercase h-[50px]">
                {pedido.nombre}
              </h3>
              <p className="mt-5 text-left line-clamp-2 hover:line-clamp-none">
                {pedido.descripcion}
              </p>
              <div className="mt-5 flex justify-between ">
                <>
                  <button
                    type="button"
                    onClick={() => {
                      handleChangeModal();
                      handleProducto(pedido);
                    }}
                  >
                    <p className="uppercase px-2 py-1 font-semibold border-2 border-red-600 text-red-600 rounded-2xl hover:bg-red-600 hover:text-white duration-300 ">
                      Ordenar
                    </p>
                  </button>
                  <p className=" font-semibold text-3xl text-slate-900  ">
                    {formatearDinero(pedido.precio)}
                  </p>
                </>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PedidoMas;
