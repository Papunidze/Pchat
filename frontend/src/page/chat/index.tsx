import { useLocation } from "react-router-dom";
import chatBackground from "@/assets/images/chat-bg.png";
import ChatList from "@/modules/chat/chat-list/form/chat-list";
import Search from "@/modules/chat/search/form/search";
import Settings from "@/page/settings/settings";
import Chat from "@/modules/chat/chat-message";

import "./index.css";

const ChatApp = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const flow = params.get("flow");
  const messages = params.get("messages");

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
          messages ? "hidden" : "block  animate-slideIn"
        } md:block sm:animate-none`}
      >
        {pageComponent}
      </nav>
      <div
        className={`background  ${messages ? "hidden" : "hidden sm:block"} `}
        style={{ backgroundImage: `url(${chatBackground})` }}
      />
      {messages && <Chat />}
    </div>
  );
};

export default ChatApp;
