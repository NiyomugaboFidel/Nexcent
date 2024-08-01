import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Button from "../Buttons/Button";
import data from "./data";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" z-10 h-[10vh]  w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <div className="z-10 header flex justify-between items-center px-4 lg:px-24 gap-6 fixed h-16 bg-white border w-full shadow-md">
        <div className="left-header flex items-center">
         <a href="" className="">
         <img className="w-32 h-8" src="/logo.svg" alt="Logo" />
         </a>
        </div>
        <nav className="right-header hidden lg:flex items-center gap-4">
          <ul className="flex items-center gap-4 text-textColor">
            {data.map((item, index) => (
              <li
                key={index}
                className="list-none text-center font-medium text-sm px-4 py-2"
              >
                <a href={item.link} className="hover:text-primary transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <Button
            label="Register Now"
            icon={<FaLongArrowAltRight className="w-3 h-3" />}
          />
        </nav>
        <div className="lg:hidden flex items-center">
        <button className="px-4">
        {!open ? (
            <HiMenuAlt3
              className="cursor-pointer"
              size={25}
              onClick={() => setOpen(true)}
            />
          ) : (
            <IoClose
              className="cursor-pointer"
              size={25}
              onClick={() => setOpen(false)}
            />
          )}
        </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden bg-white fixed top-16 right-0 w-full h-full flex flex-col items-center gap-6 p-6 border-t">
          <ul className="flex flex-col items-center gap-4 text-textColor">
            {data.map((item, index) => (
              <li
                key={index}
                className="list-none text-center font-medium text-base py-2 w-full "
                onClick={() => setOpen(false)}
              >
                <a href={item.link} className="block w-full">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            label="Register Now"
            icon={<FaLongArrowAltRight className="w-3 h-3" />}
          />
        </nav>
      )}
    </header>
  );
};

export default Header;
