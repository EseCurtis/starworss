import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { StateType } from "@/store/initalState";
import { FaTimes } from "react-icons/fa";
import DomCondition from "@/components/DomCondition";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

interface SearchBoxProps {
  // Add any props you might have here
}

export default function SearchBox(props: SearchBoxProps) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);
  const searchBoxRef = useRef<any>(null);
  const navigate = useNavigate();

  // Load search history from localStorage when the component mounts
  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  // Function to handle search input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // Function to handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchInput.trim().length > 0) {
      if (!searchHistory.includes(searchInput)) {
        const updatedSearchHistory = [...searchHistory, searchInput];

        setSearchHistory(updatedSearchHistory);
        localStorage.setItem(
          "searchHistory",
          JSON.stringify(updatedSearchHistory)
        );
      }

      navigate(`/search/?q=${searchInput}`);
    }
  };

  const removeFromHistory = (indexToRemove: number) => {
    const updatedSearchHistory = searchHistory.filter(
      (_, index) => index !== indexToRemove
    );

    setSearchHistory(updatedSearchHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
  };

  // Function to handle document click outside the search box
  const handleDocumentClick = (e: any) => {
    if (searchBoxRef.current && !searchBoxRef.current?.contains(e.target)) {
      // Click occurred outside the search box, so hide the history box
      setHistoryVisible(false);
    }
  };

  // Add a document click event listener when the component mounts
  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <form ref={searchBoxRef} className="relative" onSubmit={handleSearch}>
      <div className="flex items-center gap-1">
        <input
          type="text"
          className="min-[300px] text-[12px] p-3 rounded-lg border border-white/10 bg-white/10 focus:border-blue-500 max-w-[100%] min-[300px] w-[100%]"
          placeholder="/ Search for a character"
          value={searchInput}
          onChange={handleInputChange}
          onFocus={() => setHistoryVisible(true)}
        />
        <div
          onClick={handleSearch}
          className="p-3 border border-white/10 bg-white/10 rounded-full cursor-pointer active:opacity-50"
        >
          <BiSearch />
        </div>
      </div>

      <DomCondition condition={searchHistory.length > 0 && historyVisible}>
        <div className="absolute max-w-[90vw] w-auto p-3 bg-black border border-white/10 rounded-lg">
          {/* Display search history */}
          {searchHistory.slice(-2).map((item, index) => (
            <p
              key={index}
              className="flex items-center gap-2 text-sm border-b border-white/10 py-3"
            >
              <span onClick={() => removeFromHistory(index)}>
                <FaTimes />
              </span>
              <Link to={`/search/?q=${item}`}>{item}</Link>
            </p>
          ))}
        </div>
      </DomCondition>
    </form>
  );
}
