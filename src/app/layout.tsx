import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "바른골프피팅센터 동래점",
  description: "부산 사직야구장 앞 바른골프피팅센터 동래점. 클럽 피팅, 리샤프팅, 클럽 수리와 그립 교체 전문."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
