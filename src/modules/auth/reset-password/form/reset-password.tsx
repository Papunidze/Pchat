import { useForm } from "react-hook-form";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";
import "@/modules/auth/auth-styles.css";

const ResetPassword = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <div className="auth-components-container">
      <h1>Forgot Password?</h1>
      <p className="text-description">
        Enter the email address you used when you joined, and we’ll send you
        instructions to reset your password.
      </p>
      <p className="text-description">
        For security reasons, we do NOT store your password. So rest assured
        that we will never send your password via email.
      </p>
      <Form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        isLoading={false}
        submitButtonLabel="Send Reset Instructions"
        form={
          <div className="form-container">
            <ControlledInput
              control={control}
              name="email"
              inputProps={{ type: "text" }}
              label="Email Address"
            />
          </div>
        }
      />
    </div>
  );
};

export default ResetPassword;
