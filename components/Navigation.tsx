"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`bg-white shadow-sm sticky top-0 z-50 ${isScrolled ? "navbar-blur" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center justify-center">
                <img src="/taskearn-pro-logo.png" alt="TaskEarn Pro" width="170" height="40" />
              </div>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/plans"
                className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-300"
              >
                Plans
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="/auth"
                className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-300"
              >
                Login
              </Link>
              <Link href="/auth" className="btn-primary text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg">
                Get Started
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              className="text-gray-600 hover:text-gray-900 p-2 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden bg-white border-t ${isMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-6 space-y-4">
          <Link href="/" className="block text-gray-900 hover:text-blue-600 py-2 text-sm font-semibold">
            Home
          </Link>
          <Link href="/about" className="block text-gray-600 hover:text-blue-600 py-2 text-sm font-semibold">
            About
          </Link>
          <Link href="/plans" className="block text-gray-600 hover:text-blue-600 py-2 text-sm font-semibold">
            Plans
          </Link>
          <Link href="/contact" className="block text-gray-600 hover:text-blue-600 py-2 text-sm font-semibold">
            Contact
          </Link>
          <Link href="/auth" className="block text-gray-600 hover:text-blue-600 py-2 text-sm font-semibold">
            Login
          </Link>
          <Link
            href="/auth"
            className="block btn-primary text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg text-center"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </nav>
  )
}
