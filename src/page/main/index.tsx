import chatBackground from "@/assets/images/chat-bg.png";
import ChatCard from "@/modules/main/components/card";
import Search from "@/modules/main/components/search";
import MessageList from "@/utils/Message";
import { useRef } from "react";

const Main = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = `${textareaRef.current.scrollHeight + 4}px `;
      textareaRef.current.style.height = newHeight;
    }
  };

  return (
    <div className="flex w-full h-full">
      <nav className="max-w-[420px] w-full  overflow-auto border-r-[1px] border-gray-300 ">
        <div className="flex flex-col p-4 gap-3">
          <section className="search">
            <Search />
          </section>

          <section className="user-messages flex-center flex-col gap-4">
            <ChatCard />

            <ChatCard />
          </section>
        </div>
      </nav>
      <section className="w-full h-full bg-gradient-green flex flex-col overflow-hidden">
        <div
          className="w-full h-full flex flex-col"
          style={{ backgroundImage: `url(${chatBackground})` }}
        >
          <div className="w-full h-[3.5rem] bg-white">Giga Papunidze</div>
          <div className="h-full max-w-[1440px] m-auto flex-start items-center flex-col flex overflow-y-auto overflow-x-hidden p-7">
            <MessageList />
          </div>
          <div className="max-h-[550px] h-auto w-full py-6 flex-center">
            <div className="w-full flex-col flex-between">
              <div className="flex-center w-full">
                <textarea
                  ref={textareaRef}
                  className={`max-w-[750px] w-full p-[15px] outline-none resize-none text-[16px] border-2 border-gray-500 focus:border-blue-500 overflow-auto  max-h-[450px] rounded-[22px]`}
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
