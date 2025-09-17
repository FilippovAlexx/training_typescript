import { useEffect, useState } from "react";

const THEME_KEY = "theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem(THEME_KEY) as "dark" | "light" | null;
    return saved ?? "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <button
      className="btn btn--ghost"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      title="Переключить тему"
    >
      {theme === "dark" ? "🌙 Тёмная" : "☀️ Светлая"}
    </button>
  );
}
