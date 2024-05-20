import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
}

const Button = (props: IProps) => {
  const { children, className, handleClick } = props;
  return (
    <button
      className={`bg-purple text-cardText px-12 py-4 border-2 border-cardText rounded-[5%] relative ${className}`}
      onClick={handleClick}
    >
      <span className="absolute top-1/2 rounded-[5%] inset-x-0 bottom-0 bg-purple blur-[25px]"></span>
      <span className="relative">{children}</span>
    </button>
  );
};

export default Button;
