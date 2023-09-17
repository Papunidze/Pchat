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
import "@/modules/auth/style.css";
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
      <h1 className="title">
        Sign in to <span className="text-primary italic">Pchat</span>
      </h1>
      <CustomButton
        title={`Sign in with Google`}
        Icon={google}
        containerStyles="secondary-btn"
        textStyles="ml-2"
      />
      <div className="text-divider">
        <div className="divider-line"></div>
        <p className="text-divider-label">or sign in with email</p>
        <div className="divider-line"></div>
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
          <div className="form-container">
            <ControlledInput
              control={control}
              errors={errors.email}
              name="email"
              inputProps={{ type: "text" }}
              label="Username Or Email"
            />
            <a
              className="link__text  mt-[1.2rem] absolute right-5"
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

      <p className="footer-text">
        Don't have an account?
        <a
          className="footer-link link__text"
          onClick={() => navigate("/session/?flow=signup")}
        >
          Sign up
        </a>
      </p>
    </React.Fragment>
  );
};

export default SignIn;
