import { ButtonHTMLAttributes, ElementType } from "react";
import { FaSpinner } from "react-icons/fa";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  leftIcon?: ElementType;
  icon?: ElementType;
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
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn text-white   ${className || ""}`}
      disabled={isLoading}
      {...props}
    >
      {LeftIcon && (isLoading ? <FaSpinner /> : <LeftIcon />)}
      {text || ""}
      {(RightIcon || Icon) &&
        (isLoading ? (
          <FaSpinner />
        ) : RightIcon ? (
          <RightIcon />
        ) : (
          Icon && <Icon />
        ))}
    </button>
  );
}
