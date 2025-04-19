
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
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='py-5 lg:px-20'>
      <Slider {...settings}>
        {products.map((item, index) => (
          <DealCard key={index} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Deal;
