"use client";

import styles from "./AboutPage.module.css";

export default function AboutPage() {

  return (
     <div className={styles.wrapper}>
      {/* Fixed Parallax Background */}
      <div className={styles.backgroundContainer}>
        {/* Desktop Background */}
        <div className={styles.desktopBackground}>
          <img
            src="/images/landing/bg_landscape.webp"
            alt="Edo Mountains"
            className={styles.landingImage}
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
            src="/images/landing/bg_portrait.webp"
            alt="Mountains"
            className={styles.mobileMountains}
          // style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />

          </div></div>
        <div className={styles.aboutHeading}>
          <h1 className={styles.sectionTitle}>About IRIS</h1>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <p>
              IIM Indore is set to host IRIS 2026, its annual cultural and management festival, in the month of Jan, 2026. Recognized as one of Central India&apos;s premier B-school fests, IRIS attracts over 40,000 participants from across the country, blending intellectual challenges, creative showcases, and industry insights into a dynamic three-day event.
              IRIS 2026 offers a diverse range of competitions and activities designed to engage students across disciplines. Business enthusiasts can put their strategic acumen to the test in various case study challenges and entrepreneurship contests, while creative minds can participate in cultural events spanning fashion, dance, music, and quizzing.            </p>
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
  <a
    href="/brochure/iris-brochure.pdf"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      padding: "14px 34px",
      background: "linear-gradient(90deg, #f2dd7c, #c7b566)",
      color: "#262626",
      borderRadius: "6px",
      fontFamily: "poppins",
      fontWeight: "500",
      fontSize: "1.0rem",
      textDecoration: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.35)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
    }}
  >
    Know More
  </a>
</div>
          </div>
          
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>15+</h3>
            <p className={styles.statLabel}>Years of Legacy</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>15K+</h3>
            <p className={styles.statLabel}>Footfall</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>25+</h3>
            <p className={styles.statLabel}>Colleges</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>40+</h3>
            <p className={styles.statLabel}>Events</p>
          </div>
        </div>



        </div>
  );
}
