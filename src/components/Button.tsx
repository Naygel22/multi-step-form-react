

type ButtonProps = {
  name: string;
  className: string
};

export const Button = ({ name, className }: ButtonProps) => {
  return (
    <button type='submit' className={className}>{name}</button>
  );
};
