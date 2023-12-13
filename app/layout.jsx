import { Heebo } from "next/font/google";
import "./globals.scss";
export const metadata = {
  title: "Subhash Jha",
  description: "Frontend Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
