import "./globals.css";
import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = { title: 'ReceipeBox' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto p-6">
        <Nav />
        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
}