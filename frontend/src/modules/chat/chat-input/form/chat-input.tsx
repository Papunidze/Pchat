// ChatInput.js
import React, { useEffect, useRef, useState } from "react";
import Picker, { EmojiClickData } from "emoji-picker-react";
import Icon from "@/components/fontawesome/fontawesome-icons";
import { useMutation } from "react-query";
import { sendMessage } from "../chat-input-api";
import { Socket } from "socket.io-client";
import { MessageProps } from "../../message-list/form/message-list";

interface ChatInputProps {
  socket: Socket;
  setMessage: React.Dispatch<React.SetStateAction<MessageProps[]>>;
  messages: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  socket,
  // setMessage,
  messages,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [emojiIsShow, setEmojiIsShow] = useState(false);
  const [textValue, setTextValue] = useState<string>("");
  const $message = useMutation(sendMessage);

  useEffect(() => {
    if (textareaRef.current) {
      const { current } = textareaRef;
      current.style.height = "auto";
      const newHeight = current.scrollHeight + 2;
      current.style.height = `${newHeight}px`;
      setTextValue(current.value);
    }
  }, [textValue]);

  const handleEmojiClick = (emoji: EmojiClickData) => {
    setTextValue((prev) => prev + emoji.emoji);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string;
        console.log(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = () => {
    const array = {
      chatId: messages || "",
      content: textValue,
    };

    $message.mutate(
      { ...array },
      {
        onSuccess: (data: MessageProps) => {
          socket.emit("sendMessage", { room: messages, message: data });
          setTextValue("");
        },
        onError: (error) => {
          console.error("Error sending message:", error);
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center w-full gap-2">
      <div className="flex justify-center max-w-2xl w-full relative items-center">
        <button
          className="icon-button absolute left-1 bottom-[6px] z-30"
          onClick={() => setEmojiIsShow(!emojiIsShow)}
        >
          <Icon icon="fa-regular fa-face-smile" color="default-icon" />
        </button>
        {emojiIsShow && (
          <>
            <div
              className="fixed w-[100vw] h-[100vh] bg-transparent left-0 top-0  z-20"
              onClick={() => setEmojiIsShow(false)}
            ></div>
            <div className="absolute left-0 bottom-full z-40">
              <Picker
                onEmojiClick={handleEmojiClick}
                autoFocusSearch={false}
                skinTonesDisabled={true}
                lazyLoadEmojis={false}
                searchDisabled={true}
              />
            </div>
          </>
        )}

        <textarea
          ref={textareaRef}
          className="ps-10 pe-10 resize-none min-h-[50px] flex-1 border max-h-80 border-gray-200 rounded-2xl shadow-2xl whitespace-pre-wrap p-3 focus:outline-none focus:border-blue-400 bg-white dark:text-white dark:bg-transparent"
          placeholder="Message"
          rows={1}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
          id="image-upload-input"
        />
        <label
          htmlFor="image-upload-input"
          className="icon-button absolute right-1 bottom-[6px]"
        >
          <Icon icon="fa-solid fa-paperclip" color="default-icon" />
        </label>
      </div>

      <button
        className="button primary rounded-full p-3 self-end mb-2 w-[35px] h-[35px] sm:mb-[0.45rem] sm:w-[40px] sm:h-[40px] z-30"
        onClick={handleSendMessage}
      >
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
