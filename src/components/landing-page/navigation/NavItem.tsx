"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import type { NavItem } from "@/types/navigation"

export function NavItem({ item, isMobile = false }: { item: NavItem; isMobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  if (item.children) {
    return (
      <div
        className={`${isMobile ? "w-full" : "relative"}`}
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
      >
        <button
          className={`flex items-center gap-1 ${
            isMobile
              ? "w-full px-4 py-3 text-lg text-black hover:bg-gray-50"
              : "px-4 py-2 text-md font-medium text-black hover:text-blue-600"
          }`}
          onClick={() => isMobile && setIsOpen(!isOpen)}
        >
          {item.label}
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div
            className={`
            ${isMobile ? "w-full bg-gray-50 text-black" : "absolute top-full left-0 w-48 py-2 bg-white rounded-lg text-black shadow-lg"}
          `}
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href || "#"} 
                className={`block ${
                  isMobile ? "px-8 py-3 text-lg hover:bg-gray-100 text-black" : "px-4 py-2 text-sm text-black hover:bg-gray-100"
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href || "#"} 
      className={`${
        isMobile
          ? "block w-full px-4 py-3 text-lg text-black hover:bg-gray-50"
          : "px-5  text-md font-medium  text-black hover:text-blue-600"
      }`}
    >
      {item.label}
    </Link>
  )
}

