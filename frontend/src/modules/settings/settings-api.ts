import { rest } from "@/lib/request";
import { TUpdateUser } from "./settings.codec";

export type SettingsInput = {
  avatar: string;
  name: string;
  username: string;
};

export type PasswordsInput = {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
};

export const updateUser = ({ avatar, name, username }: SettingsInput) =>
  rest
    .post("/user", {
      avatar,
      name,
      username,
    })
    .decode(TUpdateUser);

export const updatePassword = ({
  password,
  newPassword,
  newPasswordConfirm,
}: PasswordsInput) =>
  rest
    .post("/user/update-password", {
      password,
      newPassword,
      newPasswordConfirm,
    })
    .decode(TUpdateUser);
