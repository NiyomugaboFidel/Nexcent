import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

const Section = ({ children, className = "", id }: Props) => {
  return (
    <section
      id={id}
      className={`hero w-full lg:px-[100px] px-[25px] lg:py-[30px] py-[15px] ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
