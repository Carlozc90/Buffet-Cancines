export default async function handler(req, res) {
  const credencial = {
    headers: {
      Authorization: `Basic ${Buffer.from(
        process.env.CLOUDINARY_KEY + ":" + process.env.CLOUDINARY_SECRET
      ).toString("base64")}`,
    },
  };

  const url = `${process.env.CLOUDINARY_NAME}/resources/image/tags/menu?max_results=100`;

  const [resUrl] = await Promise.all([fetch(url, credencial)]);

  const [Api] = await Promise.all([resUrl.json()]);

  res.status(200).json(Api.resources);
}

// export async function getStaticProps() {
//   const tags = {};

//   const credencial = {
//     headers: {
//       Authorization: `Basic ${Buffer.from(
//         process.env.CLOUDINARY_KEY + ":" + process.env.CLOUDINARY_SECRET
//       ).toString("base64")}`,
//     },
//   };

//   const urlTagMenu = `${process.env.CLOUDINARY_NAME}/resources/image/tags/menu?max_results=100`;
//   const urlTagBanner = `${process.env.CLOUDINARY_NAME}/resources/image/tags/banner?max_results=100`;
//   const urlTagCarousel = `${process.env.CLOUDINARY_NAME}/resources/image/tags/carousel?max_results=100`;
//   const urlTagCategoria = `${process.env.CLOUDINARY_NAME}/resources/image/tags/categoria?max_results=100`;
//   const urlTaglogo = `${process.env.CLOUDINARY_NAME}/resources/image/tags/logo?max_results=100`;

//   const [resMenu, resBanner, resCarousel, resCategoria, resLogoApi] =
//     await Promise.all([
//       fetch(urlTagMenu, credencial),
//       fetch(urlTagBanner, credencial),
//       fetch(urlTagCarousel, credencial),
//       fetch(urlTagCategoria, credencial),
//       fetch(urlTaglogo, credencial),
//     ]);

//   const [MenuApi, BannerApi, CarouselApi, CategoriaApi, LogoApi] =
//     await Promise.all([
//       resMenu.json(),
//       resBanner.json(),
//       resCarousel.json(),
//       resCategoria.json(),
//       resLogoApi.json(),
//     ]);

//   return {
//     props: { MenuApi, BannerApi, CarouselApi, CategoriaApi, LogoApi },
//   };
// }
