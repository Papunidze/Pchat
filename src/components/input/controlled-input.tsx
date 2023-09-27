import { Controller, Control } from "react-hook-form";
import FormControl from "@/components/input/form-controll";

type ControlledInputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  inputProps?: object;
  label?: string;
  style?: string;
};

export const ControlledInput = ({
  name,
  inputProps,
  label,
  control,
  style,
}: ControlledInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl label={label}>
          <input
            {...inputProps}
            {...field}
            defaultValue={""}
            className={`input ${style}`}
          />
        </FormControl>
      )}
    />
  );
};
