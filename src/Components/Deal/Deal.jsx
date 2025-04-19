import DealCard from './DealCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { products } from "../../data/Products/products";

const Deal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };

  return (
    <div className='py-6 px-4 sm:px-6 md:px-10 lg:px-20'>
      <Slider {...settings}>
        {products.map((item, index) => (
          <DealCard key={index} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Deal;
