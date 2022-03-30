import Image from "next/image";
import { useEffect, useState } from "react";
import { formatearDinero, obtenerUrlhelper } from "../helpers";
import useBuffet from "../hooks/useBuffet";

const CompoModal = ({ padre }) => {
  const { producto, handleChangeModal, handleAgregarOrden, orden, tagMenuimg } =
    useBuffet();
  const { imagen, nombre, descripcion, precio } = producto;
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(precio * cantidad);
  }, [cantidad, precio]);

  useEffect(() => {
    if (orden.some((product) => product.id === producto.id)) {
      const productoEdicion = orden.find((pedido) => pedido.id === producto.id);
      setCantidad(productoEdicion.cantidad);
    }
  }, [producto, orden]);

  return (
    <div>
      <div className="flex items-center ">
        <button type="button" className="flex mb-4" onClick={handleChangeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 self-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <p className="ml-2 text-xl "> Volver</p>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex justify-center">
          <Image
            width={250}
            height={300}
            src={obtenerUrlhelper(imagen, tagMenuimg)}
            alt={`imagen ${nombre}`}
            className={"rounded-2xl"}
          />
        </div>

        <div>
          <h1 className="uppercase text-red-600 font-bold text-3xl">
            {nombre}
          </h1>
          <p className="font-medium mt-8">{descripcion}</p>
          <div className="flex mt-8 justify-center items-center">
            <button
              type="button"
              className=""
              onClick={() => {
                if (cantidad <= 1) return;
                setCantidad(cantidad - 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <p className="mx-4 text-xl ">{cantidad}</p>
            <button
              type="button"
              onClick={() => {
                if (cantidad >= 10) return;
                setCantidad(cantidad + 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <p className="ml-10 text-slate-800 font-bold text-2xl text-center">
              {formatearDinero(total)}
            </p>
          </div>
          {cantidad > 1 && (
            <p className="font-normal text-base text-red-600 text-center">
              Precio por unidad {formatearDinero(precio)}
            </p>
          )}
          <button
            type="button"
            className="bg-red-600  rounded-3xl mt-12"
            onClick={() => {
              handleAgregarOrden({ ...producto, cantidad });
              handleChangeModal();
            }}
          >
            <div className="uppercase flex font-bold text-white m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="ml-2"> Añadir {formatearDinero(total)}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompoModal;
