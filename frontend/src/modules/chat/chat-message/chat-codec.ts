import * as t from "io-ts";

const Sender = t.type({
  _id: t.string,
  avatar: t.string,
  name: t.string,
});

const Message = t.type({
  _id: t.string,
  sender: Sender,
  content: t.string,
  chat: t.string,
  createdAt: t.string,
  updatedAt: t.string,
  __v: t.number,
});

export const MessagesArray = t.array(Message);
