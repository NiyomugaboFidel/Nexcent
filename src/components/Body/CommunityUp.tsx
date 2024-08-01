import React from "react";
import Section from "../Section";
import { blogs } from "./data";
import Button from "../Buttons/Button";
import { FaLongArrowAltRight } from "react-icons/fa";

const CommunityUp: React.FC = () => {
  return (
    <Section id="blog">
      <div className="">
        <div className="flex flex-col items-center justify-center lg:h-[354px]">
          <div>
            <h2 className=" text-center line-clamp-1 leading-snug lg:text-h2 text-dGrey font-semibold">
              Caring is the new marketing
            </h2>
            <p className="text-center line-clamp-3 lg:px-[150px] leading-p text-[14px] md:text-p text-dGrey ">
              The Nextcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </div>
          <div className=" relative flex md:mt-[11px] pt-[6px] ">
            <div className=" relative grid md:grid-cols-4 lg:gap-[16px] gap-[60px] items-center justify-center">
              {blogs.map((blog, index) => (
                <div className="h-[100%] " key={index}>
                  <div className=" relative h-[100%]">
                    <img
                      className=" object-cover object-center"
                      src={blog.image}
                      alt=""
                    />
                    <div className="bg-silver flex flex-col items-center justify-center rounded-lg shadow-lg absolute mx-5 px-[17px] py-[17px] bottom-[-50px] lg:w-[220px] lg:h-[120px] ">
                    <p className="text-grey leading-p text-p  text-center font-semibold line-clamp-2">
                      {blog.desc}
                    </p>
                    <Button
                      className="flex items-center justify-center bg-transparent py-2 gap-2 text-primary"
                      label="Readmore"
                      icon={
                        <FaLongArrowAltRight className="w-[11px] h-[11px]" />
                      }
                    />
                  </div>
                  </div>
            
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CommunityUp;