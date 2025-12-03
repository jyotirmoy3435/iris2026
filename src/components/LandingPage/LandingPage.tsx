"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./LandingPage.module.css";
import CountdownTimer from "./CountdownTimer";
import SocialLinks from "./SocialLinks";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const sponsorsRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const starsRef = useRef<HTMLDivElement | null>(null);

  const checkScroll = () => {
  if (!sponsorsRef.current) return;
  const { scrollLeft, scrollWidth, clientWidth } = sponsorsRef.current;
  setCanScrollLeft(scrollLeft > 0);
  setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
};

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const el = sponsorsRef.current;
  if (!el) return;
  checkScroll();
  el.addEventListener("scroll", checkScroll);
  return () => el.removeEventListener("scroll", checkScroll);
}, []);

  return (
    <div className={styles.wrapper}>
      {/* Fixed Parallax Background */}
      <div className={styles.backgroundContainer}>
        {/* Desktop Background */}
        <div className={styles.desktopBackground}>
          <img
            src="/images/landing/imagebackground.png"
            alt="Edo Mountains"
            className={styles.landingImage}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
        </div>

        {/* Mobile Background */}
        <div className={styles.mobileBackgroundContainer}>
          {/* <img
            src="/svgs/svgs/landing/mobileBackground.svg"
            alt="Background"
            className={styles.mobileBackground}
          /> */}
          <img
            src="/images/landing/backgroundimage_mobile.jpeg"
            alt="Mountains"
            className={styles.mobileMountains}
          // style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
        </div>

        {/* Logo + Timer - Position Preserved */}
        <div className={styles.logoContainer}>
          <img
            src="/images/landing/white_logo.png"
            alt="OASIS 2025"
            className={styles.logo}
          />
          <CountdownTimer />
        </div>

      </div>

      {/* Scrollable Content */}
      <div className={styles.scrollerWrapper}>
        <div className={styles.scroller}>
          <div className={styles.landingContainer}>
            {/* Optional Register Button (uncomment if needed) */}
            {/* <div className={styles.registerBtnContainer}>
              <a href="/register" className={styles.registerBtn}>
                <img
                  src="/svgs/landing/registerBtn.svg"
                  alt="Register"
                  className={styles.desktopRegisterBtn}
                />
                <img
                  src="/svgs/landing/mobileRegisterBtn.svg"
                  alt="Register"
                  className={styles.mobileRegisterBtn}
                />
                <span className={styles.registerBtnText}>Register Now</span>
              </a>
            </div> */}

            {/* Foreground Tree */}
            <div className={styles.foregroundContainer}>
              <div className={styles.treeContainer}>
                <div className={styles.tree}>
                  <img
                    src="/images/landing/background1.png"
                    alt="Tree"
                    className={styles.treeDesktop}
                  />
                  <img
                    src="/images/landing/background1.png"
                    alt="Tree"
                    className={styles.treeMob}
                  />
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Container for About Us Section */}
      {/* Bottom Container for About Us Section */}
      <div className={styles.bottomContainer}>
        <div className={styles.bottomOverlay}></div>
        <div className={styles.aboutUsContainer}>
          <div className={styles.aboutUsWrapper}>
            <h2
              style={{
                fontFamily: "var(--font-japan-ramen)",
                fontSize: "3rem",
                textAlign: "center",
                color: "#f2dd7c",
              }}
            >
              About IRIS
            </h2>
            <p
              style={{
                fontFamily: "Abhaya Libre",
                fontSize: "1.2rem",
                textAlign: "center",
                maxWidth: "800px",
                margin: "2rem auto",
                lineHeight: "1.8",
              }}
            >
              IIM Indore is set to host IRIS 2026, its annual cultural and management festival, in the month of Jan, 2026. Recognized as one of Central India's premier B-school fests, IRIS attracts over 40,000 participants from across the country, blending intellectual challenges, creative showcases, and industry insights into a dynamic three-day event.
              IRIS 2026 offers a diverse range of competitions and activities designed to engage students across disciplines. Business enthusiasts can put their strategic acumen to the test in various case study challenges and entrepreneurship contests, while creative minds can participate in cultural events spanning fashion, dance, music, and quizzing.
            </p>
          </div>
        </div>
      </div>

    {/* Sponsors Section */}
<section className={styles.sponsorsSection}>
  <h2 className={styles.sectionTitle}>ASSOCIATIONS</h2>

  <div className={styles.sponsorsCarousel}>
    {/* Left Arrow */}
    <button
      type="button"
      className={`${styles.sponsorsArrow} ${styles.sponsorsArrowLeft}`}
      onClick={() => {
        const el = sponsorsRef.current;
        if (!el) return;
        const { scrollLeft, clientWidth, scrollWidth } = el;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft <= 0) {
          // at start → jump to end
          el.scrollTo({ left: maxScroll, behavior: "smooth" });
        } else {
          el.scrollBy({ left: -260, behavior: "smooth" });
        }
      }}
    >
      ‹
    </button>

    {/* Scrollable track */}
    <div ref={sponsorsRef} className={styles.sponsorsGrid}>
      <div className={styles.sponsorItem}>
        <div className={styles.sponsorLogoContainer}>
          <img src="/images/sponsors/s1.png" alt="HP" />
        </div>
        <p className={styles.sponsorTitle}>Platinum Sponsor</p>
      </div>

      <div className={styles.sponsorItem}>
        <div className={styles.sponsorLogoContainer}>
          <img src="/images/sponsors/s2.png" alt="Khadi India" />
        </div>
        <p className={styles.sponsorTitle}>Sustainability Partner</p>
      </div>

      <div className={styles.sponsorItem}>
        <div className={styles.sponsorLogoContainer}>
          <img src="/images/sponsors/s3.png" alt="Trends" />
        </div>
        <p className={styles.sponsorTitle}>Event Partner</p>
      </div>

      <div className={styles.sponsorItem}>
        <div className={styles.sponsorLogoContainer}>
          <img src="/images/sponsors/s4.png" alt="Bank of India" />
        </div>
        <p className={styles.sponsorTitle}>Banking Partner</p>
      </div>

      <div className={styles.sponsorItem}>
        <div className={styles.sponsorLogoContainer}>
          <img src="/images/sponsors/s1.png" alt="HP" />
        </div>
        <p className={styles.sponsorTitle}>Platinum Sponsor</p>
      </div>

      <div className={styles.sponsorItem}>
        <div className={styles.sponsorLogoContainer}>
          <img src="/images/sponsors/s2.png" alt="Khadi India" />
        </div>
        <p className={styles.sponsorTitle}>Sustainability Partner</p>
      </div>

      <div className={styles.sponsorItem}>
        <div className={styles.sponsorLogoContainer}>
          <img src="/images/sponsors/s3.png" alt="Trends" />
        </div>
        <p className={styles.sponsorTitle}>Event Partner</p>
      </div>

      <div className={styles.sponsorItem}>
        <div className={styles.sponsorLogoContainer}>
          <img src="/images/sponsors/s4.png" alt="Bank of India" />
        </div>
        <p className={styles.sponsorTitle}>Banking Partner</p>
      </div>
    </div>

    {/* Right Arrow */}
    <button
      type="button"
      className={`${styles.sponsorsArrow} ${styles.sponsorsArrowRight}`}
      onClick={() => {
        const el = sponsorsRef.current;
        if (!el) return;
        const { scrollLeft, clientWidth, scrollWidth } = el;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 1) {
          // at end → jump back to start
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: 260, behavior: "smooth" });
        }
      }}
    >
      ›
    </button>
  </div>
</section>



{/* Past Stars Section */}
<section className={styles.pastStarsSection}>
  <div className={styles.sectionDivider}></div>

  <h2 className={styles.sectionTitle}>PAST STARS OF OUR MULTIVERSE</h2>

  {/* Row 1 – Two main posters */}
  <div className={styles.starsMainRow}>
    <img src="/images/stars/main1.png" alt="Main Star 1" className={styles.starMainPoster} />
    <img src="/images/stars/main2.png" alt="Main Star 2" className={styles.starMainPoster} />
  </div>

  {/* Row 2 – Carousel */}
  <div className={styles.starsCarouselRow}>

    {/* Left Arrow */}
    <button
  type="button"
  className={`${styles.starsArrow} ${styles.starsArrowLeft}`}
  onClick={() => {
    const el = starsRef.current;
    if (!el) return;
    const step = el.clientWidth;              // slide by the visible width
    if (el.scrollLeft <= 0) {
      // loop to end
      const max = el.scrollWidth - el.clientWidth;
      el.scrollTo({ left: max, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -step, behavior: "smooth" });
    }
  }}
>
  ‹
</button>

    {/* Posters Track */}
    <div ref={starsRef} className={styles.starsCarouselTrack}>
      {[
        "/images/stars/p1.png",
        "/images/stars/p2.png",
        "/images/stars/p3.png",
        "/images/stars/p4.png",
        "/images/stars/p5.png",
        "/images/stars/p6.png",
        "/images/stars/p7.png",
        "/images/stars/p8.png",
      ].map((src, i) => (
        <div key={i} className={styles.starPosterItem}>
          <img src={src} alt={`Star Poster ${i + 1}`} />
        </div>
      ))}
    </div>

    {/* Right Arrow */}
    <button
  type="button"
  className={`${styles.starsArrow} ${styles.starsArrowRight}`}
  onClick={() => {
    const el = starsRef.current;
    if (!el) return;
    const step = el.clientWidth;              // slide by the visible width
    const max = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= max - 1) {
      // loop to start
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: step, behavior: "smooth" });
    }
  }}
>
  ›
</button>

  </div>
</section>




{/* Speakers Section */}
<section className={styles.speakersSection}>

  <div className={styles.sectionDivider}></div>

  <h2 className={styles.sectionTitle}>PAST SPEAKERS OF ENVISION</h2>
  <div className={styles.speakersGrid}>

    {/* Speaker Card */}
    <div className={styles.flipCard}>
      <div className={styles.flipInner}>
        {/* Front */}
        <div className={styles.flipFront}>
          <img src="/images/speakers/sp1.png" alt="Rahul Gehani" />
          <h3>Rahul Gehani</h3>
          <p>Partner, Everest Group</p>
        </div>
        {/* Back */}
        <div className={styles.flipBack}>
          <h3>Rahul Gehani</h3>
          <p>Partner, Everest Group</p>
          <a href="#" target="_blank">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </div>

    {/* Repeat Speaker Cards */}
    <div className={styles.flipCard}>
      <div className={styles.flipInner}>
        <div className={styles.flipFront}>
          <img src="/images/speakers/sp2.png" alt="K Radhakrishnan" />
          <h3>K Radhakrishnan</h3>
          <p>Former Chairman, ISRO</p>
        </div>
        <div className={styles.flipBack}>
          <h3>K Radhakrishnan</h3>
          <p>Former Chairman, ISRO</p>
          <a href="#" target="_blank">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </div>

    <div className={styles.flipCard}>
      <div className={styles.flipInner}>
        <div className={styles.flipFront}>
          <img src="/images/speakers/sp3.png" alt="Rana Kapoor" />
          <h3>Rana Kapoor</h3>
          <p>Former CEO & MD, Yes Bank</p>
        </div>
        <div className={styles.flipBack}>
          <h3>Rana Kapoor</h3>
          <p>Former CEO & MD, Yes Bank</p>
          <a href="#" target="_blank">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </div>

  </div>
</section>

      

    </div>
  );
}