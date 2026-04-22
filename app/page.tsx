import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import VSL from "@/components/VSL";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhatYouGet from "@/components/WhatYouGet";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <VSL />
      <WhoThisIsFor />
      <WhatYouGet />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
