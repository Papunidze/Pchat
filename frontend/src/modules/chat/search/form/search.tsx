import React, { useState } from "react";
import Icon from "@/components/fontawesome/fontawesome-icons";
import DropDown from "@/components/dropdown/dropdown";
import { menuItems } from "../components/menu-items";
import { generateMenuArray } from "../../components/menuarray";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [isFocus, setIsFocus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };
  const handleCleareSearch = () => {
    setSearchValue("");
  };
  const handleFocuse = () => {
    setIsFocus(true);
    navigate("/?flow=search");
  };
  const handleBlur = () => {
    setIsFocus(false);
    navigate("/");
  };
  return (
    <>
      <div className="flex w-full items-center justify-center gap-2">
        {isFocus ? (
          <button className="icon-button rotate-180 transition-all ease-in">
            <Icon icon={"fa-solid fa-arrow-right"} />
          </button>
        ) : (
          <DropDown
            array={generateMenuArray(menuItems)}
            icon="fa-bars"
            side="left"
          />
        )}
        <div className="relative overflow-hidden flex items-center flex-1">
          <input
            placeholder="Search"
            className="border border-borderGray pl-11  flex-1 leading-10 rounded-3xl outline-none focus:border-blue-400 focus:border max-w-full transition-all ease-in bg-transparent  dark:text-white "
            onFocus={handleFocuse}
            onBlur={handleBlur}
            value={searchValue}
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
            <Icon icon="fa-solid fa-magnifying-glass" color="default-icons" />
          </div>
          {searchValue && (
            <div className="absolute inset-y-0 right-1 flex items-center pl-3">
              <button className="icon-button" onClick={handleCleareSearch}>
                <Icon icon={"fa-solid fa-xmark"} color="default-icons" />
              </button>
            </div>
          )}
        </div>
      </div>
      {isFocus && (
        <div className="flex flex-col items-center w-full justify-center mt-4 animate-fade">
          <a className="chat-card">
            <img
              src="https://api.dicebear.com/5.x/initials/svg?seed=t"
              alt=""
              className="avatar w-12 h-12"
            />
            <div className="card-content">
              <div className="card-header">
                <h1 className="card-title">Title</h1>
              </div>
              <span className="card-description">@papu</span>
            </div>
          </a>
        </div>
      )}
    </>
  );
};

export default Search;
