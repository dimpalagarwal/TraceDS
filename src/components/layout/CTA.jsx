import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="w-full flex justify-center py-5">

      <div
        className="w-[92%] max-w-6xl rounded-3xl px-5 py-20 text-center border relative overflow-hidden"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        {/* Glow */}

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-130 h-130 rounded-full blur-[130px] opacity-20"
          style={{
            background:
              "radial-gradient(circle,#10B981 0%,transparent 70%)",
          }}
        ></div>

        <div className="relative z-10">

          <h2
            className="text-5xl font-bold"
            style={{
              color: "var(--heading)",
            }}
          >
            Ready to Master DSA?
          </h2>

          <p
            className="mt-6 max-w-2xl mx-auto text-lg leading-8"
            style={{
              color: "var(--muted)",
            }}
          >
            Learn Data Structures & Algorithms
            through interactive visualizations,
            live execution,
            and complexity analysis.
          </p>
          <Link to="/dashboard" style={{ textDecoration: "none", }}>
            <button
              className="mt-10 inline-flex items-center gap-3
            px-7 py-4 rounded-xl
            text-white font-semibold
            transition-all duration-300
            hover:scale-105 cursor-pointer"
              style={{
                background: "var(--primary)",
              }}
            >
              Explore Visualizations

              <ArrowRight size={18} />
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTA;