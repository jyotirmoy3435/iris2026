"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
} satisfies Variants;

const cardHoverVariants = {
  rest: { y: 0, scale: 1, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1)', transition: { duration: 0.3 } },
  hover: { y: -10, scale: 1, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', transition: { duration: 0.3 } },
};

const imageVariants = {
  rest: { y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  hover: { y: -10, transition: { duration: 0.4, ease: "easeOut" } },
} satisfies Variants;

const detailsContentVariants = {
  rest: { opacity: 0, y: 10, transition: { duration: 0.3 } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <motion.div variants={itemVariants} className={`${styles.cardWrapper}`}>
      <motion.div
        initial="rest"
        whileHover="hover"
        variants={cardHoverVariants}
        className="w-[240px] md:w-[280px] h-[360px] flex flex-col justify-end items-center p-0 rounded-xl shadow-lg border-2 border-primary-gold/30 cursor-pointer relative overflow-hidden"
      >
        <motion.div variants={imageVariants} className="absolute inset-0 z-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 240px, 280px"
            priority
          />
        </motion.div>

        <div className={styles.nameOverlay}>
          <CardHeader className="text-center p-0 mb-1">
            <CardTitle className="text-xl font-bold text-white">{member.name}</CardTitle>
          </CardHeader>
        </div>

        <motion.div variants={detailsContentVariants} className={styles.detailsOverlay}>
          <CardDescription className="text-sm font-medium text-primary-gold pt-2 text-center">
            {member.role}
          </CardDescription>
          <CardContent className="text-center text-xs p-0 my-2 max-h-[60px] overflow-hidden">
            <p className="line-clamp-3 text-white">{member.bio}</p>
          </CardContent>

          {member.social && member.social.linkedin && (
            <div className="flex gap-2 justify-center">
              <Button asChild variant="ghost" size="sm" className="text-white hover:text-primary-gold transition-colors duration-200">
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn of ${member.name}`}>
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TeamMemberCard;
