"use client";
import { useState } from "react";

// Define types for the component props and state
type SortOption = "Newest" | "Oldest" | "Price: Low to High" | "Price: High to Low" | "Popularity";
type ShowOption = "Default" | "5 Items" | "10 Items" | "15 Items" | "20 Items";

const sortOptions: SortOption[] = [
  "Newest",
  "Oldest",
  "Price: Low to High",
  "Price: High to Low",
  "Popularity",
];

const showOptions: ShowOption[] = [
  "Default",
  "5 Items",
  "10 Items",
  "15 Items",
  "20 Items",
];

// Custom hook to handle sort and show options
const useHeaderOptions = () => {
  const [sortBy, setSortBy] = useState<SortOption>("Newest");
  const [showOption, setShowOption] = useState<ShowOption>("Default");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Sort by:", e.target.value); // Debugging
    setSortBy(e.target.value as SortOption);
  };

  const handleShowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Show:", e.target.value); // Debugging
    setShowOption(e.target.value as ShowOption);
  };

  return {
    sortBy,
    showOption,
    handleSortChange,
    handleShowChange,
  };
};

// Reusable Select component
interface SelectProps {
  id: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
}

const Select: React.FC<SelectProps> = ({ id, value, options, onChange, label }) => (
  <div className="flex items-center gap-2">
    <label htmlFor={id} className="text-sm font-medium">
      {label}
    </label>
    <select
      id={id}
      className="border p-2 rounded"
      value={value}
      onChange={onChange}
      aria-label={label}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const Header = () => {
  const { sortBy, showOption, handleSortChange, handleShowChange } = useHeaderOptions();

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center pl-6 pb-0 mb-0 py-4">
        <div className="flex items-center gap-4">
          <Select
            id="sort"
            value={sortBy}
            options={sortOptions}
            onChange={handleSortChange}
            label="Sort by:"
          />
          <Select
            id="show"
            value={showOption}
            options={showOptions}
            onChange={handleShowChange}
            label="Show:"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;