import Icon from "@/components/fontawesome/fontawesome-icons";

const ChatInput = () => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    target.style.height = "auto";
    const newHeight = target.scrollHeight + 2;
    target.style.height = `${newHeight}px`;
  };
  return (
    <div className="flex  items-center justify-center w-full gap-2">
      <div className="flex justify-center max-w-2xl  w-full relative items-center">
        <button className="icon-button absolute left-1 bottom-[6px]">
          <Icon icon="fa-regular fa-face-smile" color="default-icon" />
        </button>
        <textarea
          className=" ps-10 pe-10 resize-none flex-1 border max-h-80 border-gray-200 rounded-2xl shadow-2xl whitespace-pre-wrap p-3 focus:outline-none focus:border-blue-400 bg-white dark:text-white dark:bg-transparent"
          placeholder="Message"
          rows={1}
          onChange={handleChange}
        />
        <button className="icon-button absolute right-1 bottom-[6px]">
          <Icon icon="fa-solid fa-paperclip" color="default-icon" />
        </button>
      </div>
      <button className="button primary rounded-full  p-3 self-end  mb-2 w-[35px] h-[35px] sm:mb-[0.45rem] sm:w-[40px] sm:h-[40px] z-20">
        <Icon
          icon="fa-solid fa-arrow-up"
          inverse
          size="lg"
          className="white-icons"
        />
      </button>
    </div>
  );
};

export default ChatInput;
