import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import NavBar from '@/components/navBar/navBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={clsx(inter.className, "bg-slate-600")}>
        <NavBar />
        <main className='h-screen w-screen pt-16 '>
          {children}
        </main>
      </body>
    </html>
  )
}
