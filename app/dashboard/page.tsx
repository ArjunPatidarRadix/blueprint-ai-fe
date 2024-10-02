"use client";
import React, { useEffect } from "react";
import ClientTable from "../components/ClientTable";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/plan");
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex justify-start">
      <ClientTable />
    </div>

  );
}
