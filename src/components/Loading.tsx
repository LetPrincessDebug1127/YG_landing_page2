"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      // Nếu tài nguyên đã load xong trước khi effect chạy
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
    </div>
  );
}
