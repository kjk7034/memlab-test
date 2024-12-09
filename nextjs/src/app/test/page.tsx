"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [currentNode, setNode] = useState<unknown>();
  useEffect(() => {
    const handleResize = () => console.log("Window resized");

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    setNode(div);

    return () => {
      document.body.removeChild(div);
      setNode(null);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...");
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main>
      <h1>Test Page</h1>
    </main>
  );
}
