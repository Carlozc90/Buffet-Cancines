import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import useBuffet from "../hooks/useBuffet";

const Carrucel = () => {
  const imagen = [
    "CarouselCausa.jpg",
    "CarouselCeviche.jpg",
    "CarouselChaufa.jpg",
    "CarouselSecoFrejoles.jpg",
  ];

  const { tagCarouselimg } = useBuffet();
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      transitionTime={1500}
      stopOnHover={false}
      // width={"100%"}
      emulateTouch
    >
      <div>
        <img src={tagCarouselimg[0].secure_url} />
      </div>
      <div>
        <img src={tagCarouselimg[1].secure_url} />
      </div>
      <div>
        <img src={tagCarouselimg[2].secure_url} />
      </div>
      <div>
        <img src={tagCarouselimg[3].secure_url} />
      </div>
    </Carousel>
  );
};

export default Carrucel;
