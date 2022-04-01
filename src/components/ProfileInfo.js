import React from "react";
const ProfileInfo = ({
  imageUrl,
  senderName,
  chatMessage,
  chatTime,
  setInfo,
}) => {
  return (
    <>
      <div
        className="contactInfo"
        onClick={() => setInfo(imageUrl, senderName)}
      >
        <img src={imageUrl} alt="dp" className="profileImage" />
        <div className="profileInfoMid">
          <p className="senderName">{senderName}</p>
          <p className="chatMessage">{chatMessage}</p>
        </div>
        <div className="profileInfoRight">{chatTime}</div>
      </div>
    </>
  );
};

export default ProfileInfo;
