import React from "react";
import image from "../../assets/home-3.svg";
import Button from "../Buttons/Button";
import Section from "../Section";
import ScrollReveal, { ScrollReveal2 } from "../ScrollReveal";

const Unlock: React.FC = () => {
  return (
    <Section id="" className="w-full h-[301]">
      <div className="  block lg:flex justify-between items-center">
        {/* left side */}
        <ScrollReveal2 direction='left'>
        <div className="w-[307px] h-[301px]">
          <img className="w-[370px] h-[300px]" src={image} alt="" />
        </div>
        </ScrollReveal2>
        {/* right side */}
        <ScrollReveal >
        <div className="lg:w-[460px] h-full">
          <h2
            className="
          lg:leading-h2 lg:text-h2 pb-[10px] font-semibold text-dGrey"
          >
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="lg:pb-[22px] lg:leading-p text-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button label="Learn More" />
        </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default Unlock;
