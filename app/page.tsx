'use client'

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Loader from "@/components/loader";
import Mobile from "@/components/mobile";
import Portfolio from "@/components/portfolio";
import GsapTimelineExample from "@/components/reactTime";
import TechStack from "@/components/techStack";


export default function Home() {

  return (
    <main className="mori" id="main">
      {/* <GsapTimelineExample /> */}
      <Loader />
      <Hero />
      <Mobile />
      <div className="hidden md:block">
        <TechStack />
      </div>
      <Portfolio />
      <Footer />
    </main>
  );
}
