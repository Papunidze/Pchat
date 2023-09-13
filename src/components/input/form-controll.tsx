import { ReactNode } from "react";

type CustomFormControlProps = {
  children: ReactNode;
  label?: string;
};
export const FormControl = (props: CustomFormControlProps) => {
  return (
    <div className="flex flex-col">
      <label className="input__label">{props.label}</label>
      {props.children}
    </div>
  );
};

export default FormControl;
