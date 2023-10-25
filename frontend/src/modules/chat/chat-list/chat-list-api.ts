import { rest } from "@/lib/request";
import { TChat } from "../search/searching-codec";
import * as t from "io-ts";

export const fetchChat = () => rest.get(`/chat`).decode(t.array(TChat));
