"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    setMounted(true);
  }, []);

  function toggle() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  if (!mounted) return null;

  return (
    <button onClick={toggle} aria-label="Toggle theme" style={{padding:8,borderRadius:10,border:'none',background:'transparent',color:'inherit'}}>
      {theme === "dark" ? (
        <span style={{display:'inline-flex',alignItems:'center',gap:8}}>🌙</span>
      ) : (
        <span style={{display:'inline-flex',alignItems:'center',gap:8}}>☀️</span>
      )}
    </button>
  );
}
