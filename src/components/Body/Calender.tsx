import React from "react";
import image from "../../assets/home-2.svg";
import Button from "../Buttons/Button";
import Section from "../Section";
import ScrollReveal, { ScrollReveal2 } from "../ScrollReveal";

const Calender: React.FC = () => {
  return (
    <Section id='' className="w-full h-[301]">
      <div className="block lg:flex justify-between items-center">
        {/* left side */}
          <ScrollReveal>
          <div className="w-[307px] h-[301px]">
          <img className="w-[370px] h-[300px]" src={image} alt="" />
        </div>
          </ScrollReveal>
        {/* right side */}
       <ScrollReveal2 direction="right" >
       <div className="lg:w-[460px] h-full">
          <h2
            className="
          leading-h2 text-h2 pb-[10px] font-semibold text-dGrey"
          >
            How to design your site footer like we did
          </h2>
          <p className="pb-[22px] leading-p text-p">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <Button label="Learn More" />
        </div>
       </ScrollReveal2>
      </div>
    </Section>
  );
};

export default Calender;
