import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateMenuArray } from "../components/menu-array";
import { chatItems } from "../chat-options/chat-options-items";
import chatBackground from "@/assets/images/chat-bg.png";
import Icon from "@/components/fontawesome/fontawesome-icons";
import DropDown from "@/components/dropdown/drop-down";
import MessageList, { MessageProps } from "../message-list/form/message-list";
import ChatInput from "../chat-input/form/chat-input";
import { useQuery } from "react-query";
import { fetchMessage } from "./chat-api";
import ContactsSkeleton from "@/components/loaders/contacs-card-skeleton";
import { getOpenChat } from "@/app/cookie";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const messages = params.get("messages");
  const current = JSON.parse(getOpenChat());
  const [message, setMessage] = useState<MessageProps[]>([]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [message]);

  const { isError, isLoading } = useQuery(
    ["message", messages],
    () => fetchMessage({ chatId: messages || "" }),
    {
      retry: true,
      onSuccess: (args) => {
        if (Array.isArray(args)) {
          setMessage(args);
        }
      },
      onError: () => {
        navigate("/");
      },
    }
  );

  useEffect(() => {
    console.log("con");
    if (isError) {
      return;
    }

    const handleIncomingMessage = (message: MessageProps) => {
      console.log(message);
      setMessage((prevMessages) => [...prevMessages, message]);
    };

    socket.emit("join", messages);
    socket.on("message", handleIncomingMessage);

    return () => {
      socket.off("message", handleIncomingMessage);
      socket.emit("leave", messages);
      // socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <div
      className={`w-full h-full flex justify-center ${
        messages ? "expanded" : "collapsed"
      }`}
    >
      {isLoading ? (
        <ContactsSkeleton />
      ) : (
        <section
          className={`main-content relative ${
            messages ? "expanded" : "collapsed"
          }`}
        >
          <header className="chat-header">
            <div className="chat-header-action">
              <button className="icon-button" onClick={() => navigate("/")}>
                <Icon icon="fa-solid fa-arrow-left" />
              </button>
              <img src={current.avatar} alt="" className="avatar" />
              <div className="user-info">
                <h1 className="header-user-name">{current.name}</h1>
              </div>
            </div>
            <DropDown
              array={generateMenuArray(chatItems(messages || ""))}
              icon="fa-ellipsis-vertical"
            />
          </header>
          <div
            className="message-list max-h-full h-full overflow-y-auto overflow-x-hidden"
            ref={messagesContainerRef}
          >
            <div
              className="background absolute"
              style={{ backgroundImage: `url(${chatBackground}) ` }}
            />
            <MessageList message={message || []} />
          </div>
          <div className="message-input">
            <ChatInput
              socket={socket}
              setMessage={setMessage}
              messages={messages || ""}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default Chat;
