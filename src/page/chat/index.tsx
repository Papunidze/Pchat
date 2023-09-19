import { useState } from "react";
import chatBackground from "@/assets/images/chat-bg.png";
import Images from "@/components/preloader/images";
import { createAvatar } from "@/utils/avatars/create-avatar";
import "./index.css";

const ChatApp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="chat-container">
      <nav className={`sidebar ${isOpen ? "hidden" : "block"} sm:block`}>
        <button onClick={() => setIsOpen(!isOpen)}>test</button>
      </nav>
      <section className={`main-content ${isOpen ? "expanded" : "collapsed"}`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${chatBackground})` }}
        >
          <header className="chat-header">
            <div className="chat-header-action">
              <button
                className="toggle-sidebar-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                2
              </button>
              <Images src={createAvatar("giga")} alt="" styles="avatar" />
              <div className="user-info">
                <h1 className="user-name">Giga Papunidze</h1>
                <span className="user-status">Last seen recent</span>
              </div>
            </div>
            <button className="options-button">
              {/* Options button icon */}
            </button>
          </header>
          <div className="message-list">{/* Message list content */}</div>
          <div className="message-input">
            <button className="attach-file-button">
              {/* Attach file button icon */}
            </button>
            <textarea
              //   ref={textareaRef}
              className="message-textarea"
              placeholder="Message"
              rows={1}
              //   onChange={handleTextareaChange}
            />
            <button className="send-button">{/* Send button icon */}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatApp;
