import { useState } from "react";
import { identity, resumePath } from "../../data/content";
import { getImageUrl } from "../../utils";
import { About } from "../chapters/About";
import { Contact } from "../chapters/Contact";
import { Education } from "../chapters/Education";
import { Experience } from "../chapters/Experience";
import { Introduction } from "../chapters/Introduction";
import { Projects } from "../chapters/Projects";
import { Skills } from "../chapters/Skills";
import styles from "./BookLayout.module.css";

const chapters = [
  { num: "01", label: "intro", Component: Introduction },
  { num: "02", label: "about", Component: About },
  { num: "03", label: "skills", Component: Skills },
  { num: "04", label: "experience", Component: Experience },
  { num: "05", label: "projects", Component: Projects },
  { num: "06", label: "education", Component: Education },
  { num: "07", label: "contact", Component: Contact },
];

const footerLinks = [
  { label: "github.com/anaymaurya04", href: identity.githubHref },
  { label: "linkedin.com/in/anay-maurya", href: identity.linkedinHref },
  { label: "anaymaurya04@gmail.com", href: `mailto:${identity.email}` },
];

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const ArrowIcon = ({ direction }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {direction === "prev" ? (
      <path d="M19 12H5m0 0 6 6m-6-6 6-6" />
    ) : (
      <path d="M5 12h14m0 0-6 6m6-6-6-6" />
    )}
  </svg>
);

export const BookLayout = ({ theme, onToggleTheme }) => {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const { Component } = chapters[current];
  const total = chapters.length;

  const closeMenu = () => {
    if (!menuOpen) return;
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 180);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
    }
  };

  const goTo = (index) => {
    setCurrent(index);
    closeMenu();
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const goPrev = () => goTo(Math.max(0, current - 1));
  const goNext = () => goTo(Math.min(total - 1, current + 1));

  return (
    <div className={styles.app}>
      <header className={styles.topbar}>
        <button className={styles.logo} onClick={() => goTo(0)} aria-label="Back to introduction">
          <span className={styles.logoPrompt}>~</span>
          <span>/anay</span>
        </button>

        <nav className={styles.topnav}>
          {chapters.map((chapter, index) => (
            <button
              key={chapter.num}
              className={`${styles.navItem} ${
                index === current ? styles.navItemActive : ""
              }`}
              onClick={() => goTo(index)}
            >
              <span className={styles.navNum}>{chapter.num} /</span>
              <span>{chapter.label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.topbarRight}>
          <button
            className={styles.iconBtn}
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={styles.iconBtn}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav
          className={`${styles.mobileNav} ${
            menuClosing ? styles.mobileNavClosing : styles.mobileNavOpen
          }`}
        >
          {chapters.map((chapter, index) => (
            <button
              key={chapter.num}
              className={`${styles.mobileNavItem} ${
                index === current ? styles.mobileNavItemActive : ""
              }`}
              onClick={() => goTo(index)}
            >
              <span className={styles.navNum}>{chapter.num} /</span>
              <span>{chapter.label}</span>
            </button>
          ))}
        </nav>
      )}

      <main className={styles.main}>
        <div className={styles.page}>
          <div className={styles.chapterContent}>
            <Component />
          </div>

          <div className={styles.chapterFooter}>
            <button
              className={styles.pageBtn}
              onClick={goPrev}
              disabled={current === 0}
            >
              <ArrowIcon direction="prev" /> previous
            </button>
            <span className={styles.pageIndicator}>
              section {chapters[current].num} / 0{total}
            </span>
            <button
              className={styles.pageBtn}
              onClick={goNext}
              disabled={current === total - 1}
            >
              next <ArrowIcon direction="next" />
            </button>
          </div>

          <footer className={styles.footer}>
            <span className={styles.footerLogo}>~/anay</span>
            <div className={styles.footerLinks}>
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.footerLink}>
                  {link.label}
                </a>
              ))}
              <a
                href={getImageUrl(resumePath)}
                download
                className={styles.footerLink}
              >
                cv.pdf
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};