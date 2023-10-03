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

type AuthFormFields = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const { setAuthData } = useAuthContext();
  const { showSnackbar } = useSnackbar();
  const $auth = useMutation(auth);

  const { control, handleSubmit, setValue } = useForm<AuthFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="auth-components-container">
      <h1 className="auth-title">
        Sign in to <span className="text-primary italic">Pchat</span>
      </h1>
      <CustomButton
        title={`Sign in with Google`}
        Icon={google}
        containerStyles="secondary"
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
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onError: (code) => {
                setValue("password", "");
                console.log(code);
                // showSnackbar(code.message, "error");
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
              inputProps={{ type: "text" }}
              label="Username Or Email"
            />
            <a
              className="link absolute right-1 bottom-10"
              onClick={() => navigate("/?flow=password-reset")}
            >
              Forgot?
            </a>
            <ControlledInput
              control={control}
              name="password"
              label="Password"
              inputProps={{ type: "password" }}
            />
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
