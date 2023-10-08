import Images from "@/components/preloader/images";
import banner from "@/assets/images/banner.png";

import "./index.css";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { recovery } from "./recovery-api";
import { useSnackbar } from "@/context/SnackbarProvider";
interface RecoveryInputValue {
  password: string;
}

const Recovery = () => {
  const { token = "" } = useParams<string>();
  const navigate = useNavigate();
  const $recoveryPassword = useMutation(recovery);
  const { showSnackbar } = useSnackbar();

  const { control, handleSubmit } = useForm<RecoveryInputValue>({
    defaultValues: {
      password: "",
    },
  });

  return (
    <div className="recovery-container">
      <section className="banner-section">
        <Images src={banner} alt="banner" styles="banner-image" />
      </section>
      <section className="recovery-form-section">
        <div className="recovery-components-container">
          <Form
            onSubmit={handleSubmit((form) =>
              $recoveryPassword.mutate(
                { ...form, token },
                {
                  onSuccess: () => {
                    navigate("/");
                  },

                  onError: () => {
                    navigate("/?flow=password-reset");
                    showSnackbar(
                      "Password reset url is invalid or has expired. Try pasting the URL into your browser or requesting another password reset url.",
                      "error"
                    );
                  },
                }
              )
            )}
            isLoading={false}
            submitButtonLabel="Reset Password"
            btnStyle="w-fit p-2 "
            form={
              <div className="form-container ">
                <ControlledInput
                  control={control}
                  name="password"
                  inputProps={{ type: "password" }}
                  label="New Password"
                />
                <span className="text-gray-400 leading-8  font-normal text-sm ml-2">
                  Minimum 6 characters
                </span>
              </div>
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Recovery;
