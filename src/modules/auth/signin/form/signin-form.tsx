import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";
import React, { useState } from "react";
import CustomButton from "@/components/button/CustomButton";
import google from "@/assets/images/google.png";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "@/context/SnackbarProvider";

const SignIn = () => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const [load, setLoad] = useState(false);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email is required")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
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
      <h1 className="text-2xl leading-7 font-bold mb-2">
        Sign in to <span className="text-primary italic">Pchat</span>
      </h1>
      <CustomButton
        title={`Sign in with Google`}
        Icon={google}
        containerStyles="secondary-btn"
        textStyles="ml-2 text-dark-text"
      />
      <div className="flex items-center w-full">
        <div className="flex-grow bg-gray-400 h-px"></div>
        <p className="mx-4 text-gray-500 text-sm lowercase">
          or sign in with email
        </p>
        <div className="flex-grow bg-gray-400 h-px"></div>
      </div>
      <Form
        onSubmit={handleSubmit(() => {
          showSnackbar(
            "We couldn’t find an account matching the username and password you entered. Please check your username and password and try again.",
            "error"
          );
          setLoad(true);
        })}
        isLoading={load}
        submitButtonLabel="Sign In"
        form={
          <div className="relative">
            <ControlledInput
              control={control}
              errors={errors.email}
              name="email"
              inputProps={{ type: "text" }}
              label="Username Or Email"
            />
            <a
              className="link__text mt-[1.2rem] absolute right-5 "
              onClick={() => navigate("/session/?flow=password-reset")}
            >
              Forgot?
            </a>
            <ControlledInput
              control={control}
              errors={errors.password}
              name="password"
              label="Password"
              inputProps={{ type: "password" }}
            />
          </div>
        }
      />
      <p className="my-[20px] text-[14px] text-dark-text flex-center gap-1">
        Don't have an account?
        <a
          className="link__text ml-1"
          onClick={() => navigate("/session/?flow=signup")}
        >
          Sign up
        </a>
      </p>
    </React.Fragment>
  );
};

export default SignIn;
