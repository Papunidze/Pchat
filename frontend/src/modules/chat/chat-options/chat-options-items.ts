import { rest } from "@/lib/request";
import { MenuItemDescription } from "../components/menu-array";
import * as t from "io-ts";

const tDelete = t.type({
  message: t.string,
  chatId: t.string,
});

export const chatItems: (id: string) => MenuItemDescription[] = (id) => [
  {
    icon: "fa-trash",
    text: "Delete chat",
    onClick: async () => {
      try {
        await rest.delete(`/chat/${id}`).decode(tDelete);
        window.location.href = "/";
      } catch (error) {
        console.error("Failed to delete chat:", error);
      }
    },
  },
];
