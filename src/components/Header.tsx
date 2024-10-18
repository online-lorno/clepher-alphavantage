"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header className="bg-white dark:bg-gray-800 py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-yellow-500">
            Clepher - Alphavantage
          </h1>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label={
            isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
          }
        >
          {isDarkTheme ? (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
