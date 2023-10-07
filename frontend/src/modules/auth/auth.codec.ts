import * as t from "io-ts";

export const TRefreshToken = t.type({
  accessToken: t.string,
  refreshToken: t.string,
});

export const TAuth = t.type({
  accessToken: t.string,
  refreshToken: t.string,
});

export type Auth = t.TypeOf<typeof TAuth>;
