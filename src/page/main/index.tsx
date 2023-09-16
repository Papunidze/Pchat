import chatBackground from "@/assets/images/chat-bg.png";
import Images from "@/components/preloaders/images";
import ChatCard from "@/modules/main/components/card";
import Search from "@/modules/main/components/search";
import MessageList from "@/utils/Message";
import { createAvatar } from "@/utils/avatars/create-avatar";
import BurgerMenu from "@/utils/burger-menu";
import { useRef, useState } from "react";

const Main = () => {
  const [show, setShow] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = `${textareaRef.current.scrollHeight + 4}px `;
      textareaRef.current.style.height = newHeight;
    }
  };

  return (
    <div className="flex  h-full border-0 border-border-color max-w-[1680px] w-full m-auto md:border-[1px]">
      <nav
        className={`max-w-[620px] overflow-auto border-r-[1px] border-border-color transition-all ease-out duration-150 sm:w-full sm:opacity-100 sm:max-w-[420px] ${
          show ? "opacity-0 w-[0]" : "opacity-100 w-full"
        } `}
      >
        <div className="flex flex-col p-4 gap-3">
          <section className="search flex items-center justify-center pl-[0.4rem] gap-1">
            <button className="hover:bg-lighting-hover-color  rounded-full select-none cursor-pointer inline-flex items-center justify-center relative box-border p-2 ">
              <BurgerMenu />
            </button>
            <Search />
          </section>

          <section
            className={`user-messages flex-center flex-col gap-4`}
            onClick={() => setShow(true)}
          >
            <ChatCard />

            <ChatCard />
          </section>
        </div>
      </nav>

      <section
        className={`h-full bg-gradient-green flex-col overflow-hidden transition-all ease-out duration-150 ${
          show ? "sm:opacity-100 w-full " : "w-[0] opacity-0"
        }`}
      >
        <div
          className="w-full h-full flex flex-col"
          style={{ backgroundImage: `url(${chatBackground})` }}
        >
          <div className="w-full h-[3.5rem] bg-white flex text-center items-center gap-2 justify-between p-3">
            <div className="flex text-center items-center gap-3">
              <Images
                src={createAvatar("giga")}
                alt=""
                styles="w-[40px] h-[40px] rounded-[50%] object-fit:cover select-none "
              />
              <h1 className="font-[500] text-[16px]">Giga Papunidze</h1>
            </div>
            <div className="flex text-center items-center gap-3">settomgs</div>
          </div>
          <div className="h-full max-w-[1440px] m-auto flex-start items-center flex-col flex overflow-y-auto overflow-x-hidden p-7 w-full">
            <MessageList />
          </div>
          <div className="max-h-[550px] h-auto w-full py-6 flex-center">
            <div className="w-full flex-col flex-between">
              <div className="flex-center w-full">
                <textarea
                  ref={textareaRef}
                  className={`max-w-[750px] w-full p-[15px] outline-none resize-none text-[16px] border-2 border-border-color focus:border-blue-500 overflow-auto  max-h-[450px] rounded-[22px]`}
                  placeholder="Message"
                  rows={1}
                  onChange={handleTextareaChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
