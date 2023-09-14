import chatBackground from "@/assets/images/chat-bg.png";
import ChatCard from "@/modules/main/components/card";
import Search from "@/modules/main/components/search";
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
      <section className="flex-grow bg-gradient-green">
        <div
          className="flex-grow w-full h-full"
          style={{ backgroundImage: `url(${chatBackground})` }}
        >
          <div className="w-full h-[3.5rem] bg-white"></div>
          <div className="w-full h-[calc(100%_-_3.5rem)] flex-col flex-between py-10">
            <h1>1</h1>
            <div className="flex-center w-full">
              <textarea
                ref={textareaRef}
                className={`w-[250px] p-[15px] outline-none resize-none text-[16px] rounded-[5px] border-2 border-gray-500 focus:border-blue-500 overflow-auto  max-h-[450px]`}
                rows={1}
                onChange={handleTextareaChange}
              ></textarea>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
