import type { Metadata } from "next";

//Assets
import "@/assets/css/globals.css";
import "@fontsource-variable/noto-sans-arabic";
import "react-modern-drawer/dist/index.css";
import "react-photo-view/dist/react-photo-view.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-toastify/dist/ReactToastify.css";

//Components
import { ClientProvider } from "@/components/providers/ClientProvider";

export const metadata: Metadata = {
  title: "Al Ameli",
  description:
    "المنصة الرسمية لنشر التراث العلمي والفكري لسماحة العلامة الشيخ علي الكوراني العاملي(قده). يضم الموقع أرشيفاً شاملاً من المؤلفات والكتب الإلكترونية، المقالات والبحوث، المحاضرات الصوتية والمرئية وسيرة سماحته ومحطات من حياته المباركة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
