export const formatearDinero = (cantidad) => {
  return cantidad.toLocaleString("es-PE", {
    style: "currency",
    currency: "PEN",
  });
};

export const obtenerNombre = (resultado) => {
  const split = resultado.public_id.split("/");
  const resultadoSplit = split[2]?.split("_");
  const nombre = resultadoSplit[0];

  return nombre;
};

export const obtenerUrlhelper = (objimagen, array) => {
  // console.log("1", obj);
  // console.log("2", array);
  const respuesta = array.find((items) => obtenerNombre(items) === objimagen);
  const { secure_url: res } = respuesta;

  return res;
};
