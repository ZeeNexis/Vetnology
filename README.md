# Vetnology website

Vetnology is a technology company website for businesses seeking AI development, mobile applications, websites, and custom software. Veterinary technology is an additional area of expertise. The site is built with Next.js, React, and TypeScript and exports as static HTML, CSS, and JavaScript for Hostinger hosting.

## Pages and project structure

| Route | Purpose |
| --- | --- |
| `/` | Company positioning, services, capabilities, and project inquiry |
| `/services/` | AI, mobile, web, custom software, and veterinary technology services |
| `/ai-solutions/` | Practical AI applications and implementation approach |
| `/veterinary-technology/` | Veterinary telehealth and digital care workflows |
| `/about/` | Purpose and approach |
| `/contact/` | Project inquiry guidance and email contact |

Page content lives in `src/app/`. Shared navigation, footer, branding, and call to action components live in `src/components/`. Page metadata is built with `src/lib/seo.ts`. The active `vetnology-logo-test.png` is used in the site and browser tab; the saved alternate `new_logo.png` and both SVG favicon experiments remain in `public/assets/images/`. The original SVG mark and favicon remain in `src/components/Brand.tsx` and `public/icon.svg` for comparison. The social preview assets are in `public/`. The self-hosted DM Sans and Manrope fonts and their licenses are in `public/fonts/`. Next.js generates `robots.txt` and `sitemap.xml` from `src/app/robots.ts` and `src/app/sitemap.ts`.

## Prerequisites

- Node.js 24 (see `.nvmrc`)
- pnpm 11

## Local development

```bash
nvm use             # if you use nvm
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Static production build

```bash
pnpm install --frozen-lockfile
pnpm build
```

The `output: "export"` setting in `next.config.ts` writes the deployable site to `out/`. Development uses `.next-dev/`, while production builds use `.next/`, so a build cannot overwrite a running development server's files. The site needs no Node.js process on the host. Generated directories such as `out/`, `.next/`, `.next-dev/`, and `node_modules/` are excluded from Git.

## Deploy to Hostinger

1. Build the site with the production commands above.
2. Open the **Vetnology site's** `public_html` directory in Hostinger File Manager or through SFTP.
3. Upload the **contents** of `out/` into `public_html`, including `_next/`, `assets/`, `icon.svg`, `og-image.png`, `robots.txt`, and `sitemap.xml`. Do not upload the source repository or the `out` folder itself.
4. Preview the site on the temporary domain. Check every page, navigation link, and email link.
5. Connect `vetnology.com` to the site. Once live, check canonical URLs and submit `https://vetnology.com/sitemap.xml` to Google Search Console.

Keep the existing `askonlinevet.com` site and its files separate from this deployment.

## Before publishing

Confirm that `info@vetnology.com` is configured to receive mail and review service descriptions, veterinary domain statements, and company claims with the business owner. Vetnology is presented as a technology company; the veterinary page does not advertise direct clinical consultations or claim that example workflows are launched products.

The project currently needs no environment variables. If that changes, keep local `.env` files out of Git and never place private credentials in client-side code.
