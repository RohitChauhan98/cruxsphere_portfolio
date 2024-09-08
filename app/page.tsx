'use client'

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Loader from "@/components/loader";
import Mobile from "@/components/mobile";
import Portfolio from "@/components/portfolio";
import GsapTimelineExample from "@/components/reactTime";
import TechStack from "@/components/techStack";
import gsap from "gsap";

export default function Home() {
  

  return (
    <main className="mori">
      {/* <GsapTimelineExample /> */}
      <Loader/>
      <Hero/>
      <Mobile />
      <TechStack/>
      <Portfolio />
      <Footer />
    </main>
  );
}
