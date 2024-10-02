import PlanTable from "@/app/components/PlanTable";
import RightNav from "@/app/components/RightNav/RightNav";
import React, { useEffect } from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-start">
      <div className="w-5/6">
        <PlanTable />
      </div>
      <RightNav />
    </div>
  );
}
