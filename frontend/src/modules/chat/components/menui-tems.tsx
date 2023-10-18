import Icon from "@/components/fontawesome/fontawesome-icons";
import React from "react";

interface MenuItemProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onClick }) => {
  return (
    <button
      className="flex  justify-start gap-2 items-center "
      onClick={onClick}
    >
      <Icon icon={`fa-solid ${icon}`} />
      <span className="font-semibold text-base dark:text-clear select-none">
        {text}
      </span>
    </button>
  );
};

export default MenuItem;
