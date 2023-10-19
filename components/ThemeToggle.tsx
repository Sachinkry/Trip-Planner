import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Your client-side logic here
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" onClick={toggleDropdown} className="inline-flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ring-1 ring-neutral-600 rounded-sm p-1">
           <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>

        </button>
      </div>
      
      {showDropdown && (
        <div className="origin-top-right absolute right-0 mt-1 w-36 rounded-md shadow-lg ring-1 ring-neutral-600 dark:bg-neutral-900 z-50 bg-white">
          <div className="flex flex-col  items-start  p-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button onClick={() => setTheme('light')} className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-neutral-800 text-left rounded-md w-full" role="menuitem">
              Light
            </button>
            <button onClick={() => setTheme('dark')} className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-neutral-800 text-left rounded-md w-full" role="menuitem">
              Dark
            </button>
            <button onClick={() => setTheme('system')} className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-neutral-800 text-left rounded-md w-full" role="menuitem">
              System
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
