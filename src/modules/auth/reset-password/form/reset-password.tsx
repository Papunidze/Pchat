import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";
import React, { useState } from "react";
import { useSnackbar } from "@/context/SnackbarProvider";

const ResetPassword = () => {
  const { showSnackbar } = useSnackbar();
  const [load, setLoad] = useState(false);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email is required")
      .required("Email is required"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <React.Fragment>
      <h1 className="title ">Forgot Password?</h1>
      <p className="text-[14px] mt-[16px]">
        Enter the email address you used when you joined and we’ll send you
        instructions to reset your password.
      </p>
      <p className="text-[14px] mt-[16px]">
        For security reasons, we do NOT store your password. So rest assured
        that we will never send your password via email.
      </p>

      <Form
        onSubmit={handleSubmit(() => {
          showSnackbar(
            "We couldn’t find an account matching the username and password you entered. Please check your username and password and try again.",
            "error"
          );
          setLoad(true);
        })}
        isLoading={load}
        submitButtonLabel="Send Reset Instructions"
        form={
          <div className="relative">
            <ControlledInput
              control={control}
              errors={errors.email}
              name="Email"
              inputProps={{ type: "text" }}
              label="Email Address"
            />
          </div>
        }
      />
    </React.Fragment>
  );
};

export default ResetPassword;
