"use client";

import { useSearchParams } from "next/navigation";
import ChatBox from "../dashboard/createPlan/StatementModal/components/ChatBox";
import "./styles.css";
import WorkingPane from "../dashboard/createPlan/StatementModal/components/WorkingPane";
import CurrentStatement from "../dashboard/createPlan/StatementModal/components/CurrentStatement";

const page = () => {
  const searchParams = useSearchParams();
  const From = searchParams.get("From");
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        <ChatBox />
        <div className="flex-grow bg-white shadow-md p-4 rounded-e-xl">
          <CurrentStatement from={From} />
          <WorkingPane />
        </div>
      </div>
    </div>
  );
};

export default page;
