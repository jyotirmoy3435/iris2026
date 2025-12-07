"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

interface NavLink {
  href: string;
  label: string;
}

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isDesktop, setIsDesktop] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(1);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setScrollProgress(1);
      return;
    }

    const onScroll = () => {
      const half = window.innerHeight / 2;
      const progress = Math.min(window.scrollY / half, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const navLinks: NavLink[] = [
    { href: "/", label: "HOME" },
    { href: "/events", label: "EVENTS" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/team", label: "TEAM" },
  ];

  const gray = Math.round(255 * scrollProgress);
  const navColor = `rgb(${gray}, ${gray}, ${gray})`;

  const toggleSidebar = () => setSidebarOpen((v) => !v);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Desktop Navbar */}
      {isDesktop && (
        <header
          className={styles.desktopHeader}
          style={{ "--nav-color": navColor } as React.CSSProperties}
        >
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.desktopLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
      )}

      {/* Mobile Navbar */}
      {!isDesktop && (
        <>
          <nav
            className={`${styles.nav} ${
              sidebarOpen ? styles.hideHamburger : ""
            }`}
          >
            <button
              className={styles.hamMenuBtn}
              onClick={toggleSidebar}
              aria-label="Open menu"
            >
              <img
                src="/svgs/landing/moonHam.svg"
                alt="Menu"
                className={styles.moon}
              />
            </button>
          </nav>

          <div
            className={`${styles.sidebarContainer} ${
              sidebarOpen ? styles.sidebarOpen : ""
            }`}
          >
            <div
              className={styles.sidebarOverlay}
              onClick={closeSidebar}
            />

            <aside className={styles.sidebar}>
              <button
                className={styles.sidebarClose}
                onClick={closeSidebar}
                aria-label="Close menu"
              >
                <img
                  src="/svgs/landing/hamX.svg"
                  alt="Close"
                  className={styles.hamX}
                />
              </button>

              <div className={styles.sidebarNav}>
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.sidebarItem} ${
                      pathname === link.href ? styles.active : ""
                    }`}
                    onClick={closeSidebar}
                    style={{ "--i": idx + 1 } as React.CSSProperties}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </aside>
          </div>

          <div
            className={`${styles.wrapper} ${
              sidebarOpen ? styles.mask : ""
            }`}
          />
        </>
      )}
    </>
  );
}
