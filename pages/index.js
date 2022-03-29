import Banner from "../components/Banner";
import Carrucel from "../components/Carrucel";
import NuestraCarta from "../components/NuestraCarta";
import PedidoMas from "../components/PedidoMas";
import useBuffet from "../hooks/useBuffet";
import Layout from "../layout/Layout";

export default function Home() {
  const { tagBannerimg, tagCarouselimg } = useBuffet();

  return (
    <div>
      <Layout>
        {tagCarouselimg && <Carrucel />}
        <PedidoMas />
        {tagBannerimg && <Banner banner={"1"} imagen={tagBannerimg} />}
        <NuestraCarta />
        {tagBannerimg && <Banner banner={"2"} imagen={tagBannerimg} />}
      </Layout>
    </div>
  );
}
