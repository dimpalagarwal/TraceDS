import { Moon, Sun, Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import TopicsDropdown from "../ui/TopicsDropdown";
import { Link } from "react-router-dom";

function Navbar() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "light"
            ? false
            : true;
    });

    const [mobileMenuOpen, setMobileMenuOpen] =
        useState(false);

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
        <header className="sticky top-4 z-50 flex justify-center px-6 mt-6">
            <nav
                className="h-14 rounded-full border
        flex items-center justify-between w-full max-w-5xl px-5 transition-all duration-300"
                style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--heading)",
                    boxShadow: "var(--shadow)",
                }}
            >
                {/* ---------- Left ---------- */}

                <div className="flex items-center gap-3">

                    <img
                        src={logo}
                        alt="TraceDS Logo"
                        className="w-12 h-12 md:w-20 md:h-15 object-contain"
                    />

                    <h2
                        className="text-base md:text-xl font-bold cursor-pointer"
                        style={{
                            color: "var(--heading)",
                        }}
                    >
                        Trace
                        <span
                            style={{
                                color: "var(--primary)",
                            }}
                        >
                            DS
                        </span>
                    </h2>

                </div>

                {/* ---------- Center ---------- */}

                <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">

                    <li className="flex items-center gap-1 cursor-pointer hover:text-emerald-500 transition-all duration-300">
                        <TopicsDropdown />
                    </li>

                    <li>
                        <Link
                            to="/dashboard"
                            className="hover:text-emerald-500 transition-all duration-300"
                        >
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <a
                            href="#about"
                            className="hover:text-emerald-500 transition-all duration-300"
                        >
                            About
                        </a>
                    </li>

                </ul>

                {/* ---------- Right ---------- */}

                <div className="flex items-center gap-2 md:gap-4">

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

                    <button
                        className="w-9 h-9 rounded-full border flex justify-center items-center
            transition-all duration-300 hover:scale-105"
                        style={{
                            borderColor: "var(--border)",
                        }}
                    >
                        <a href="https://github.com/dimpalagarwal/TraceDS" target="_blank" rel="noreferrer"style={{color: "var(--heading)"}}>
                <FaGithub size={26} />
              </a>
                    </button>

                    <button
                        onClick={() =>
                            setMobileMenuOpen(
                                !mobileMenuOpen
                            )
                        }
                        className="
        md:hidden
        w-9
        h-9
        rounded-full
        border
        flex
        items-center
        justify-center
    "
                        style={{
                            borderColor:
                                "var(--border)",
                        }}
                    >
                        {
                            mobileMenuOpen
                                ?
                                <X size={18} />
                                :
                                <Menu size={18} />
                        }
                    </button>

                </div>
                {
                    mobileMenuOpen && (

                        <div
                            className="
            absolute
            top-16
            left-0
            right-0
            mx-4
            rounded-2xl
            border
            p-4
            md:hidden
            "
                            style={{
                                background:
                                    "var(--surface)",
                                borderColor:
                                    "var(--border)",
                                boxShadow:
                                    "var(--shadow)",
                            }}
                        >

                            <div className="space-y-4">

                                <TopicsDropdown />

                                <Link
                                    to="/dashboard"
                                    className="block"
                                    onClick={() =>
                                        setMobileMenuOpen(
                                            false
                                        )
                                    }
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    to="/about"
                                    className="block"
                                    onClick={() =>
                                        setMobileMenuOpen(
                                            false
                                        )
                                    }
                                >
                                    About
                                </Link>

                            </div>

                        </div>

                    )
                }
            </nav>
        </header>
    );
}

export default Navbar;