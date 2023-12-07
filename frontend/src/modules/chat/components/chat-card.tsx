import { useNavigate } from "react-router-dom";
import "./components-style.css";

interface chatCardProps {
  _id: string;
  avatar: string;
  name: string;
  username: string;
  latestMessage?: string;
  time?: string;
}

const ChatCard = (props: chatCardProps) => {
  const navigate = useNavigate();
  const times = props.time ? new Date(props.time) : new Date();

  const formattedTime = `${times.getHours()}:${times.getMinutes()}`;
  const handleClick = () => {
    navigate(`/?messages=${props._id}`);
    document.cookie = `current=${JSON.stringify({
      name: props.name,
      avatar: props.avatar,
    })}`;
  };

  return (
    <a className="chat-card" onClick={handleClick}>
      <img src={props.avatar} alt="" className="avatar w-12 h-12" />
      <div className="card-content">
        <div className="card-header">
          <h1 className="card-title">{props.username}</h1>
          {props.time && <p className="card-time">{formattedTime}</p>}
        </div>
        <span className="card-description">{props.latestMessage || ""}</span>
      </div>
    </a>
  );
};

export default ChatCard;
