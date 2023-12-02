import * as t from "io-ts";

const sender = t.type({
  _id: t.string,
  name: t.string,
  avatar: t.string,
});
export const tMessage = t.type({
  sender: sender,
  _id: t.string,
  content: t.string,
  chat: t.string,
  createdAt: t.string,
  updatedAt: t.string,
  __v: t.number,
});
