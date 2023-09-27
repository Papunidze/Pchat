import Icon from "@/components/fontawesome/fontawesome-icons";
import Popover from "@/components/popover/popover";
import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
  icon: string;
  text: string;
  toggle?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  toggle,
  handleClick,
}) => {
  return (
    <button
      className="flex items-center justify-between w-full p-2 gap-4  hover:bg-darkHover dark:hover:bg-clearHover select-none rounded-xl"
      onClick={handleClick}
    >
      <div className="flex  justify-start gap-2 items-center ">
        <Icon icon={`fa-solid ${icon}`} />
        <span className="font-semibold text-base dark:text-clear">{text}</span>
      </div>
      {toggle && (
        <label className="relative inline-flex items-center  cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={() => document.documentElement.classList.toggle("dark")}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        </label>
      )}
    </button>
  );
};

interface MenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
  const navigate = useNavigate();
  return (
    <Popover isOpen={isOpen} setIsOpen={setIsOpen}>
      <MenuItem
        icon="fa-gear"
        text="Settings"
        handleClick={() => navigate("/?flow=settings")}
      />
      <MenuItem icon="fa-moon" text="Dark Mode" toggle={true} />
      <MenuItem icon="fa-right-from-bracket" text="Log out" />
    </Popover>
  );
};

export default Menu;
