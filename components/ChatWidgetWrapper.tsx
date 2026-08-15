"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false, loading: () => null });

export default function ChatWidgetWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(() => setShouldLoad(true), 1000);
    return () => clearTimeout(id);
  }, []);

  if (!shouldLoad) return null;
  return <ChatWidget />;
}
