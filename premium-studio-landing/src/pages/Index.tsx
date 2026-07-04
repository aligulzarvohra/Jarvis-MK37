import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import WhatWeBuild from "../components/WhatWeBuild";
import Process from "../components/Process";
import SocialProof from "../components/SocialProof";
import ContactFooter from "../components/ContactFooter";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <WhatWeBuild />
        <Process />
        <SocialProof />
        <ContactFooter />
      </main>
    </div>
  );
};

export default Index;
