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
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2048" height="2048" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"><defs><style>.fil0{fill:none}.fil1,.fil2{fill:#7e7e7e;fill-rule:nonzero}.fil2{fill:#8b8c8c}</style></defs><g id="Layer_x0020_1"><g id="_526141896"><path id="_526166376" class="fil0" d="M0 0h2048v2048H0z"/><path id="_526149792" class="fil0" d="M255.999 255.999h1536v1536h-1536z"/></g><path class="fil1" d="m1261.68 1389.68-217.52 217.5-20.67 20.67-20.67-20.67-41.349-41.35-20.671-20.68 20.671-20.66 217.519-217.5z"/><path class="fil2" d="m714.399 842.397.442-.442 408.589-408.61c36.387-36.388 79.017-64.703 125.59-83.993 46.484-19.253 96.608-29.354 148.065-29.354 51.463 0 101.595 10.101 148.09 29.359 46.443 19.237 89.066 47.587 125.567 84.107 36.445 36.468 64.774 79.067 84.021 125.521 19.252 46.466 29.359 96.562 29.359 148.011 0 51.46-10.098 101.574-29.348 148.054-19.285 46.563-47.596 89.186-83.985 125.57l-408.937 408.892-.169.17-82.693-82.693.21-.21 408.898-408.853c25.652-25.65 45.444-55.295 58.745-87.412 13.342-32.213 20.327-67.228 20.327-103.518 0-36.202-6.995-71.165-20.34-103.37v-.113c-13.37-32.269-33.185-61.976-58.793-87.596-25.507-25.524-55.156-45.277-87.402-58.632-32.228-13.347-67.26-20.335-103.55-20.335-36.29 0-71.312 6.989-103.532 20.333-32.126 13.305-61.78 33.1-87.432 58.753l-408.63 408.652-.401.4-82.691-82.691z"/><path class="fil1" d="m1149.21 1277.21-360.696 360.733c-28.874 28.878-62.756 51.37-99.8 66.716-36.958 15.31-76.77 23.342-117.605 23.342-40.837 0-80.65-8.033-117.605-23.34-37.046-15.345-70.931-37.838-99.814-66.716l-.007-.008c-59.872-59.87-89.81-138.611-89.807-217.403 0-78.793 29.94-157.533 89.805-217.407l.008-.008 360.705-360.723 82.691 82.691-360.704 360.723-.007.006c-37.187 37.193-55.786 85.982-55.787 134.715 0 48.732 18.594 97.523 55.785 134.712l.007.007c18.144 18.143 39.054 32.12 61.657 41.48 22.692 9.397 47.406 14.32 73.073 14.32 25.661 0 50.376-4.923 73.066-14.32 22.6-9.362 43.503-23.336 61.643-41.477l360.698-360.735 82.693 82.692z"/><path class="fil2" d="m828.166 956.165.386-.385L984.33 799.983c44.172-44.177 102.294-66.26 160.474-66.261 58.116-.001 116.215 22.089 160.41 66.254 21.475 21.46 38.13 46.454 49.395 73.62 11.322 27.312 17.273 56.736 17.273 86.906 0 29.77-6.064 59.291-17.428 86.725-11.403 27.53-28.018 52.743-49.074 73.802l-155.942 155.958-.225.226-82.692-82.693.265-.267 155.9-155.914a110.08 110.08 0 0 0 23.836-35.645 110.422 110.422 0 0 0 8.41-42.192c0-14.833-2.836-29.08-8.249-42.133-5.482-13.217-13.541-25.32-23.916-35.687-21.508-21.494-49.745-32.25-77.952-32.25-28.12 0-56.295 10.744-77.79 32.242l-155.823 155.84-.343.344-82.693-82.692z"/><path class="fil1" d="m610.663 1173.69 217.503-217.525 82.693 82.695-217.502 217.52-20.668 20.68-20.675-20.68-41.351-41.34-20.67-20.67z"/></g></svg>
*/
