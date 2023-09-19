import { useForm } from "react-hook-form";
import CustomButton from "@/components/button/CustomButton";
import google from "@/assets/images/google.png";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";

import "@/modules/auth/auth-styles.css";

const SignIn = () => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
  };

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
        <p className="text-divider-label">or sign in with email</p>
        <div className="divider-line"></div>
      </div>

      <Form
        onSubmit={handleSubmit((data) => onSubmit(data))}
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
              className="link absolute right-5 top-24 mt-2"
              onClick={() => navigate("/session/?flow=password-reset")}
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
        <a className="link" onClick={() => navigate("/session/?flow=signup")}>
          Sign up
        </a>
      </p>
    </div>
  );
};

export default SignIn;
