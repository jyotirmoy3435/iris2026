"use client";

import { useEffect, useState, useRef} from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from 'next/navigation';
import styles from "./GalleryPage.module.css";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={styles.backButton}
      title="Back"
    >
      ←
    </button>
  );
};

export default function GalleryPage() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

    const scrollToPhotos = () => {
    if (photosRef.current) {
      photosRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <BackButton />
      
      {/* Background Container */}
      <div className={styles.backgroundContainer}>
        <div 
          className={styles.skyLayer}
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>

      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <div className={styles.logoContainer}>
          <img
            src="/images/gallery/decorative/IRIS Black.png" 
            alt="IRIS Logo"
            className={styles.logoImage}
          />
          {/* <h1 className={styles.mainTitle}>INDIVERSE</h1>
          <p className={styles.subtitle}>Gallery of Diversity</p> */}
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator} onClick={scrollToPhotos}>
          <ChevronDown size={32} className={styles.chevron} />
          <span className={styles.scrollText}>Explore Gallery</span>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentContainer} ref={photosRef}>
        <div className={styles.categoriesContainer}>
          <h2 className={styles.sectionTitle}>Glimpses of Indiverse</h2>
          <div className={styles.PhotosGrid}>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/Laavanya.avif")}>
              <img src="/images/gallery/Photos/Laavanya.avif" alt="" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG1.avif")}>
              <img src="/images/gallery/Photos/IMG1.avif" alt="" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG2.avif")}>
              <img src="/images/gallery/Photos/IMG2.avif" alt="" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG3.avif")}>
              <img src="/images/gallery/Photos/IMG3.avif" alt="" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG4.avif")}>
              <img src="/images/gallery/Photos/IMG4.avif" alt="" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG5.avif")}>
              <img src="/images/gallery/Photos/IMG5.avif" alt="" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG6.avif")}>
              <img src="/images/gallery/Photos/IMG6.avif" alt="" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG7.avif")}>
              <img src="/images/gallery/Photos/IMG7.avif" alt="" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG8.avif")}>
              <img src="/images/gallery/Photos/IMG8.avif" alt="" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG7.avif")}>
              <img src="/images/gallery/Photos/IMG7.avif" alt="" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG7.avif")}>
              <img src="/images/gallery/Photos/IMG7.avif" alt="" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG7.avif")}>
              <img src="/images/gallery/Photos/IMG7.avif" alt="" />
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged" className={styles.modalImage} />
          <button className={styles.closeButton} onClick={closeModal}>×</button>
        </div>
      )}
      {/* Footer Section - Add this before closing wrapper div */}
<div className={styles.footerContainer}>
  <div className={styles.footerContent}>
    
    {/* Contact Section */}
    <div className={styles.contactSection}>
      <h3 className={styles.footerTitle}>Contact Us</h3>
      
      <div className={styles.contactGrid}>
        {/* Overall Coordinators */}
        <div className={styles.contactColumn}>
          <h4 className={styles.contactCategory}>OVERALL COORDINATORS</h4>
          
          <div className={styles.contactPerson}>
            <h5>Shubham Sharma</h5>
            <p>p24shubhams@iirmidr.ac.in</p>
            <p>+91 7385552034</p>
          </div>
          
          <div className={styles.contactPerson}>
            <h5>Nawang</h5>
            <p>p24nawangb@iirmidr.ac.in</p>
            <p>+91 9911995537</p>
          </div>
        </div>

        {/* Corporate Relations */}
        <div className={styles.contactColumn}>
          <h4 className={styles.contactCategory}>CORPORATE RELATIONS</h4>
          
          <div className={styles.contactPerson}>
            <h5>Anirudh Kumar</h5>
            <p>p24anirudhk@iirmidr.ac.in</p>
            <p>+91 9559085353</p>
          </div>
          
          <div className={styles.contactPerson}>
            <h5>Prachi Ekhar</h5>
            <p>p24prachim@iirmidr.ac.in</p>
            <p>+91 9359231527</p>
          </div>
        </div>

        {/* Participation */}
        <div className={styles.contactColumn}>
          <h4 className={styles.contactCategory}>PARTICIPATION</h4>
          
          <div className={styles.contactPerson}>
            <h5>Sahil Telrandhe</h5>
            <p>p24sahilt@iirmidr.ac.in</p>
            <p>+91 9168369988</p>
          </div>
          
          <div className={styles.contactPerson}>
            <h5>Vibhu Sharma</h5>
            <p>p24vibhus@iirmidr.ac.in</p>
            <p>+91 6306179572</p>
          </div>
          
          <div className={styles.contactPerson}>
            <h5>Anushka Vani</h5>
            <p>p24anushkav@iirmidr.ac.in</p>
            <p>+91 7608000795</p>
          </div>
        </div>
      </div>
    </div>

    {/* Social Links Section */}
    <div className={styles.socialSection}>
      <h3 className={styles.footerTitle}>Follow</h3>
      
      <div className={styles.socialIcons}>
        <a href="#" className={styles.socialIcon} aria-label="Facebook">
          <svg viewBox="0 0 24 24" className={styles.iconSvg}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        
        <a href="#" className={styles.socialIcon} aria-label="Instagram">
          <svg viewBox="0 0 24 24" className={styles.iconSvg}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        
        <a href="#" className={styles.socialIcon} aria-label="Twitter">
          <svg viewBox="0 0 24 24" className={styles.iconSvg}>
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        
        <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" className={styles.iconSvg}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        
        <a href="#" className={styles.socialIcon} aria-label="YouTube">
          <svg viewBox="0 0 24 24" className={styles.iconSvg}>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </div>
      
      <div className={styles.emailSection}>
        <h4 className={styles.emailTitle}>Email</h4>
        <p className={styles.emailAddress}>iris@iirmidr.ac.in</p>
        
        <div className={styles.questionsSection}>
          <h4 className={styles.questionsTitle}>Have any questions?</h4>
          <a href="#" className={styles.askLink}>Ask Us Here</a>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className={styles.bottomBar}>
    <p>© IRIS 2026. All Rights Reserved. Made by Systems & Analytics team, IRIS</p>
  </div>
</div>
    </div>
  );
}