import React from "react";

const MessageChatbox = ({ senderYouMessage, chatMessage }) => {
  return (
    <>
      <div className="messageChatUser">
        {senderYouMessage ? (
          <div
            className="messageChat"
            style={{ backgroundColor: "#D9FDD3", float: "right" }}
          >
            {chatMessage}
          </div>
        ) : (
          <div
            className="messageChat"
            style={{ backgroundColor: "#fff", float: "left" }}
          >
            {chatMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default MessageChatbox;
