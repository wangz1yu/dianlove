import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '节薪云 - 专业的灵活用工平台',
  description: '节薪云致力于全业务本地化的专业财税服务平台，专注于灵活用工场景下的共享经济平台',
  keywords: '节薪云,灵活用工,税务服务,财税平台,共享经济',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}