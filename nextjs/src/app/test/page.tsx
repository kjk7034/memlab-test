"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [currentNode, setNode] = useState<unknown>();
  useEffect(() => {
    const handleResize = () => console.log("Window resized");

    window.addEventListener("resize", handleResize);

    // Cleanup 누락
  }, []);

  useEffect(() => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    setNode(div);

    // DOM 해제 누락
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...");
    }, 500);

    // Cleanup 누락
  }, []);

  return (
    <main>
      <h1>Test Page</h1>
    </main>
  );
}
