import { ButtonProps } from "../Button/Button.types";
import styles from "./TabButton.module.scss";

export const TabButton = ({ children, active }: ButtonProps) => {
  return (
    <button className={active ? styles.activeTab : styles.inactiveTab}>
      {children}
    </button>
  );
};
