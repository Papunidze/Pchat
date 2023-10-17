import { Form } from "@/components/form/form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useMutation } from "react-query";
import { updateUser } from "../settings-api";
import { useForm } from "react-hook-form";
import { errorsResponse } from "@/app/error";
import { UserState } from "@/context/login-provider";
import { useSnackbar } from "@/context/SnackbarProvider";
import { ControlledInput } from "@/components/input/controlled-input";

interface updateUserProps {
  user: UserState | null;
  avatar: string;
}
const UpdateUser = ({ user, avatar }: updateUserProps) => {
  const { showSnackbar } = useSnackbar();

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, errorsResponse["errors.min_3"])
      .max(50)
      .matches(/^[A-Za-z\s]+$/, errorsResponse["errors.only_alpabets"])
      .required(errorsResponse["errors.requires"]),
    username: yup
      .string()
      .min(3, errorsResponse["errors.min_3"])
      .max(20)
      .test(
        "no-whitespace",
        errorsResponse["errors.no_whitespace"],
        (value: string | undefined) => !/\s/.test(value || "")
      )
      .required(errorsResponse["errors.requires"]),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      username: user?.username || "",
    },
    resolver: yupResolver(schema),
  });

  const $updateUser = useMutation(updateUser);
  return (
    <Form
      onSubmit={handleSubmit((form) =>
        $updateUser.mutate(
          { ...form, avatar },
          {
            onSuccess: () => {
              showSnackbar(
                "Your data has been updated successfully",
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
      isLoading={$updateUser.isLoading}
      submitButtonLabel="Save"
      btnStyle="w-fit  px-5"
      form={
        <>
          <ControlledInput
            control={control}
            name="name"
            inputProps={{ type: "text" }}
            label="Name"
            errors={errors.name}
          />
          <ControlledInput
            control={control}
            name="username"
            label="Username"
            inputProps={{ type: "text" }}
            errors={errors.username}
          />
        </>
      }
    />
  );
};

export default UpdateUser;
