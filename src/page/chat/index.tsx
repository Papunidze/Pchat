import { useState } from "react";
import chatBackground from "@/assets/images/chat-bg.png";
import Images from "@/components/preloader/images";
import { createAvatar } from "@/utils/avatars/create-avatar";

import "./index.css";
import MessageList from "@/modules/chat/message-list/form/message-list";
import ChatList from "@/modules/chat/chat-list/form/chat-list";
import ChatInput from "@/modules/chat/chat-input/form/chat-input";
import Search from "@/modules/chat/search/form/search";

const ChatApp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="chat-container">
      <nav className={`sidebar ${isOpen ? "hidden" : "block"} sm:block`}>
        <Search />
        <ChatList />
      </nav>
      <section className={`main-content ${isOpen ? "expanded" : "collapsed"}`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${chatBackground})` }}
        >
          <header className="chat-header">
            <div className="chat-header-action">
              <button
                className="icon-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src="/src/assets/icons/arrow.svg"
                  alt="arrow-left"
                  className="rotate-180"
                />
              </button>
              <Images src={createAvatar("giga")} alt="" styles="avatar" />
              <div className="user-info">
                <h1 className="user-name">Giga Papunidze</h1>
                <span className="user-status">Last seen recent</span>
              </div>
            </div>
            <button className="icon-button">
              <img src="/src/assets/icons/more.svg" alt="more" />
            </button>
          </header>
          <div className="message-list">
            <MessageList />
          </div>
          <div className="message-input">
            <ChatInput />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatApp;
/*
        <textarea
              //   ref={textareaRef}
              className="message-textarea"
              placeholder="Message"
              rows={1}
              //   onChange={handleTextareaChange}
            />
*/
