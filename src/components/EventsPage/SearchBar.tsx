"use client";

import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";
import type { EventCategory } from "./EventsPage";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: EventCategory | "All";
  onCategoryChange: (category: EventCategory | "All") => void;
}

const categories: (EventCategory | "All")[] = [
  "All",
  "Cultural",
  "Flagship",
  "Management",
  "Sports",
];

export default function SearchBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: SearchBarProps) {
  return (
    <div className={styles.searchContainer}>
      {/* Search Input */}
      <div className={styles.search}>
        <Search className={styles.searchIcon} size={20} />
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* Category Filter */}
      <div className={styles.categoryFilter}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`${styles.categoryBtn} ${
              selectedCategory === category ? styles.categoryBtnActive : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
