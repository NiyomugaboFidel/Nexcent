import React from "react";
import Client from "../Client/Client";
import Section from "../Section";
import data from "./data";
import ScrollReveal from "../Animations/ScrollReveal";

const Community: React.FC = () => {
  return (
    <Section id="community" className="bg-white">
      <Client />
      <div className="w-full h-full py-[27px]">
        <ScrollReveal>
        <div className="h-full flex items-center flex-col  ">
          <h2 className="text-black lg:leading-h2 lg:text-h2 font-semibold text-center">
            Manage your entire community <br />
            in a single system
          </h2>
          <p className="text-dGrey text-p leading-p text-center">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="grid grid-cols-3  py-[11px]  w-full gap-[20px] lg:gap-[89px] items-center">
          {data.map((item, index) => (
            <div
              className="flex shadow-md hover:scale-110 lg:hover:scale-125 transition-all ease-in-out duration-300 px-[10px] py-[8px] rounded-lg p-[20px] lg:p-[40px] flex-col items-center text-center justify-center"
              key={index}
            >
              <img src={item.icon} alt="" />
              <h2 className=" lg:leading-h2 lg:text-h2 p-2 leading-[12px] text-[12px]  font-semibold">
                {item.title}
              </h2>
              <p className="lg:leading-p leading-[8px]  lg:text-p text-[8px] md:text-[6px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default Community;
