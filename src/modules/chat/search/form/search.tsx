import { useState } from "react";
import Icon from "@/components/fontawesome/fontawesome-icons";
import Menu from "@/modules/chat/components/menu";

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [openMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="flex w-full items-center justify-center gap-2">
      {isFocus ? (
        <button className="icon-button rotate-180 transition-all ease-in">
          <Icon icon={"fa-solid fa-arrow-right"} />
        </button>
      ) : (
        <div className="relative">
          <button
            className="icon-button rotate-0  transition-all ease-in relative z-10"
            onClick={() => setIsOpenMenu(!openMenu)}
          >
            <Icon icon={"fa-solid fa-bars"} />
          </button>
          <Menu isOpen={openMenu} setIsOpen={setIsOpenMenu} />
        </div>
      )}
      <div className="relative overflow-hidden flex items-center flex-1">
        <input
          placeholder="Search"
          className="border border-borderGray pl-11  flex-1 leading-10 rounded-3xl outline-none focus:border-blue-400 focus:border max-w-full transition-all ease-in bg-transparent  dark:text-white "
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
          <Icon icon="fa-solid fa-magnifying-glass" color="default-icons" />
        </div>
        {isFocus && (
          <div className="absolute inset-y-0 right-1 flex items-center pl-3">
            <button className="icon-button">
              <Icon icon={"fa-solid fa-xmark"} color="default-icons" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
