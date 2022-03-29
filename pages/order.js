import Layout from "../layout/Layout";
import Image from "next/image";
import useBuffet from "../hooks/useBuffet";
import { formatearDinero, obtenerUrlhelper } from "../helpers";

export default function Order() {
  const { orden, total, tagMenuimg } = useBuffet();
  return (
    <Layout>
      <div className="w-screen h-[150px] bg-gray-900 flex justify-center items-center text-center">
        {[
          { numero: "1", descripcion: "Mi pedido" },
          { numero: "2", descripcion: "Toma de Datos" },
          { numero: "3", descripcion: "Confirmación" },
        ].map((item, i) => (
          <>
            <div key={i}>
              <button
                type="button"
                className={`h-10 w-10 ${
                  item.numero === "1" ? "bg-red-600" : "bg-gray-500"
                } rounded-full text-xl font-semibold mb-3`}
              >
                {item.numero}
              </button>
              <p className="font-semibold text-red-600">{item.descripcion}</p>
            </div>

            {item.numero === "3" ? "" : <hr className="w-20 mx-7" />}
          </>
        ))}
      </div>
      <div id="container" className="w-screen flex flex-col md:flex-row ">
        <div
          className="md:w-3/5"
          // style={{
          //   width: "60%",
          // }}
        >
          {orden?.map((pedido, i) => (
            <div key={i} className="border-b border-slate-400 mx-4 pb-4 mt-2">
              <p className="text-red-600 font-semibold uppercase my-3 text-xl">
                Orden {i + 1}
              </p>
              <div className="flex justify-between">
                <Image
                  width={250 / 1.2}
                  height={300 / 1.5}
                  src={obtenerUrlhelper(pedido.imagen, tagMenuimg)}
                  alt="logo imagen"
                  className="rounded-2xl"
                />
                <div className="">
                  <p className="text-red-600 font-bold text-2xl uppercase">
                    {pedido.nombre}
                  </p>
                  <p className="mt-2">
                    Cantidad:{" "}
                    <span className="font-medium">{pedido.cantidad}</span>{" "}
                  </p>
                  <p className="text-gray-600 mt-2">
                    Unidad: {formatearDinero(pedido.precio)}
                  </p>
                  <p className="font-bold text-red-600 mt-2">
                    Total: {formatearDinero(pedido.precio * pedido.cantidad)}
                  </p>
                </div>
                <div className="flex flex-col justify-center ">
                  <button
                    type="button"
                    className="bg-sky-700 gap-2  py-2 text-white rounded-md font-bold uppercase shadow-md w-full lg:w-auto"
                    onClick={() => hadleEditarCantidad(producto.id)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full lg:w-auto mt-5"
                    onClick={() => handleEliminarProducto(producto.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="  h-screen md:w-2/5 "
          // style={{
          //   width: "40%",
          // }}
        >
          <div className="bg-slate-200 mx-10 mt-6 rounded-2xl text-center uppercase">
            <h1 className="border-b border-red-600 mx-6 py-4 mb-6 text-red-600 font-bold">
              Resumen del Pedido
            </h1>
            {orden?.map((pedido, i) => (
              <div key={i} className="flex justify-between mx-6 mt-2">
                <p>{pedido.nombre}</p>
                <p className="font-bold text-gray-900">
                  {formatearDinero(pedido.cantidad * pedido.precio)}
                </p>
              </div>
            ))}
            <div className="flex justify-between mx-6 border-t border-red-600 pt-4 mt-5">
              <p className="">Total a Pagar</p>
              <p className="font-bold text-gray-900">
                {formatearDinero(total)}
              </p>
            </div>

            <button
              type="button"
              className=" bg-red-600 gap-2 px-5 py-2 mb-8 text-white rounded-full font-bold uppercase shadow-md w-full lg:w-auto mt-5"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
// w-10/12 h-screen overflow-y-scroll
