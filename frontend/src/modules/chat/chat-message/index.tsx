import { useLocation, useNavigate } from "react-router-dom";
import { generateMenuArray } from "../components/menu-array";
import { chatItems } from "../chat-options/chat-options-items";
import chatBackground from "@/assets/images/chat-bg.png";
import Icon from "@/components/fontawesome/fontawesome-icons";
import DropDown from "@/components/dropdown/drop-down";
import MessageList from "../message-list/form/message-list";
import ChatInput from "../chat-input/form/chat-input";

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const messages = params.get("messages");

  return (
    <section
      className={`main-content  relative ${
        messages ? "expanded" : "collapsed"
      }`}
    >
      <header className="chat-header">
        <div className="chat-header-action">
          <button className="icon-button" onClick={() => navigate("/")}>
            <Icon icon="fa-solid fa-arrow-left" />
          </button>
          {/* <img src={createAvatar("giga")} alt="" className="avatar" /> */}
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
  );
};

export default Chat;
