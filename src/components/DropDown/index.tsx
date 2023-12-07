import { DropDownProps } from "./DropDown.types";

export const DropDown = ({ children, ...props }: DropDownProps) => {
  return <select {...props}>{children}</select>;
};
