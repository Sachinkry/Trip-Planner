import React, { ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full dark:bg-neutral-900 bg-white text-neutral-900 dark:text-white ">
        <header className="flex px-4 md:px-12 py-3 justify-between items-center mb-8">
          <h1 className="text-4xl">Trip Planner</h1>
          {/* <ThemeToggle /> */}
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="mt-8">
          <p className="text-center">© 2023 Trip Planner. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default Layout;
