"use client";

import Link from "next/link";
import { useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="overflow-hidden pt-24 px-6 md:px-12 lg:px-16 pb-16">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:grid lg:grid-cols-[50%_55%] gap-8 h-screen items-center lg:flex-row">
          {/* Video container */}
          <div className="relative h-3/4 w-full mx-auto order-1 lg:order-2">
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{
                  minWidth: '100%',
                  minHeight: '100%',
                  display: 'block',
                  zIndex: 10
                }}
              >
                <source src="/herovideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Left content */}
          <div className="space-y-10 text-center lg:text-left max-w-3xl mx-auto lg:mx-0 order-2 lg:order-1">
            <p className="text-[#6B7280] uppercase tracking-[0.2em] text-sm font-medium">
              POWERED BY OKTO ORCHESTRATION LAYER
            </p>
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.75rem] font-bold leading-[1.1] tracking-tight">
              Embedded Wallet<br />
              for <span className="text-[#4461F2] inline-block">Web3 Apps</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#6B7280] font-normal">
              Okto Lite is a fully interoperable embedded wallet
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center h-12 px-8 font-medium bg-black text-white rounded-3xl hover:bg-gray-800 transition-colors"
            >
              View Docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
