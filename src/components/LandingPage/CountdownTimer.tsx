"use client";

import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // OASIS 2025 target date - Update this to actual event date
    const targetDate = new Date("2026-01-16T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dateCountdown}>
      <div className={styles.timeLeft}>
        <div className={styles.timeBlock}>
          <span className={styles.value}>{String(timeLeft.days).padStart(2, "0")}</span>
          <span className={styles.label}>Days</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBlock}>
          <span className={styles.value}>{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className={styles.label}>Hours</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBlock}>
          <span className={styles.value}>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className={styles.label}>Minutes</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBlock}>
          <span className={`${styles.value} ${styles.seconds}`}>
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className={styles.label}>Seconds</span>
        </div>
      </div>
    </div>
  );
}
