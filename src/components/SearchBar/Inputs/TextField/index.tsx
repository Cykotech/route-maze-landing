import { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.scss";

export const TextField = ({ label, id, ...props }: TextFieldProps) => {
  return (
    <div className={styles.inputContainer}>
      {label && (
        <label
          htmlFor={label}
          className={styles.label}>
          {label}
        </label>
      )}
      <input className={styles.input}></input>
    </div>
  );
};
