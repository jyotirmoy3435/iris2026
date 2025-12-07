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
  description?: string;          // optional, not used in card now
  detailedDescription?: string;  // optional, not used in card now
  date?: string;                 // optional, not used in card now
  time?: string;
  venue?: string;
  image?: string;                // poster image path
  link?: string;                 // URL to open in new tab
}

// Sample events data - Replace with actual data
const eventsData: Event[] = [
  {
    id: "1",
    title: "Mantrana",
    category: "Management",
    link: "https://unstop.com/competitions/mantrana-a-finance-simulation-iris-2026-iim-indores-flagship-fest-iim-indore-1597503",
    image: "/images/events/mantrana.png",
  },
  {
    id: "2",
    title: "Sanrachna",
    category: "Management",
    link: "https://unstop.com/competitions/sanrachna-the-hr-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1597401",
    image: "/images/events/sanrachna.png",
  },
  {
    id: "3",
    title: "ProdWhiz",
    category: "Management",
    link: "https://unstop.com/competitions/prodwhiz26-product-management-event-iris-2026-iim-indores-flagship-fest-iim-indore-1597505",
    image: "/images/events/prodwhiz.png",
  },
  {
    id: "4",
    title: "Picture Perfect: Short Film Competition",
    category: "Cultural",
    link: "https://unstop.com/events/picture-perfect-short-film-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1598058",
    image: "/images/events/picture-perfect.png",
  },
  {
    id: "5",
    title: "Insight Edge",
    category: "Management",
    link: "https://unstop.com/competitions/insight-edge-iris-2026-iim-indores-flagship-fest-iim-indore-1596855",
    image: "/images/events/insight-edge.png",
  },
  {
    id: "6",
    title: "Hackwise",
    category: "Management",
    link: "https://unstop.com/hackathons/hackwise-2026-iris-2026-iim-indores-flagship-fest-iim-indore-1597411",
    image: "/images/events/hackwise.png",
  },
  {
    id: "7",
    title: "Finance League",
    category: "Management",
    link: "https://unstop.com/competitions/finance-league-iris-2026-iim-indores-flagship-fest-iim-indore-1597410",
    image: "/images/events/finance-league.png",
  },
  {
    id: "8",
    title: "Distortion",
    category: "Cultural",
    link: "https://unstop.com/events/distortion-iris-2026-iim-indores-flagship-fest-iim-indore-1598049",
    image: "/images/events/distortion.png",
  },
  {
    id: "9",
    title: "Ashwamedha",
    category: "Flagship",
    link: "https://unstop.com/competitions/ashwamedha-a-legacy-leadership-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1597351",
    image: "/images/events/ashwamedha1.png",
  },
  {
    id: "10",
    title: "Klueless",
    category: "Flagship",
    link: "https://unstop.com/quiz/klueless-iris-2026-iim-indores-flagship-fest-iim-indore-1597419",
    image: "/images/events/klueless.png",
  },
  {
    id: "11",
    title: "VISHLESHAN",
    category: "Flagship",
    link: "https://unstop.com/competitions/vishleshan-the-data-analytics-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1592985",
    image: "/images/events/vishleshan.png",
  },
  {
    id: "12",
    title: "Supply Chain Showdown",
    category: "Flagship",
    link: "https://unstop.com/competitions/supply-chain-showdown-iris-2026-iim-indores-flagship-fest-iim-indore-1593071",
    image: "/images/events/supply-chain-showdown.png",
  },
  {
    id: "13",
    title: "Kalpavriksha",
    category: "Management",
    link: "https://unstop.com/competitions/kalpavriksha-the-social-business-plan-iris-2026-iim-indores-flagship-fest-iim-indore-1597415",
    image: "/images/events/kalpavriksha.png",
  },
  {
    id: "14",
    title: "Vyapaar Sanasad",
    category: "Flagship",
    link: "https://unstop.com/competitions/vyapar-sansad-the-corporate-governance-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1593029",
    image: "/images/events/vyapar-sansad.png",
  },

  {
    id: "15",
    title: "Laavanya",
    category: "Cultural",
    link: "https://unstop.com/events/laavanya-iris-2026-iim-indores-flagship-fest-iim-indore-1593020",
    image: "/images/events/laavanya.png",
  },
  
  {
    id: "16",
    title: "Beyond Lines",
    category: "Cultural",
    link: "https://unstop.com/competitions/beyond-lines-article-writing-iris-2026-iim-indores-flagship-fest-iim-indore-1599407",
    image: "/images/events/beyond-lines.png",
  },

  {
    id: "17",
    title: "Jam Competition",
    category: "Cultural",
    link: "https://unstop.com/events/jam-just-a-minute-iris-2026-iim-indores-flagship-fest-iim-indore-1599439",
    image: "/images/events/jam.png",
  },

  {
    id: "18",
    title: "Lasya",
    category: "Cultural",
    link: "https://unstop.com/events/lasya-iris-2026-iim-indores-flagship-fest-iim-indore-1598052",
    image: "/images/events/lasya.png",
  },

  {
    id: "19",
    title: "Voice Of Iris",
    category: "Cultural",
    link: "https://unstop.com/events/voice-of-iris-iris-2026-iim-indores-flagship-fest-iim-indore-1598054",
    image: "/images/events/voice-of-iris.png",
  },

  {
    id: "20",
    title: "Zero One Infinity",
    category: "Management",
    link: "https://unstop.com/competitions/zero-one-infinity-it-consulting-event-iris-2026-iim-indores-flagship-fest-iim-indore-1597507",
    image: "/images/events/zero-one-infinity.png",
  },

  {
    id: "21",
    title: "Jigyasa: The Quizzing Event",
    category: "Management",
    link: "https://unstop.com/competitions/klueless-iris-2026-iim-indores-flagship-fest-iim-indore-1596862",
    image: "/images/events/jigyasa.png",
  },
  {
    id: "22",
    title: "Asian Parliamentary Debate",
    category: "Cultural",
    link: "https://unstop.com/events/asian-parliamentary-debate-iris-2026-iim-indores-flagship-fest-iim-indore-1602528",
    image: "/images/events/asian-parli.png",
  },

  {
    id: "23",
    title: "Drona: A Day at IIM Indore",
    category: "Flagship",
    link: "https://unstop.com/workshops-webinars/drona-a-day-at-iim-indore-iris-2026-iim-indores-flagship-fest-iim-indore-1597947",
    image: "/images/events/drona.png",
  },

  {
    id: "24",
    title: "B2C: Marketing Case Competition",
    category: "Management",
    link: "https://unstop.com/competitions/b2c-marketing-case-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1596897",
    image: "/images/events/b2c.png",
  },

  {
    id: "25",
    title: "Table Tennis (Men's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/table-tennis-mens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599411",
    image: "/images/events/tt-men-singles.png",
  },

  {
    id: "26",
    title: "Table Tennis (Men's Doubles)",
    category: "Sports",
    link: "https://unstop.com/events/table-tennis-mens-doubles-iris-2026-iim-indores-flagship-fest-iim-indore-1599421",
    image: "/images/events/tt-men-doubles.png",
  },
  {
    id: "27",
    title: "Table Tennis (Women's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/table-tennis-womens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599418",
    image: "/images/events/tt-women-singles.png",
  },
  {
    id: "28",
    title: "Lawn Tennis (Men's Doubles)",
    category: "Sports",
    link: "https://unstop.com/events/lawn-tennis-mens-doubles-iris-2026-iim-indores-flagship-fest-iim-indore-1599426",
    image: "/images/events/lt-men-doubles.png",
  },
  {
    id: "29",
    title: "Lawn Tennis (Men's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/lawn-tennis-mens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599422",
    image: "/images/events/lt-men-singles.png",
  },
  {
    id: "30",
    title: "Lawn Tennis (Women's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/lawn-tennis-womens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599427",
    image: "/images/events/lt-women-singles.png",
  },
  {
    id: "31",
    title: "Badminton (Women's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/badminton-womens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599415",
    image: "/images/events/badminton-women-singles.png",
  },
  {
    id: "32",
    title: "Badminton (Men's Doubles)",
    category: "Sports",
    link: "https://unstop.com/events/badminton-mens-doubles-iris-2026-iim-indores-flagship-fest-iim-indore-1599414",
    image: "/images/events/badminton-men-doubles.png",
  },
  {
    id: "33",
    title: "Badminton (Men's Singles)",
    category: "Sports",
    link: "https://unstop.com/events/badminton-mens-singles-iris-2026-iim-indores-flagship-fest-iim-indore-1599409",
    image: "/images/events/badminton-men-singles.png",
  },
  {
    id: "34",
    title: "Volleyball (Men’s)",
    category: "Sports",
    link: "https://unstop.com/events/volleyball-mens-iris-2026-iim-indores-flagship-fest-iim-indore-1599403",
    image: "/images/events/volleyball-men.png",
  },
  {
    id: "35",
    title: "Volleyball (Women’s)",
    category: "Sports",
    link: "https://unstop.com/events/volleyball-womens-iris-2026-iim-indores-flagship-fest-iim-indore-1599408",
    image: "/images/events/volleyball-women.png",
  },
  {
    id: "36",
    title: "Cricket (Women's)",
    category: "Sports",
    link: "https://unstop.com/events/cricket-womens-iris-2026-iim-indores-flagship-fest-iim-indore-1599400",
    image: "/images/events/cricket-women.png",
  },
  {
    id: "37",
    title: "Cricket (Men's)",
    category: "Sports",
    link: "https://unstop.com/events/cricket-mens-iris-2026-iim-indores-flagship-fest-iim-indore-1599394",
    image: "/images/events/cricket-men.png",
  },
  {
    id: "38",
    title: "Futsal (Women's)",
    category: "Sports",
    link: "https://unstop.com/events/futsal-womens-iris-2026-iim-indores-flagship-fest-iim-indore-1598065",
    image: "/images/events/futsal-women.png",
  },
  {
    id: "39",
    title: "Football (Men's)",
    category: "Sports",
    link: "https://unstop.com/events/football-mens-iris-2026-iim-indores-flagship-fest-iim-indore-1598064",
    image: "/images/events/football-men.png",
  },
  {
    id: "40",
    title: "Basketball (Women's)",
    category: "Sports",
    link: "https://unstop.com/events/basketball-womens-iris-2026-iim-indores-flagship-fest-iim-indore-1599402",
    image: "/images/events/basketball-women.png",
  },
  {
    id: "41",
    title: "Basketball (Men's)",
    category: "Sports",
    link: "https://unstop.com/events/basketball-mens-iris-2026-iim-indores-flagship-fest-iim-indore-1599398",
    image: "/images/events/basketball-men.png",
  },
  {
    id: "42",
    title: "Awaaz: The Nukkad Natak Competition",
    category: "Cultural",
    link: "https://unstop.com/events/awaaz-the-nukkad-natak-competition-iris-2026-iim-indores-flagship-fest-iim-indore-1605992",
    image: "/images/events/nukkad-natak.png",

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
     <div className={styles.wrapper}>
      {/* Fixed Parallax Background */}
      <div className={styles.backgroundContainer}>
        {/* Desktop Background */}
        <div className={styles.desktopBackground}>
          <img
            src="/images/landing/bg_landscape.webp"
            alt="Edo Mountains"
            className={styles.landingImage}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
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

      {/* Main content */}
      <div className={styles.eventsSubContainer}>
        {/* Heading */}
        <div className={styles.eventsHeading}>
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
