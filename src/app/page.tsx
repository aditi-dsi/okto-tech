import { Navbar } from "@/components/landing-page/navigation/Navbar";
import { Hero } from "@/components/landing-page/Hero";
import { navigationItems } from "@/config/Navigation";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-white text-black">
        <Navbar items={navigationItems} />
      </div>
      <div className="bg-white text-black">
        <Hero />
      </div>

    </main>
  );
}
