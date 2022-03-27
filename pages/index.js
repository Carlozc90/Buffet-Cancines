import Banner from "../components/Banner";
import Carrucel from "../components/Carrucel";
import Lugar from "../components/Lugar";
import NuestraCarta from "../components/NuestraCarta";
import PedidoMas from "../components/PedidoMas";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Carrucel />
        <PedidoMas />
        <Banner banner={"banner34"} />
        <NuestraCarta />
        <Banner banner={"banner82"} />
        <Lugar />
      </Layout>
    </div>
  );
}
