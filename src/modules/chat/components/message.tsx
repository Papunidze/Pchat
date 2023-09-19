import Images from "@/components/preloader/images";

interface MessageProps {
  isSent: boolean;
  text: string;
  time?: string;
  img: string;
}

const Message = ({ isSent, text, img }: MessageProps) => {
  return (
    <div
      className={`message-container ${
        isSent ? "message-sent" : "message-received"
      }`}
    >
      <div className={`avatar-container ${isSent ? "sent" : "received"}`}>
        <Images src={img} alt="test" styles="avatar" />
      </div>
      <div className="message-content">
        <div className={`message-text ${isSent ? "sent" : "received"}`}>
          <span>{text}</span>
        </div>
        <div className="user-name">
          <span>Giga Papunidze</span>
        </div>
        <div className={`message-arrow ${isSent ? "sent" : "received"}`}></div>
      </div>
    </div>
  );
};

export default Message;
