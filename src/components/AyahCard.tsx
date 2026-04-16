export default function AyahCard({ arabic, translation }: any) {
  return (
    <div className="p-5 mb-4 p-5 bg-white/70 backdrop-blur-md rounded-xl shadow-sm hover:shadow-md transition border border-[#e5e7eb]">
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