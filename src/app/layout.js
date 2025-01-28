import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Displacement Map Editor',
  description: 'Create professional displacement mapping effects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <nav className="container flex items-center justify-between h-16 px-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">DisplacePro</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="/displacement" className="text-sm font-medium hover:text-primary transition-colors">
                Editor
              </a>
            </div>
          </nav>
        </header>

        <main className="pt-16 min-h-[calc(100vh-4rem)]">{children}</main>

        <footer className="border-t">
          <div className="container flex items-center justify-center h-16 px-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} DisplacePro. All rights reserved.
          </div>
        </footer>
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
