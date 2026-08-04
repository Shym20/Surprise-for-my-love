"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TermsConditions() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#testimonials");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#f7f4fd] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600"></div>
    </div>
  );
}
