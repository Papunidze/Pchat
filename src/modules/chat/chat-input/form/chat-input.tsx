import Icon from "@/components/fontawesome/fontawesome-icons";

const ChatInput = () => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    target.style.height = "auto";
    const newHeight = target.scrollHeight + 2;
    target.style.height = `${newHeight}px`;
  };
  return (
    <div className="flex justify-center max-w-3xl w-full m-auto relative  items-end">
      <button className="icon-button absolute left-1 bottom-[6px]">
        <Icon icon="fa-regular fa-face-smile" />
      </button>
      <textarea
        className=" ps-10 pe-10 resize-none flex-1 border max-h-80  border-gray-200  rounded-2xl shadow-2xl whitespace-pre-wrap p-3 focus:outline-none focus:border-blue-400"
        placeholder="Message"
        rows={1}
        onChange={handleChange}
      />
      <button className="icon-button absolute right-1 bottom-[6px]">
        <Icon icon="fa-solid fa-paperclip" />
      </button>
    </div>
  );
};

export default ChatInput;
