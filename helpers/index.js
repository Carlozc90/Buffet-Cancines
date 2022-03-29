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
