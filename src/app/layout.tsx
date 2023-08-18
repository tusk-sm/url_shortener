import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Короткие ссылки',
  description: 'сделать короткую ссылку онлайн',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto my-10 min-h-screen mt-auto">
          {children}
          <a href="https://github.com/tusk-sm/url_shortener">github</a>
        </main>
      </body>
    </html>
  )
}
