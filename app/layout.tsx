import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Will You Be My Valentine?',
  description: 'A playful Valentine\'s Day proposal experience',
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