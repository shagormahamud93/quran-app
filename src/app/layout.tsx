import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-[#f8faf7]">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}