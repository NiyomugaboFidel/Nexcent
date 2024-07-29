import { useState } from "react";
import Button from "../Buttons/Button"
import Section from "../Section"
import Slider from 'react-slick';
import images from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Home: React.FC = () => {
    const [currentSlider, setCurrentSlide] = useState<number>(0)
    const settings = {
        dots: false, // Disable default dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 30000,
        afterChange: (index: number) => setCurrentSlide(index), // Track slide change
      };
    
  return (
     <Section id="home" className="bg-[#F5F7FA] lg:min-h-[416px] w-full">
       <div className="flex items-center justify-between w-full ">
         {/* left side */}
         <div className=" lg:gap-[72px] gap-[35px]">
       <div className="lg:py-[22px] py-1 w-full ">
       <span className="text-dGrey lg:leading-[53px] lg:text-[44px] text-[14px] md:text-[22px]  w-full font-semibold">Lessons and insights <br /> <span className="text-primary">from 8 years </span></span>
        
         <p className="lg:text-[11px] lg:leading-[16px]  leading-[12px] text-[10px]">Where to grow your business as a photographer: site or social media?</p>
       </div>
         <div className="btn" >
         <Button label="Register" />
         </div>
        </div>
        {/* right side */}
        <div className="overflow-hidden w-full ">
            <Slider {...settings}>
              {
                images.map((image, index)=>( 
                    <img className="lg:h-[280px] lg:w-[275px]" key={index} src={image} alt="" />
                ))
              }
            </Slider>
        </div>
       </div>
        <div className="w-full h-[60px] flex items-center justify-center">
            <div className="w-4 h-2 flex items-center justify-center gap-1">
                {
                    images.map((_,index)=>(
                     <span key={index} className={`${index === currentSlider ? 'bg-primary scale-100 p-[4px]  ':'bg-green-300 p-[3px]'} h-[6px]  w-[6px] rounded-full cursor-pointer transition-all ease-in-out duration-75 `}
                     onClick={()=> setCurrentSlide(index)}></span>  
                    ))
                }
            </div>
        </div> 
     </Section>
  )
}

export default Home