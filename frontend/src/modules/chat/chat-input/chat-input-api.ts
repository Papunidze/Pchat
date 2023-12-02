import { rest } from "@/lib/request";
import { tMessage } from "./chat-codec";

export type inputProps = { content: string; chatId: string };

export const sendMessage = ({ content, chatId }: inputProps) =>
  rest.post(`/message`, { content, chatId }).decode(tMessage);
