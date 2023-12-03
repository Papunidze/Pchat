import { rest } from "@/lib/request";
import { MenuItemDescription } from "../components/menu-array";
import * as t from "io-ts";
import Swal from "sweetalert2";

const tDelete = t.type({
  message: t.string,
  chatId: t.string,
});

export const chatItems: (id: string) => MenuItemDescription[] = (id) => [
  {
    icon: "fa-trash",
    text: "Delete chat",
    onClick: async () => {
      const result = await Swal.fire({
        title: "Delete Chat",
        text: "Are you sure you want to delete this chat? This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        try {
          await rest.delete(`/chat/${id}`).decode(tDelete);
          window.location.href = "/";
        } catch (error) {
          console.error("Failed to delete chat:", error);
          Swal.fire("Error", "Failed to delete chat.", "error");
        }
      }
    },
  },
];
