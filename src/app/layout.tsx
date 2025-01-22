import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { RootProvider } from "fumadocs-ui/provider"

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Okto - Embedded Wallet for Web3 Apps",
  description: "Okto Lite is a fully interoperable embedded wallet",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <RootProvider>
        {children}
        </RootProvider>
        </body>
    </html>
  )
}


