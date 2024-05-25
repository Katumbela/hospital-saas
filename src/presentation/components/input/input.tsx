import { ElementType, InputHTMLAttributes } from "react";
import { FaSpinner } from "react-icons/fa";

export type IHProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  leftIcon?: ElementType;
  icon?: ElementType;
  color?: string;
  rightIcon?: ElementType;
  isLoading?: boolean;
  className?: string;
  divClass?: string;
};

export function InputHackyOff({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  divClass,
  icon: Icon,
  isLoading,
  placeholder,
  className,
  ...props
}: IHProps) {
  return (
    <div
      className={`${divClass} input border-2 focus-within:border-primary border-secondary py-2 px-4 rounded-xl`}
    >
      {LeftIcon && (isLoading ? <FaSpinner /> : <LeftIcon />)}
      <input
        {...props}
        type="email"
        placeholder={placeholder}
        className={`${className} my-auto text-black bg-transparent outline-none px-2 py-1 `}
        disabled={isLoading}
        {...props}
      />
      {(RightIcon || Icon) &&
        (isLoading ? (
          <FaSpinner />
        ) : RightIcon ? (
          <RightIcon className="my-auto" />
        ) : (
          Icon && <Icon className="my-auto" />
        ))}
    </div>
  );
}
