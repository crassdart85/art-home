# Art Home International Group — Website Documentation

> Written for junior developers. No prior experience with this project needed.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [How to Run Locally](#4-how-to-run-locally)
5. [How the Site Works](#5-how-the-site-works)
6. [Components Reference](#6-components-reference)
7. [How to Edit Content](#7-how-to-edit-content)
8. [How to Add a New Project](#8-how-to-add-a-new-project)
9. [Bilingual System (EN / AR)](#9-bilingual-system-en--ar)
10. [Deployment to egyhosting.com (cPanel)](#10-deployment-to-egyhostingcom-cpanel)
11. [Common Tasks Cheatsheet](#11-common-tasks-cheatsheet)

> **Live site:** https://arthome.com.eg

---

## 1. Project Overview

This is the official website for **Art Home International Group** — a company specializing in fit-out and wood interior solutions across the Middle East and Africa.

The website is a **single-page portfolio site** with the following sections:
- **Hero** — full-screen banner with call-to-action buttons
- **About** — company info, board of directors, mission, vision, values
- **Business Sectors** — the industries the company serves
- **Projects** — filterable gallery of completed projects
- **Contact** — office locations and a contact form

The site supports **two languages: English and Arabic**, and automatically switches text direction (left-to-right for English, right-to-left for Arabic).

---

## 2. Tech Stack

| Tool | What it does |
|------|-------------|
| **Next.js 14** | The main framework. Builds and serves the website. |
| **React 18** | Used inside Next.js to build UI components. |
| **TypeScript** | Like JavaScript, but with type checking to catch errors early. |
| **Tailwind CSS** | A utility-first CSS framework. Styling is done with class names directly in the HTML. |
| **Lucide React** | Icon library used for icons like phone, email, map pin, etc. |
| **Node.js** | Required to run the development server and build the project. |

---

## 3. Project Structure

```
arthome/
├── app/
│   ├── layout.tsx        ← Root layout: wraps the whole site (sets fonts, language provider)
│   ├── page.tsx          ← The main page: assembles all sections in order
│   └── globals.css       ← Global CSS styles
│
├── components/
│   ├── LanguageContext.tsx  ← Language state management (EN/AR switcher)
│   ├── Navbar.tsx           ← Top navigation bar
│   ├── Hero.tsx             ← Full-screen banner section
│   ├── AboutSection.tsx     ← About, Board, Mission, Vision, Values
│   ├── BusinessSectors.tsx  ← Business sectors cards
│   ├── ProjectGallery.tsx   ← Filterable project grid
│   ├── SnapshotsModal.tsx   ← Modal/lightbox for project photos
│   └── ContactSection.tsx   ← Offices info + contact form
│
├── data/
│   └── projects.json     ← All project data (title, description, image, category)
│
├── public/               ← Static files served directly (images, logo)
│   ├── logo.png
│   ├── CEO.jpeg
│   ├── exeMD.png
│   └── projects/
│       ├── coronado.jpg
│       ├── aquarius.jpg
│       ├── university.jpg
│       ├── bank.jpg
│       └── snapshots/    ← Snapshot images for the photo modal
│
├── out/                  ← Auto-generated build output (DO NOT edit manually)
│
├── next.config.js        ← Next.js configuration (static export mode)
├── .cpanel.yml           ← Deployment instructions for cPanel (egyhosting)
├── tailwind.config.ts    ← Tailwind CSS configuration
├── tsconfig.json         ← TypeScript configuration
└── package.json          ← Project dependencies and scripts
```

---

## 4. How to Run Locally

### Prerequisites
Make sure you have **Node.js** installed. Check by running:
```bash
node -v
```
You should see a version number like `v20.x.x`. If not, download it from nodejs.org.

### Steps

**1. Clone the repository:**
```bash
git clone https://github.com/crassdart85/art-home.git
cd art-home
```

**2. Install dependencies:**
```bash
npm install
```
This downloads all required packages into a `node_modules/` folder. It may take a minute.

**3. Start the development server:**
```bash
npm run dev
```
Open your browser and go to `http://localhost:3000`. The site will automatically refresh whenever you save a file.

### Other useful commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build the site for production (creates `out/` folder) |
| `npm run lint` | Check code for errors and style issues |

---

## 5. How the Site Works

### Page Assembly

The entry point is [app/page.tsx](app/page.tsx). It simply stacks all section components in order:

```
Navbar → Hero → About → BusinessSectors → ProjectGallery → ContactSection → Footer
```

Each section is a self-contained component in the `components/` folder.

### Language System

The language state lives in [components/LanguageContext.tsx](components/LanguageContext.tsx). Think of it as a global variable that any component can read.

- Default language is **English (`en`)**
- The user can toggle to **Arabic (`ar`)** by clicking the globe icon in the Navbar
- When Arabic is active, the entire page flips to **RTL (right-to-left)** layout automatically
- Every component reads `const { language } = useLanguage()` to know which language to show

### Static Export

The site is configured as a **static export** (see `next.config.js`). This means:
- `npm run build` generates plain HTML/CSS/JS files in the `out/` folder
- No server is needed to run the site — it works like a regular website
- This is what gets deployed to egyhosting.com

---

## 6. Components Reference

### `LanguageContext.tsx`
The language engine. Provides `language` (either `'en'` or `'ar'`) and `setLanguage()` to any component that needs it.

**You almost never need to edit this file.**

---

### `Navbar.tsx`
The fixed top navigation bar. Features:
- Transparent when at the top of the page, white with shadow when scrolled
- Desktop menu with links to each section
- Mobile hamburger menu
- Language toggle button (globe icon on desktop, `AR`/`EN` text on mobile)

---

### `Hero.tsx`
Full-screen banner section. Contains:
- Background image (`/projects/coronado.jpg`) with a dark overlay
- Headline text and description
- Three buttons: "View Projects", "Contact Us", "Download Portfolio"

**To change the portfolio PDF link**, edit this line in [components/Hero.tsx](components/Hero.tsx):
```tsx
const PORTFOLIO_PDF_URL = "https://drive.google.com/...";
```

---

### `AboutSection.tsx`
Contains four sub-sections:
1. **Company intro** — short paragraph about the company
2. **Board of Directors** — photos, names, roles, and qualifications of executives
3. **Mission & Vision** — two side-by-side cards
4. **Core Values** — four icons with labels

**Board member data** is stored directly inside this file as arrays of objects (one for `en`, one for `ar`).

---

### `BusinessSectors.tsx`
Displays the industries the company works in (Hospitality, Residential, Commercial, etc.) as a grid of cards with icons.

---

### `ProjectGallery.tsx`
Displays project cards in a grid. Features:
- Filter tabs (All, Hospitality, Residential, Education, Commercial)
- Hover effect reveals project description
- "View More Projects" button opens the `SnapshotsModal`

**Project data is NOT stored here** — it comes from `data/projects.json` (see Section 8).

---

### `SnapshotsModal.tsx`
A full-screen lightbox/carousel that opens when "View More Projects" is clicked. Shows the snapshot images from `public/projects/snapshots/`.

---

### `ContactSection.tsx`
Two-column layout:
- **Left column**: Three office locations (Egypt, China, Hong Kong) with address and contact details
- **Right column**: Contact form that opens the user's email client with pre-filled subject/body when submitted

**To change contact details**, edit the `content` object inside [components/ContactSection.tsx](components/ContactSection.tsx).

---

## 7. How to Edit Content

### Change text (headings, descriptions, etc.)

Every component has a `content` object with `en` (English) and `ar` (Arabic) keys. Find the text you want to change and edit both languages.

**Example — changing the hero tagline in** [components/Hero.tsx](components/Hero.tsx):
```tsx
const content = {
  en: {
    tagline: "Global Fit-out & Wood Solutions",  // ← edit this
    ...
  },
  ar: {
    tagline: "حلول التجهيز والأعمال الخشبية العالمية",  // ← and this
    ...
  }
};
```

### Change contact details

Open [components/ContactSection.tsx](components/ContactSection.tsx) and find the `content` object. The office details (address, phone, email) are all there as plain strings.

### Change images

Replace the image file in the `public/` folder with a new file of the **same name**. For example, to update the CEO photo, replace `public/CEO.jpeg` with a new file named `CEO.jpeg`.

If you want to use a new filename, also update the reference in the code (e.g., `img: "/CEO.jpeg"` in `AboutSection.tsx`).

> **Important:** After any change, run `npm run build` to regenerate the `out/` folder before deploying.

---

## 8. How to Add a New Project

All project data is in one file: [data/projects.json](data/projects.json).

### Step 1 — Add the project image

Copy your image file (e.g., `myproject.jpg`) to:
```
public/projects/myproject.jpg
```

### Step 2 — Add the project to `projects.json`

Open [data/projects.json](data/projects.json) and add a new entry inside the `"projects"` array:

```json
{
  "title": {
    "en": "Your Project Name",
    "ar": "اسم المشروع بالعربية"
  },
  "category": {
    "en": "Hospitality",
    "ar": "ضيافة"
  },
  "location": {
    "en": "City, Country",
    "ar": "المدينة، البلد"
  },
  "description": {
    "en": "A short description of the project.",
    "ar": "وصف قصير للمشروع."
  },
  "image": "/projects/myproject.jpg"
}
```

> **Note:** The `category.en` value must exactly match one of: `Hospitality`, `Residential`, `Education`, or `Commercial` — otherwise the filter tabs won't work correctly.

### Step 3 — Add snapshot images (optional)

If you want the project's detail photos to appear in the "View More Projects" modal, add them to:
```
public/projects/snapshots/
```
The modal automatically loads all images from that folder.

### Step 4 — Rebuild and deploy

```bash
npm run build
```
Then push to GitHub and deploy via cPanel (see Section 10).

---

## 9. Bilingual System (EN / AR)

### How it works

Each component manages its own translations using a simple `content` object:

```tsx
const content = {
  en: { title: "About Us", ... },
  ar: { title: "من نحن", ... }
};

const t = content[language]; // picks the right language automatically
```

Then in the JSX (HTML-like code):
```tsx
<h2>{t.title}</h2>  // shows "About Us" or "من نحن" depending on language
```

### RTL (Right-to-Left) support

When Arabic is active, the `LanguageContext` sets `dir="rtl"` on the root element, which automatically flips the layout direction for the whole page.

For individual elements that should always be left-to-right (like phone numbers), `dir="ltr"` is set directly:
```tsx
<p dir="ltr">+20 12 22533269</p>
```

### How to add a new translated string

1. Add your key to both `en` and `ar` inside the `content` object in the relevant component
2. Use `{t.yourKey}` in the JSX

---

## 10. Deployment to egyhosting.com (cPanel)

### How it works

The site is a **static export** — `npm run build` generates a plain HTML/CSS/JS site in the `out/` folder. This folder is committed to GitHub and deployed to `public_html` on the server via cPanel Git Version Control.

**Server:** egyhosting.com shared hosting — cPanel username `arthomec`
**Live URL:** https://arthome.com.eg

### Deployment workflow (every time you make a change)

```bash
# 1. Make your changes to the source files

# 2. Rebuild the static site
npm run build

# 3. Commit everything including the rebuilt out/ folder
git add .
git commit -m "describe what you changed"

# 4. Push to GitHub
git push origin master
git push origin master:main
```

Then in cPanel (egyhosting.com):
1. Go to **cPanel → Git Version Control**
2. Find the `art-home` repository (at `repositories/art-home-deploy`)
3. Click **"Pull or Deploy"** tab
4. Click **"Update from Remote"** — pulls the latest commit
5. Click **"Deploy HEAD Commit"** — copies `out/` files to `public_html`

### Important notes

- The `out/` folder is committed to the repo on purpose — the server cannot build Next.js (not enough RAM on shared hosting).
- Always rebuild locally before committing.
- The `.claude/settings.local.json` file is gitignored — this is expected.
- Arabic text in source files must be saved as **UTF-8**. If Arabic appears garbled on the live site, the fix is to rebuild `out/` and redeploy.

---

## 11. Common Tasks Cheatsheet

| Task | What to do |
|------|-----------|
| Change phone number | Edit `ContactSection.tsx` → find the number in the `content` object |
| Change email address | Edit `ContactSection.tsx` → update `info@arthome.com.eg` |
| Change office address | Edit `ContactSection.tsx` → `egyptAddress`, `chinaAddress`, etc. |
| Change hero background image | Replace `/public/projects/coronado.jpg` |
| Add a new project | Add entry to `data/projects.json` + image to `public/projects/` |
| Change CEO photo | Replace `public/CEO.jpeg` with a new file of the same name |
| Change portfolio PDF link | Edit `Hero.tsx` → update `PORTFOLIO_PDF_URL` |
| Change company name/footer | Edit `app/page.tsx` → find the `<footer>` section |
| Deploy changes | `npm run build` → commit → push → cPanel: Update + Deploy |
| Run locally | `npm run dev` → open `http://localhost:3000` |

---

*Last updated: March 2026*
