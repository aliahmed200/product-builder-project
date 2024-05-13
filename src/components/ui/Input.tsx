import { InputHTMLAttributes } from "react";
interface Iprops extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: Iprops) => {
  return (
    <input
      className="rounded-md px-3 py-2 border-[1px] border-gray-300 shadow-md focus:outline-indigo-500 transition text-md"
      {...rest}
    />
  );
};

export default Input;
