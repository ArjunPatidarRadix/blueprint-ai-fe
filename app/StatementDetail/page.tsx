"use client";

import { useSearchParams } from "next/navigation";
import "./styles.css";

const page = () => {
  const searchParams = useSearchParams();
  const From = searchParams.get("From");
  return (
    <div className="mainContainer">
      <div className="subContainer">
        <p className="h3">{From}</p>
        <div className="statementBox">
          <p>No statement added</p>
        </div>
        <div className="btnContainer">
          <button className="buildBtn">Build</button>
        </div>
      </div>
      <div className="subContainer2">
        <div className="textBoxContainer">
          <div className="chatbox">
            <p className="font-extralight">send message to start new chat</p>
          </div>
          <div className="flex flex-row h-10">
            {/* <input type="text" className="messageField" /> */}

            <div className="flex items-center p-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12.79V9a6 6 0 00-6-6h-3a6 6 0 00-6 6v8a4 4 0 004 4h6a2 2 0 002-2v-5a2 2 0 10-4 0v4"
                ></path>
              </svg>
              <input
                className="ml-2 w-full outline-none"
                type="text"
                placeholder="Search..."
              />
            </div>
            <button className="sendBtn">Send</button>
          </div>
        </div>
        <div className="textBoxContainer">
          <textarea className="textArea" placeholder="You can edit here" />
          <div className=" flex justify-end">
            <button className="saveBtn">Save</button>
          </div>
        </div>
        <div className="textBoxContainer">
          <textarea
            className="textArea"
            placeholder="Final statement"
            disabled
          />
        </div>
      </div>
      <div className="finalBtnContainer">
        <button className="buildBtn">
          Finalize <span className="ml-2"> →</span>
        </button>
      </div>
    </div>
  );
};

export default page;
