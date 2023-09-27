import { useState } from "react";
import chatBackground from "@/assets/images/chat-bg.png";
import Images from "@/components/preloader/images";
import { createAvatar } from "@/components/avatars/create-avatar";

import MessageList from "@/modules/chat/message-list/form/message-list";
import ChatList from "@/modules/chat/chat-list/form/chat-list";
import Search from "@/modules/chat/search/form/search";
import ChatInput from "@/modules/chat/chat-input/form/chat-input";

import "./index.css";

import Icon from "@/components/fontawesome/fontawesome-icons";
import Popover from "@/components/popover/popover";
import { MenuItem } from "@/modules/chat/components/menu";
import { useLocation } from "react-router-dom";
import Settings from "@/modules/chat/settings/form/settings";

const ChatApp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [messageProps, setMessageProps] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const flow = params.get("flow");
  const getPageComponent = () => {
    switch (flow) {
      case "settings":
        return <Settings />;
      default:
        return (
          <>
            <Search />
            <ChatList />
          </>
        );
    }
  };
  const pageComponent = getPageComponent();
  return (
    <div className="chat-container ">
      <nav
        className={`sidebar ${
          isOpen ? "hidden" : "block  animate-slideIn"
        } md:block md:animate-none`}
      >
        {pageComponent}
      </nav>
      <div
        className={`background  ${isOpen ? "hidden" : "hidden md:block"} `}
        style={{ backgroundImage: `url(${chatBackground})` }}
      ></div>
      <section
        className={`main-content relative ${isOpen ? "expanded" : "collapsed"}`}
      >
        <header className="chat-header">
          <div className="chat-header-action">
            <button className="icon-button" onClick={() => setIsOpen(!isOpen)}>
              <Icon icon="fa-solid fa-arrow-left" />
            </button>
            <Images src={createAvatar("giga")} alt="" styles="avatar" />
            <div className="user-info">
              <h1 className="header-user-name">Giga Papunidze</h1>
              <span className="user-status">Last seen recent</span>
            </div>
          </div>
          <div className=" relative">
            <button
              className="icon-button "
              onClick={() => setMessageProps(!messageProps)}
            >
              <Icon icon={"fa-solid fa-ellipsis-vertical"} />
            </button>
            <Popover
              isOpen={messageProps}
              setIsOpen={setMessageProps}
              style={"left-[-100px] "}
            >
              <MenuItem icon="fa-lock" text="Block user" />
              <MenuItem icon="fa-trash" text="Delete chat" />
            </Popover>
          </div>
        </header>
        <div className="message-list max-h-full h-full overflow-y-auto overflow-x-hidden ">
          <div
            className="background absolute "
            style={{ backgroundImage: `url(${chatBackground})` }}
          ></div>
          <MessageList />
        </div>
        <div className="message-input">
          <ChatInput />
        </div>
      </section>
    </div>
  );
};

export default ChatApp;
