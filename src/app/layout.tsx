import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}