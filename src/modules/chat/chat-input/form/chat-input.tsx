import { useRef } from "react";

const ChatInput = () => {
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = `${textareaRef.current.scrollHeight - 8}px`;
      textareaRef.current.style.height = newHeight;
      if (textareaRef.current.scrollHeight + 8 > 320)
        textareaRef.current.style.overflow = "auto";
    }
  };
  return (
    <div className="flex items-center justify-center w-full ">
      <textarea
        ref={textareaRef}
        className="resize-none flex-1 ml-4 border rounded-lg py-2 px-3 max-h-80  border-gray-200 max-w-3xl w-full focus:outline-none focus:ring focus:border-blue-200 h-14 overflow-hidden"
        onChange={handleTextareaChange}
        placeholder="Message"
      />
    </div>
  );
};

export default ChatInput;
