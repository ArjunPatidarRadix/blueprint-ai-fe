import PlanTable from "@/app/components/PlanTable";
import React, { useEffect } from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-start">
      <div className="w-5/6">
        <PlanTable />
      </div>
      <div className="w-1/6 pb-8 grow rounded-md bg-gray-50">
        Right Section here
      </div>
    </div>
  );
}
