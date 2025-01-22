"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { assets } from "@/assets/assets";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-[#4D5FCC] rounded-3xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:opacity-80 transition-opacity"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 text-left">Download Okto</h2>
            <p className="text-sm mb-6 text-left">
              Scan QR to download the app or click the links below
            </p>
          </div>

          {/* QR Code */}
          <div className="bg-[#4D5FCC] p-2 rounded-lg w-48 h-48 mx-auto mb-6 overflow-hidden">
            <Image
              src={assets.qrCode || "/placeholder.svg"}
              alt="Download QR Code"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Download Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={assets.appStore || "/placeholder.svg"}
              alt="Download on App Store"
              width={150}
              height={44}
              className="w-full h-auto"
            />
            <Image
              src={assets.googlePlay || "/placeholder.svg"}
              alt="Get it on Google Play"
              width={150}
              height={44}
              className="w-full h-auto"
            />
            <Image
              src={assets.testFlight || "/placeholder.svg"}
              alt="Download on TestFlight"
              width={150}
              height={44}
              className="w-full h-auto"
            />
            <Image
              src={assets.installApk || "/placeholder.svg"}
              alt="Install APK"
              width={150}
              height={44}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
