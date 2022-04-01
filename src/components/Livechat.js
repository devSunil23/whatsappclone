import React, { useState } from "react";
import profileImage from "../assets/sk1.jpg";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MessageChatbox from "./MessageChatbox";
import ChatboxSearchbar from "./ChatboxSearchbar";
import { chatMessage } from "../data";
const Livechat = ({ senderImage, senderName }) => {
  const [chatMessages, setchatMessages] = useState(chatMessage);
  const setMessageList = (text, setText) => {
    const message = [...chatMessages];
    message.push({
      senderYou: true,
      message: text,
    });
    setchatMessages(message);
    setText("");
  };
  return (
    <>
      <div className="liveChat">
        <div className="liveChatHeader">
          <img src={senderImage} alt="dp" className="profileImage" />
          <div className="liveChatMid">
            <div className="senderName">{senderName}</div>
            <div className="onlineStatus">Online</div>
          </div>
          <div className="liveChatRight">
            <SearchIcon className="searchIcon" />
            <MoreVertIcon className="moreVerticon" />
          </div>
        </div>
        <div className="chatBox">
          {chatMessages.map((item, index) => {
            return (
              <MessageChatbox
                senderYouMessage={item.senderYou}
                chatMessage={item.message}
              />
            );
          })}
        </div>
        <ChatboxSearchbar sendMessageList={setMessageList} />
      </div>
    </>
  );
};

export default Livechat;
