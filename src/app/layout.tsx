import type { Metadata } from "next";
import { montserrat, roboto } from "./lib/fonts";

import "./globals.scss";

export const metadata: Metadata = {
  title: "RouteMaze",
  description: "Powered by Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
