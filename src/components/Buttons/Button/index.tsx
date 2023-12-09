import { ButtonProps } from "./Button.types";
import styles from "./button.module.scss";

export const Button = ({
  children,
  buttonType = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles[`button--${buttonType}`]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
