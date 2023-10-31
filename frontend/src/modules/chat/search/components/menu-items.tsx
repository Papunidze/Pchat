import { rest } from "@/lib/request";
import { MenuItemDescription } from "../../components/menu-array";
import { TOut } from "../searching-codec";
import DarkModeSwitch from "../../components/dark-mode-switch";

export const menuItems: MenuItemDescription[] = [
  {
    link: "/?flow=settings",
    icon: "fa-gear",
    text: "Settings",
  },
  {
    icon: "fa-moon",
    text: "Dark Mode",
    children: <DarkModeSwitch />,
  },
  {
    icon: "fa-right-from-bracket",
    text: "Sign out",
    onClick: async () => {
      try {
        await rest.delete("/auth/logout").decode(TOut);
        window.location.href = "/";
      } catch (error) {
        console.error("Failed to log out:", error);
      }
    },
  },
];
