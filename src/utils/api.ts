export const getSurahs = async () => {
  const res = await fetch("https://api.alquran.cloud/v1/surah");
  return res.json();
};

export const getSurahDetails = async (id: string) => {
  try {
    const res = await fetch(
      `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.log("API status:", res.status);
      return null;
    }

    const json = await res.json();
    return json;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};