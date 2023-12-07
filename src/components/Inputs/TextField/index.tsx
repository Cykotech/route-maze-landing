import { TextFieldProps } from "./TextField.types";

export const TextField = ({ label, id, ...props }: TextFieldProps) => {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <input {...props}></input>
    </>
  );
};
