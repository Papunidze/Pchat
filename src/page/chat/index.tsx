import { useState } from "react";
import chatBackground from "@/assets/images/chat-bg.png";
import Images from "@/components/preloader/images";
import { createAvatar } from "@/components/avatars/create-avatar";

import MessageList from "@/modules/chat/message-list/form/message-list";
import ChatList from "@/modules/chat/chat-list/form/chat-list";
import ChatInput from "@/modules/chat/chat-input/form/chat-input";
import Search from "@/modules/chat/search/form/search";

import "./index.css";

import Icon from "@/components/fontawesome/fontawesome-icons";

const ChatApp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="chat-container">
      <nav className={`sidebar ${isOpen ? "hidden" : "block"} md:block`}>
        <Search />
        <ChatList />
      </nav>
      <div
        className="background"
        style={{ backgroundImage: `url(${chatBackground})` }}
      >
        <section
          className={`main-content ${isOpen ? "expanded" : "collapsed"}`}
        >
          <header className="chat-header">
            <div className="chat-header-action">
              <button
                className="icon-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Icon icon="fa-solid fa-arrow-left" />
              </button>
              <Images src={createAvatar("giga")} alt="" styles="avatar" />
              <div className="user-info">
                <h1 className="header-user-name">Giga Papunidze</h1>
                <span className="user-status">Last seen recent</span>
              </div>
            </div>
            <button className="icon-button">
              <Icon icon={"fa-solid fa-ellipsis-vertical"} />
            </button>
          </header>
          <div className="message-list max-h-full h-full overflow-y-auto overflow-x-hidden">
            <MessageList />
          </div>
          <div className="message-input">
            <ChatInput />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChatApp;
