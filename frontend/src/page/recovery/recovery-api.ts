import { rest } from "@/lib/request";
import * as t from "io-ts";

export type recoveryInputs = {
  password: string;
  token: string;
};

export const TRecovery = t.type({
  status: t.string,
  message: t.string,
});

export const recovery = ({ password, token }: recoveryInputs) =>
  rest
    .post("/auth/recovery-forgot-password", {
      password,
      token,
    })
    .decode(TRecovery);
