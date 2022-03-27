import Image from "next/image";
const Banner = ({ banner }) => {
  return (
    <div
      className="overflow-hidden rounded-3xl relative mx-6"
      style={{
        paddingBottom: "15%",
      }}
    >
      <Image
        src={`/assets/img/banner/${banner}.jpg`}
        layout="fill"
        alt="imagen"
        priority={true}
      />
    </div>
  );
};

export default Banner;
