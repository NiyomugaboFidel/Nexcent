import React from "react";
type props = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

const Section= ({ children, className, id }: props) => {
  return (
    <section
      id={id}
      className={`hero
     lg:px-[100px] px-[25px] lg:py-[30px] py-[15px]  w-full ${className} `}
    >
      {children}
    </section>
  );
};

export default Section;
