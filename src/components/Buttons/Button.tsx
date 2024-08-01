import React from "react";

type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, className, icon }) => {
  return (
    <button
      className={`  ${
        className
          ? className
          :'btn-primary' } `}
      onClick={onClick}
    >
    {label}
    {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;

