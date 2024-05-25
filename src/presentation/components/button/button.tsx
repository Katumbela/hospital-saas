import { ButtonHTMLAttributes, ElementType } from "react";
import { FaSpinner } from "react-icons/fa";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  leftIcon?: ElementType;
  icon?: ElementType;
  color?: string;
  rightIcon?: ElementType;
  isLoading?: boolean;
};

export function Button({
  text,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  icon: Icon,
  isLoading,
  className,
  color,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 transition-all gap-3 rounded-md flex ${
        className || ""
      } font-semibold  ${
        color === "primary"
          ? "bg-primary  hover:bg-primary/90"
          : "bg-white  hover:bg-white/90"
      }`}
      disabled={isLoading}
      {...props}
    >
      {LeftIcon && (isLoading ? <FaSpinner /> : <LeftIcon />)}
      <span className="my-auto">{text || ""}</span>
      {(RightIcon || Icon) &&
        (isLoading ? (
          <FaSpinner />
        ) : RightIcon ? (
          <RightIcon className="my-auto" />
        ) : (
          Icon && <Icon className="my-auto" />
        ))}
    </button>
  );
}
