import { useLocation, useNavigate } from "react-router-dom";
import { generateMenuArray } from "../components/menu-array";
import { chatItems } from "../chat-options/chat-options-items";
import chatBackground from "@/assets/images/chat-bg.png";
import Icon from "@/components/fontawesome/fontawesome-icons";
import DropDown from "@/components/dropdown/drop-down";
import MessageList from "../message-list/form/message-list";
import ChatInput from "../chat-input/form/chat-input";
import { useQuery } from "react-query";
import { fetchMessage } from "./chat-api";
import ContactsSkeleton from "@/components/loaders/contacs-card-skeleton";
import { getOpenChat } from "@/app/cookie";

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const messages = params.get("messages");
  const current = JSON.parse(getOpenChat());
  const $messageList = useQuery(
    ["message", messages],
    () => fetchMessage({ chatId: messages || "" }),
    {
      retry: true,
      onError: () => {
        navigate("/");
      },
    }
  );

  if ($messageList.isError) {
    return <div>Error fetching messages. Please try again.</div>;
  }
  return $messageList.isLoading ? (
    <div
      className={`w-full h-full flex justify-center    ${
        messages ? "expanded" : "collapsed"
      }`}
    >
      <ContactsSkeleton />
    </div>
  ) : (
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
      <div className="message-list max-h-full h-full overflow-y-auto overflow-x-hidden ">
        <div
          className="background absolute "
          style={{ backgroundImage: `url(${chatBackground})` }}
        />
        <MessageList message={$messageList.data || []} />
      </div>
      <div className="message-input">
        <ChatInput />
      </div>
    </section>
  );
};

export default Chat;
