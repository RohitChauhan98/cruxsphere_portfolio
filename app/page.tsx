import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Mobile from "@/components/mobile";
import Portfolio from "@/components/portfolio";
import TechStack from "@/components/techStack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mori">
      <Hero />
      <Mobile />
      <TechStack/>
      <Portfolio />
      <Footer />
    </main>
  );
}
