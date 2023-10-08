import { ReactNode } from "react";

type CustomFormControlProps = {
  children: ReactNode;
  label?: string;
  error?: boolean;
  helperText?: string;
};
export const FormControl = (props: CustomFormControlProps) => {
  return (
    <div className="flex flex-col">
      <label className="label">{props.label}</label>

      {props.children}
      {props.error && (
        <label className="text-primary text-xs font-montserrat font-normal ml-1 mt-1">
          {props.helperText}
        </label>
      )}
    </div>
  );
};

export default FormControl;
