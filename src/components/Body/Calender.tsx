import React from "react";
import image from "../../assets/home-2.svg";
import  { ScrollReveal2 } from "../Animations/ScrollReveal";

const Calender: React.FC = () => {
  return (
<section>    
<div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
  <div className="md:w-11/12 mx-auto flex flex-col md:flex-row gap-10 justify-between items-center ">
    <div>
      <ScrollReveal2 direction="left">
      <img src={image} alt="unlock" />
      </ScrollReveal2>
    </div>
    <div className="md:w-4/5 mx-auto w-full">
    
    <ScrollReveal2 direction="right">
      <h2 className="text-xl md:text-2xl lg:text-3xl leading-snug line-clamp-2 text-dGrey font-semibold mb-4 md:w-4/5">
      How to design your site footer like we did
      </h2>
      <p className="md:w-3/4  text-[14px] md:text-p text-grey mb-8 line-clamp-4 ">
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
      <button className="btn-primary">
        Learn More
      </button>
    </ScrollReveal2>
    </div>
  </div>

</div>
</section>
  );
};

export default Calender;
