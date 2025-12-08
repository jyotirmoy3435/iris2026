import React from 'react';
import TeamSection from '@/components/TeamSection/TeamSection';
import styles from './TeamPage.module.css';
import { Title } from '@radix-ui/react-dialog';

export const metadata = {
  title: 'Our Team - IRIS 2026',
  description: 'Meet the dedicated team behind IRIS 2026.',
};

const TeamPage: React.FC = () => {
  // Overall Coordinators (smaller card size)
  const coreTeamMembers = [
    {
      id: 1,
      name: 'Nawang Tsering Bodh',
      role: 'Overall Coordinator',
      image: '/images/team/Nawang Tsering Bodh_edited.png',
      bio: 'Guiding the students with invaluable insights and support.',
      social: {
        email: 'p24nawangb@iimidr.ac.in',
        phone: '9911995537',
        instagram: 'https://www.instagram.com/?deoia=1',
        linkedin: 'http://linkedin.com/in/imnavang'
      }
    },
    {
      id: 2,
      name: 'Shubham Sharma',
      role: 'Overall Coordinator',
      image: '/images/team/Shubham Sharma_edited.png',
      bio: 'Overseeing all aspects of IRIS 2026, from conception to execution.',
      social: {
        email: 'p24shubhams@iimidr.ac.in',
        phone: '7385552034',
        instagram: 'https://www.instagram.com/s_square23/',
        linkedin: 'https://www.linkedin.com/in/shubham-sharma-673014124'
      }
    }
  ];

  // Vertical Coordinators (4 columns)
  const verticalCoordinators = [
    {
      id: 3,
      name: 'Anirudh Kumar',
      role: 'Corporate Relations & Partnerships',
      image: '/images/team/Anirudh Kumar.png',
      bio: 'Driving corporate engagements and strategic partnerships.',
      social: {
        email: 'p24anirudhk@iimidr.ac.in',
        phone: '9559085353',
        instagram: 'https://www.instagram.com/q_ani_q',
        linkedin: 'https://www.linkedin.com/in/kanirudh12'
      }
    },
    {
      id: 4,
      name: 'Prachi Ekhar',
      role: 'Corporate Relations & Partnerships',
      image: '/images/team/Prachi Ekhar.png',
      bio: 'Fostering relationships with industry leaders and sponsors.',
      social: {
        email: 'p24prachim@iimidr.ac.in',
        phone: '9359231527',
        instagram: 'https://www.instagram.com/prachi_ekhar',
        linkedin: 'https://www.linkedin.com/in/prachiekhar'
      }
    },
    {
      id: 5,
      name: 'Ruchita Bhoj',
      role: 'Creatives & Designs',
      image: '/images/team/Ruchita Bhoj.png',
      bio: 'Visualizing the artistic identity of the fest.',
      social: {
        email: 'p24ruchitab@iimidr.ac.in',
        phone: '7572861037',
        instagram: 'https://instagram.com/ruchitanbhoj',
        linkedin: 'https://www.linkedin.com/in/ruchita-bhoj'
      }
    },
    {
      id: 6,
      name: 'Sayan Mandal',
      role: 'Creatives & Designs',
      image: '/images/team/Sayan Mandal.png',
      bio: 'Crafting the visual experience and design elements.',
      social: {
        email: 'p24sayanm@iimidr.ac.in',
        phone: '07365089210',
        instagram: 'https://www.instagram.com/sayanmandal.k/',
        linkedin: 'https://www.linkedin.com/in/sayan-mandal1011'
      }
    },
    {
      id: 7,
      name: 'Omkar Sahoo',
      role: 'Events & Guests',
      image: '/images/team/Omkar Sahoo.png',
      bio: 'Curating engaging events and guest experiences.',
      social: {
        email: 'p24omkars@iimidr.ac.in',
        phone: '7020977406',
        instagram: 'https://www.instagram.com/omkarsahoo08/',
        linkedin: 'https://www.linkedin.com/in/omkar-sahoo-iimi'
      }
    },
    {
      id: 8,
      name: 'Srijan Upadhyay',
      role: 'Events & Guests',
      image: '/images/team/Srijan Upadhyay.png',
      bio: 'Managing event logistics and guest relations.',
      social: {
        email: 'p24srijan@iimidr.ac.in',
        phone: '07365089210',
        instagram: 'https://www.instagram.com/srijan_upadhyay',
        linkedin: 'https://www.linkedin.com/in/srijan-upadhyay'
      }
    },
    {
      id: 9,
      name: 'Keya Mehta',
      role: 'Finance',
      image: '/images/team/Keya Mehta.png',
      bio: 'Managing the financial health and budgeting of IRIS.',
      social: {
        email: 'p24mehtap@iimidr.ac.in',
        phone: '8425063499',
        instagram: 'https://www.instagram.com/keya_1103',
        linkedin: 'https://www.linkedin.com/in/keya-mehta-b12929223'
      }
    },
    {
      id: 10,
      name: 'Ronak Khandelwal',
      role: 'Finance',
      image: '/images/team/Ronak Khandelwal.png',
      bio: 'Ensuring financial efficiency and resource allocation.',
      social: {
        email: 'p24ronakk@iimidr.ac.in',
        phone: '9359360261',
        instagram: 'https://www.instagram.com/ronak_khandelwal10',
        linkedin: 'https://www.linkedin.com/in/ronak-khandelwal-a72aa31a0'
      }
    },
    {
      id: 11,
      name: 'Khadeeja Shifana',
      role: 'Media & Marketing',
      image: '/images/team/Khadeeja Shifana.png',
      bio: 'Spearheading media presence and marketing campaigns.',
      social: {
        email: 'p24khadeejap@iimidr.ac.in',
        phone: '7034774077',
        instagram: 'https://www.instagram.com/khadeeja.shifana',
        linkedin: 'https://www.linkedin.com/in/khadeeja-shifana-p-921a09209'
      }
    },
    {
      id: 12,
      name: 'Madhumita Raghu',
      role: 'Media & Marketing',
      image: '/images/team/Madhumita Raghu.png',
      bio: 'Building brand resonance and audience engagement.',
      social: {
        email: 'p24madhumitar@iimidr.ac.in',
        phone: '',
        instagram: '',
        linkedin: 'https://www.linkedin.com/in/madhumita-raghu'
      }
    },
    {
      id: 13,
      name: 'Akhil Nair',
      role: 'Operations',
      image: '/images/team/Akhil Nair.png',
      bio: 'Overseeing the on-ground execution and operations.',
      social: {
        email: 'p24akhilmn@iimidr.ac.in',
        phone: '8123023971',
        instagram: '',
        linkedin: ''
      }
    },
    {
      id: 14,
      name: 'Pranav Agarwal',
      role: 'Operations',
      image: '/images/team/Pranav Agarwal.png',
      bio: 'Streamlining processes for operational excellence.',
      social: {
        email: 'p24pranavj@iimidr.ac.in',
        phone: '8308400001',
        instagram: 'https://www.instagram.com/pranavagarwal13/',
        linkedin: 'http://linkedin.com/in/pranav-agarwal-iim'
      }
    },
    {
      id: 15,
      name: 'Yougshil',
      role: 'Operations',
      image: '/images/team/Yougshil.png',
      bio: 'Ensuring seamless logistical coordination.',
      social: {
        email: 'p24yougshiln@iimidr.ac.in',
        phone: '7756074090',
        instagram: 'https://www.instagram.com/yougshilnagrale',
        linkedin: 'https://www.linkedin.com/in/yougshil-nagrale'
      }
    },
    {
      id: 16,
      name: 'Anushka Vani',
      role: 'Participation & Hospitality',
      image: '/images/team/Anushka Vani.png',
      bio: 'Ensuring a warm welcome and seamless stay for participants.',
      social: {
        email: 'p24anushkav@iimidr.ac.in',
        phone: '7608000795',
        instagram: 'https://www.instagram.com/anushka.vani_19',
        linkedin: 'https://www.linkedin.com/in/anushka-vani'
      }
    },
    {
      id: 17,
      name: 'Sahil Telrandhe',
      role: 'Participation & Hospitality',
      image: '/images/team/Sahil Telrandhe.png',
      bio: 'Managing participant relations and hospitality services.',
      social: {
        email: 'p24sahilt@iimidr.ac.in',
        phone: '9168369986',
        instagram: 'https://www.instagram.com/sahiltelrandhe_',
        linkedin: 'https://www.linkedin.com/in/sahil-telrandhe-a73835196'
      }
    },
    {
      id: 18,
      name: 'Vibhu Sharma',
      role: 'Participation & Hospitality',
      image: '/images/team/Vibhu Sharma.png',
      bio: 'Coordinating accommodation and hospitality logistics.',
      social: {
        email: 'p24vibhus@iimidr.ac.in',
        phone: '6306179572',
        instagram: 'https://www.instagram.com/vibhusharmahere',
        linkedin: 'https://www.linkedin.com/in/vibhusharmahere'
      }
    },
    {
      id: 19,
      name: 'Arjav Jain',
      role: 'Pro Shows',
      image: '/images/team/Arjav Jain.png',
      bio: 'Orchestrating the star-studded professional shows.',
      social: {
        email: 'p24arjavj@iimidr.ac.in',
        phone: '9811553663',
        instagram: 'https://www.instagram.com/arjav.j',
        linkedin: 'https://in.linkedin.com/in/arjav-jain-305'
      }
    },
    {
      id: 20,
      name: 'Somiya Kardam',
      role: 'Pro Shows',
      image: '/images/team/Somiya Kardam.png',
      bio: 'Managing artist relations and concert productions.',
      social: {
        email: 'P24somiyak@iimidr.ac.in',
        phone: '7292058962',
        instagram: 'https://www.instagram.com/somiyaa_16',
        linkedin: 'http://linkedin.com/in/somiya-kardam'
      }
    },
    {
      id: 21,
      name: 'Abhijeet Bhure',
      role: 'Systems & IT',
      image: '/images/team/Abhijeet Bhure.png',
      bio: 'Managing digital infrastructure and technical systems.',
      social: {
        email: 'p24abhijeetb@iimidr.ac.in',
        phone: '',
        instagram: 'https://www.instagram.com/abhijeet_bhure',
        linkedin: 'https://www.linkedin.com/in/abhijeet-bhure'
      }
    },
    {
      id: 22,
      name: 'Jyotirmoy Saha',
      role: 'Systems & IT',
      image: '/images/team/Jyotirmoy Saha.png',
      bio: 'Ensuring robust IT support and web presence.',
      social: {
        email: 'i21jyotirmoys@iimidr.ac.in',
        phone: '',
        instagram: 'https://www.instagram.com/jyotirmoy3435',
        linkedin: 'https://www.linkedin.com/in/jyotirmoysaha3435'
      }
    },
    {
      id: 23,
      name: 'Harshita Patodia',
      role: 'Jagriti',
      image: '/images/team/Harshita Patodia.png',
      bio: 'Leading the social responsibility initiatives.',
      social: {
        email: 'p24harshitap@iimidr.ac.in',
        phone: '9861133564',
        instagram: 'https://www.instagram.com/harshi.tales',
        linkedin: 'https://in.linkedin.com/in/harshita-patodia-056a41251'
      }
    },
    {
      id: 24,
      name: 'Navneet Singh',
      role: 'Jagriti',
      image: '/images/team/Navneet Singh.png',
      bio: 'Leading the social responsibility initiatives.',
      social: {
        email: 'p24navneets@iimidr.ac.in',
        phone: '9973791877',
        instagram: 'https://www.instagram.com/navneet_singhhhhhh',
        linkedin: 'https://www.linkedin.com/in/navneet-singh-3068951b2'
      }
    }
  ];

  return (    
    <div className={styles.container}>
      <title>Our Team - IRIS 2026</title>

      <h1 style={{  
        fontFamily: 'Langar-Regular',
        textAlign: 'center',
        fontSize: '2.8rem',
        letterSpacing: '1px',
        marginTop: '0.5rem',
        marginBottom: '-1.5rem',
        color: '#f2dd7c'}}>Meet the IRIS 2026 Team</h1>
      <TeamSection title="Overall Coordinators" members={coreTeamMembers} columns={2} />
      <TeamSection title="Vertical Coordinators" members={verticalCoordinators} columns={4} />
    </div>
  );
};

export default TeamPage;
