import React from "react";
import Client from "../Client/Client";
import data from "./data";
import ScrollReveal from "../Animations/ScrollReveal";

const Community: React.FC = () => {
  return (
    <section id="community" className="bg-white py-8 lg:py-16">
      <Client />
      <div className="w-full py-8 lg:py-16 px-4 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl lg:text-4xl font-semibold text-black leading-tight">
              Manage your entire community <br />
              in a single system
            </h2>
            <p className="text-sm lg:text-base text-dGrey leading-relaxed">
              Who is Nextcent suitable for?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.map((item, index) => (
              <div
                className="flex flex-col items-center text-center p-4 lg:p-6 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-300"
                key={index}
              >
                <img className="w-16 h-16 lg:w-24 lg:h-24 mb-4" src={item.icon} alt={item.title} />
                <h2 className="text-lg lg:text-xl font-semibold mb-2">
                  {item.title}
                </h2>
                <p className="text-sm lg:text-base text-dGrey">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Community;
