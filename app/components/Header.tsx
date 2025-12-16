"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();
  const isServicePage = pathname?.startsWith("/services");

  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme as "light" | "dark");

    // listen for theme change
    const observer = new MutationObserver(() => {
      const updatedTheme =
        document.documentElement.getAttribute("data-theme") || "light";
      setTheme(updatedTheme as "light" | "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <Link href="/" className="brand" style={{textDecoration:'none', display:'flex', gap:'12px', alignItems:'center'}}>
        <img
          src={
            theme === "dark"
              ? "/images/logoName_light.png"
              : "/images/logoName_dark.png"
          }
          alt="Code Cuboid Logo"
          className="logo"
        />
      </Link>

      <nav className="nav-links" aria-label="Primary">
        {isServicePage && <Link href="/">Home</Link>}
        <Link href="/#overview">About Us</Link>
        <Link href="/#contact">Contact Us</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
