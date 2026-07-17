import { ChevronDown, Database, Cpu, BrainCircuit, Network } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function TopicsDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
    //   className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}

      <button className="flex items-center gap-1 hover:text-emerald-500 transition-all duration-300">
        Topics
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2
          w-72 rounded-2xl border p-3 z-50"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)",
          }}
        >
          <DropdownItem
            icon={<Network size={20} />}
            title="Data Structures"
            subtitle="Interactive visualizations"
            path="/dashboard"
          />

          <DropdownItem
            icon={<BrainCircuit size={20} />}
            title="Algorithms"
            subtitle="Step-by-step execution"
            path="/dashboard/algorithms"
          />

          <DropdownItem
            icon={<Cpu size={20} />}
            title="Operating Systems"
            subtitle="Coming Soon"
            disabled
          />

          <DropdownItem
            icon={<Database size={20} />}
            title="Database management system"
            subtitle="Coming Soon"
            disabled
          />
        </div>
      )}
    </div>
  );
}

function DropdownItem({ icon, title, subtitle, disabled, path,}) {
  const content = (
        <div
            className={`flex items-center gap-4 rounded-xl p-3 transition-all duration-300
            ${
                disabled
                    ? "opacity-60 cursor-not-allowed"
                    : "cursor-pointer hover:bg-emerald-500/10"
            }`}
        >
            <div className="text-emerald-500">
                {icon}
            </div>

            <div>
                <h3 className="font-semibold">
                    {title}
                </h3>

                <p className="text-sm text-slate-400">
                    {subtitle}
                </p>
            </div>
        </div>
    );

    if (disabled) {
        return content;
    }

    return (
        <Link
            to={path}
            style={{
                textDecoration: "none",
                color: "inherit",
            }}
        >
            {content}
        </Link>
    );
}

export default TopicsDropdown;