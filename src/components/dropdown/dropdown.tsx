import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Icon from "@/components/fontawesome/fontawesome-icons";
import { useNavigate } from "react-router-dom";

interface ItemsProps {
  link: string;
  children: React.ReactNode;
  handleClick?: () => void; // Make handleClick optional
}

interface DropDownProps {
  array: ItemsProps[];
  icon?: string;
  side?: string;
}

export const DropDown = ({ array, icon, side }: DropDownProps) => {
  const navigate = useNavigate();

  const buttonClick = (
    link: string,
    handleClick?: () => void,
    e?: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e?.preventDefault();
    if (link) {
      navigate(link);
    }

    if (handleClick) {
      handleClick();
    }
  };

  return (
    <Menu as="div" className="relative z-50">
      <div>
        <Menu.Button className="icon-button">
          <Icon icon={`fa-solid ${icon}`} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute ${
            side ? "left-0" : "right-0"
          } z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark`}
        >
          {array.map((element, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  onClick={(e) =>
                    buttonClick(element.link, element.handleClick, e)
                  }
                  className={`${
                    active ? "bg-gray-100" : ""
                  }  px-4 py-2 text-sm text-gray-700 flex items-center justify-between cursor-pointer dark:hover:bg-clearHover`}
                >
                  {element.children}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDown;
