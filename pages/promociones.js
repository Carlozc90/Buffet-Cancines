import useBuffet from "../hooks/useBuffet";
import Layout from "../layout/Layout";

export default function Promociones({}) {
  const { tagMenuimg } = useBuffet();
  const id = "buffet/menu/1ensaladamixta_zqpjje";

  // console.log(tagMenuimg);

  const resultado = tagMenuimg.map((items) => items.public_id === id);

  // console.log("resultado", resultado);

  return (
    <div>
      <Layout></Layout>
    </div>
  );
}

// "buffet/menu/1ensaladamixta_zqpjje"
