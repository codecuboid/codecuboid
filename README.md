# Code Cuboid — Website

This repository contains a Next.js app (app router) scaffold for a services website. It includes a fullscreen tabbed main page and individual pages for each service.

Getting started

- Install dependencies:

```bash
npm install
```

- Run development server:

```bash
npm run dev
```

Project structure (new/important files)

- `app/page.tsx` — Main entry; uses header, fullscreen tabs, footer
- `app/components/Header.tsx` — Top navigation and brand
- `app/components/FullscreenTabs.tsx` — Overview/Services/About/Contact fullscreen sections
- `app/components/ServiceCard.tsx` — Small service card used on the services tab
- `app/components/ContactForm.tsx` — Contact form with mailto fallback
- `app/components/Footer.tsx` — Site footer
- `app/globals.css` — Site-wide styles, scroll-snap layout and variables
- `app/services/*/page.tsx` — Individual service pages (data annotation, cloud, fullstack, cicd-devops, it-solutions)

Notes & next steps

- The contact form uses a `mailto:` fallback for now — replace with your API endpoint when ready.
- Update `hello@codecuboid.example` to your real email address.
- Replace placeholder copy (company name, descriptions) with finalized content before registration.
- Consider adding images, logos, or illustrations in `public/` and referencing them from components.

License & copyright

All code created here is original and intended for your use. Replace or remove any placeholder copy or logo before publication to ensure you own all assets.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
