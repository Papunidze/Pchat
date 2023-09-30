import { createAvatar } from "@/components/avatars/create-avatar";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";
import { useForm } from "react-hook-form";

const Settings = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 mt-2">
      <label className="block text-xl font-medium leading-6 text-gray-900 dark:text-white font font-montserrat">
        Personal Information
      </label>
      <div className="flex flex-row items-center justify-start w-full gap-3">
        <img
          src={createAvatar("Giga")}
          alt="avatar"
          className="avatar rounded-lg w-24"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <button className="button primary">Change Avatar</button>
          <span className="text-gray-400 text-sm">
            JPG, GIF or PNG. 1MB max.
          </span>
        </div>
      </div>

      <Form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        isLoading={false}
        submitButtonLabel="Save"
        btnStyle="w-fit  px-5"
        form={
          <div className="flex flex-row gap-2 items-center justify-start">
            <ControlledInput
              control={control}
              name="name"
              inputProps={{ type: "text" }}
              label="Name"
            />
            <ControlledInput
              control={control}
              name="username"
              label="username"
              inputProps={{ type: "text" }}
            />
          </div>
        }
      />
      <div className="flex items-center w-full">
        <div className="flex-grow bg-gray-400 h-px"></div>
        <p className="mx-4 text-gray-500 text-sm lowercase font-montserrat">
          Change Password
        </p>
        <div className="flex-grow bg-gray-400 h-px"></div>
      </div>
      <Form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        isLoading={false}
        submitButtonLabel="Save"
        btnStyle="w-fit  px-5"
        form={
          <div className="">
            <ControlledInput
              control={control}
              name="password"
              inputProps={{ type: "text" }}
              label="Current password"
            />
            <ControlledInput
              control={control}
              name="newpassword"
              label="New password"
              inputProps={{ type: "text" }}
            />
            <ControlledInput
              control={control}
              name="confirmpassword"
              label="Confirm password"
              inputProps={{ type: "text" }}
            />
          </div>
        }
      />
    </div>
  );
};

export default Settings;
