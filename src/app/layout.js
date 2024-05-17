import { Cardo } from "next/font/google";

import "./globals.css";

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Bramble Catering",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cardo.className}>{children}</body>
    </html>
  );
}
