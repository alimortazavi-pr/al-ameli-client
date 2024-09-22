import type { Metadata } from "next";

//Assets
import "@/assets/css/globals.css";
import "@fontsource-variable/noto-sans-arabic";

export const metadata: Metadata = {
  title: "Al Ameli",
  description: "Developed by alimor.ir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
