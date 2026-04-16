export const getSurahs = async () => {
  const res = await fetch("https://api.alquran.cloud/v1/surah");
  return res.json();
};

export const getSurahDetails = async (id: string) => {
  const res = await fetch(
    `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad`
  );
  return res.json();
};