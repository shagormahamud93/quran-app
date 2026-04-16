"use client";

import { useState } from "react";

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = async () => {
        const res = await fetch(
            "https://api.alquran.cloud/v1/quran/en.asad"
        );
        const data = await res.json();

        const allAyahs = data.data.surahs.flatMap((s: any) => s.ayahs);

        const filtered = allAyahs.filter((a: any) =>
            a.text.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filtered.slice(0, 20));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.3-4.3" />
                </svg>
                Search Ayah
            </h1>

            <div className="flex gap-2 mb-4">
                <input
                    className="border p-3 w-full rounded"
                    placeholder="Search translation..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="px-5 bg-green-600 text-white rounded"
                >
                    Search
                </button>
            </div>

            <div className="space-y-3">
                {results.map((r, i) => (
                    <p key={i} className="bg-white p-3 rounded shadow">
                        {r.text}
                    </p>
                ))}
            </div>
        </div>
    );
}