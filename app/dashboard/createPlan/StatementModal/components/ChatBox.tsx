import "./styles.css";
import { IoMdAttach } from "react-icons/io";
import { FaMicrophone, FaArrowCircleUp } from "react-icons/fa";
import { useState } from "react";

const ChatBox = () => {
  const [chat, setChat] = useState([
    { type: "send", message: "Hello" },
    {
      type: "receive",
      message:
        "Hello, I am SFA, an AI language model developed by A4i. My purpose is to assist with a wide range of queries...",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const onSendMessage = () => {
    const newChat = [...chat, { type: "send", message: newMessage }];
    setChat(newChat);
    setNewMessage("");
  };
  return (
    <div className="w-1/2 bg-white shadow-md p-4 flex flex-col justify-between rounded-s-xl">
      <div>
        {/* Chat Message */}
        <div className="flex flex-col">
          {chat.map((c) => {
            return (
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4 w-1/2"
                style={{ alignSelf: c.type === "send" ? "end" : "start" }}
              >
                <p>{c.message}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Input box */}
      <div className="flex flex-row border-2 border-gray-200 rounded-xl overflow-hidden">
        <textarea
          name="textarea"
          style={{
            width: "100%",
            height: 125,
            resize: "none",
            outline: "none",
          }}
          className="border-2 border-gray-200 p-2 rounded-s-xl"
          placeholder="Type something to start..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <div className="flex flex-col">
          <button className="p-2 border-b-2 border-gray-200">
            <IoMdAttach size={24} />
          </button>
          <button className=" p-2 border-b-2 border-gray-200">
            <FaMicrophone size={24} />
          </button>
          <button className=" p-2 rounded-lg">
            <FaArrowCircleUp size={24} onClick={onSendMessage} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
