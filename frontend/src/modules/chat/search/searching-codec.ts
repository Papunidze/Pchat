import * as t from "io-ts";

const User = t.type({
  _id: t.string,
  name: t.string,
  avatar: t.string,
  username: t.string,
});

export const TSearch = t.type({
  result: t.array(User),
});

export const TOut = t.type({
  status: t.string,
  message: t.string,
});
