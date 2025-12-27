"use client";

import { useEffect, useState } from "react";

// Simple heuristic: show on mobile/tablet-sized viewports where the user agent
// still looks mobile. Hide automatically once the viewport becomes desktop-like.

function isProbablyMobileUA() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
}

function isDesktopLikeViewport() {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 1024; // Tailwind-style lg breakpoint
}

export default function DesktopModePrompt() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Initial evaluation on mount
    const evaluate = () => {
      const mobileUA = isProbablyMobileUA();
      const desktopViewport = isDesktopLikeViewport();

      // Show popup if on mobile UA and viewport is still small
      if (mobileUA && !desktopViewport) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    evaluate();

    // Re-evaluate on resize / orientation change so that
    // when the user switches to desktop mode, we hide the popup.
    window.addEventListener("resize", evaluate);
    window.addEventListener("orientationchange", evaluate);

    return () => {
      window.removeEventListener("resize", evaluate);
      window.removeEventListener("orientationchange", evaluate);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="desktop-mode-overlay">
      <div className="desktop-mode-popup">
        <h2>Please enable Desktop Site</h2>
        <p>
          For the best experience, please enable <strong>Desktop site</strong> in
          your mobile/tablet browser settings.
        </p>
        <p className="hint">
          In most browsers, open the browser menu and check
          <strong> "Desktop site"</strong> or <strong>"Request desktop site"</strong>.
        </p>
      </div>
    </div>
  );
}
