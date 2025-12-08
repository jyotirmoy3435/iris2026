"use client";

import { useState } from "react";
// import Preloader from "@/components/Preloader";
// import EntranceOverlay from "@/components/EntranceOverlay";
// import Navigation from "@/components/Navigation";
import LandingPage from "@/components/LandingPage";
// import Footer from "@/components/Footer";

export default function Home() {
  // const [loadingComplete, setLoadingComplete] = useState(false);
  const [hasEntered, setHasEntered] = useState(true);

  return (
    <>
      {/* Preloader - Shows first
      {!loadingComplete && (
        <Preloader onLoadComplete={() => setLoadingComplete(true)} />
      )}

      {/* Entrance Overlay - Shows after preloader */}
      {/* {loadingComplete && !hasEntered && (
        <EntranceOverlay onEnter={() => setHasEntered(true)} />
      )} */}

      {/* Main Content - Shows after entering */}
      {hasEntered && (
        <>

          {/* Landing Page Content */}
          <LandingPage />

        </>
      )}
    </>
  );
}

