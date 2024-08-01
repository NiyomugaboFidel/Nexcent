import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logos from './data'; // Ensure this is correctly imported and contains valid image URLs

const Client: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,  // Adjusted for smaller screens
    slidesToScroll: 4, // Adjusted for smaller screens
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className='my-10 px-4 lg:px-8'>
      <div className='text-center mb-8'>
        <h2 className='text-2xl lg:text-4xl font-semibold text-black leading-tight'>
          Our Clients
        </h2>
        <p className='text-sm lg:text-base text-dGrey'>
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className='relative'>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div className='flex items-center justify-center p-4' key={index}>
              <img className='max-w-full h-auto' src={logo} alt='Clients' />
              <span className='text-xs font-bold lg:text-sm absolute bottom-0 mb-2 text-center '>
                company
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
