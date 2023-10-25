import { useState } from "react";
import chatBackground from "@/assets/images/chat-bg.png";
import { createAvatar } from "@/components/avatars/create-avatar";

import MessageList from "@/modules/chat/message-list/form/message-list";
import ChatList from "@/modules/chat/chat-list/form/chat-list";
import Search from "@/modules/chat/search/form/search";
import ChatInput from "@/modules/chat/chat-input/form/chat-input";

import "./index.css";

import Icon from "@/components/fontawesome/fontawesome-icons";

import { useLocation } from "react-router-dom";
import Settings from "@/page/settings/settings";
import DropDown from "@/components/dropdown/drop-down";
import { chatItems } from "@/modules/chat/chat-options/chat-options-items";
import { generateMenuArray } from "@/modules/chat/components/menu-array";

const ChatApp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

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
        } md:block sm:animate-none`}
      >
        {pageComponent}
      </nav>
      <div
        className={`background  ${isOpen ? "hidden" : "hidden sm:block"} `}
        style={{ backgroundImage: `url(${chatBackground})` }}
      ></div>
      <section
        className={`main-content  relative ${
          isOpen ? "expanded" : "collapsed"
        }`}
      >
        <header className="chat-header">
          <div className="chat-header-action">
            <button className="icon-button" onClick={() => setIsOpen(!isOpen)}>
              <Icon icon="fa-solid fa-arrow-left" />
            </button>
            <img src={createAvatar("giga")} alt="" className="avatar" />
            <div className="user-info">
              <h1 className="header-user-name">Giga Papunidze</h1>
              <span className="user-status">Last seen recent</span>
            </div>
          </div>

          <DropDown
            array={generateMenuArray(chatItems)}
            icon="fa-ellipsis-vertical"
          />
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
