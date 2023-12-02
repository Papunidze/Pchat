import Message from "@/modules/chat/components/message";
import { useAuthContext } from "@/context/login-provider";

export interface MessageProps {
  chat: string;
  content: string;
  createdAt: string;
  sender: {
    avatar: string;
    _id: string;
    name: string;
  };
  updatedAt: string;
  _id: string;
  __v: number;
}

const MessageList = ({ message }: { message: MessageProps[] }) => {
  const { auth } = useAuthContext();

  return (
    <div className="flex flex-col max-w-2xl w-full m-auto items-center relative h-full p-6">
      {message &&
        message.map((item, index) => (
          <Message
            isSent={item.sender._id === auth.user?._id}
            avatar={item.sender.avatar}
            text={item.content}
            key={index}
          />
        ))}
    </div>
  );
};

export default MessageList;
