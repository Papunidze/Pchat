import * as t from "io-ts";

const TUser = t.type({
  _id: t.string,
  name: t.string,
  avatar: t.string,
  username: t.string,
  email: t.string,
  createdAt: t.string,
  __v: t.number,
});

const TMessageSender = t.type({
  _id: t.string,
  name: t.string,
  avatar: t.string,
  username: t.string,
  email: t.string,
});

const TMessage = t.type({
  sender: TMessageSender,
  _id: t.string,
  content: t.string,
  chat: t.string,
  createdAt: t.string,
  updatedAt: t.string,
  __v: t.number,
});

const TChat = t.type({
  _id: t.string,
  chatName: t.string,
  users: t.array(TUser),
  createdAt: t.string,
  updatedAt: t.string,
  __v: t.number,
  latestMessage: TMessage,
});

const TChats = t.array(TChat);

export { TChats };
