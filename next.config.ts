import type { NextConfig } from "next";

// Replace REPO_NAME_HERE with your GitHub repository name
// when deploying to https://<username>.github.io/REPO_NAME_HERE/
const REPO_NAME = "codecuboid";

const nextConfig: NextConfig = {
  // Enable static HTML export so the app can be hosted on GitHub Pages
  output: "export",

  // Prefix all routes when running in production so the app works under
  // https://<username>.github.io/REPO_NAME_HERE/ instead of the domain root
  basePath: process.env.NODE_ENV === "production" ? `/${REPO_NAME}` : undefined,

  // Ensure all static assets (JS, CSS, images) are loaded from the same
  // base path on GitHub Pages
  assetPrefix:
    process.env.NODE_ENV === "production" ? `/${REPO_NAME}/` : undefined,

  // Disable Next.js image optimization because GitHub Pages does not run
  // a Node.js server to handle dynamic image optimization
  images: {
    unoptimized: true,
  },

  // Generate URLs with a trailing slash so GitHub Pages can serve
  // the corresponding /path/index.html files correctly
  trailingSlash: true,

   // Expose the base path at build time so we can prefix asset URLs
   // (like images and favicons) in components. This ensures that
   // absolute URLs work both locally and on GitHub Pages.
   env: {
     NEXT_PUBLIC_BASE_PATH:
       process.env.NODE_ENV === "production" ? `/${REPO_NAME}` : "",
   },
};

export default nextConfig;
