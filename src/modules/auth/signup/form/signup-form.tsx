import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";

import CustomButton from "@/components/button/CustomButton";
import google from "@/assets/images/google.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required("required"),
    email: yup.string().email("email").required("required"),
    password: yup.string().min(8, "min_number_8").required("required"),
    confirmPassword: yup
      .string()
      .min(8, "min_number_8")
      .oneOf([yup.ref("password"), undefined], "confirm_password"),
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
        Sign up to <span className="text-primary italic">Pchat</span>
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
          or sign up with email
        </p>
        <div className="flex-grow bg-gray-400 h-px"></div>
      </div>
      <Form
        onSubmit={handleSubmit((form) => console.log(form))}
        submitButtonLabel="Sign Up"
        form={
          <div className="relative">
            <div className="flex gap-2 flex-col lg:flex-row">
              <ControlledInput
                control={control}
                errors={errors.email}
                name="name"
                inputProps={{ type: "text" }}
                label="Name"
              />
              <ControlledInput
                control={control}
                errors={errors.email}
                name="username"
                inputProps={{ type: "text" }}
                label="Username"
              />
            </div>
            <ControlledInput
              control={control}
              errors={errors.email}
              name="email"
              inputProps={{ type: "text" }}
              label="Email"
            />
            <div className="flex gap-2 flex-col lg:flex-row">
              <ControlledInput
                control={control}
                errors={errors.password}
                name="password"
                label="Password"
                inputProps={{ type: "password" }}
              />
              <ControlledInput
                control={control}
                errors={errors.password}
                name="confirmPassword"
                label="Repeat Password"
                inputProps={{ type: "password" }}
              />
            </div>
          </div>
        }
      />
      <p className="my-[20px] text-[14px] text-dark-text flex-center gap-1">
        Already have an account?
        <a
          className="link__text ml-1"
          onClick={() => navigate("/session/?flow=signin")}
        >
          Sign in
        </a>
      </p>
    </React.Fragment>
  );
};

export default SignUp;
