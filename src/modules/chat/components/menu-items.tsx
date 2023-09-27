import Icon from "@/components/fontawesome/fontawesome-icons";
import React from "react";

interface MenuItemProps {
  icon: string;
  text: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ icon, text }) => {
  return (
    <>
      <div className="flex  justify-start gap-2 items-center ">
        <Icon icon={`fa-solid ${icon}`} />
        <span className="font-semibold text-base dark:text-clear">{text}</span>
      </div>
    </>
  );
};

export interface MenuItemDescription {
  link: string;
  icon: string;
  text: string;
  children?: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const generateMenuArray = (menuItems: MenuItemDescription[]) => {
  return menuItems.map((item, index) => ({
    link: item.link,
    children: (
      <>
        <MenuItem key={index} {...item} />
        {item.children}
      </>
    ),
  }));
};

const menuItems: MenuItemDescription[] = [
  {
    link: "/?flow=settings",
    icon: "fa-gear",
    text: "Settings",
  },
  {
    link: "",
    icon: "fa-moon",
    text: "Dark Mode",
    children: (
      <label className="relative inline-flex items-center  cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={(e) => {
            // Manually toggle the checked state
            const newChecked = !e.target.checked;

            // Perform your custom logic here
            console.log("handleChange: " + newChecked);

            // Update the checked state if needed
            // this.setState({ isChecked: newChecked });
          }}
        />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
      </label>
    ),
  },
  {
    link: "",
    icon: "fa-right-from-bracket",
    text: "Sign out",
  },
];
const chatItems: MenuItemDescription[] = [
  {
    link: "",
    icon: "fa-lock",
    text: "Block user",
  },
  {
    link: "",
    icon: "fa-trash",
    text: "Delete chat",
  },
];

export const MenuArray = generateMenuArray(menuItems);
export const ChatArray = generateMenuArray(chatItems);
