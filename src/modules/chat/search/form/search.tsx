import { useState } from "react";

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="flex w-full items-center justify-center gap-2">
      {isFocus ? (
        <button className="icon-button">
          <img
            src="/src/assets/icons/arrow.svg"
            alt="arrow"
            className="rotate-180 transition-all duration-75 ease-in"
          />
        </button>
      ) : (
        <button className="icon-button">
          <img
            src="/src/assets/icons/burger-menu.svg"
            alt="burger-menu"
            className="rotate-360 transition-all duration-75 ease-in"
          />
        </button>
      )}
      <div className="relative overflow-hidden flex items-center flex-1">
        <input
          placeholder="Search"
          className="border border-borderGray pl-11 bg-white flex-1 leading-10 rounded-3xl outline-none focus:border-primary focus:border-2"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
          <img src="/src/assets/icons/search.svg" alt="search" width={"20px"} />
        </div>
        {isFocus && (
          <div className="absolute inset-y-0 right-1 flex items-center pl-3">
            <button className="icon-button">
              <img
                src="/src/assets/icons/close.svg"
                alt="search"
                width={"20px"}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
