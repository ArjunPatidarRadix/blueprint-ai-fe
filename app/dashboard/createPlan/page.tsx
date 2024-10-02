"use client";

import { useState } from "react";
import Statement from "./Statement";
import Identity from "./Identity";
import Goal from "./Goal";
import Theme from "./Theme";
import RightNav from "@/app/components/RightNav/RightNav";

const TabsComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"identity" | "goal" | "theme">(
    "identity"
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-start">
      <div className="w-5/6">
        <div className="h-full mx-auto p-4">
          <div className="flex text-4xl justify-between border-b-2 border-gray-300">
            <button
              className={`pb-2 px-4 ${
                activeTab === "identity"
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("identity")}
            >
              Identity
            </button>
            <button
              className={`pb-2 px-4 ${
                activeTab === "goal"
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("goal")}
            >
              Goal
            </button>
            <button
              className={`pb-2 px-4 ${
                activeTab === "theme"
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("theme")}
            >
              Theme
            </button>
          </div>
          <div className="mt-4">
            {activeTab === "identity" && <Identity />}
            {activeTab === "goal" && (
              <div>
                <Goal />
              </div>
            )}
            {activeTab === "theme" && (
              <div>
                <Theme />
              </div>
            )}
          </div>
        </div>
      </div>
      <RightNav />
    </div>
  );
};

export default TabsComponent;
