"use client";

import { useEffect, useState } from "react";

export default function Sidebar() {
  const [fontSize, setFontSize] = useState(24);

  useEffect(() => {
    const saved = localStorage.getItem("fontSize");
    if (saved) setFontSize(Number(saved));
  }, []);

  const update = (size: number) => {
    setFontSize(size);
    localStorage.setItem("fontSize", String(size));
  };

  return (
    <div className="fixed right-0 top-0 p-4 bg-white shadow h-full">
      <h2 className="font-bold mb-2">Settings</h2>

      <button onClick={() => update(20)}>Small</button>
      <button onClick={() => update(28)}>Large</button>
    </div>
  );
}