import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form } from "@/cmp-domain/form/form";
import { ControlledInput } from "@/cmp-domain/input/controlled-input";
import { useSnackbar } from "@/utils/snackbar/snackbar-provider";
import { useState } from "react";
import Auth from "@/modules/auth";

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
    <Auth>
      <section className="flex flex-col gap-3 max-w-[450px] m-auto  lg:ml-[100px] w-full p-4">
        <h1 className="text-2xl leading-7 font-bold ">Forgot Password?</h1>
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
      </section>
    </Auth>
  );
};

export default ResetPassword;
