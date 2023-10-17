import ChatCard from "@/modules/chat/components/chat-card";

const ChatList = () => {
  return (
    <div className="flex flex-col items-center mt-4 justify-center w-full gap-2 animate-fade ">
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </div>
  );
};

export default ChatList;
