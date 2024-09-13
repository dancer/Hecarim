import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hecarim VS Code Theme',
  description: 'Elevate your coding experience with our sleek and modern theme for Visual Studio Code.',
  openGraph: {
    title: 'Hecarim VS Code Theme',
    description: 'Elevate your coding experience with our sleek and modern theme for Visual Studio Code.',
    url: 'https://hecar.im',
    siteName: 'Hecarim VS Code Theme',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Hecarim VS Code Theme',
    description: 'Elevate your coding experience with our sleek and modern theme for Visual Studio Code.',
    creator: '@dxd',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
};