import type { Metadata } from "next";
import Header from "../shared/Header";

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
