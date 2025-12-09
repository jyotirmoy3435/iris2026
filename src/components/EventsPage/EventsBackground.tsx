"use client";

import { useEffect, useState } from "react";
import styles from "./EventsBackground.module.css";
import type { EventCategory } from "./EventsPage";

export default function EventsBackground() {
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
