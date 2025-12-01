"use client";

import { useState } from "react";
import styles from "./EventsPage.module.css";
import SearchBar from "./SearchBar";
import EventsList from "./EventsList";
import EventsBackground from "./EventsBackground";

export type EventCategory = "Flagship" | "Cultural" | "Management";

export interface Event {
  id: string;
  title: string;
  category: EventCategory;
  description: string;           // short description (front)
  detailedDescription?: string;  // long description (back)
  date?: string;
  time?: string;
  venue?: string;
  image?: string;
}

// Sample events data - Replace with actual data
const eventsData: Event[] = [
  {
    id: "1",
    title: "Mantrana",
    category: "Management",
    description: "A brand new finance event",
    detailedDescription:
      "Do you believe finance is more than just technical knowledge, it's about knowing the right moves to make, when, where, and how? If so, Mantrana is your chance to shine. This premier investment and portfolio allocation competition offers finance enthusiasts the perfect opportunity to demonstrate their expertise while gaining valuable hands-on experience in crafting winning investment strategies",
    date: "Oct 25, 2025",
  },
  {
    id: "2",
    title: "Sanrachna",
    category: "Management",
    description: "All great changes are preceded by chaos",
    detailedDescription:
      "In this edition's IRIS , we bring a new dimension to all the corporate maniacs who are fascinated about the behaviour of people, development of firms and are also willing to adapt to the the ever changing business environment. The event focuses on stimulating business enthusiasts to solve the chaos before order in an organisation by testing the theoretical, practical and application knowledge. Sanrachna - A platform to showcase why you could be the most volatile strategist that the business world aches for.",
    date: "Oct 26, 2025",
  },
  {
    id: "3",
    title: "ProdWhiz",
    category: "Management",
    description: "Product Management Event",
    detailedDescription:
      "ProdLab, the Product Management Club of IIM Indore, presents ProdWhiz 2025, its flagship case competition.​ ProdWhiz, a one of its kind Product Management event, in its fourth edition, is designed to give the participants a taste of what it is like in the day-to-day life of a Product Manager.",
    date: "Oct 27, 2025",
  },
  {
    id: "4",
    title: "Picture Perfect: Short Film Competition",
    category: "Management",
    description: "Lights, Camera, Create: Let Your Story Shine!",
    detailedDescription:
      "Aperture, the Photography Club of IIM Indore, proudly presents 'Picture Perfect,' an exhilarating short film competition under the prestigious IRIS fest. Showcase your creativity and storytelling prowess by crafting a short film that captures the essence of this year's theme: 'Reel vs. Real.' Dive into the intriguing interplay between fantasy and reality and challenge the boundaries of perception through your lens. Join us to celebrate the art of filmmaking and compete with talented storytellers from across the country.",
    date: "Oct 25–27, 2025",
  },
  {
    id: "5",
    title: "Insight Edge",
    category: "Management",
    description: "Flagship analytics and consulting competition.",
    detailedDescription:
      "Insight Edge is a flagship event that blends analytics and strategy. Teams work on data-backed business problems, build models, derive insights, and translate numbers into crisp strategic recommendations. The final round features boardroom-style presentations to a jury panel.",
    date: "Oct 26, 2025",
  },
  {
    id: "6",
    title: "Hackwise",
    category: "Management",
    description: "'Innovate, Implement, Inspire: Unleash the Power of AI!'",
    detailedDescription:
      "The IEEE Technology and Engineering Management Society (TEMS) Chapter at IIM Indore is proud to present its flagship Hackathon as part of the annual fest IRIS at IIM Indore. Centered around the theme of Artificial Intelligence, this event aims to provide a platform for the brightest minds to showcase their ingenuity, technical prowess, and problem-solving skills. The competition will unfold in two distinct phases: a Quiz Round to test participants’ foundational and advanced knowledge of AI, followed by a Hackathon Round, where teams will design and implement innovative AI solutions to address real-world challenges. With exciting problem statements and an opportunity to compete against some of the most talented teams, this event is designed to foster creativity, collaboration, and impactful innovations",
    date: "Oct 27, 2025",
  },
  {
    id: "7",
    title: "Finance League",
    category: "Management",
    description: "'Pitch Perfect: Where Strategy Meets Finance!'",
    detailedDescription:
      "Distortion is the campus music showcase featuring bands, solo artists, and experimental performances. Expect a mix of rock, pop, indie, and fusion in a high-energy open-air setting with lights, cheers, and a packed crowd.",
    date: "Oct 26, 2025",
  },
  {
    id: "8",
    title: "Distortion",
    category: "Cultural",
    description: "The most sought after stage for bands in Central India",
    detailedDescription:
      "The Distortion brings in the best talents from across India and gives them a glorified stage to make hay when the sun shines. With the crowd out there idling in a wintry lull, blaze on your warring beats to take them to the enigmatic journey of music. Step down on the 'Distortion' pedals while painting the black and white keys with your music.",
    date: "Oct 25, 2025",
  },
  {
    id: "9",
    title: "Ashwamedha",
    category: "Flagship",
    description: "Defy the Destined.",
    detailedDescription:
      "Ashwamedha is the multi-disciplinary flagship leadership event of IRIS. It is a unique platform where the finest in the country are pitted against each other in a simulation of real-life challenges, to be recognized as the next-gen leaders. Ashwamedha, the longest-running event of IIM Indore, draws a parallel with the ancient Vedic ritual of the same name, performed to attain power, glory, fame, and prosperity.Conceptualized by the eminent educationist and leadership trainer, Dr. Vijay Menon, Ashwamedha has been one of the most awaited leadership events in the Indian B-School circuit. This year marks the 20th edition of Ashwamedha and it promises to be a terrific one.",
    date: "Oct 25, 2025",
  },
  {
    id: "10",
    title: "Klueless",
    category: "Flagship",
    description: "Treasure Hunt",
    detailedDescription:
      "With 90,565 blog hits over a week, this world-famous online event garnered 5200+ Likes on Facebook. Over 10,000,000 hits across 120 countries in last 5 years",
    date: "Oct 25, 2025",
  },
  {
    id: "11",
    title: "VISHLESHAN",
    category: "Flagship",
    description: "Flagship IT event of IRIS",
    detailedDescription:
      "In the current era of IOT, ML, AI, and many other technical and data-based tools and products managers need to maintain a conceptual understanding of the same to produce and use such products. Vishleshan is a chance to implement and test these skills, from using data to creating the design of a new product Vishleshan will give you a chance to use your understanding of management and technology. And what’s best is no coding or other hard technical skills required.",
    date: "Oct 25, 2025",
  },
  {
    id: "12",
    title: "Supply Chain Showdown",
    category: "Flagship",
    description: "Biggest Operations and Supply Chain Event of Central India.",
    detailedDescription:
      "The Supply Chain Showdown  is your chance to shine as a problem-solver and strategist in the exciting world of operations and supply chain management! This one-of-a-kind competition, hosted by IIM Indore, takes you on a thrilling journey through challenges designed to test your wit, creativity, and analytical skills. Bring your A-game as you dive into analysis, brainstorm innovative solutions, and craft a winning strategy.",
    date: "Oct 25, 2025",
  },
  {
    id: "13",
    title: "Kalpavriksha",
    category: "Flagship",
    description: "Social Business Plan Event at IRIS.",
    detailedDescription:
      "Kalpavriksha is a national Social Business Plan event, motivated by the conviction that the integration of business principles with initiatives to promote societal improvement can serve as a tenacious and potent force for transformation. The event seeks to evaluate participants on the basis of their proposed social venture which could potentially drive social change, and the scope of the venture’s amalgamation with entrepreneurship.",
    date: "Oct 25, 2025",
  },
  {
    id: "14",
    title: "Vyapaar Sanasad",
    category: "Flagship",
    description: "Flagship Economics event at IRIS.",
    detailedDescription:
      "Vyapar Sansad is the ultimate national competition for business strategists and policy enthusiasts. Whether you thrive on solving complex business challenges or crafting impactful policies, this event tests your mettle across multiple exciting rounds. Get ready to tackle real-world scenarios, showcase your entrepreneurial acumen, and make decisions that matter. Compete with the brightest minds across the country and seize the chance to prove your strategic brilliance. Vyapar Sansad is your stage to blend business innovation with policy insight and emerge as a true leader!",
    date: "Oct 25, 2025",
  },
  
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | "All">(
    "All"
  );

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.detailedDescription &&
        event.detailedDescription
          .toLowerCase()
          .includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.eventsContainer}>
      {/* Background decorations */}
      <EventsBackground category={selectedCategory} />

      {/* Main content */}
      <div className={styles.eventsSubContainer}>
        {/* Heading */}
        <div className={styles.eventsHeading}>
          <img
            /*src="/svgs/events/top.svg"*/
            alt="Events"
            className={styles.eventsBanner}
          />
          <h1 className={styles.eventsTitle}>Events</h1>
        </div>

        {/* Search + Filters */}
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Events list */}
        <EventsList events={filteredEvents} />

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className={styles.noResults}>
            <p>No events found matching your criteria.</p>
            <p className={styles.noResultsHint}>
              Try adjusting your search or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
