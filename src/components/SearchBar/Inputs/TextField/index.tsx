import { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.scss";

export const TextField = ({
  label,
  id,
  className,
  inputProps,
  labelProps,
  ...props
}: TextFieldProps) => {
  return (
    <div className={`${styles.inputContainer} ${className}`} {...props}>
      {label && (
        <label htmlFor={label} className={styles.label} {...labelProps}>
          {label}
        </label>
      )}
      <input
        className={`${styles.input} ${!label ? styles.withoutLabel : ""} ${
          inputProps?.className
        }`}
        {...inputProps}
      />
    </div>
  );
};
