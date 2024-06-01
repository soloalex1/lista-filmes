import { ReactNode } from 'react';

type ButtonProps = {
  title: string;
  icon: ReactNode;
  onClick(): void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  onClick,
}: ButtonProps) => {
  return (
    <button
      aria-label={title}
      onClick={onClick}
      className="h-full border-l-4 bg-black border-black w-24 text-center inline-flex justify-center items-center"
    >
      {icon}
    </button>
  );
};

export default Button;
