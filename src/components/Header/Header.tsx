import Button from "../Buttons/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import data from "./data";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";


const Header = () => {
  const [Open, setOpen] = useState<boolean>(false);

  return (
    <div className="  relative w-full h-[10vh]">
      <div
        className=" z-10 header flex justify-between 
      items-center px-[50px] lg:px-[100px] gap-[44px]
       fixed h-[60px] bg-white border  w-full "
      >
        <div className="left-header">
          <div className="">
            <span className="flex">
              <img className="w-full h-full" src="/logo.svg" alt="" />
             
            </span>
          </div>
        </div>
        {/* right side  */}

        
        <nav className="right-header bg-white navbar hidden lg:flex gap-[17px]">
          <div className="lg:flex items-center justify-center text-textColor gap-[17px]">
            {data.map((item, i) => (
              <li
                key={i}
                onClick={()=> setOpen(!Open)}
                className={` list-none text-center leading-[17px] font-[500] text-[11px] px-[17px]`}
              >
               <a href={item.link}>{item.name}</a>

              </li>
            ))}
          </div>
          <div>
            <Button
              label="Register Now"
              icon={<FaLongArrowAltRight className="w-[11px] h-[11px]" />}
            />
          </div>
        </nav>
        
        {/* menu bar */}
        <div
          className={`right-header  bg-white ${
            Open ? "top-[60px] right-[0px] " : "top-[100px] right-[-100%]"
          } h-[100vh]  border p-4 
            block absolute transition-all 
         ease-in-out  duration-500 lg:hidden gap-[17px] `}
        >
          <div
            className={`lg:flex mt-[3rem] items-center 
              justify-center text-textColor lg:gap-[17px]`}
          >
            {data.map((item, i) => (
              <li
                key={i}
                onClick={() => setOpen((prev) => !prev)}
                className={`
                  p-2 rounded-md shadow-sm border my-5 w-full  list-none  leading-[17px] font-[500]  px-[17px]`}
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </div>
          <div>
            <Button
              label="Register Now"
              icon={<FaLongArrowAltRight className="w-[11px] h-[11px]" />}
            />
          </div>
        </div>

        {/* menu */}
        <div className=" block lg:hidden">
          {!Open ? (
            <HiMenuAlt3
              className=" cursor-pointer"
              size={25}
              onClick={() => setOpen((prev) => !prev)}
            />
          ) : (
            <IoClose
              className=" cursor-pointer"
              size={25}
              onClick={() => setOpen((prev) => !prev)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
