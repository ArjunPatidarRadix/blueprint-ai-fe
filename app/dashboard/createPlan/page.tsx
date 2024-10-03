"use client";

import { useState } from "react";
import Identity from "./Identity";
import Goal from "./Goal";
import Theme from "./Theme";
import RightNav from "@/app/components/RightNav/RightNav";
import { ColorEnum } from '../../Enums/ColouEnums';
import { useSearchParams } from 'next/navigation';

const TabsComponent: React.FC = () => {
  const searchParam = useSearchParams();
  const planName = searchParam.get('planName'); 

  const [activeTab, setActiveTab] = useState<"identity" | "goal" | "theme">("identity");

  // Function to render the active tab's content
  const renderActiveTab = () => {
    switch (activeTab) {
      case "identity":
        return <Identity />;
      case "goal":
        return <Goal />;
      case "theme":
        return <Theme />;
      default:
        return null; // Fallback case if no tab is active
    }
  };

  return (
    <div className="min-h-screen flex justify-start">
      <div className="w-5/6">
        <div className="h-full mx-auto p-4" style={{ backgroundColor: ColorEnum.OFF_WHITE }}>
          <div className="flex justify-between items-center mb-3">
            <div className="text-lg">
              <span className="">Plan Name: </span><span className="font-bold">{planName || "N/A"}</span>
            </div>
            <div className="text-lg text-center flex-1">
              <span className="">Organization Name: </span><span className="font-bold">{planName || "N/A"}</span>
            </div>
            <div className="text-lg text-right">
              <span className="">Created On: </span><span className="font-bold">03-10-24</span>
            </div>
          </div>

          {/* Tab buttons */}
          <div className="flex text-4xl justify-center items-center border-b-2 border-gray-300 mb-4">
            <button
              className={`pb-2 px-4 ${activeTab === "identity" ? "border-b-2 border-black" : "text-gray-400"}`}
              onClick={() => setActiveTab("identity")}
            >
              Identity
            </button>
            <button
              className={`pb-2 px-4 ${activeTab === "goal" ? "border-b-2 border-black" : "text-gray-400"}`}
              onClick={() => setActiveTab("goal")}
            >
              Goal
            </button>
            <button
              className={`pb-2 px-4 ${activeTab === "theme" ? "border-b-2 border-black" : "text-gray-400"}`}
              onClick={() => setActiveTab("theme")}
            >
              Theme
            </button>
          </div>

          {/* Render the content of the active tab */}
          <div className="mt-4">
            {renderActiveTab()}
          </div>
        </div>
      </div>
      <RightNav />
    </div>
  );
};

export default TabsComponent;
