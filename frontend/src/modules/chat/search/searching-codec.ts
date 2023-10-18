import * as t from "io-ts";

export const SearchUser = t.type({
  _id: t.string,
  name: t.string,
  username: t.string,
  avatar: t.string,
});

export const TOut = t.type({
  status: t.string,
  message: t.string,
});

export const TSearch = t.type({
  result: t.array(SearchUser),
});
