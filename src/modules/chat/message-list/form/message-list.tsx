import Message from "@/modules/chat/components/message";
import { createAvatar } from "@/utils/avatars/create-avatar";

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
    },
    {
      isSent: true,
      message: "test",
      img: createAvatar("giga"),
    },
    {
      isSent: false,
      message: "test",
      img: createAvatar("dato"),
    },
    {
      isSent: true,
      message: "test",
      img: createAvatar("giga"),
    },
    {
      isSent: false,
      message: "test",
      img: createAvatar("dato"),
    },
    {
      isSent: false,
      message:
        "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      img: createAvatar("giga"),
    },
    {
      isSent: false,
      message:
        "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      img: createAvatar("dato"),
    },
    {
      isSent: true,
      message:
        "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      img: createAvatar("giga"),
    },
    {
      isSent: true,
      message:
        "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
      img: createAvatar("dato"),
    },
    {
      isSent: true,
      message: "test",
      img: createAvatar("giga"),
    },
    {
      isSent: false,
      message: "test",
      img: createAvatar("dato"),
    },
    {
      isSent: true,
      message: "test",
      img: createAvatar("giga"),
    },
    {
      isSent: false,
      message: "test",
      img: createAvatar("dato"),
    },
    {
      isSent: true,
      message: "test",
      img: createAvatar("giga"),
    },
    {
      isSent: false,
      message: "test",
      img: createAvatar("dato"),
    },
    {
      isSent: true,
      message: "test",
      img: createAvatar("giga"),
    },
    {
      isSent: false,
      message: "test",
      img: createAvatar("dato"),
    },
    {
      isSent: true,
      message: "test",
      img: createAvatar("giga"),
    },
    {
      isSent: false,
      message: "test",
      img: createAvatar("dato"),
    },
  ];
  return (
    <div className="flex flex-col max-w-2xl w-full m-auto items-center relative h-full p-6 ">
      {messageArray.map((items) => (
        <Message isSent={items.isSent} img={items.img} text={items.message} />
      ))}
    </div>
  );
};

export default MessageList;
