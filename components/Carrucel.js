import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carrucel = () => {
  const imagen = [
    "CarouselCausa.jpg",
    "CarouselCeviche.jpg",
    "CarouselChaufa.jpg",
    "CarouselSecoFrejoles.jpg",
  ];
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      transitionTime={1000}
      stopOnHover={false}
      width={"100%"}
      emulateTouch
    >
      <div>
        <img src={`/assets/img/carousel/${imagen[0]}`} />
      </div>
      <div>
        <img src={`/assets/img/carousel/${imagen[1]}`} />
      </div>
      <div>
        <img src={`/assets/img/carousel/${imagen[2]}`} />
      </div>
      <div>
        <img src={`/assets/img/carousel/${imagen[3]}`} />
      </div>
    </Carousel>
  );
};

export default Carrucel;
