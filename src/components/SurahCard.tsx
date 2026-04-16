import Link from "next/link";

export default function SurahCard({ surah }: any) {
  return (
    <Link href={`/surah/${surah.number}`}>
      <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer border">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">
            {surah.englishName}
          </h2>
          <span className="text-green-600 font-bold">
            #{surah.number}
          </span>
        </div>

        <p className="text-right text-xl mt-2 font-arabic">
          {surah.name}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {surah.englishNameTranslation}
        </p>
      </div>
    </Link>
  );
}