import type { NextConfig } from "next";

// Configuration for deployment to a root domain or
// https://<username>.github.io (user/organization site).
// No basePath/assetPrefix is needed because the app lives at "/".
const nextConfig: NextConfig = {
  // Enable static HTML export so the app can be hosted on GitHub Pages
  output: "export",

  // Disable Next.js image optimization because GitHub Pages does not run
  // a Node.js server to handle dynamic image optimization
  images: {
    unoptimized: true,
  },

  // Generate URLs with a trailing slash so GitHub Pages can serve
  // the corresponding /path/index.html files correctly
  trailingSlash: true,

  // Expose an empty base path at build time so components can
  // safely build asset URLs (works locally and on GitHub Pages).
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
