import { ReactNode } from "react";


type ButtonProps = {
  name: string;
  className: string
  // children: ReactNode
};

export const Button = ({ name, className, children }: ButtonProps) => {
  return (
    <button type='submit' className={className}>{name}</button>
  );
};
