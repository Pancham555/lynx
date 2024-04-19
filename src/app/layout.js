import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
export const metadata = {
  title: "Lynx Portfolio",
  description: "Lynx Portfolio",
};

const font = Space_Grotesk({ subsets: ["latin"], display: "swap" });
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <link rel="icon" href="/Next Lynx.svg" sizes="any" />
      <script
        async
        src="https://lynx-umami.vercel.app/script.js"
        data-website-id="c202dd8c-9dcc-4f9f-9a5b-1966e3e61723"
      ></script>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
