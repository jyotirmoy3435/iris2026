"use client";

import { useEffect, useState } from "react";
import styles from "./EventsBackground.module.css";
import type { EventCategory } from "./EventsPage";

interface EventsBackgroundProps {
  category: EventCategory | "All";
}

export default function EventsBackground({ category }: EventsBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      {/* Main Background */}
      <div className={styles.mainBackground}>
        <img
          src="/images/events/bgphotu.png"
          alt="Background"
          className={styles.bgImage}
        />
      </div>

      {/* Decorations removed (stars & clouds) */}

      {/* Paper Texture Overlay */}
      <div className={styles.paperTexture}></div>
    </div>
  );
}
