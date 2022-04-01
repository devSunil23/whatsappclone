import React from "react";
import profileImage from "../assets/sk1.jpg";
import ProfileInfo from "./ProfileInfo";
import Searchbar from "./Searchbar";
import { contactData } from "../data";
const Contactlist = ({ setInfo }) => {
  return (
    <>
      <div className="contactList">
        <div className="profileInfo">
          <img src={profileImage} alt="profile" className="profileImage" />
        </div>
        <Searchbar />
        {contactData.map((item, index) => {
          return (
            <ProfileInfo
              imageUrl={item.imgUrl}
              senderName={item.name}
              chatMessage={item.message}
              chatTime={item.time}
              setInfo={setInfo}
            />
          );
        })}
      </div>
    </>
  );
};

export default Contactlist;
