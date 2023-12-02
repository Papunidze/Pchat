import { rest } from "@/lib/request";
import { MessagesArray } from "./chat-codec";

export type messageProps = { chatId: string };

export const fetchMessage = ({ chatId }: messageProps) =>
  rest.get(`/message/${chatId}`).decode(MessagesArray);
