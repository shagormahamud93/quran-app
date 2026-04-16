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
        <div className="p-6">
            <input
                className="border p-2 w-full"
                placeholder="Search ayah..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                onClick={handleSearch}
                className="mt-2 px-4 py-2 bg-blue-500 text-white"
            >
                Search
            </button>

            {results.map((r, i) => (
                <p key={i} className="mt-2 bg-white p-2 rounded">
                    {r.text}
                </p>
            ))}
        </div>
    );
}