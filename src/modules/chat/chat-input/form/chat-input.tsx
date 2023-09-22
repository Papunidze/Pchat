import { useRef } from "react";

const ChatInput = () => {
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = `${textareaRef.current.scrollHeight + 2}px`;
      textareaRef.current.style.height = newHeight;
      if (textareaRef.current.scrollHeight > 320)
        textareaRef.current.style.overflow = "auto";
    }
  };
  return (
    <div className="flex items-center justify-center max-w-3xl w-full m-auto relative">
      <textarea
        ref={textareaRef}
        className="resize-none flex-1 border pt-4 px-4 max-h-80  border-gray-200  focus:outline-none focus:ring focus:border-blue-200 h-auto overflow-hidden rounded-2xl "
        onChange={handleTextareaChange}
        placeholder="Message"
      />
    </div>
  );
};

export default ChatInput;
