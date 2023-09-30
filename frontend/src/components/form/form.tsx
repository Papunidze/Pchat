import { ReactNode } from "react";
import CustomButton from "@/components/button/CustomButton";

type FormProps = {
  form: ReactNode;
  onSubmit: () => void;
  submitButtonLabel?: string;
  submitButtonProps?: object;
  isLoading?: boolean;
  btnStyle?: string;
};

export const Form = ({
  form,
  onSubmit,
  submitButtonProps,
  submitButtonLabel,
  isLoading,
  btnStyle,
}: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-2">
        {form}
        <CustomButton
          containerStyles={`primary mt-2 ${btnStyle}`}
          title={submitButtonLabel || "Submit"}
          btnType="submit"
          isLoading={isLoading}
          submitButtonProps={submitButtonProps}
        />
      </div>
    </form>
  );
};
