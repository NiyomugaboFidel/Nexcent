import React from "react";
import image from "../../assets/home-3.svg";
import ScrollReveal, { ScrollReveal2 } from "../Animations/ScrollReveal";
const Unlock: React.FC = () => {
  return (
    <section>
      {/* side  */}

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row gap-10 justify-between items-center ">
          <div>
            <ScrollReveal2 direction="left">
            <img src={image} alt="unlock" />
            </ScrollReveal2>
          </div>
          <div className="md:w-4/5 mx-auto w-full">
           <ScrollReveal>
           <h2 className="text-xl md:text-2xl lg:text-3xl leading-snug line-clamp-2 text-dGrey font-semibold mb-4 md:w-4/5">
            The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4  text-[14px] md:text-p text-grey mb-8 line-clamp-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
               amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
               Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
               tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
               Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">
              Learn More
            </button>
           </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Unlock;
