import React from "react";
import Section from "../Section";
import image from "../../assets/image.png";
import { ScrollReveal2 } from "../Animations/ScrollReveal";
import logos from "../Client/data";
import Button from "../Buttons/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Customers: React.FC = () => {
  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Section id="">
      <div>
        <div className="  gap-[64px] block lg:flex  justify-between w-full h-full lg:h-[271px] ">
          {/* left side */}
          <div className="w-full  h-full">
            <ScrollReveal2>
              <span className="w-full h-full">
                <img src={image} alt="customer's" />
              </span>
            </ScrollReveal2>
          </div>
          {/* right side  */}
          <ScrollReveal2 direction="right">
            <div className="w-full px-[10px] items-start m-auto lg:w-[520px] h-full flex flex-col gap-[11px]">
              <p className="leading-[16px] text-[11px] text-black">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <span className="flex flex-col items-start justify-center">
                <h3 className="leading-[20px] text-[14px] font-semibold text-primary">
                  Tim Smith
                </h3>
                <p className="leading-[16px] text-[11px] text-dGrey">
                  British Dragon Boat Racing Association
                </p>
              </span>
              <span className="w-full  flex  gap-4 items-center justify-center">
                <div className=" w-full h-full lg:w-[343px] lg:h-[33px] overflow-hidden gap-[28px]">
                  <Slider {...settings}>
                    {logos.map((logo, index) => (
                      <img
                        className="w-[40px] h-[40px] lg:p-1"
                        key={index}
                        src={logo}
                        alt="logo"
                      />
                    ))}
                  </Slider>
                </div>
                <Button
                  className=" w-full h-full  bg-transparent md:gap-2 font-semibold lg:text-[13px] lg:leading-[19px] text-primary items-center lg:p-3"
                  label="Meet all custommers"
                  icon={<FaLongArrowAltRight className="w-[11px] h-[11px]" />}
                />
              </span>
            </div>
          </ScrollReveal2>
        </div>
      </div>
    </Section>
  );
};

export default Customers;
