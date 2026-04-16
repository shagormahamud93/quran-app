"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
    const [fontSize, setFontSize] = useState(24);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const [font, setFont] = useState("Amiri");

    // Load from localStorage
    useEffect(() => {
        const savedSize = localStorage.getItem("fontSize");
        const savedFont = localStorage.getItem("font");

        if (savedSize) {
            setFontSize(Number(savedSize));
            document.documentElement.style.setProperty("--arabic-size", savedSize + "px");
        }

        if (savedFont) {
            setFont(savedFont);
            document.documentElement.style.setProperty("--arabic-font", `'${savedFont}', serif`);
        }
    }, []);

    // font size update
    const updateSize = (size: number) => {
        setFontSize(size);
        localStorage.setItem("fontSize", String(size));
        document.documentElement.style.setProperty("--arabic-size", size + "px");
    };

    // font change
    const updateFont = (f: string) => {
        setFont(f);
        localStorage.setItem("font", f);
        document.documentElement.style.setProperty("--arabic-font", `'${f}', serif`);
    };

    return (
        <>
            <div className="md:hidden flex items-center justify-between p-4 bg-white shadow fixed top-0 left-0 right-0 z-50">
                <h1 className="text-xl font-bold text-green-600">Quran App</h1>

                <button onClick={() => setOpen(!open)} className="p-2 border rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" > <line x1="3" y1="6" x2="21" y2="6" /> <line x1="3" y1="12" x2="21" y2="12" /> <line x1="3" y1="18" x2="21" y2="18" /> </svg>
                </button>
            </div>

            {/* overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 md:hidden z-40"
                />
            )}

            {/* sidebar */}
            <div className={`
                fixed md:static top-0 left-0 z-50 h-screen w-64 p-5
                bg-[#ffffffcc] backdrop-blur-md border-r border-gray-200 shadow-lg
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}>

                <div className="mb-8">
                    <h1 className="text-xl font-bold text-green-600">Quran App</h1>
                </div>

                <nav className="space-y-3 mb-8">
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-2 transition
                        ${pathname === "/" ? "text-green-600 font-semibold" : "hover:text-green-600"}`}>
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
                            <path d="M3 10.5L12 3l9 7.5" />
                            <path d="M5 10v10h5v-6h4v6h5V10" />
                        </svg>    Home
                    </Link>

                    <Link
                        href="/search"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-2 transition
                        ${pathname === "/search" ? "text-green-600 font-semibold" : "hover:text-green-600"}`}>
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
                        </svg> Search
                    </Link>
                </nav>

                {/* settings */}
                <div className="border-t pt-4 space-y-4">
                    <div>
                        <p className="text-sm mb-2">Arabic Font Size</p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => updateSize(20)}
                                className={`px-3 py-1 rounded cursor-pointer
                                ${fontSize === 20 ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}>
                                A-
                            </button>

                            <button
                                onClick={() => updateSize(28)}
                                className={`px-3 py-1 rounded cursor-pointer
                                ${fontSize === 28 ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}>
                                A+
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm mb-2">Arabic Font Style</p>

                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => updateFont("Amiri")}
                                className={`px-3 py-2 rounded text-left
                                ${font === "Amiri" ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}>
                                Amiri
                            </button>

                            <button
                                onClick={() => updateFont("Scheherazade New")}
                                className={`px-3 py-2 rounded text-left
                                ${font === "Scheherazade New" ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}>
                                Scheherazade
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}