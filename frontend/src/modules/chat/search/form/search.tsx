import React, { useState } from "react";
import Icon from "@/components/fontawesome/fontawesome-icons";
import DropDown from "@/components/dropdown/drop-down";
import { menuItems } from "../components/menu-items";
import { generateMenuArray } from "../../components/menu-array";
import { useMutation } from "react-query";
import { accessChat, search } from "../search-api";
import CardSkeleton from "@/components/loaders/card-skeleton";
import Avatar from "@/components/loaders/avatar-preloader";
import { UserState } from "@/context/login-provider";

type SearchUser = Pick<UserState, "_id" | "name" | "username" | "avatar">;

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchUser[] | null>([]);
  const [searchValue, setSearchValue] = useState("");
  const $searchQuery = useMutation(search);
  const $accsesChatMutation = useMutation(accessChat);
  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
    if (event.currentTarget.value.length > 1) {
      $searchQuery.mutate(
        { member: event.currentTarget.value },
        {
          onSuccess: ({ ...args }) => {
            setSearchResult(args.result);
          },
          onError: (error) => {
            const customError = error as { errorKey: string };
            console.log(customError);
          },
        }
      );
    }
    if (event.currentTarget.value.length < 1) {
      setSearchResult(null);
    }
  };
  const handleCleareSearch = () => {
    setSearchResult(null);
    setSearchValue("");
  };

  return (
    <>
      <div className="flex w-full items-center justify-center gap-2">
        {isFocus ? (
          <button
            className="icon-button rotate-180 transition-all ease-in"
            onClick={() => setIsFocus(false)}
          >
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
            onFocus={() => setIsFocus(true)}
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
      {isFocus && !searchValue && (
        <div className="text-center mt-10">
          <h1 className="text-4xl text-primary font-bold">Search a Friend</h1>
        </div>
      )}
      {isFocus && (
        <div className="w-full absolute h-[calc(100%-4rem)] left-0 z-50 overflow-auto bg-white">
          {searchResult !== null &&
            ($searchQuery.isLoading ? (
              <div className="p-3">
                <CardSkeleton />
              </div>
            ) : (
              searchResult.map((element, index) => (
                <div
                  className="flex flex-col items-center w-full justify-center mt-4 animate-fade"
                  key={index}
                  onClick={(event) => {
                    event.preventDefault();
                    $accsesChatMutation.mutate({ _id: element._id });
                  }}
                >
                  <a className="flex w-full items-center justify-start gap-3 p-3 cursor-pointer hover:bg-gray-200 rounded-lg">
                    <Avatar src={element.avatar} alt="avatar" style="" />
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="self-start">
                        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold font-montserrat capitalize">
                          {element.name}
                        </h1>
                      </div>
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap text-base leading-5 text-gray-400 pl-0 self-start font-montserrat">
                        @{element.username}
                      </span>
                    </div>
                  </a>
                </div>
              ))
            ))}
        </div>
      )}
    </>
  );
};

export default Search;
