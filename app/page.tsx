"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/plan");
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <h1>Welcome to the Blueprint</h1>
    </div>
  );
}
