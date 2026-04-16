import Link from "next/link";

export default function SurahCard({ surah }: any) {
  return (
    <Link href={`/surah/${surah.number}`}>
      <div className="p-5 bg-white/70 backdrop-blur-md rounded-xl shadow-sm hover:shadow-md transition border border-[#e5e7eb]">

        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">
            {surah.englishName}
          </h2>
          <span className="text-green-600 font-bold">
            #{surah.number}
          </span>
        </div>

        {/*  arabic font + dynamic size */}
        <p
          className="text-right mt-2 font-arabic leading-relaxed"
          style={{ fontSize: "var(--arabic-size)" }}
        >
          {surah.name}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {surah.englishNameTranslation}
        </p>

      </div>
    </Link>
  );
}