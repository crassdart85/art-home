# Art Home Website - Code Documentation

## 1. Project Overview

This is the code documentation for the Art Home International Group marketing website. The website is a statically-generated site built with Next.js and React, using the App Router for file-based routing. The primary purpose of the site is to showcase the company's services, projects, and history.

**Technologies Used:**

*   **Next.js:** A React framework for building server-side rendered and statically-generated web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **CSS:** A combination of a global stylesheet (`globals.css`) and inline styles are used for styling.

## 2. Project Structure

The project follows the standard Next.js App Router structure. The most important directory is `app`, which contains all the pages and components of the application.

```
website/
├── app/
│   ├── ar/                 # Contains the Arabic version of the pages
│   │   ├── about/
│   │   ├── contact/
│   │   └── ...
│   ├── components/         # Shared React components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── globals.css         # Global stylesheet
│   ├── layout.tsx          # Root layout of the application
│   └── page.tsx            # The homepage
├── public/                 # Static assets like images and fonts
└── next.config.ts          # Next.js configuration file
```

## 3. Core Components

These are the core components that are shared across the application.

### `app/layout.tsx`

This is the root layout of the application. It wraps all pages and is used to define the global HTML structure, including the `<html>` and `<body>` tags.

**Key Responsibilities:**

*   Sets the default language of the application to "en".
*   Loads the `Geist` font from `next/font/google`.
*   Defines global metadata for the site.

### `app/components/Navbar.tsx`

The `Navbar` component is the main navigation bar for the website. It is responsive and includes logic for localization.

**Props:**

*   `locale` (string, optional): The current locale, either "en" or "ar". This determines which language to display.
*   `activePage` (string): The currently active page. This is used to highlight the active link in the navigation bar.

**Functionality:**

*   Displays the site logo.
*   Displays navigation links for all the pages.
*   Provides a link to switch between English and Arabic versions of the site.
*   On mobile devices, it displays a hamburger menu that toggles a vertical navigation menu.

### `app/components/Footer.tsx`

The `Footer` component is the shared footer for the website.

**Props:**

*   `locale` (string, optional): The current locale, either "en" or "ar". This determines which language to display.

**Functionality:**

*   Displays the copyright notice.
*   Provides links to the "About Us" and "Contact" pages.

## 4. Pages

The website consists of the following pages:

*   Home
*   About
*   Contracting
*   Mining
*   Real Estate
*   Contact

Each page is represented by a `page.tsx` file inside a corresponding directory in the `app` folder. For example, the "About" page is located at `app/about/page.tsx`.

A typical page component imports the `Navbar` and `Footer` components and wraps its content with them. This ensures a consistent layout across all pages.

## 5. Styling

The project uses a combination of a global stylesheet and inline styles.

*   **`app/globals.css`:** This file contains a set of global CSS classes that are used throughout the application. It also includes media queries to handle responsive design.
*   **Inline Styles:** Some components and pages use inline styles for specific styling needs. While this is acceptable for small, component-specific styles, it is recommended to move them to the global stylesheet for better maintainability.

## 6. Localization

The website is available in two languages: English and Arabic. The localization is implemented manually by creating a separate directory `app/ar` that mirrors the structure of the English pages.

For example, the English "About" page is at `app/about/page.tsx`, and the Arabic version is at `app/ar/about/page.tsx`.

The `Navbar` and `Footer` components accept a `locale` prop to render the appropriate language.

**Limitations:**

This approach leads to significant code duplication. The JSX structure and styling are copied across English and Arabic page files with only the text content changing. For future development, it is highly recommended to use a library like `next-intl` to streamline the localization process.

## 7. How to Run the Project

To run the project locally, follow these steps:

1.  **Install Dependencies:** Open a terminal in the project's root directory and run the following command:
    ```bash
    npm install
    ```
2.  **Run the Development Server:** After the installation is complete, run the following command to start the development server:
    ```bash
    npm run dev
    ```
3.  **Open the Website:** Open your web browser and navigate to `http://localhost:3000`.
