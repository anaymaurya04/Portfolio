import { useEffect, useState } from "react";
import { BookLayout } from "./components/BookLayout/BookLayout";
import styles from "./App.module.css";

const THEME_KEY = "portfolio-theme";

function getInitialTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") {
    return stored;
  }
  return "dark";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <div className={styles.App}>
      <BookLayout
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />
    </div>
  );
}

export default App;
