"use client"
import { useState } from "react";

const Header = () => {
  const [sortBy, setSortBy] = useState<string>("Newest");
  const [showOption, setShowOption] = useState<string>("Default");

  const sortOptions = [
    "Newest",
    "Oldest",
    "Price: Low to High",
    "Price: High to Low",
    "Popularity",
  ];

  const showOptions = [
    "Default",
    "5 Items",
    "10 Items",
    "15 Items",
    "20 Items",
  ];

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleShowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShowOption(e.target.value);
  };

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center pl-6 pb-0 mb-0 py-4">
        {/* Sort and Filter Options */}
        <div className="flex items-center gap-4">
          <label htmlFor="sort" className="text-sm font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            className="border p-2 rounded"
            value={sortBy}
            onChange={handleSortChange}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <label htmlFor="show" className="text-sm font-medium">
            Show:
          </label>
          <select
            id="show"
            className="border p-2 rounded"
            value={showOption}
            onChange={handleShowChange}
          >
            {showOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;
