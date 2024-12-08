'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, ShoppingCart, X, HelpCircle, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/contexts/cart-context'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { items } = useCart()
  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-[1920px]">
      {/* Top banner */}
      <div className="bg-[#2D2B3A] text-white text-sm py-2.5">
        <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
          <p className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Free Shipping On All Orders Over $50
          </p>
          <div className="flex items-center gap-4 text-white/80">
            <button className="flex items-center gap-1 hover:text-white">
              Eng
              <ChevronDown className="w-4 h-4" />
            </button>
            <Link href="/faqs" className="hover:text-white">Faqs</Link>
            <Link href="/contact" className="flex items-center gap-1 hover:text-white">
              <HelpCircle className="w-4 h-4" />
              Need Help
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-40 border-b">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-4">
            <div className="flex flex-col items-start">
              <Link href="/" className="flex items-center">
                <div>
              <img src="/images/Logo Icon.png" alt="Comforty Logo"/>
                </div>
                <span className="ml-2 text-xl font-bold">Comforty</span>
              </Link>
            </div>
 
            <div className="flex items-center mt-4 md:mt-0">
              <Link href="/cart" className="flex items-center bg-[#007580] text-white px-4 py-2 rounded-md hover:bg-[#1d5e64] transition-colors">
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span className="mr-2">Cart</span>
                {cartItemsCount > 0 && (
                  <span className="bg-white text-[#007580] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
              <button
                className="ml-4 md:hidden text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 py-4">
            <Link href="/" className="text-[#007580] font-semibold hover:text-gray-900 transition-colors text-sm">Home</Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Shop</Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Product</Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Pages</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About</Link>
          
           <div className=" text-sm ">
            <Link href="/contact" className='ml-[35rem] hover:text-teal-700'>
                Contact: <span className="text-right font-medium ">(+92) 123-456-789</span>
                </Link>
            </div>
          </nav>
          
           
        </div>

        {/* Mobile Navigation Bar*/}
        <div
          className={cn(
            "fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                <div className="text-teal-500">
                <img src="/images/Logo Icon.png" alt="Comforty Logo"/>
                </div>
                <span className="ml-2 text-xl font-bold">Comforty</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className=" text-gray-600 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-xl text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/shop" className="text-xl text-gray-600 hover:text-gray-900">Shop</Link>
              <Link href="/product" className="text-xl text-gray-600 hover:text-gray-900">Product</Link>
              <Link href="/pages" className="text-xl text-gray-600 hover:text-gray-900">Pages</Link>
              <Link href="/about" className="text-xl text-gray-600 hover:text-gray-900">About</Link>
            </nav>
            <div className="mt-8">
              <Link href="/cart" className="flex items-center justify-center bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors">
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span className="mr-2">Cart</span>
                {cartItemsCount > 0 && (
                  <span className="bg-white text-teal-500 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>
            <div className="mt-4 text-center text-sm">
              Contact: <span className="font-medium">(808) 555-0111</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-6 lg:px-16 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-6 lg:px-16 py-8 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <div>
              <Link href="/" className="flex items-center">
                <div className="text-teal-500">
                   <img src="/images/Logo Icon.png" alt="Comforty Logo"/>
                </div>
                <span className="ml-2 text-xl font-bold">Comforty</span>
              </Link>
              <p className="mt-4 text-gray-600">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
              </p>
            </div>
            
            <div className=''>
              <h3 className="font-semibold mb-4">Category</h3>
              <ul className="space-y-2 ">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Sofa</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Armchair</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Wing Chair</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Desk Chair</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">wooden Chair</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Park Bench</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Help & Support</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Help</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#007580]"
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-[#007580] text-white px-4 py-2 rounded-md hover:bg-[#18464b] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} - Designed & Developed by Tanzeel Sarwar</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

