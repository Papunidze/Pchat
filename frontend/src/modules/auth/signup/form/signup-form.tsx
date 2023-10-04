import { useForm } from "react-hook-form";
import CustomButton from "@/components/button/CustomButton";
import google from "@/assets/images/google.png";
import { useNavigate } from "react-router-dom";

import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";

import "@/modules/auth/auth-styles.css";
import { useMutation } from "react-query";
import { signUpInputs, signup } from "../signup.api";
import { useAuthContext } from "@/context/login-provider";

const SignUp = () => {
  const navigate = useNavigate();
  const { setAuthData } = useAuthContext();

  const { handleSubmit, control } = useForm<signUpInputs>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      username: "",
      passwordConfirm: "",
    },
  });

  const $registration = useMutation(signup);

  return (
    <div className="auth-components-container">
      <h1 className="auth-title">
        Sign up to <span className="text-primary italic">Pchat</span>
      </h1>
      <CustomButton
        title={`Sign up with Google`}
        Icon={google}
        containerStyles="secondary"
      />
      <div className="text-divider">
        <div className="divider-line"></div>
        <p className="text-divider-label">or sign up with email</p>
        <div className="divider-line"></div>
      </div>
      <Form
        onSubmit={handleSubmit((form) =>
          $registration.mutate(
            { ...form },
            {
              onSuccess: ({ ...args }) => {
                setAuthData({ ...args });
                navigate(location.pathname);
              },
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onError: (code) => {
                console.log(form);
                console.log(code);
                // showSnackbar(code.message, "error");
              },
            }
          )
        )}
        isLoading={false}
        submitButtonLabel="Sign Up"
        form={
          <div className="relative flex flex-col gap-2">
            <div className="row__input_contianer">
              <ControlledInput
                control={control}
                name="name"
                inputProps={{ type: "text" }}
                label="Name"
              />
              <ControlledInput
                control={control}
                name="username"
                inputProps={{ type: "text" }}
                label="Username"
              />
            </div>
            <ControlledInput
              control={control}
              name="email"
              inputProps={{ type: "text" }}
              label="Email"
            />
            <div className="row__input_contianer">
              <ControlledInput
                control={control}
                name="password"
                label="Password"
                inputProps={{ type: "password" }}
              />
              <ControlledInput
                control={control}
                name="passwordConfirm"
                label="Repeat Password"
                inputProps={{ type: "password" }}
              />
            </div>
          </div>
        }
      />

      <p className="auth-footer-text">
        Already have an account?
        <a className="link" onClick={() => navigate("/?flow=signin")}>
          Sign in
        </a>
      </p>
    </div>
  );
};

export default SignUp;
