import * as t from "io-ts";

export const TUpdateUser = t.type({
  status: t.string,
  updatedUser: t.object,
});

export const TUpdatePassword = t.type({
  status: t.string,
  message: t.string,
});
