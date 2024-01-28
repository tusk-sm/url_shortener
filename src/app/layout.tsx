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
        <main className="container mx-auto py-10 min-h-screen flex flex-col items-center">
          {children}
          <a 
            className="inline-block mt-28  text-indigo-900 hover:text-indigo-800 underline decoration-dashed underline-offset-4 cursor-pointer decoration-1" 
            href="https://github.com/tusk-sm/url_shortener">
              GitHub
          </a>
        </main>
      </body>
    </html>
  )
}
