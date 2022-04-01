import React, { useState } from "react";
import Contactlist from "./components/Contactlist";
import Livechat from "./components/Livechat";
import Placeholder from "./components/Placeholder";

const App = () => {
  const [selectChat, setSelectChat] = useState(false);
  const [senderImage, setSenderImage] = useState("");
  const [senderName, setSenderName] = useState("");

  const setInfo = (imageUrl, senderName) => {
    setSelectChat(true);
    setSenderImage(imageUrl);
    setSenderName(senderName);
  };
  return (
    <>
      <div className="container">
        <Contactlist setInfo={setInfo}></Contactlist>
        {selectChat ? (
          <Livechat senderImage={senderImage} senderName={senderName} />
        ) : (
          <Placeholder />
        )}
      </div>
    </>
  );
};

export default App;
