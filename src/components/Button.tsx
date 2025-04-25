import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  // w-10 h-10が含まれていればpaddingを0にする
  const isIconButton = className.includes("w-10") && className.includes("h-10");
  return (
    <button
      className={`rounded-lg text-xl transition-colors duration-300 ${isIconButton ? '!p-0' : 'px-4 py-3'} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;