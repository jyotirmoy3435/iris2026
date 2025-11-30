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
            src="/images/landing/iris_logo_black_background.png"
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
    {/* Left arrow */}
    <button
  type="button"
  className={`${styles.sponsorsArrow} ${styles.sponsorsArrowLeft}`}
  style={{ opacity: canScrollLeft ? 0.85 : 0.15, pointerEvents: canScrollLeft ? "auto" : "none" }}
  onClick={() => sponsorsRef.current?.scrollBy({ left: -260, behavior: "smooth" })}
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

    {/* Right arrow */}
    <button
  type="button"
  className={`${styles.sponsorsArrow} ${styles.sponsorsArrowRight}`}
  style={{ opacity: canScrollRight ? 0.85 : 0.15, pointerEvents: canScrollRight ? "auto" : "none" }}
  onClick={() => sponsorsRef.current?.scrollBy({ left: 260, behavior: "smooth" })}
>
  ›
</button>
  </div>
</section>



{/* Speakers Section */}
<section className={styles.speakersSection}>
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

        {/* Footer Section */}
        <footer style={{
          background: '#7a232b',
          color: '#fff',
          padding: '2.5rem 1rem 1rem 1rem',
          fontFamily: 'Abhaya Libre, sans-serif',
          // marginTop: '2rem',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '2.5rem',
          }}>
            {/* Contact Columns */}
            <div style={{ flex: '2 1 350px', minWidth: 0 }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '1.2rem', letterSpacing: '1px' }}>Contact Us</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
                {/* Overall Coordinators */}
                <div style={{ minWidth: 180, flex: '1 1 180px' }}>
                  <div style={{ fontWeight: 600, marginBottom: 8, letterSpacing: 1 }}>OVERALL COORDINATORS</div>
                  <div style={{ marginBottom: 18 }}>
                    <div>Shubham Sharma</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>p24shubhams@iimidr.ac.in</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>+91 7385552034</div>
                  </div>
                  <div>
                    <div>Nawang</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>p24nawangb@iimidr.ac.in</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>+91 9911995537</div>
                  </div>
                </div>
                {/* Corporate Relations */}
                <div style={{ minWidth: 180, flex: '1 1 180px' }}>
                  <div style={{ fontWeight: 600, marginBottom: 8, letterSpacing: 1 }}>CORPORATE RELATIONS</div>
                  <div style={{ marginBottom: 18 }}>
                    <div>Anirudh Kumar</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>p24anirudhk@iimidr.ac.in</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>+91 9559085353</div>
                  </div>
                  <div>
                    <div>Prachi Ekhar</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>p24prachim@iimidr.ac.in</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>+91 9359231527</div>
                  </div>
                </div>
                {/* Participation */}
                <div style={{ minWidth: 180, flex: '1 1 180px' }}>
                  <div style={{ fontWeight: 600, marginBottom: 8, letterSpacing: 1 }}>PARTICIPATION</div>
                  <div style={{ marginBottom: 18 }}>
                    <div>Sahil Telrandhe</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>p24sahilt@iimidr.ac.in</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>+91 9168369998</div>
                  </div>
                  <div style={{ marginBottom: 18 }}>
                    <div>Vibhu Sharma</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>p24vibhus@iimidr.ac.in</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>+91 6306179572</div>
                  </div>
                  <div>
                    <div>Anushka Vani</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>p24anushkav@iimidr.ac.in</div>
                    <div style={{ fontSize: '0.98em', opacity: 0.9 }}>+91 7608000795</div>
                  </div>
                </div>
              </div>
            </div> 
            {/* Social & Email */}
            <div style={{ flex: '1 1 250px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 12, letterSpacing: 1 }}>Follow</div>
                <div style={{ transform: 'scale(0.7)', transformOrigin: 'left top' }}>
                  <SocialLinks />
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 8, letterSpacing: 1 }}>Email</div>
                <div style={{ fontSize: '1.05em', opacity: 0.9 }}>iris@iimidr.ac.in</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Have any questions?</div>
                <a href="#" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 500 }}>Ask Us Here</a>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div style={{
            textAlign: 'center',
            marginTop: '2.5rem',
            fontSize: '1.05em',
            color: '#fff',
            opacity: 0.95,
            letterSpacing: 0.2,
          }}>
            © IRIS 2026. All Rights Reserved. Made by Systems & Analytics team, IRIS
          </div>
          {/* Responsive Styles */}
          <style>{`
            @media (max-width: 900px) {
              footer > div { flex-direction: column; gap: 2.5rem; }
              footer > div > div { width: 100% !important; min-width: 0 !important; }
            }
            @media (max-width: 600px) {
              footer { padding: 2rem 0.5rem 1rem 0.5rem !important; }
              footer > div { gap: 1.5rem; }
              footer h3 { font-size: 1.1rem !important; }
              footer div[style*='font-weight: 600'] { font-size: 1em !important; }
              footer div[style*='font-size: 1.05em'] { font-size: 0.98em !important; }
            }
          `}</style>
        </footer>

    </div>
  );
}