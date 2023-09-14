import Images from "@/components/preloaders/images";
import React, { useState } from "react";
import { createAvatar } from "./avatars/create-avatar";
/*
.arrow-left {
  width: 0; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent; 
  
  border-right:10px solid blue; 
}
*/
const Message: React.FC<{ text: string; isSent: boolean }> = ({
  text,
  isSent,
}) => {
  const messageStyle = `rounded-2xl p-4 m-2 text-white relative ${
    isSent ? "bg-blue-500 text-right" : "bg-green-500 text-left "
  }`;
  const dropletStyle = `absolute bottom-0 ${
    isSent ? "right-[-9px]  top-[10px] rotate-180" : "left-[-9px] top-[10px]"
  } w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-transparent border-r-blue-500 ${
    !isSent ? "border-r-green-500" : "border-r-blue-500"
  }`;

  return (
    <div
      className={`flex ${
        isSent ? "end flex-row-reverse" : "justify-start"
      } gap-3`}
    >
      <Images
        src={createAvatar("giga")}
        alt=""
        styles="w-[40px]  h-[40px] rounded-[50%]  object-fit: cover select-none"
      />
      <div className={messageStyle}>
        {text}
        <div className={dropletStyle}></div>
      </div>
    </div>
  );
};

const MessageList: React.FC = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", isSent: true },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    {
      text: "Hi there! Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!",
      isSent: false,
    },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
    { text: "Hi there!", isSent: false },
  ]);

  const addMessage = (text: string, isSent: boolean) => {
    setMessages([...messages, { text, isSent }]);
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isSent={message.isSent} />
        ))}
      </div>
      <div>
        <button onClick={() => addMessage("New message from you", true)}>
          Send Message
        </button>
        <button onClick={() => addMessage("New message from them", false)}>
          Receive Message
        </button>
      </div>
    </div>
  );
};

export default MessageList;
