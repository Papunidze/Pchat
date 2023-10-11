import { rest } from "@/lib/request";
import { TUpdateUser } from "./settings.codec";

export type SettingsInput = {
  id: string;
  avatar: string;
  name: string;
  username: string;
};

export type PasswordsInput = {
  id: string;
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
};

export const updateUser = ({ id, avatar, name, username }: SettingsInput) =>
  rest
    .post("/user", {
      id,
      avatar,
      name,
      username,
    })
    .decode(TUpdateUser);

export const updatePassword = ({
  id,
  password,
  newPassword,
  newPasswordConfirm,
}: PasswordsInput) =>
  rest
    .post("/user/update-password", {
      id,
      password,
      newPassword,
      newPasswordConfirm,
    })
    .decode(TUpdateUser);
