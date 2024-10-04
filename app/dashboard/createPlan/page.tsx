"use client";

import { useState } from "react";
import Identity from "./Identity";
import Goal from "./Goal";
import Theme from "./Theme";
import RightNav from "@/app/components/RightNav/RightNav";
import { ColorEnum } from "../../Enums/ColouEnums";
import { useSearchParams } from "next/navigation";

const TabsComponent: React.FC = () => {
  const searchParam = useSearchParams();
  const planName = searchParam.get("planName");
  const organization = searchParam.get("organization");

  const [activeTab, setActiveTab] = useState<"identity" | "goal" | "theme">(
    "identity"
  );

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
    <div className="min-h-screen flex justify-center">
      <div className="w-full">
        <div
          className="h-full mx-auto p-4"
          style={{ backgroundColor: ColorEnum.OFF_WHITE }}
        >
          <div className="flex mb-6">
            <p className="font-bold">
              <span className="text-blueColor text-xl">
                {planName || "N/A"}
              </span>
              {", "}
              <span className="text-pinkColor text-xl">
                {organization || "N/A"}
              </span>
              {", "}
              <span className="italic font-normal">Created at 03-10-24</span>
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex text-3xl justify-start items-center gap-5">
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

          {/* Render the content of the active tab */}
          <div
            className="mt-4 overflow-y-auto"
            style={{
              maxHeight: "75vh",
              scrollbarWidth: "none",
            }}
          >
            {renderActiveTab()}
          </div>
        </div>
      </div>
      {/* <RightNav /> */}
    </div>
  );
};

export default TabsComponent;
