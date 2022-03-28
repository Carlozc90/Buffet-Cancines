import { useEffect } from "react";
import Banner from "../components/Banner";
import Carrucel from "../components/Carrucel";
import NuestraCarta from "../components/NuestraCarta";
import PedidoMas from "../components/PedidoMas";
import useBuffet from "../hooks/useBuffet";
import Layout from "../layout/Layout";

export default function Home({
  MenuApi,
  BannerApi,
  CarouselApi,
  CategoriaApi,
  LogoApi,
}) {
  const {
    SetTagMenuimg,
    SetTagBannerimg,
    SetTagCarouselimg,
    SetTagCategoriaimg,
    SetTagLogoimg,
  } = useBuffet();

  useEffect(() => {
    SetTagMenuimg(MenuApi.resources);
    SetTagBannerimg(BannerApi.resources);
    SetTagCarouselimg(CarouselApi.resources);
    SetTagCategoriaimg(CategoriaApi.resources);
    SetTagLogoimg(LogoApi.resources);
  }, [
    BannerApi.resources,
    CarouselApi.resources,
    CategoriaApi.resources,
    LogoApi.resources,
    MenuApi,
    SetTagBannerimg,
    SetTagCarouselimg,
    SetTagCategoriaimg,
    SetTagLogoimg,
    SetTagMenuimg,
  ]);

  return (
    <div>
      <Layout>
        <Carrucel />
        <PedidoMas />
        <Banner banner={"banner34"} />
        <NuestraCarta />
        <Banner banner={"banner82"} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const tags = {};

  const credencial = {
    headers: {
      Authorization: `Basic ${Buffer.from(
        process.env.CLOUDINARY_KEY + ":" + process.env.CLOUDINARY_SECRET
      ).toString("base64")}`,
    },
  };

  const urlTagMenu = `${process.env.CLOUDINARY_NAME}/resources/image/tags/menu?max_results=100`;
  const urlTagBanner = `${process.env.CLOUDINARY_NAME}/resources/image/tags/banner?max_results=100`;
  const urlTagCarousel = `${process.env.CLOUDINARY_NAME}/resources/image/tags/carousel?max_results=100`;
  const urlTagCategoria = `${process.env.CLOUDINARY_NAME}/resources/image/tags/categoria?max_results=100`;
  const urlTaglogo = `${process.env.CLOUDINARY_NAME}/resources/image/tags/logo?max_results=100`;

  const [resMenu, resBanner, resCarousel, resCategoria, resLogoApi] =
    await Promise.all([
      fetch(urlTagMenu, credencial),
      fetch(urlTagBanner, credencial),
      fetch(urlTagCarousel, credencial),
      fetch(urlTagCategoria, credencial),
      fetch(urlTaglogo, credencial),
    ]);

  const [MenuApi, BannerApi, CarouselApi, CategoriaApi, LogoApi] =
    await Promise.all([
      resMenu.json(),
      resBanner.json(),
      resCarousel.json(),
      resCategoria.json(),
      resLogoApi.json(),
    ]);

  return {
    props: { MenuApi, BannerApi, CarouselApi, CategoriaApi, LogoApi },
  };
}
