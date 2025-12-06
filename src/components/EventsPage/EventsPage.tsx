"use client";

import { useState } from "react";
import styles from "./EventsPage.module.css";
import SearchBar from "./SearchBar";
import EventsList from "./EventsList";
import EventsBackground from "./EventsBackground";

export type EventCategory = "Flagship" | "Cultural" | "Management" | "Sports";

export interface Event {
  id: string;
  title: string;
  category: EventCategory;
  description?: string;          // optional
  detailedDescription?: string;  // optional
  date?: string;                 // optional
  time?: string;
  venue?: string;
  image?: string;
  link?: string;                 // URL to open in new tab
}

// Sample events data - Replace with actual data
const eventsData: Event[] = [
  {
    id: "1",
    title: "Mantrana",
    category: "Management",
    link: "https://unstop.com/competitions/mantrana-a-finance-simulation-iris-2026-iim-indores-flagship-fest-iim-indore-1597503",
  },
  {
    id: "2",
    title: "Sanrachna",
    category: "Management",
    link: "https://unstop.com/competitions/sanrachna-the-hr-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1597401",
  },
  {
    id: "3",
    title: "ProdWhiz",
    category: "Management",
    link: "https://unstop.com/competitions/prodwhiz26-product-management-event-iris-2026-iim-indores-flagship-fest-iim-indore-1597505",
  },
  {
    id: "4",
    title: "Picture Perfect: Short Film Competition",
    category: "Cultural",
    link: "https://unstop.com/events/picture-perfect-short-film-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1598058",
  },
  {
    id: "5",
    title: "Insight Edge",
    category: "Management",
    link: "https://unstop.com/competitions/insight-edge-iris-2026-iim-indores-flagship-fest-iim-indore-1596855",
  },
  {
    id: "6",
    title: "Hackwise",
    category: "Management",
    link: "https://unstop.com/hackathons/hackwise-2026-iris-2026-iim-indores-flagship-fest-iim-indore-1597411",

  },
  {
    id: "7",
    title: "Finance League",
    category: "Management",
    link: "https://unstop.com/competitions/finance-league-iris-2026-iim-indores-flagship-fest-iim-indore-1597410",
  },
  {
    id: "8",
    title: "Distortion",
    category: "Cultural",
    link: "https://unstop.com/events/distortion-iris-2026-iim-indores-flagship-fest-iim-indore-1598049",
  },
  {
    id: "9",
    title: "Ashwamedha",
    category: "Flagship",
    link: "https://unstop.com/competitions/ashwamedha-a-legacy-leadership-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1597351",
  },
  {
    id: "10",
    title: "Klueless",
    category: "Flagship",
    link: "https://unstop.com/quiz/klueless-iris-2026-iim-indores-flagship-fest-iim-indore-1597419",
  },
  {
    id: "11",
    title: "VISHLESHAN",
    category: "Flagship",
    link: "https://unstop.com/competitions/vishleshan-the-data-analytics-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1592985",
  },
  {
    id: "12",
    title: "Supply Chain Showdown",
    category: "Flagship",
    link: "https://unstop.com/competitions/supply-chain-showdown-iris-2026-iim-indores-flagship-fest-iim-indore-1593071",
  },
  {
    id: "13",
    title: "Kalpavriksha",
    category: "Management",
    link: "https://unstop.com/competitions/kalpavriksha-the-social-business-plan-iris-2026-iim-indores-flagship-fest-iim-indore-1597415",
  },
  {
    id: "14",
    title: "Vyapaar Sanasad",
    category: "Flagship",
    link: "https://unstop.com/competitions/vyapar-sansad-the-corporate-governance-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1593029"
  },

  {
    id: "15",
    title: "Laavanya",
    category: "Cultural",
    link: "https://unstop.com/events/laavanya-iris-2026-iim-indores-flagship-fest-iim-indore-1593020",
  },
  
  {
    id: "16",
    title: "Beyond Lines",
    category: "Cultural",
    link: "https://unstop.com/competitions/beyond-lines-article-writing-iris-2026-iim-indores-flagship-fest-iim-indore-1599407",
  },

  {
    id: "17",
    title: "Jam Competition",
    category: "Cultural",
    link: "https://unstop.com/events/jam-just-a-minute-iris-2026-iim-indores-flagship-fest-iim-indore-1599439",
  },

  {
    id: "18",
    title: "Lasya",
    category: "Cultural",
    link: "https://unstop.com/events/lasya-iris-2026-iim-indores-flagship-fest-iim-indore-1598052",
  },

   {
    id: "19",
    title: "Voice Of Iris",
    category: "Cultural",
    link: "https://unstop.com/events/voice-of-iris-iris-2026-iim-indores-flagship-fest-iim-indore-1598054",
  },

  {
    id: "20",
    title: "Zero One Infinity",
    category: "Management",
    link: "https://unstop.com/competitions/zero-one-infinity-it-consulting-event-iris-2026-iim-indores-flagship-fest-iim-indore-1597507",
  },

   {
    id: "21",
    title: "Jigyasa: The Quizzing Event",
    category: "Management",
    link: "https://unstop.com/competitions/klueless-iris-2026-iim-indores-flagship-fest-iim-indore-1596862",
  },
  {
    id: "22",
    title: "Asian Parliamentary Debate",
    category: "Management",
    link: "https://unstop.com/events/asian-parliamentary-debate-iris-2026-iim-indores-flagship-fest-iim-indore-1602528",
  },

  {
    id: "23",
    title: "Drona: A Day at IIM Indore",
    category: "Flagship",
    link: "https://unstop.com/workshops-webinars/drona-a-day-at-iim-indore-iris-2026-iim-indores-flagship-fest-iim-indore-1597947",
  },

  {
    id: "24",
    title: "B2C: Marketing Case Competition",
    category: "Management",
    link: "https://unstop.com/competitions/b2c-marketing-case-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1596897",
  },

  {
    id: "25",
    title: "Table Tennis (Men's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/table-tennis-mens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599411",
  },

  {
    id: "26",
    title: "Table Tennis (Men's Doubles)",
    category: "Sports",
    link: "https://unstop.com/events/table-tennis-mens-doubles-iris-2026-iim-indores-flagship-fest-iim-indore-1599421",
  },
  {
    id: "27",
    title: "Table Tennis (Women's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/table-tennis-womens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599418",
  },
  {
    id: "28",
    title: "Lawn Tennis (Men's Doubles)",
    category: "Sports",
    link: "https://unstop.com/events/lawn-tennis-mens-doubles-iris-2026-iim-indores-flagship-fest-iim-indore-1599426",
  },
  {
    id: "29",
    title: "Lawn Tennis (Men's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/lawn-tennis-mens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599422",
  },
  {
    id: "30",
    title: "Lawn Tennis (Women's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/lawn-tennis-womens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599427",
  },
  {
    id: "31",
    title: "Badminton (Women's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/badminton-womens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599415",
  },
  {
    id: "32",
    title: "Badminton (Men's Doubles)",
    category: "Sports",
    link: "https://unstop.com/events/badminton-mens-doubles-iris-2026-iim-indores-flagship-fest-iim-indore-1599414",
  },
  {
    id: "33",
    title: "Badminton (Men's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/badminton-mens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599409",
  },
  {
    id: "34",
    title: "Volleyball (Men’s)",
    category: "Sports",
    link: "https://unstop.com/events/volleyball-mens-iris-2026-iim-indores-flagship-fest-iim-indore-1599403",
  },
  {
    id: "35",
    title: "Volleyball (Women’s)",
    category: "Sports",
    link: "https://unstop.com/events/volleyball-womens-iris-2026-iim-indores-flagship-fest-iim-indore-1599408",
  },
  {
    id: "36",
    title: "Cricket (Women's)",
    category: "Sports",
    link: "https://unstop.com/events/cricket-womens-iris-2026-iim-indores-flagship-fest-iim-indore-1599400",
  },
  {
    id: "37",
    title: "Cricket (Men's)",
    category: "Sports",
    link: "https://unstop.com/events/cricket-mens-iris-2026-iim-indores-flagship-fest-iim-indore-1599394",
  },
  {
    id: "38",
    title: "Futsal (Women's)",
    category: "Sports",
    link: "https://unstop.com/events/futsal-womens-iris-2026-iim-indores-flagship-fest-iim-indore-1598065",
  },
  {
    id: "39",
    title: "Football (Men's)",
    category: "Sports",
    link: "https://unstop.com/events/football-mens-iris-2026-iim-indores-flagship-fest-iim-indore-1598064",
  },
  {
    id: "40",
    title: "Basketball (Women's)",
    category: "Sports",
    link: "https://unstop.com/events/basketball-womens-iris-2026-iim-indores-flagship-fest-iim-indore-1599402",
  },
  {
    id: "41",
    title: "Basketball (Men's)",
    category: "Sports",
    link: "https://unstop.com/events/basketball-mens-iris-2026-iim-indores-flagship-fest-iim-indore-1599398",
  },
  {
    id: "42",
    title: "Awaaz: The Nukkad Natak Competition",
    category: "Cultural",
    link: "https://unstop.com/events/awaaz-the-nukkad-natak-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1605992",
  },
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | "All">(
    "All"
  );

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase());

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
          {/* Banner image commented out per request
          <img
            src="/svgs/events/top.svg"
            alt="Events"
            className={styles.eventsBanner}
          />
          */}
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
