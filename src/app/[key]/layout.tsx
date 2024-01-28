export const metadata = {
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
      <body>{children}</body>
    </html>
  )
}
