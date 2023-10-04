import { rest } from "@/lib/request";
import { MenuItemDescription } from "../components/menuarray";
import { TSignOut } from "./searching-codec";

export const menuItems: MenuItemDescription[] = [
  {
    link: "/?flow=settings",
    icon: "fa-gear",
    text: "Settings",
  },
  {
    icon: "fa-moon",
    text: "Dark Mode",
    children: (
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative inline-flex items-center cursor-pointer"
      >
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={() => {
              document.body.classList.toggle("dark");
            }}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        </label>
      </div>
    ),
  },
  {
    icon: "fa-right-from-bracket",
    text: "Sign out",
    onClick: async () => {
      try {
        await rest.delete("/auth/logout").decode(TSignOut);
        window.location.href = "/";
      } catch (error) {
        console.error("Failed to log out:", error);
      }
    },
  },
];
