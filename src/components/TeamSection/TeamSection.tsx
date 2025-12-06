"use client";

import TeamMemberCard from "./TeamMemberCard";
import styles from "./TeamSection.module.css";
import clsx from "clsx";

export interface Social {
  email?: string;
  phone?: string;
  instagram?: string;
  linkedin?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: Social;
}

interface Props {
  title: string;
  members: TeamMember[];
  columns?: number;
}

const TeamSection: React.FC<Props> = ({
  title,
  members,
  columns = 4,
}) => {
  const addCenterClass = columns === 4; // only when 4 columns do we want the "last 2 centered" behaviour

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div
        className={clsx(styles.grid, { [styles.centerLastTwo as string]: addCenterClass })}
        style={{ ["--columns" as any]: columns }}
      >
        {members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
