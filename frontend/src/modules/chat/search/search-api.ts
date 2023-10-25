import { rest } from "@/lib/request";
import { TSearch, TChat } from "./searching-codec";

export type SearchInput = { member: string };
export type accessChatProps = { _id: string };

export const search = ({ member }: SearchInput) =>
  rest.get(`/user/search?member=${member}`).decode(TSearch);

export const accessChat = ({ _id }: accessChatProps) =>
  rest.post("/chat", { _id }).decode(TChat);
