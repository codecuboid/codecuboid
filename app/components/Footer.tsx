"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  // Avoid using Date directly during server render to prevent
  // hydration mismatches between the pre-rendered HTML and
  // the client-rendered tree, especially for static exports.
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div>
        © {year ?? ""} Code Cuboid · All rights reserved
      </div>
    </footer>
  );
}

