import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/button/CustomButton";
import google from "@/assets/images/google.png";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";

import { auth } from "@/modules/auth/signin/signin.api";
import { useMutation } from "react-query";
import "@/modules/auth/auth-styles.css";
import { useAuthContext } from "@/context/login-provider";
import { useSnackbar } from "@/context/SnackbarProvider";
import { errorsResponse } from "@/app/error";

type AuthFormFields = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const { setAuthData } = useAuthContext();
  const { showSnackbar } = useSnackbar();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(errorsResponse["errors.invalid_email"])
      .required(errorsResponse["errors.requires"]),
    password: yup
      .string()
      .min(6, errorsResponse["errors.min_6"])
      .required(errorsResponse["errors.requires"]),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AuthFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const $auth = useMutation(auth);

  return (
    <div className="auth-components-container">
      <h1 className="auth-title">
        Sign in to <span className="text-primary italic">Pchat</span>
      </h1>
      <CustomButton
        title={`Sign in with Google`}
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
        <p className="text-divider-label ">or sign in with email</p>
        <div className="divider-line"></div>
      </div>

      <Form
        onSubmit={handleSubmit((form) =>
          $auth.mutate(
            { ...form },
            {
              onSuccess: ({ ...args }) => {
                setAuthData({ ...args });
                navigate(location.pathname);
              },
              onError: (error) => {
                const customError = error as { errorKey: string };
                showSnackbar(errorsResponse[customError.errorKey], "error");
                setValue("password", "");
              },
            }
          )
        )}
        isLoading={false}
        submitButtonLabel="Sign In"
        form={
          <div className="form-container">
            <ControlledInput
              control={control}
              name="email"
              errors={errors.email}
              inputProps={{ type: "text" }}
              label="Username Or Email"
            />
            <div className="relative">
              <a
                className="link  right-1  absolute text-end top-1"
                onClick={() => navigate("/?flow=password-reset")}
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
          </div>
        }
      />
      <p className="auth-footer-text">
        Don't have an account?
        <a className="link" onClick={() => navigate("/?flow=signup")}>
          Sign up
        </a>
      </p>
    </div>
  );
};

export default SignIn;
