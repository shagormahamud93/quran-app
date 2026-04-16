import Link from "next/link";

export default function SurahCard({ surah }: any) {
  return (
    <Link href={`/surah/${surah.number}`}>
      <div className="p-4 bg-white rounded shadow hover:bg-gray-50">
        <h2 className="font-bold">
          {surah.number}. {surah.englishName}
        </h2>
        <p>{surah.name}</p>
      </div>
    </Link>
  );
}