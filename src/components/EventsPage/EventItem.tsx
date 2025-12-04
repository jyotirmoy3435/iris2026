"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import styles from "./EventItem.module.css";
import type { Event } from "./EventsPage";

interface EventItemProps {
  event: Event;
}

// Map categories to icons (change paths as per your assets)
const categoryIcons: Record<string, string> = {
  Flagship: "/images/events/flagship.png",
  Cultural: "/images/events/cultural.png", 
  Management: "/images/events/management.png",
  Sports: "/images/events/sports.png",
};

export default function EventItem({ event }: EventItemProps) {

  return (
    <div className={styles.eventCard}>
      {/* Inner wrapper that flips */}
      <div
        className={styles.eventCardInner}
      >
        {/* FRONT SIDE */}
        <div className={`${styles.eventItem} ${styles.eventFront}`}>
          {/* Category Icon */}
          <div className={styles.eventIcon}>
            <img
              src={categoryIcons[event.category] || "/images/events/misc.png"}
              alt={event.category}
              className={styles.categoryIcon}
            />
          </div>

          {/* Event Content */}
          <div className={styles.eventContent}>
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p className={styles.eventCategory}>{event.category}</p>
            <p className={styles.eventDescription}>{event.description}</p>

            {/* Event Details */}
            <div className={styles.eventDetails}>
              {event.date && (
                <div className={styles.eventDetail}>
                  <Calendar size={16} className={styles.detailIcon} />
                  <span>{event.date}</span>
                </div>
              )}
              {event.time && (
                <div className={styles.eventDetail}>
                  <Clock size={16} className={styles.detailIcon} />
                  <span>{event.time}</span>
                </div>
              )}
              {event.venue && (
                <div className={styles.eventDetail}>
                  <MapPin size={16} className={styles.detailIcon} />
                  <span>{event.venue}</span>
                </div>
              )}
            </div>
          </div>

          {/* Hover Overlay + Button */}
          <div className={styles.eventOverlay}>
            <button
              type="button"
              className={styles.viewDetailsBtn}
              onClick={() => {
                if (event.link) {
                  window.open(event.link, '_blank');
                }
              }}
            >
              View Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
