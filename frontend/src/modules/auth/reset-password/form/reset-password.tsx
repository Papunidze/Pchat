import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";
import "@/modules/auth/auth-styles.css";
import { useMutation } from "react-query";
import { recovery } from "../reset-password.api";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "@/context/SnackbarProvider";
import { errorsResponse } from "@/app/error";
interface RecoveryFormFields {
  email: string;
}

const ResetPassword = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(errorsResponse["errors.invalid_email"])
      .required(errorsResponse["errors.requires"]),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoveryFormFields>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const $recovery = useMutation(recovery);
  const { showSnackbar } = useSnackbar();
  const onSubmit = (form: RecoveryFormFields) => {
    $recovery.mutate({ ...form });
    navigate("/");
    showSnackbar(
      "If this email address was used to create an account, instructions to reset your password will be sent to you. Please check your email.",
      "info"
    );
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
        onSubmit={handleSubmit((form) => onSubmit(form))}
        isLoading={false}
        submitButtonLabel="Send Reset Instructions"
        form={
          <div className="form-container">
            <ControlledInput
              control={control}
              name="email"
              errors={errors.email}
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
