import { ButtonProps } from "./Button.types";
import styles from "./button.module.scss";

export const Button = ({ children, buttonType = "primary" }: ButtonProps) => {
  return (
    <button className={styles[`button--${buttonType}`]}>{children}</button>
  );
};
