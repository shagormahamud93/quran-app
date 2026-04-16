import SurahCard from "@/components/SurahCard";
import { getSurahs } from "@/utils/api";

export default async function Home() {
  const data = await getSurahs();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quran Surah List</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {data.data.map((surah: any) => (
          <SurahCard key={surah.number} surah={surah} />
        ))}
      </div>
    </div>
  );
}