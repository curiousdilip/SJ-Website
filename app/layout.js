import { Heebo } from 'next/font/google'
import './globals.css'
export const metadata = {
  title: 'Subhash Jha',
  description: 'Frontend Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
