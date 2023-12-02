import ChatCard from "@/modules/chat/components/chat-card";
import { fetchChat } from "../chat-list-api";
import { useQuery } from "react-query";
import CardSkeleton from "@/components/loaders/card-skeleton";
import React from "react";
import { useAuthContext } from "@/context/login-provider";

const ChatList = () => {
  const { auth } = useAuthContext();

  const $chatList = useQuery("chat", fetchChat, { retry: true });

  return (
    <div className="flex flex-col items-center mt-4 justify-center w-full gap-2 animate-fade ">
      {$chatList.isLoading && <CardSkeleton />}
      {$chatList.data &&
        $chatList.data.map((element) =>
          element.users?.map((items, index) => (
            <React.Fragment key={index}>
              {auth.user?._id !== items._id && (
                <ChatCard
                  _id={element._id}
                  name={items.name}
                  avatar={items.avatar}
                  latestMessage={element.latestMessage?.content}
                  username={items.username}
                />
              )}
            </React.Fragment>
          ))
        )}
    </div>
  );
};

export default ChatList;
