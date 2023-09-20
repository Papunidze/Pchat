import chatBackground from "@/assets/images/chat-bg.png";
import Images from "@/components/preloader/images";
import ChatCard from "@/modules/main/components/Card";
import Search from "@/modules/main/components/Search";

import MessageList from "@/utils/Message";
import { createAvatar } from "@/utils/avatars/create-avatar";
import BurgerMenu from "@/utils/burger-menu";
import { useRef, useState } from "react";

const Main = () => {
  const [show, setShow] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = `${textareaRef.current.scrollHeight + 4}px `;
      textareaRef.current.style.height = newHeight;
    }
  };

  return <div>test</div>;
};

export default Main;

/*
<div className="">
      <nav
        className={`max-w-[620px]  border-r-[1px] border-border-color transition-all ease-out duration-150 sm:w-full sm:opacity-100 sm:max-w-[420px] overflow-x-hidden overflow-y-auto${
          show ? "opacity-0 w-[0]" : "opacity-100 w-full"
        } `}
      >
        <div className="flex flex-col p-4 gap-3 max-w-full">
          <section className="search flex items-center justify-center pl-[0.4rem] gap-1">
            <button className="hover:bg-lighting-hover-color  rounded-full select-none cursor-pointer inline-flex items-center justify-center relative box-border p-2 ">
              <BurgerMenu />
            </button>
            <Search />
          </section>

          <section
            className={`user-messages flex-center flex-col gap-4 p-[0.75rem]`}
            onClick={() => setShow(true)}
          >
            <ChatCard />
            <ChatCard /> <ChatCard />
            <ChatCard />
          </section>
        </div>
      </nav>

      <section
        className={`h-full  flex-col overflow-hidden transition-all ease-out duration-150 ${
          show ? "sm:opacity-100 w-full " : "w-[0] opacity-0"
        }`}
      >
       
        <div
          className="w-full h-full flex flex-col  bg-[#EFEEEA]  bg-contain  bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${chatBackground})` }}
        >
          <div className="w-full h-[3.5rem] bg-white flex text-center items-center gap-1 justify-between p-3 shadow-1 cursor-pointer select-none">
            <div className="flex text-center items-center gap-3 ">
              <button
                className=""
                onClick={() => setShow(false)}
              >

                </svg>
              </button>
              <Images
                src={createAvatar("giga")}
                alt=""
                styles="w-[40px] h-[40px] rounded-[50%] object-fit:cover select-none"
              />
              <div className="flex flex-col items-start justify-start">
                <h1 className="font-[500] text-[16px] text-dark">
                  Giga Papunidze
                </h1>
                <span className="text-[14px] text-gray-400">
                  last seen recent
                </span>
              </div>
            </div>
            <button className="hover:bg-lighting-hover-color  rounded-full select-none cursor-pointer  items-center justify-center relative box-border p-2 inline-flex mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#707579"
                className="rotate-90 w-5 h-5 translate-x-[-8px]"
              >
                <circle cx="9" cy="2" r="2" />
                <circle cx="2" cy="2" r="2" />
                <circle cx="16" cy="2" r="2" />
              </svg>
            </button>
          </div>
          <div className="h-full max-w-[1440px] m-auto flex-start items-center flex-col flex overflow-y-auto overflow-x-hidden  w-full">
            <MessageList />
          </div>
          <div className="pb-[1rem] pt-[0.25rem]">
            <div className="flex justify-center items-end w-full my-auto px-[0.5rem] flex-auto relative">
              <div className="w-full flex">
                <div className="flex items-center justify-center flex-col rounded-[1rem] min-h-[3.8rem] max-h-[30rem]  max-w-[calc(100%-3rem)] w-[calc(100%-3rem+0.5rem)] relative">
                  <div className="shadow-2 bg-white rounded-[inherit] w-full h-full flex m-auto max-w-[650px] px-[.5rem] py-[.3125rem] relative  flex-auto justify-center items-center gap-2">
                    <button className="hover:bg-lighting-hover-color  rounded-full select-none cursor-pointer  items-center justify-center relative box-border p-2 inline-flex h-fit  self-end mb-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        fill="#707579"
                      >
                        <path d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9zM8 11V9a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm8-2v2a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm-8 5h8a4 4 0 0 1-8 0z" />
                      </svg>
                    </button>
                    <textarea
                      ref={textareaRef}
                      className={`w-full outline-none resize-none text-[16px]  border-1 border-border-color overflow-auto  max-h-full rounded-[1rem] px-[.5rem] py-[.3125rem] `}
                      placeholder="Message"
                      rows={1}
                      onChange={handleTextareaChange}
                    />
                    <button className="hover:bg-lighting-hover-color  rounded-full select-none cursor-pointer  items-center justify-center relative box-border p-2 inline-flex h-fit  self-end mb-1 ">
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="#707579"
                        className="w-6 h-6"
                        data-testid="AttachFileIcon"
                      >
                        <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path>
                      </svg>
                    </button>
                    <div
                      className={`absolute w-0 h-0 border-b-[15px] border-l-[15px] border-r-[15px]  border-r-transparent border-l-transparent border-b-white bottom-0  right-[-14px]`}
                    ></div>
                    <div
                      className={`absolute w-0 h-0 border-b-[17px] border-l-[16px] border-r-[16px]  border-r-transparent border-l-transparent border-b-white bottom-0  right-[-15px]`}
                    ></div>
                    <button
                      className={`w-[2.8rem] h-[2.8rem] bg-blue-500 absolute right-[-3rem] rounded-full hover:bg-blue-600 bottom-2 transition-all ease-in-out`}
                    >
                      <svg
                        className="w-[2.8rem] h-[2.8rem]"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="white"
                        data-testid="ArrowDropUpIcon"
                      >
                        <path d="m7 14 5-5 5 5z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
     invert(1)
*/
