import Message from "@/modules/chat/components/message";
import { createAvatar } from "@/components/avatars/create-avatar";

const MessageList = () => {
  const messageArray = [
    {
      isSent: true,
      message: "test",
      img: createAvatar("giga"),
    },
    {
      isSent: false,
      message: "test",
      img: createAvatar("dato"),
      imgs: createAvatar("giga"),
    },
  ];
  return (
    <div className="flex flex-col max-w-2xl w-full m-auto items-center relative h-full p-6 ">
      {messageArray.map((items, index) => (
        <Message
          isSent={items.isSent}
          avatar={items.img}
          img={items.imgs}
          text={items.message}
          key={index}
        />
      ))}
    </div>
  );
};

export default MessageList;
