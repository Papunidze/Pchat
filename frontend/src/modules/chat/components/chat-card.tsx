import { useNavigate } from "react-router-dom";
import "./components-style.css";

interface chatCardProps {
  _id: string;
  avatar: string;
  name: string;
  username: string;
}
const ChatCard = (props: chatCardProps) => {
  const navigate = useNavigate();
  return (
    <a
      className="chat-card"
      onClick={() => navigate(`/?messages=${props._id}`)}
    >
      <img src={props.avatar} alt="" className="avatar w-12 h-12" />
      <div className="card-content">
        <div className="card-header">
          <h1 className="card-title">{props.username}</h1>
          <p className="card-time">9:30</p>
        </div>
        <span className="card-description">{props.name}</span>
      </div>
    </a>
  );
};

export default ChatCard;
