import React from "react";
import Section from "../Section";
import { achievementData } from "./data";
import { ScrollCounter } from "../Animations/ScrollReveal";

const Achievements: React.FC = () => {
  return (
    <div className="bg-silver my-[44px] lg:h-[202px] w-full">
      <Section id="">
        <div className=" block lg:flex justify-between items-center w-full h-full">
          {/* left side */}
          <div className="flex flex-col justify-center h-full py-[50px]">
            <h2 className=" leading-h2 text-h2 text-dGrey font-semibold">
              Helping a local <br />{" "}
              <span className="text-primary">business reinvent itself</span>
            </h2>
            <p className=" leading-p text-p text-grey">
              We reached here with our hard work and dedication
            </p>
          </div>
          {/* right side  */}
          <div className="grid grid-cols-2 gap-[20px] items-center justify-center">
            {achievementData.map((item, index) => (
              <div
                key={index}
                className="flex gap-2 items-center justify-center"
              >
                <img src={item.icon} alt="" />
                <div className="flex flex-col items-start justify-center ">
                  <ScrollCounter
                    className=" transition-all ease-in-out duration-300"
                    start={45000}
                    end={item.number}
                    duration={2}
                  />
                  <span className="text-p ">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Achievements;
