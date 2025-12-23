import { IChildrenProps } from "@/utils/types/children";

interface IButtonProps extends IChildrenProps {
  className?: string;
  type?: "button" | "submit" | "reset";
}

function Button({ children, className, type = "button" }: IButtonProps) {
  return (
    <button className={`w-full h-12 bg-red-500 ${className}`} type={type}>
      {children}
    </button>
  );
}

export { Button };
