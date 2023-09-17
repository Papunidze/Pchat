import chatBackground from "@/assets/images/chat-bg.png";
import Images from "@/components/preloaders/images";
import ChatCard from "@/modules/main/components/card";
import Search from "@/modules/main/components/search";
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
      const newHeight = `${textareaRef.current.scrollHeight - 8}px `;
      textareaRef.current.style.height = newHeight;
    }
  };

  return (
    <div className="flex items-stretch overflow-auto h-[calc(100%-2px)] text-dark border-0 md:border-[1px] border-border-color max-w-[1680px] m-auto">
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
        {/*invert(1)*/}
        <div
          className="w-full h-full flex flex-col  bg-[#EFEEEA]  bg-contain  bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${chatBackground})` }}
        >
          <div className="w-full h-[3.5rem] bg-white flex text-center items-center gap-1 justify-between p-3 shadow-1 cursor-pointer select-none">
            <div className="flex text-center items-center gap-3 ">
              <button
                className="hover:bg-lighting-hover-color  rounded-full select-none cursor-pointer  items-center justify-center relative box-border p-2 inline-flex sm:hidden"
                onClick={() => setShow(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  className={`rotate-180 transition-transform duration-150 ease-in-out  w-5 h-5`}
                >
                  <path
                    stroke="#707579"
                    fill="#707579"
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right"
                  />
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
                    <button className="hover:bg-lighting-hover-color  rounded-full select-none cursor-pointer  items-center justify-center relative box-border p-2 inline-flex h-full shadow-2;">
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
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-6 h-6"
                      >
                        <path
                          d="M255.995 73.82C155.383 73.82 73.82 155.392 73.82 256s81.563 182.18 182.175 182.18S438.18 356.608 438.18 256c0-100.617-81.572-182.18-182.185-182.18zm87.447 162.264L223.727 355.79h.008c-.044.044-.08.07-.122.114l-.735.738-.04-.044a35.675 35.675 0 0 1-24.565 9.422 44.825 44.825 0 0 1-43.699-41.106 35.857 35.857 0 0 1 9.087-26.886l-.06-.061 118.3-118.3c9.998-10.003 26.978-9.264 37.872 1.625a29.18 29.18 0 0 1 8.63 18.642 24.764 24.764 0 0 1-7.013 19.222l-96.306 96.32-13.363-13.37 96.31-96.319a5.796 5.796 0 0 0 1.512-4.596 10.422 10.422 0 0 0-3.138-6.53c-3.463-3.463-8.565-4.21-11.135-1.626l-117.15 117.14v.018a17.078 17.078 0 0 0-4.694 13.481 25.034 25.034 0 0 0 7.528 15.909c8.872 8.877 22.03 10.16 29.369 2.883l119.76-119.743c5.581-5.59 8.34-13.43 7.77-22.095a39.28 39.28 0 0 0-11.778-24.987c-14.084-14.089-35.2-15.883-47.073-4.017l-99.08 99.08-13.368-13.36 99.083-99.08c19.235-19.23 52.353-17.438 73.807 4.008a58.141 58.141 0 0 1 17.265 37.108c.936 14.177-3.77 27.21-13.267 36.703z"
                          data-name="Attach"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute w-0 h-0 border-b-[15px] border-l-[15px] border-r-[15px]  border-r-transparent border-l-transparent border-b-white bottom-0  right-[-14px]`}
                    ></div>
                    <div
                      className={`absolute w-0 h-0 border-b-[17px] border-l-[16px] border-r-[16px]  border-r-transparent border-l-transparent border-b-white bottom-0  right-[-15px]`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;

/*
 */
