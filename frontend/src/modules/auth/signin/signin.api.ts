import { rest } from "@/lib/request";
import { TAuth, TRefreshToken } from "@/modules/auth/auth.codec";

export type AuthInput = {
  email: string;
  password: string;
};

export const auth = ({ email, password }: AuthInput) =>
  rest
    .post("/auth/signin", {
      email,
      password,
    })
    .decode(TAuth);

export const refresh = () => rest.post("/auth/refresh").decode(TRefreshToken);
