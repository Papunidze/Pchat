import { Form } from "@/components/form/form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useMutation } from "react-query";
import { updatePassword } from "../settings-api";
import { useForm } from "react-hook-form";
import { errorsResponse } from "@/app/error";

import { useSnackbar } from "@/context/SnackbarProvider";
import { ControlledInput } from "@/components/input/controlled-input";

const UpdatePassword = () => {
  const { showSnackbar } = useSnackbar();

  const schema = yup.object().shape({
    password: yup
      .string()
      .min(6, errorsResponse["errors.min_6"])
      .required(errorsResponse["errors.requires"]),
    newPassword: yup
      .string()
      .min(6, errorsResponse["errors.min_6"])
      .required(errorsResponse["errors.requires"]),
    newPasswordConfirm: yup
      .string()
      .test(
        "passwords-match",
        errorsResponse["errors.not_matches_password"],
        function (value) {
          return value === this.parent.newPassword;
        }
      )
      .required(errorsResponse["errors.requires"]),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
    resolver: yupResolver(schema),
  });

  const $updatePassword = useMutation(updatePassword);

  return (
    <Form
      onSubmit={handleSubmit((form) =>
        $updatePassword.mutate(
          { ...form },
          {
            onSuccess: () => {
              showSnackbar(
                "Your password has been successfully reset",
                "success"
              );
            },
            onError: (error) => {
              const customError = error as { errorKey: string };
              showSnackbar(errorsResponse[customError.errorKey], "error");
            },
          }
        )
      )}
      isLoading={$updatePassword.isLoading}
      submitButtonLabel="Save"
      btnStyle="w-fit  px-5"
      form={
        <div className="">
          <ControlledInput
            control={control}
            name="password"
            inputProps={{ type: "password" }}
            label="Current password"
            errors={errors.password}
          />
          <ControlledInput
            control={control}
            name="newPassword"
            label="New password"
            inputProps={{ type: "password" }}
            errors={errors.newPassword}
          />
          <ControlledInput
            control={control}
            name="newPasswordConfirm"
            label="Confirm password"
            inputProps={{ type: "password" }}
            errors={errors.newPasswordConfirm}
          />
        </div>
      }
    />
  );
};

export default UpdatePassword;
