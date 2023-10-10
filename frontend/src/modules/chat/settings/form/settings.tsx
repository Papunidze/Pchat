import { createAvatar } from "@/components/avatars/create-avatar";
import Icon from "@/components/fontawesome/fontawesome-icons";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
  };
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string;
        console.log(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 mt-2">
      <div className="flex items-center justify-center w-full relative mb-2">
        <button
          className="icon-button absolute left-1"
          onClick={() => navigate("/")}
        >
          <Icon icon="fa-solid fa-arrow-left" inverse size="lg" />
        </button>
        <label className="block text-xl font-medium leading-6 text-gray-900 dark:text-white font font-montserrat">
          Personal Information
        </label>
      </div>
      <div className="flex flex-row items-center justify-start w-full gap-3">
        <img
          src={createAvatar("Giga")}
          alt="avatar"
          className="avatar rounded-lg w-24"
        />
        <div className="flex flex-col items-center justify-center gap-1 relative">
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
            id="image-upload-input"
          />
          <label
            htmlFor="image-upload-input"
            className="button primary cursor-pointer"
          >
            Change Avatar
          </label>

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
              label="Username"
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
