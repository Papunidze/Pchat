import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form } from "@/cmp-domain/form/form";

import { ControlledInput } from "@/cmp-domain/input/controlled-input";
import Auth from "@/modules/auth";
import CustomButton from "@/cmp-domain/button/CustomButton";
import google from "@/assets/google.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required("required"),
    email: yup.string().email("email").required("required"),
    password: yup.string().min(8, "min_number_8").required("required"),
    confirmPassword: yup
      .string()
      .min(8, "min_number_8")
      .oneOf([yup.ref("password"), undefined], "confirm_password"),
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
          Sign up to <span className="text-primary italic">Pchat</span>
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
            or sign up with email
          </p>
          <div className="flex-grow bg-gray-400 h-px"></div>
        </div>
        <Form
          onSubmit={handleSubmit((form) => console.log(form))}
          submitButtonLabel="Sign Up"
          form={
            <div className="relative">
              <div className="flex gap-2 flex-col lg:flex-row">
                <ControlledInput
                  control={control}
                  errors={errors.email}
                  name="name"
                  inputProps={{ type: "text" }}
                  label="Name"
                />
                <ControlledInput
                  control={control}
                  errors={errors.email}
                  name="username"
                  inputProps={{ type: "text" }}
                  label="Username"
                />
              </div>
              <ControlledInput
                control={control}
                errors={errors.email}
                name="email"
                inputProps={{ type: "text" }}
                label="Email"
              />
              <div className="flex gap-2 flex-col lg:flex-row">
                <ControlledInput
                  control={control}
                  errors={errors.password}
                  name="password"
                  label="Password"
                  inputProps={{ type: "password" }}
                />
                <ControlledInput
                  control={control}
                  errors={errors.password}
                  name="confirmPassword"
                  label="Repeat Password"
                  inputProps={{ type: "password" }}
                />
              </div>
            </div>
          }
        />
        <p className="my-[20px] text-[14px] text-dark-text">
          Already have an account?
          <a className="link__text ml-1" onClick={() => navigate("/signin")}>
            Sign in
          </a>
        </p>
      </section>
    </Auth>
  );
};

export default SignUp;
