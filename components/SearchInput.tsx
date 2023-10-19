import React, { useState, useEffect, useCallback, useRef } from 'react';

interface SearchInputProps {
  placeholder: string;
  onPlaceSelect: (place: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onPlaceSelect }) => {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [suggestionClicked, setSuggestionClicked] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchSuggestions = useCallback(async (debouncedQuery: string) => {
    const apiKey = "pk.288da5e13e6adf2304c02e277978953f";  // Replace with your API key
    if (debouncedQuery.length >= 5) {
      const response = await fetch(`https://us1.locationiq.com/v1/search.php?key=${apiKey}&format=json&q=${debouncedQuery}`);
      const data = await response.json();
      console.log(data)
      if (data && !data.error) {
        const newSuggestions = data.map((item: any) => item.display_name);
        setSuggestions(newSuggestions);
        setIsOpen(true);
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length >= 5 && !suggestionClicked) {
        fetchSuggestions(query);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [query, fetchSuggestions, suggestionClicked]);

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onPlaceSelect(suggestion);
    setIsOpen(false);
    setSuggestionClicked(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSuggestionClicked(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <input 
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="py-2 px-3 bg-neutral-800 w-full border rounded ring-1 ring-neutral-600  placeholder:text-neutral-400 focus:border-none focus:ring-1 border-none capitalize"
      />
      <ul className={`absolute z-50 ring-1 ring-neutral-600 p-1 mt-2 w-full text-neutral-300 rounded bg-neutral-800 flex flex-col capitalize ${isOpen ? '' : 'hidden'}`}>
        {suggestions.length > 0 && suggestions.map(suggestion => (
          <li className="px-2 hover:rounded-md py-1 cursor-pointer hover:bg-neutral-700 border-b" key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
