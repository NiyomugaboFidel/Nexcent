import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logos from './data'; // Ensure this is correctly imported and contains valid image URLs

const Client: React.FC = () => {


  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 2000,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true,
    autoplaySpeed:6000,
  };

 

  console.log(logos)

  return (
  <div className='my-[40px]'>
    
    <div className='h-full w-full'>
         <h2 className=' lg:leading-h2 lg:text-h2 text-center font-semibold text-black '>
         Our Clients
         </h2>
         <p className='text-[11px] text-center text-dGrey'>We have been working with some Fortune 500+ clients</p>
        </div>

        <div className='h-[32px] px-[48px] py-[32px]   '>
          <Slider {...settings}>
            {logos.map((logo, index) => (
                <div className='flex items-center justify-center' key={index}>
                    <img  className='' src={logo} alt='Clients' />
                    <span className='text-[5px] leading-3 lg:text-[9px] text-center flex items-center justify-center absolute -bottom-1'>company</span>
                </div>
            
            ))}
          </Slider>
        </div>
  </div>
       
  );
};

export default Client;
