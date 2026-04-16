export default function AyahCard({ arabic, translation }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow mb-4 border">
      <p
        className="text-right mb-3 font-arabic"
        style={{ fontSize: "var(--arabic-size, 24px)" }}
      >
        {arabic}
      </p>

      <p className="text-gray-600 leading-relaxed">
        {translation}
      </p>
    </div>
  );
}