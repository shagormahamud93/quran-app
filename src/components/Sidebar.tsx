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
                <Link href="/" className="block hover:text-green-600">
                    Home
                </Link>
                <Link href="/search" className="block hover:text-green-600">
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