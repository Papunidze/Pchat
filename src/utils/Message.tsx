import Images from "@/components/preloaders/images";
import React from "react";
import { createAvatar } from "./avatars/create-avatar";

const Message: React.FC<{ text: string; isSent: boolean }> = ({
  text,
  isSent,
}) => {
  return (
    <div
      className={`bg-white text-dark  relative  z-20 select-none rounded-tl-[8px] rounded-bl-[16px] rounded-tr-[16px] rounded-br-[8px] shadow-3 w-fit my-[0.2rem] ${
        isSent ? "self-end" : "self-start"
      }`}
    >
      <div
        className={`absolute ${
          isSent ? "right-[-50px]" : "left-[-50px]"
        } top-2`}
      >
        <Images
          src={createAvatar("giga")}
          alt="test"
          styles="w-[40px] h-[40px] rounded-full"
        />
      </div>
      <div className="select-text min-w-[56px]   flex flex-col-reverse  max-w-[480px] ">
        <div
          className={`text-[16px] max-w-[480px] pt-0 pl-[.625rem] pb-[0.375rem] pr-[0.625rem]  break-words whitespace-pre-wrap relative ${
            isSent ? "text-right" : "text-left"
          }`}
        >
          <span className="max-w-full text-dark">{text}</span>
        </div>
        <div className=" max-w-[480px] py-[.375rem] px-[.625rem] pb-0  break-words whitespace-pre-wrap relative font-[500] text-[14px] overflow-hidden text-ellipsis select-none">
          <span className="max-w-full text-[#895dd5]">Giga Papunidze</span>
        </div>
        <div
          className={`absolute w-0 h-0 border-b-[15px] border-l-[15px] border-r-[15px]  border-r-transparent border-l-transparent border-b-white bottom-0 ${
            isSent ? "right-[-14px]" : "left-[-14px]"
          }`}
        ></div>
        <div
          className={`absolute w-0 h-0 border-b-[17px] border-l-[16px] border-r-[16px]  border-r-transparent border-l-transparent border-b-white bottom-0 ${
            isSent ? "right-[-15px]" : "left-[-15px]"
          }`}
        ></div>
      </div>
    </div>
  );
};

const MessageList: React.FC = () => {
  const messages = [
    { text: "აა წარმატებები!", isSent: true },
    { text: "გეიხარე 😍😍😂", isSent: false },
  ];

  return (
    <div className="min-h-full  max-w-[650px] w-full">
      <section className="relative flex flex-col my-auto px-[3.5rem] py-[1.5rem] justify-end">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isSent={message.isSent} />
        ))}
      </section>
    </div>
  );
};

export default MessageList;
