import { rest } from "@/lib/request";
import { TChats } from "./chat-codec";

export const fetchChat = () => rest.get(`/chat`).decode(TChats);
