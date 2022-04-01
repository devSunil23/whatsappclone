import React, { useState } from "react";
import sendIcon from "../assets/send.png";
import Picker from "emoji-picker-react";
const ChatboxSearchbar = ({ sendMessageList }) => {
  const [text, setText] = useState("");
  const [showEmojiIcon, setShoEmojiIcon] = useState(false);
  const onEmojiClick = (event, emojiObj) => {
    setText(text + emojiObj.emoji);
    setShoEmojiIcon(!showEmojiIcon);
  };
  return (
    <>
      <div className="chatboxSearchBar">
        <img
          src="http://cdn.onlinewebfonts.com/svg/img_201721.png"
          alt="emoji"
          className="emojiIocn"
          onClick={() => setShoEmojiIcon(!showEmojiIcon)}
        />

        <div className="searchBarChat">
          {showEmojiIcon ? (
            <div className="picker">
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          ) : null}
          <input
            type="text"
            className="typeMessage"
            placeholder="Type a message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <img
          src={sendIcon}
          alt="send"
          className="sendImg"
          onClick={() => sendMessageList(text, setText)}
        />
      </div>
    </>
  );
};

export default ChatboxSearchbar;
