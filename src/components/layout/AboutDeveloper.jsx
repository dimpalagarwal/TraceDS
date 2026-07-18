import profile from "../../assets/images/profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function AboutDeveloper() {
  return (
    <section id="about" className="w-[92%] max-w-6xl mx-auto py-15">

      <div
        className="rounded-3xl border p-12 grid md:grid-cols-2 gap-12 items-center"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)"
        }}
      >

        <div className="flex justify-center">

          <img
            src={profile}
            alt="Dimpal"
            className="w-64 h-64 rounded-full object-cover border-4 border-emerald-500"
          />
        </div>

        <div>

          <h2
            className="text-5xl font-bold"
            style={{
              color: "var(--heading)"
            }}
          >
            Meet the Developer
          </h2>

          <p
            className="mt-6 text-lg leading-8"
            style={{
              color: "var(--muted)"
            }}
          >
            Hi! I'm <b>Dimpal Agarwal</b>, a Computer Science undergraduate at <b>IGDTUW</b>, 
            passionate about building educational tools that make
            Data Structures & Algorithms easier to understand.

            TraceDS is my attempt to make learning interactive
            instead of memorizing theory.
          </p>

          <div className="flex gap-3 flex-wrap mt-8">

            <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400">
              React.js
            </span>

            <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400">
              TailwindCSS
            </span>

            <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400">
              Problem Solving
            </span>

            <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400">
              Javascript
            </span>

          </div>

          <div className="flex gap-5 mt-8">

            <div className="flex gap-5 mt-8">

              <a href="https://github.com/dimpalagarwal" target="_blank" rel="noreferrer"style={{color: "var(--heading)"}}>
                <FaGithub size={26} />
              </a>
              <a href="https://www.linkedin.com/in/dimpal-agarwal-478526326/" target="_blank" rel="noreferrer" style={{color: "var(--heading)"}}>
                <FaLinkedin size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDeveloper;