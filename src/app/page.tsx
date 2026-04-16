import SurahCard from "@/components/SurahCard";
import { getSurahs } from "@/utils/api";

export const revalidate = 3600;

export default async function Home() {
  const data = await getSurahs();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
         Quran Explorer
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((surah: any) => (
          <SurahCard key={surah.number} surah={surah} />
        ))}
      </div>
    </div>
  );
}