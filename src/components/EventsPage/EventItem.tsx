"use client";

import styles from "./EventItem.module.css";
import type { Event } from "./EventsPage";

interface EventItemProps {
  event: Event;
}

export default function EventItem({ event }: EventItemProps) {
  const handleRegisterClick = () => {
    if (event.link) {
      window.open(event.link, "_blank", "noopener,noreferrer");
    }
  };

  const imageSrc = event.image || "/images/events/default-event.png";

  return (
    <div className={styles.eventCard}>
      <img
        src={imageSrc}
        alt={event.title}
        className={styles.eventImage}
      />

      {/* Button ON the image at bottom center */}
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
