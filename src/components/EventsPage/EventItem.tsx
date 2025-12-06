"use client";

import { useState } from "react";
import styles from "./EventItem.module.css";
import type { Event } from "./EventsPage";

interface EventItemProps {
  event: Event;
}

export default function EventItem({ event }: EventItemProps) {
  const [imgSrc, setImgSrc] = useState(
    event.image || "/images/events/default-event.png"
  );

  const handleRegisterClick = () => {
    if (event.link) {
      window.open(event.link, "_blank", "noopener,noreferrer");
    }
  };

  const handleImageError = () => {
    setImgSrc("/images/events/default-event.png");
  };

  return (
    <div className={styles.eventCard}>
      <div className={styles.imageWrapper}>
        <img
          src={imgSrc}
          alt={event.title}
          className={styles.eventImage}
          onError={handleImageError}
        />
      </div>

      <button
        type="button"
        className={styles.registerButton}
        onClick={handleRegisterClick}
      >
        Register
      </button>
    </div>
  );
}
