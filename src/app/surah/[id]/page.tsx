import AyahCard from "@/components/AyahCard";
import { getSurahDetails } from "@/utils/api";

export default async function SurahPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await getSurahDetails(id);

  if (!data?.data?.[0]?.ayahs || !data?.data?.[1]?.ayahs) {
    return (
      <div className="p-6 text-red-500">
        Failed to load surah. Please try again.
      </div>
    );
  }

  const arabic = data.data[0].ayahs;
  const translation = data.data[1].ayahs;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Surah {data.data[0].englishName}
      </h1>

      {arabic.map((ayah: any, i: number) => (
        <AyahCard
          key={i}
          arabic={ayah.text}
          translation={translation?.[i]?.text || ""}
        />
      ))}
    </div>
  );
}