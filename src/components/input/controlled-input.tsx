import { Control, Controller, FieldError } from "react-hook-form";
import FormControl from "@/components/input/form-controll";

type ControlledInputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  errors: FieldError | undefined;
  name: string;
  inputProps?: object;
  label?: string;
};

export const ControlledInput = ({
  control,
  name,
  inputProps,
  label,
}: ControlledInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl label={label}>
          <input {...inputProps} {...field} className={`custom-input `} />
        </FormControl>
      )}
    />
  );
};
