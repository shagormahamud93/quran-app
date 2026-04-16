import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6 ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}