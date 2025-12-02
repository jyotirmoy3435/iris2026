import React from 'react';
import TeamSection from '@/components/TeamSection/TeamSection';
import styles from './TeamPage.module.css';

export const metadata = {
  title: 'Our Team - IRIS 2026',
  description: 'Meet the dedicated team behind IRIS 2026.',
};

const TeamPage: React.FC = () => {
  // Overall Coordinators
  const coreTeamMembers = [
    {
      id: 1,
      name: 'Nawang Tsering Bodh',
      role: 'Overall Coordinator',
      image: '/images/team/Nawang Tsering Bodh_edited.png',
      bio: 'Guiding the students with invaluable insights and support.',
      social: { linkedin: 'https://www.linkedin.com/in/imnavang/' },
    },
    {
      id: 2,
      name: 'Shubham Sharma',
      role: 'Overall Coordinator',
      image: '/images/team/Shubham Sharma_edited.png',
      bio: 'Overseeing all aspects of IRIS 2026, from conception to execution.',
      social: { linkedin: 'https://www.linkedin.com/in/shubham-sharma-673014124/' },
    },
  ];

  // Vertical Coordinators
  const verticalCoordinators = [
    {
      id: 3,
      name: 'Anirudh Kumar',
      role: 'Corporate Relations & Partnerships',
      image: '/images/team/Anirudh Kumar.png',
      bio: 'Driving corporate engagements and strategic partnerships.',
    },
    {
      id: 4,
      name: 'Prachi Ekhar',
      role: 'Corporate Relations & Partnerships',
      image: '/images/team/Prachi Ekhar.png',
      bio: 'Fostering relationships with industry leaders and sponsors.',
    },
    {
      id: 5,
      name: 'Ruchita Bhoj',
      role: 'Creatives & Designs',
      image: '/images/team/Ruchita Bhoj.png',
      bio: 'Visualizing the artistic identity of the fest.',
    },
    {
      id: 6,
      name: 'Sayan Mandal',
      role: 'Creatives & Designs',
      image: '/images/team/Sayan Mandal.png',
      bio: 'Crafting the visual experience and design elements.',
    },
    {
      id: 7,
      name: 'Omkar Sahoo',
      role: 'Events & Guests',
      image: '/images/team/Omkar Sahoo.png',
      bio: 'Curating engaging events and guest experiences.',
    },
    {
      id: 8,
      name: 'Srijan Upadhyay',
      role: 'Events & Guests',
      image: '/images/team/Srijan Upadhyay.png',
      bio: 'Managing event logistics and guest relations.',
    },
    // Finance
    {
      id: 9,
      name: 'Keya Mehta',
      role: 'Finance',
      image: '/images/team/Keya Mehta.png',
      bio: 'Managing the financial health and budgeting of IRIS.',
    },
    {
      id: 10,
      name: 'Ronak Khandelwal',
      role: 'Finance',
      image: '/images/team/Ronak Khandelwal.png',
      bio: 'Ensuring financial efficiency and resource allocation.',
    },
    // Media & Marketing
    {
      id: 11,
      name: 'Khadeeja Shifana',
      role: 'Media & Marketing',
      image: '/images/team/Khadeeja Shifana.png',
      bio: 'Spearheading media presence and marketing campaigns.',
    },
    {
      id: 12,
      name: 'Madhumita Raghu',
      role: 'Media & Marketing',
      image: '/images/team/Madhumita Raghu.png',
      bio: 'Building brand resonance and audience engagement.',
    },
    // Operations
    {
      id: 13,
      name: 'Akhil Nair',
      role: 'Operations',
      image: '/images/team/Akhil Nair.png',
      bio: 'Overseeing the on-ground execution and operations.',
    },
    {
      id: 14,
      name: 'Pranav Agarwal',
      role: 'Operations',
      image: '/images/team/Pranav Agarwal.png',
      bio: 'Streamlining processes for operational excellence.',
    },
    {
      id: 15,
      name: 'Yougshil',
      role: 'Operations',
      image: '/images/team/Yougshil.png',
      bio: 'Ensuring seamless logistical coordination.',
    },
    // Participation & Hospitality
    {
      id: 16,
      name: 'Anushka Vani',
      role: 'Participation & Hospitality',
      image: '/images/team/Anushka Vani.png',
      bio: 'Ensuring a warm welcome and seamless stay for participants.',
    },
    {
      id: 17,
      name: 'Sahil Telrandhe',
      role: 'Participation & Hospitality',
      image: '/images/team/Sahil Telrandhe.png',
      bio: 'Managing participant relations and hospitality services.',
    },
    {
      id: 18,
      name: 'Vibhu Sharma',
      role: 'Participation & Hospitality',
      image: '/images/team/Vibhu Sharma.png',
      bio: 'Coordinating accommodation and hospitality logistics.',
    },
    // Pro Shows
    {
      id: 19,
      name: 'Arjav Jain',
      role: 'Pro Shows',
      image: '/images/team/Arjav Jain.png',
      bio: 'Orchestrating the star-studded professional shows.',
    },
    {
      id: 20,
      name: 'Somiya Kardam',
      role: 'Pro Shows',
      image: '/images/team/Somiya Kardam.png',
      bio: 'Managing artist relations and concert productions.',
    },
    // Systems & IT
    {
      id: 21,
      name: 'Abhijeet Bhure',
      role: 'Systems & IT',
      image: '/images/team/Abhijeet Bhure.png',
      bio: 'Managing digital infrastructure and technical systems.',
    },
    {
      id: 22,
      name: 'Jyotirmoy Saha',
      role: 'Systems & IT',
      image: '/images/team/Jyotirmoy Saha.png',
      bio: 'Ensuring robust IT support and web presence.',
    },
    // Jagriti
    {
      id: 23,
      name: 'Harshita Patodia',
      role: 'Jagriti',
      image: '/images/team/Harshita Patodia.png',
      bio: 'Leading the social responsibility initiatives.',
    },
    {
      id: 24,
      name: 'Navneet Singh',
      role: 'Jagriti',
      image: '/images/team/Navneet Singh.png',
      bio: 'Leading the social responsibility initiatives.',
    },
  ];

  return (
    <div className={styles.container}>
      <TeamSection title="Overall Coordinators" members={coreTeamMembers} />
      <TeamSection title="Vertical Coordinators" members={verticalCoordinators} />
    </div>
  );
};

export default TeamPage;
