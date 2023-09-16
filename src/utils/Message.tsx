import Images from "@/components/preloaders/images";
import React from "react";
import { createAvatar } from "./avatars/create-avatar";

const Message: React.FC<{ text: string; isSent: boolean }> = ({
  text,
  isSent,
}) => {
  return (
    <div
      className={`flex ${
        isSent ? "end flex-row-reverse" : "justify-start"
      } gap-3`}
    >
      <Images
        src={createAvatar("giga")}
        alt=""
        styles="w-[40px] h-[40px] rounded-[50%] object-fit:cover select-none mt-2"
      />
      <div
        className={`rounded-2xl p-4 m-2 text-white relative ${
          isSent ? "bg-blue-500 text-right" : "bg-white text-left text-black"
        }`}
      >
        {text}
        <div
          className={`absolute bottom-0 ${
            isSent
              ? "right-[-9px]  top-[10px] rotate-180"
              : "left-[-9px] top-[10px]"
          } w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-transparent ${
            !isSent ? "border-r-white " : "border-r-blue-500"
          }`}
        ></div>
      </div>
    </div>
  );
};

const MessageList: React.FC = () => {
  const messages = [
    { text: "Hello!", isSent: true },
    { text: "Hi there!", isSent: false },
  ];

  return (
    <div className="w-full h-full b">
      {messages.map((message, index) => (
        <Message key={index} text={message.text} isSent={message.isSent} />
      ))}
    </div>
  );
};

export default MessageList;
