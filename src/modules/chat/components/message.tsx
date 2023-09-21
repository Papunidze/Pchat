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
        <img src={img} alt="avatar" className="avatar mb-1" />
      </div>
      <div className="message-content">
        <div className={`message-text ${isSent ? "text-end" : "text-start"}`}>
          <span>{text}</span>
        </div>
        <div className={`user-name ${isSent ? "text-end" : "text-start"}`}>
          <span>Giga Papunidze</span>
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
