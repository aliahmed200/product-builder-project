import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({
  children,
  className = "",
  width = "w-full",
  ...rest
}: Iprops) => {
  return (
    <button
      className={`rounded-md text-white p-2 ${width} ${className} `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
