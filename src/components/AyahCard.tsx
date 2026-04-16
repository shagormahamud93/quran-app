export default function AyahCard({ arabic, translation }: any) {
  return (
    <div className="bg-white p-4 rounded mb-3 shadow">
      <p className="text-right text-xl mb-2 font-arabic">{arabic}</p>
      <p className="text-gray-600">{translation}</p>
    </div>
  );
}