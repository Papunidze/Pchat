import { rest } from "@/lib/request";
import { TAuth } from "@/modules/auth/auth.codec";

export type recoveryInputs = {
  email: string;
};

export const recovery = ({ email }: recoveryInputs) =>
  rest
    .post("/auth/forgot-password", {
      email,
    })
    .decode(TAuth);
