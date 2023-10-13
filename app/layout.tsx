import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Optiffy',
  description: 'Spend no time on manual tasks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <footer>
        <p>&copy; 2023 Your Agency Name | <a href="privacy-policy.html">Privacy Policy</a> | <a href="terms.html">Terms of Service</a></p>
    </footer>
    </html>
  )
}
