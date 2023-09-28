import { useForm } from "react-hook-form";
import { createAvatar } from "@/components/avatars/create-avatar";
import Icon from "@/components/fontawesome/fontawesome-icons";
import { Form } from "@/components/form/form";
import { ControlledInput } from "@/components/input/controlled-input";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-2 animate-fade">
      <div className="flex gap-1 items-center justify-start w-full">
        <button className="icon-button" onClick={() => navigate("/")}>
          <Icon icon={"fa-solid fa-arrow-left"} />
        </button>
        <span className="text-dark dark:text-white text-2xl font-bold mb-1">
          Settings
        </span>
      </div>

      <div className="relative">
        <img
          src={createAvatar("Papu")}
          alt="avatar"
          className="avatar w-24 h-24"
        />
        <div className="absolute w-24 h-12 bg-black bg-opacity-50 top-12 rounded-bl-full rounded-br-full cursor-pointer flex items-center justify-center ">
          <Icon icon="fa-solid fa-image" className="w-6 h-6 white-icons" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl">Giga Papunidze</span>
        <Icon icon="fa-solid fa-pencil" className="cursor-pointer w-3 h-3" />
      </div>
      <div className="flex flex-col mt-5 w-full items-center gap-3">
        <Form
          onSubmit={handleSubmit((data) => onSubmit(data))}
          isLoading={false}
          submitButtonLabel="Change Password"
          form={
            <div className="form-container">
              <ControlledInput
                control={control}
                name="old password"
                inputProps={{ type: "text" }}
                label="Old Password"
              />
              <ControlledInput
                control={control}
                name="password"
                label="New Password"
                inputProps={{ type: "password" }}
              />
              <ControlledInput
                control={control}
                name="password"
                label="Repeat Password"
                inputProps={{ type: "password" }}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Settings;
