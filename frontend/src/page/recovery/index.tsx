/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import banner from "@/assets/images/banner.png";

import "./index.css";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { recovery } from "./recovery-api";
import { useSnackbar } from "@/context/snackbar-provider";
import { errorsResponse } from "@/app/error";
import { useEffect } from "react";
import Images from "@/components/loaders/image-preloader";

interface RecoveryInputValue {
  password: string;
}

const Recovery = () => {
  const { token = "" } = useParams<string>();
  const navigate = useNavigate();
  const $recoveryPassword = useMutation(recovery);
  const { showSnackbar } = useSnackbar();
  const schema = yup.object().shape({
    password: yup
      .string()
      .min(6, errorsResponse["errors.min_6"])
      .required(errorsResponse["errors.requires"]),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoveryInputValue>({
    defaultValues: {
      password: "",
    },
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (token) {
      try {
        const trimmedToken = token.trim();
        atob(trimmedToken);
      } catch (error) {
        navigate("/?flow=password-reset");
        showSnackbar(
          errorsResponse["errors.invalid_password_reset_url"],
          "error"
        );
      }
    }
  }, [navigate, showSnackbar, token]);
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

                  onError: (error) => {
                    navigate("/?flow=password-reset");
                    const customError = error as { errorKey: string };
                    showSnackbar(errorsResponse[customError.errorKey], "error");
                  },
                }
              )
            )}
            isLoading={false}
            submitButtonLabel="Reset Password"
            btnStyle="w-fit p-2"
            form={
              <div className="form-container ">
                <ControlledInput
                  control={control}
                  name="password"
                  errors={errors.password}
                  inputProps={{ type: "password" }}
                  label="New Password"
                />
              </div>
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Recovery;
