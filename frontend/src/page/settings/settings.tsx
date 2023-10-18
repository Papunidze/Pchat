import Icon from "@/components/fontawesome/fontawesome-icons";
import Avatar from "@/components/loaders/avatar-preloader";
import { useAuthContext } from "@/context/login-provider";
import UpdatePassword from "@/modules/settings/forms/update-password";
import UpdateUser from "@/modules/settings/forms/update-user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const { auth } = useAuthContext();
  const [avatar, setAvatar] = useState(auth.user?.avatar);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string;
        // Convert data URL to base64
        console.log(imageDataUrl);
        setAvatar(imageDataUrl);
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
        <Avatar
          src={avatar || ""}
          alt={auth.user?.username || ""}
          style="object-contain w-24 h-24"
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
      <UpdateUser user={auth?.user} avatar={avatar || ""} />
      <div className="flex items-center w-full">
        <div className="flex-grow bg-gray-400 h-px"></div>
        <p className="mx-4 text-gray-500 text-sm lowercase font-montserrat">
          Change Password
        </p>
        <div className="flex-grow bg-gray-400 h-px"></div>
      </div>
      <UpdatePassword />
    </div>
  );
};

export default Settings;
