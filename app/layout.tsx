import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "todo list",
  description: "live and study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
