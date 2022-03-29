import Image from "next/image";
import { formatearDinero, obtenerNombre } from "../helpers";
import useBuffet from "../hooks/useBuffet";

const Producto = ({ producto, padre }) => {
  const {
    id,
    nombre,
    precio,
    imagen: nombreimgProducto,
    descripcion,
    icono: imgCatalogo,
  } = producto;
  const {
    handleChangeModal,
    handleProducto,
    tagMenuimg,
    tagBannerimg,
    tagCarouselimg,
    tagCategoriaimg,
    tagLogoimg,
    lomasPedido,
  } = useBuffet();

  const obtenerUrl = (obj, array) => {
    // console.log("1", obj);
    // console.log("2", array);
    const respuesta = array.find((items) => obtenerNombre(items) === obj);
    const { secure_url: res } = respuesta;

    return res;
  };

  return (
    <div className="border p-3 text-center rounded">
      <Image
        width={250}
        height={300}
        src={
          padre === "nuestracarta"
            ? obtenerUrl(imgCatalogo, tagCategoriaimg)
            : obtenerUrl(nombreimgProducto, tagMenuimg)
        }
        alt={`imagen ${nombre}`}
        className={"rounded-2xl"}
      />
      <div className="p-5">
        <h3 className="text-xl font-bold uppercase h-[50px]">{nombre}</h3>
        <p className="mt-5 text-left line-clamp-2 hover:line-clamp-none">
          {descripcion}
        </p>
        <div className="mt-5 flex justify-between ">
          {padre === "nuestracarta" ? (
            ""
          ) : (
            <>
              <button
                type="button"
                onClick={() => {
                  handleChangeModal();
                  handleProducto(producto);
                }}
              >
                <p className="uppercase px-2 py-1 font-semibold border-2 border-red-600 text-red-600 rounded-2xl hover:bg-red-600 hover:text-white duration-300 ">
                  Ordenar
                </p>
              </button>
              <p className=" font-semibold text-3xl text-slate-900  ">
                {formatearDinero(precio)}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Producto;
