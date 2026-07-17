import { Moon, Sun, PanelLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DashboardHeader({ sidebarOpen, setSidebarOpen, breadcrumbs = [] }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light"
        ? false
        : true;
});

  useEffect(() => {

    document.documentElement.classList.toggle(
        "dark",
        darkMode
    );

    localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
    );

}, [darkMode]);
  return (
    <header
      className="h-20 border-b flex items-center justify-between px-10"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg)",
      }}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="transition hover:text-emerald-500"
        >
          <PanelLeft size={20} />
        </button>

        {/* Desktop Breadcrumbs */}

<div className="hidden md:flex items-center gap-4">

  <Link
    to="/"
    style={{
      color: "var(--muted)",
      textDecoration: "none",
    }}
    className="hover:text-emerald-500"
  >
    Home
  </Link>

  {breadcrumbs.map((item) => (
    <div
      key={item.path}
      className="flex items-center gap-4"
    >
      <ChevronRight
        size={16}
        color="var(--muted)"
      />

      <Link
        to={item.path}
        style={{
          color: "var(--heading)",
          textDecoration: "none",
        }}
        className="font-semibold hover:text-emerald-500 transition-colors duration-300"
      >
        {item.label}
      </Link>
    </div>
  ))}

</div>

{/* Mobile Title */}

<div
  className="md:hidden font-semibold"
  style={{
    color: "var(--heading)",
  }}
>
  {
    breadcrumbs.length > 0
      ? breadcrumbs[
          breadcrumbs.length - 1
        ].label
      : "Dashboard"
  }
</div>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-9 h-9 rounded-full border flex justify-center items-center
            transition-all duration-300 hover:scale-105"
        style={{
          borderColor: "var(--border)",
        }}
      >
        {darkMode ? <Sun size={17} /> : <Moon size={17} />}
      </button>

    </header>
  );
}

export default DashboardHeader;