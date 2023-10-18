import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/button/custom-button";
import google from "@/assets/images/google.png";
import { useNavigate } from "react-router-dom";

import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";

import "@/modules/auth/auth-styles.css";
import { useMutation } from "react-query";
import { signUpInputs, signup } from "../signup.api";
import { useAuthContext } from "@/context/login-provider";
import { useSnackbar } from "@/context/snackbar-provider";
import { errorsResponse } from "@/app/error";

const SignUp = () => {
  const navigate = useNavigate();
  const { setAuthData } = useAuthContext();
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
    email: yup
      .string()
      .email(errorsResponse["errors.invalid_email"])
      .required(errorsResponse["errors.requires"]),
    password: yup
      .string()
      .min(6, errorsResponse["errors.min_6"])
      .required(errorsResponse["errors.requires"]),
    passwordConfirm: yup
      .string()
      .test(
        "passwords-match",
        errorsResponse["errors.not_matches_password"],
        function (value) {
          return value === this.parent.password;
        }
      )
      .required(errorsResponse["errors.requires"]),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<signUpInputs>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      username: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(schema),
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
        handleClick={() => {
          window.location.href = `${
            import.meta.env.VITE_REACT_APP_LOCAL_URL
          }/auth/google`;
        }}
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
              onError: (error) => {
                const customError = error as { errorKey: string };
                showSnackbar(errorsResponse[customError.errorKey], "error");
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
                errors={errors.name}
              />
              <ControlledInput
                control={control}
                name="username"
                inputProps={{ type: "text" }}
                label="Username"
                errors={errors.username}
              />
            </div>
            <ControlledInput
              control={control}
              name="email"
              inputProps={{ type: "text" }}
              label="Email"
              errors={errors.email}
            />
            <div className="row__input_contianer">
              <ControlledInput
                control={control}
                name="password"
                label="Password"
                errors={errors.password}
                inputProps={{ type: "password" }}
              />
              <ControlledInput
                control={control}
                name="passwordConfirm"
                label="Repeat Password"
                errors={errors.passwordConfirm}
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
