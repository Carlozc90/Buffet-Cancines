import Image from "next/image";

const Banner = ({ banner, imagen }) => {
  return (
    <div
      className="overflow-hidden rounded-3xl relative mx-6"
      style={{
        paddingBottom: "15%",
      }}
    >
      <Image
        src={banner === "1" ? imagen[0].secure_url : imagen[1].secure_url}
        layout="fill"
        alt="imagen"
        priority={true}
      />
    </div>
  );
};

export default Banner;
