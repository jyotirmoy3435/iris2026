'use client';

import React from 'react'; // Ensure React is explicitly imported for TSX compatibility
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';
import styles from './TeamMemberCard.module.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
}

// Framer Motion Variants for the card item entrance (same as before)
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 10,
    },
  },
} satisfies Variants;

// Variants for the Main Card Container: Lift and potentially scale on hover
const cardHoverVariants = {
  rest: { 
    y: 0, 
    scale: 1,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)', // Tailwind shadow-lg
    transition: { duration: 0.3 }
  },
  hover: {
    y: -10, // Move up 10px on hover
    scale: 1.05, // Slightly enlarge the card
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // Tailwind shadow-2xl
    transition: { duration: 0.3 }
  }
};

// Variants for the Image and Overlay: Darken image and reveal details on hover
const imageAndOverlayVariants = {
  rest: {
    opacity: 0, // Overlay is fully transparent initially
    backdropFilter: 'blur(0px) brightness(1)', // No blur, normal brightness for the image
    WebkitBackdropFilter: 'blur(0px) brightness(1)', // For Safari compatibility
    transition: { duration: 0.3 }
  },
  hover: {
    opacity: 1, // Overlay becomes visible
    backdropFilter: 'blur(3px) brightness(0.6)', // Apply blur and darken the image
    WebkitBackdropFilter: 'blur(3px) brightness(0.6)', // For Safari compatibility
    transition: { duration: 0.3, delay: 0.1 }
  }
};

// Variants for the text content itself (slides up)
const textContentVariants = {
  rest: { 
    opacity: 0, 
    y: 50, // Start 50px below the final position
    transition: { duration: 0.3 } 
  },
  hover: { 
    opacity: 1, 
    y: 0, // Slide to final position
    transition: { duration: 0.3, delay: 0.15 } // Slightly delayed for layered effect
  }
};


const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    // FIX: Added negative horizontal margin to reduce the space between cards.
    <motion.div variants={itemVariants} className={`${styles.cardWrapper} -mx-2`}>
      {/* --- Main Card Container --- */}
      <motion.div
        initial="rest"
        whileHover="hover"
        variants={cardHoverVariants}
        // MODIFIED: Reduced width/height for a smaller card size (w: 240/280, h: 320)
        className="w-[240px] md:w-[280px] h-[320px] flex flex-col justify-end items-center p-0 rounded-xl shadow-lg border-2 border-primary-gold/30 cursor-pointer relative overflow-hidden"
      >
        
        {/* --- Background Image that Fills the Entire Card --- */}
        <div className="absolute inset-0 z-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 ease-in-out"
            // MODIFIED: Updated sizes to match the new card dimensions
            sizes="(max-width: 768px) 240px, 280px"
            priority
          />
        </div>

        {/* --- Overlay and Details Section (Initially Hidden, Revealed on Hover) --- */}
        <motion.div 
          variants={imageAndOverlayVariants}
          className="absolute inset-0 z-10 flex flex-col justify-end items-center p-6 text-white text-center"
          style={{ 
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 30%)', // Subtle gradient for text readability
            backgroundColor: 'rgba(0,0,0,0)' // Essential for backdrop-filter to work
          }}
        >
          {/* Reduced padding and font sizes slightly in inner content to fit better */}
          <motion.div variants={textContentVariants} className="w-full">
              <CardHeader className="text-center p-0 mb-1">
                <CardTitle className="text-lg font-bold"> {/* Reduced font size to text-lg */}
                  {member.name}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-primary-gold"> {/* Reduced font size to text-sm */}
                  {member.role}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center text-xs p-0 mb-3 max-h-[60px] overflow-hidden"> {/* Reduced font size to text-xs and max-height */}
                <p className="line-clamp-3">{member.bio}</p>
              </CardContent>

              {member.social && (
                <div className="flex gap-2 justify-center"> {/* Reduced gap */}
                  {member.social.linkedin && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm" // Use small size button
                      className="text-white hover:text-primary-gold transition-colors duration-200"
                    >
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn of ${member.name}`}
                      >
                        <Linkedin className="h-4 w-4" /> {/* Reduced icon size */}
                      </a>
                    </Button>
                  )}
                </div>
              )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TeamMemberCard;