import React from "react";
import Section from "../Section";
import { achievementData } from "./data";
import { ScrollCounter } from "../Animations/ScrollReveal";

const Achievements: React.FC = () => {
  return (
    <div id="features" className="bg-silver py-8 lg:py-16">
      <Section id="achievements" className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full px-4 lg:px-8">
          {/* Left Side */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 py-6 lg:py-0">
            <h2 className="text-xl lg:text-3xl font-semibold text-dGrey text-center lg:text-left mb-4 lg:mb-6">
              Helping a local <br />{" "}
              <span className="text-primary">business reinvent itself</span>
            </h2>
            <p className="text-sm lg:text-base text-grey text-center lg:text-left">
              We reached here with our hard work and dedication
            </p>
          </div>
          {/* Right Side */}
          <div className="grid grid-cols-2 gap-4 lg:gap-8 items-center justify-center lg:justify-start lg:w-1/2">
            {achievementData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                <img src={item.icon} alt={item.name} className="w-8 h-8 lg:w-12 lg:h-12" />
                <div className="flex flex-col items-start">
                  <ScrollCounter
                    className="text-xl lg:text-2xl font-bold transition-all ease-in-out duration-300"
                    start={45000}
                    end={item.number}
                    duration={2}
                  />
                  <span className="text-sm lg:text-base">{item.name}</span>
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
