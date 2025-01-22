"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./NavItem"
import { Menu, X } from "lucide-react"
import type { NavbarProps } from "@/types/navigation"
import { assets } from "@/assets/assets"
import { DownloadModal } from "../../modals/DownloadModal"

export function Navbar({ items }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50">
              <Image
                src={assets.oktoLogo || "/placeholder.svg"}
                alt="Okto Logo"
                width={150}
                height={55}
                className="h-auto w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 max-w-2xl mx-auto ml-10">
              {items.map((item) => (
                <NavItem key={item.href} item={item} />
              ))}
            </div>

            {/* Desktop Download Button */}
            <button
              onClick={() => setIsDownloadModalOpen(true)}
              className="hidden md:flex items-center gap-2 px-6 py-2 rounded-2xl transition-colors"
            >
              <Image
                src={assets.OktoDownload || "/placeholder.svg"}
                alt="okto download"
                width={150}
                height={55}
                className="h-auto w-auto"
              />
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Menu */}
            <div
              className={`
                fixed inset-0 bg-white z-40 
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                md:hidden
              `}
            >
              {/* Mobile Navbar Header */}
              <div className="h-20 flex items-center justify-between px-4">
                {/* Mobile Logo */}
                <Link
                  href="/"
                  className={`transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                >
                  <Image
                    src={assets.oktoLogo || "/placeholder.svg"}
                    alt="Okto Logo"
                    width={150}
                    height={55}
                    className="h-auto w-auto"
                  />
                </Link>

                {/* Close Button */}
                <button
                  className={`transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="pt-6 pb-6 h-screen overflow-y-auto bg-white">
                {items.map((item) => (
                  <NavItem key={item.href} item={item} isMobile />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Download Modal */}
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </>
  )
}

