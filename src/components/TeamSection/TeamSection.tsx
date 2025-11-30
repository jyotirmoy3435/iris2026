"use client";

import React from 'react';
import TeamMemberCard from './TeamMemberCard'; // Import the new component
import styles from './TeamSection.module.css';
import { motion, Variants } from 'framer-motion';

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: any;
}

interface TeamSectionProps {
  title: string;
  members: Member[];
}

// Framer Motion Container Variant for staggered entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      
      {/* MODIFIED: Using motion.div for staggered entrance animation */}
      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* MODIFIED: Using the TeamMemberCard component for hover functionality */}
        {members.map((member) => (
          <TeamMemberCard key={member.id} member={{ ...member, bio: member.bio ?? "" }} />
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;