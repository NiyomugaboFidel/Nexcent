type props = {
  label: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

const Button = ({ label, onClick, className, icon }: props) => {
  return (
    <button
      className={` hover:scale-[1.1] transition-all ease-in-out duration-300 flex items-center text-center  text-[11px] font-[500]  ${
        className
          ? className
          :' bg-primary lg:h-[36.50px] lg:w-[133.25px] rounded-[3px] gap-[5.57px] py-[4px] lg:py-[9px] px-[22px] text-white' } `}
      onClick={onClick}
    >
      {label}
      <span>{icon}</span>
    </button>
  );
};

export default Button;
