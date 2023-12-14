import { Heebo } from "next/font/google";
import "./globals.scss";
export const metadata = {
  title: "Subhash Jha",
  description:
    "Frontend Developer at BANKSapi with expertise in Angular and UI optimization.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
