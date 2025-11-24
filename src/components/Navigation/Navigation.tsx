"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import SocialLinks from "../LandingPage/SocialLinks";

export default function Navigation() {
  // Desktop detection
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mobile sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((v) => !v);
  const closeSidebar = () => setSidebarOpen(false);

  // Shared links – text only
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <>
      {/* ===================== DESKTOP HEADER – Transparent + Text Only ===================== */}
      {isDesktop && (
        <header className={styles.desktopHeader}>
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.desktopLink}>
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
      )}

      {/* ===================== MOBILE HAMBURGER + ANIMATED SIDEBAR (No Icons) ===================== */}
      {!isDesktop && (
        <>
          {/* Hamburger Button – fades out when open */}
          <nav className={`${styles.nav} ${sidebarOpen ? styles.hideHamburger : ""}`}>
            <button
              className={styles.hamMenuBtn}
              onClick={toggleSidebar}
              aria-label="Open menu"
            >
              <img src="/svgs/landing/moonHam.svg" alt="Menu" className={styles.moon} />
            </button>
          </nav>

          {/* Sidebar with Slide-in + Stagger Animation */}
          <div
            className={`${styles.sidebarContainer} ${sidebarOpen ? styles.sidebarOpen : ""}`}
          >
            {/* Dark overlay */}
            <div className={styles.sidebarOverlay} onClick={closeSidebar} />

            {/* Sidebar Panel */}
            <aside className={styles.sidebar}>
              {/* Close Button (X) */}
              <button
                className={styles.sidebarClose}
                onClick={closeSidebar}
                aria-label="Close menu"
              >
                <img src="/svgs/landing/hamX.svg" alt="Close" className={styles.hamX} />
              </button>

              {/* Navigation Items – TEXT ONLY */}
              <div className={styles.sidebarNav}>
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={styles.sidebarItem}
                    onClick={closeSidebar}
                    style={{ "--i": idx + 1 } as React.CSSProperties}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className={styles.mwd}>Made with Love by Dept. of Visual Media</div>

              {/* Social Links - Mobile Only - Bottom of Menu */}
              <div className={styles.sidebarSocial}>
                <SocialLinks />
              </div>
            </aside>
          </div>

          {/* Background blur */}
          <div className={`${styles.wrapper} ${sidebarOpen ? styles.mask : ""}`} />
        </>
      )}
    </>
  );
}