import { rest } from "@/lib/request";
import { TAuth, TRefreshToken } from "@/modules/auth/auth.codec";

export type signUpInputs = {
  email: string;
  password: string;
  username: string;
  name: string;
  passwordConfirm: string;
};

export const signup = ({
  email,
  password,
  name,
  username,
  passwordConfirm,
}: signUpInputs) =>
  rest
    .post("/auth/signup", {
      email,
      password,
      name,
      username,
      passwordConfirm,
    })
    .decode(TAuth);

export const refresh = () => rest.post("/auth/refresh").decode(TRefreshToken);
