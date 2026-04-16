"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
    const [fontSize, setFontSize] = useState(24);

    useEffect(() => {
        const saved = localStorage.getItem("fontSize");
        if (saved) setFontSize(Number(saved));
    }, []);

    const update = (size: number) => {
        setFontSize(size);
        localStorage.setItem("fontSize", String(size));
        document.documentElement.style.setProperty(
            "--arabic-size",
            size + "px"
        );
    };

    return (
        <div className="w-64 h-screen bg-white shadow-lg fixed left-0 top-0 p-5">
            <h1 className="text-xl font-bold mb-6 text-green-600">
                Quran App
            </h1>
            <nav className="space-y-3 mb-6">

                <Link href="/" className="flex items-center gap-2 hover:text-green-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                    >
                        <path d="M3 12l9-9 9 9" />
                        <path d="M9 21V9h6v12" />
                    </svg>
                    Home
                </Link>

                <Link href="/search" className="flex items-center gap-2 hover:text-green-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.3-4.3" />
                    </svg>
                    Search
                </Link>

            </nav>
            <div>
                <h2 className="font-semibold mb-2">Settings</h2>
                <p className="text-sm mb-2">Arabic Font Size</p>

                <div className="flex gap-2">
                    <button
                        onClick={() => update(20)}
                        className="px-3 py-1 bg-gray-200 rounded"
                    >
                        A-
                    </button>
                    <button
                        onClick={() => update(28)}
                        className="px-3 py-1 bg-gray-200 rounded"
                    >
                        A+
                    </button>
                </div>
            </div>
        </div>
    );
}