import * as t from "io-ts";

export const users = t.type({
  _id: t.string,
  name: t.string,
  username: t.string,
  avatar: t.string,
  createdAt: t.string,
  __v: t.number,
});

export const TOut = t.type({
  status: t.string,
  message: t.string,
});

export const TSearch = t.type({
  result: t.array(users),
});

const User = t.type({
  _id: t.string,
  name: t.string,
  avatar: t.string,
  username: t.string,
  email: t.string,
  createdAt: t.string,
  __v: t.number,
});

const Message = t.type({
  sender: User,
  _id: t.string,
  content: t.string,
  chat: t.string,
  createdAt: t.string,
  updatedAt: t.string,
  __v: t.number,
});

const Chat = t.type({
  _id: t.string,
  chatName: t.string,
  users: t.array(User),
  createdAt: t.string,
  updatedAt: t.string,
  __v: t.number,
  latestMessage: t.union([Message, t.undefined]),
});

export const TChats = t.array(Chat);
