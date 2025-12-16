"use client";

import Header from "./components/Header";
import FullscreenTabs from "./components/FullscreenTabs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="page-root">
      <Header />
      <FullscreenTabs />
      <Footer />
    </div>
  );
}
