// Step 1: Place your transparent agent.png in the assets folder.
// Update the path below to import the new image.
import heroAgentImg from "../../assets/images/agent.png"; // Changed from hero.jpeg
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

// NEW: This is the CSS to create the infinite floating effect.
// Place this inside a <style> tag or your global CSS file.
// (I have included it here as a temporary, portable style element)
const FloatingAnimationCSS = () => (
  <style>
    {`
      @keyframes slowFloat {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(0px);
        }
      }
      .animate-float {
        animation: slowFloat 6s ease-in-out infinite;
      }
    `}
  </style>
);

function Hero() {
  return (
    <section className="w-full flex justify-center mt-12 relative overflow-hidden">
      {/* Include the floating animation definition */}
      <FloatingAnimationCSS />

      <div className="w-[92%] max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center z-10">

        {/* ---------------- Left Side ---------------- */}
        <div className="text-center lg:text-left">
          <h2
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{ color: "var(--heading)" }}
          >
            Understand
            <br />
            Data Structures &
            <br />
            Algorithms by
            <br />
            <span className="text-emerald-500">
              Watching
            </span>{" "}
            Them Work.
          </h2>

          <p
            className="text-base sm:text-lg leading-8 max-w-xl my-4 mx-auto lg:mx-0"
            style={{
              color: "var(--muted)",
            }}
          >
            Experiment with DSA using custom inputs,
            interactive visualizations,
            live code execution,
            and complexity analysis.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-7">
            <Link to="/dashboard" style={{textDecoration: "none",}}>
              <button
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: "var(--primary)",
                  color: "white",
                }}
              >
                Explore Visualizations
                <ArrowRight size={16} />
              </button>
            </Link>

            <button
              className="flex items-center gap-2 px-5 py-3 rounded-lg border text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--border)",
                color: "var(--heading)",
              }}
            >
              <FaGithub size={16} />
              GitHub
            </button>
          </div>
        </div>

        {/* ---------------- Right Side ---------------- */}
        {/*
          Removed border and shadow classes from this relative container
          to allow the transparent character to float seamlessly.
        */}
        <div className="relative flex justify-center order-first lg:order-last">

          {/* Glow - Modified to be subtle */}
          <div
            className="absolute w-130 h-130 rounded-full blur-3xl opacity-60"
          ></div>

          {/* Transparent Floating Image */}
          <img
            src={heroAgentImg}
            alt="TraceDS AI Agent"
            /*
              NEW Classes:
              - Added 'animate-float' (from the CSS above) for the bobbing motion.
              - Removed border classes and shadows entirely.
            */
            className="relative w-[80%] sm:w-[70%] lg:w-full max-w-xl animate-float z-10"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;