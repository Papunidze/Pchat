import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form } from "@/cmp-domain/form/form";
import { ControlledInput } from "@/cmp-domain/input/controlled-input";
import { useSnackbar } from "@/utils/snackbar/snackbar-provider";
import { useState } from "react";

import CustomButton from "@/cmp-domain/button/CustomButton";
import google from "@/assets/google.png";
import { useNavigate } from "react-router-dom";
import Auth from "@/modules/auth";

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
    <Auth>
      <section className="flex-center flex-col gap-3 max-w-[450px] m-auto  lg:ml-[100px] w-full p-4">
        <h1 className="text-2xl leading-7 font-bold">
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
                onClick={() => navigate("/password-reset")}
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
        <p className="my-[20px] text-[14px] text-dark-text">
          Don't have an account?
          <a className="link__text ml-1" onClick={() => navigate("/signup")}>
            Sign up
          </a>
        </p>
      </section>
    </Auth>
  );
};

export default SignIn;
