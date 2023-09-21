import { createAvatar } from "@/utils/avatars/create-avatar";
import "./components-style.css";
const ChatCard = () => {
  return (
    <a className="chat-card">
      <img src={createAvatar("giga")} alt="" className="avatar" />

      <div className="card-content">
        <div className="card-header">
          <h1 className="card-title">Title</h1>
          <p className="card-time">9:30</p>
        </div>
        <span className="card-description">
          Hellowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
        </span>
      </div>
    </a>
  );
};

export default ChatCard;
