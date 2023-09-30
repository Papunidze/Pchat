interface MessageProps {
  isSent: boolean;
  text: string;
  time?: string;
  avatar: string;
  img?: string;
}
import "@/modules/chat/components/components-style.css";

const Message = ({ isSent, text, avatar, img }: MessageProps) => {
  return (
    <div
      className={`message-container  ${
        isSent ? "message-sent" : "message-received"
      }`}
    >
      <div className={`avatar-container ${isSent ? "sent" : "received"}`}>
        <img src={avatar} alt="avatar" className="avatar mb-1" />
      </div>
      <div className="message-content">
        <div className={`message-text ${isSent ? "text-end" : "text-start"}`}>
          <span className="dark:text-clear font-montserrat">
            {img ? <img src={img} alt="test" className="w-40 mt-2" /> : text}
          </span>
        </div>
        <div className={`user-name ${isSent ? "text-end" : "text-start"} `}>
          <span className="font-montserrat">Giga Papunidze</span>
        </div>
        <div
          className={`message-tail-after ${
            isSent ? "right-[-14px]" : "left-[-14px]"
          }`}
        />
        <div
          className={`message-tail-before ${
            isSent ? "right-[-14px]" : "left-[-14px]"
          }`}
        />
      </div>
    </div>
  );
};

export default Message;
