import { useState } from "react";
import Section from "../Section";
import Slider from "react-slick";
import images from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: React.FC = () => {
  const [currentSlider, setCurrentSlide] = useState<number>(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <Section id="home" className="bg-silver min-h-screen w-full py-[64px] ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 lg:px-8 py-8 lg:py-16 gap-8 overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 ">
          <h2 className="text-dGrey text-2xl md:text-5xl mb-4 md:w-3/4 font-semibold leading-snug">
            Lessons and insights <br />
            <span className="text-primary leading-snug">from 8 years</span>
          </h2>
          <p className="text-grey text-base mb-8">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className=" btn-primary">Register</button>
        </div>
        {/* Right Side */}
        <div className="flex-1 w-full overflow-hidden">
          <Slider {...settings}>
            {images.map((image, index) => (
              <img
                className="w-full h-auto object-cover"
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-4">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-transform duration-300 ${
                index === currentSlider
                  ? "bg-primary transform scale-110"
                  : "bg-grey"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Home;
