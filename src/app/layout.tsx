import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "바른골프피팅센터 동래점",
  description: "부산 동래구 바른골프피팅센터 동래점에서 스윙 분석과 맞춤 골프 클럽 피팅을 경험하세요."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
