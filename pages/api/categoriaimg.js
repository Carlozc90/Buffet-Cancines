export default async function handler(req, res) {
  const credencial = {
    headers: {
      Authorization: `Basic ${Buffer.from(
        process.env.CLOUDINARY_KEY + ":" + process.env.CLOUDINARY_SECRET
      ).toString("base64")}`,
    },
  };

  const url = `${process.env.CLOUDINARY_NAME}/resources/image/tags/categoria?max_results=100`;

  const [resUrl] = await Promise.all([fetch(url, credencial)]);

  const [Api] = await Promise.all([resUrl.json()]);

  res.status(200).json(Api.resources);
}
