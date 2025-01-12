import './globals.css'
import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const notoSerif = Noto_Serif({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'College Satire Guild',
  description: 'Fostering creative expression and critical thinking through satirical journalism',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSerif.className}>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <nav className="flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/images/csg-logo.png"
                    alt="CSG Logo"
                    width={100}
                    height={40}
                    className="h-10 w-auto"
                    priority
                  />
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4">
                  <Link href="/members" className="text-gray-600 hover:text-gray-900">
                    For Members
                  </Link>
                  <Link href="/organizations" className="text-gray-600 hover:text-gray-900">
                    For Organizations
                  </Link>
                  <Link href="/leadership" className="text-gray-600 hover:text-gray-900">
                    Leadership
                  </Link>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="outline" size="icon">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <div className="flex flex-col space-y-4 mt-4">
                      <Link href="/members" className="text-lg">
                        For Members
                      </Link>
                      <Link href="/organizations" className="text-lg">
                        For Organizations
                      </Link>
                      <Link href="/leadership" className="text-lg">
                        Leadership
                      </Link>
                    </div>
                  </SheetContent>
                </Sheet>
              </nav>
            </div>
          </header>

          {children}

          <footer className="bg-white shadow mt-8">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} College Satire Guild. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

