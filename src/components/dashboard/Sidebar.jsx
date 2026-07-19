import { House, Database, Brain, Star, History, X, } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const menuItems = [
    {
      id: "home",
      title: "Home",
      icon: House,
      path: "/",
    },
    {
      id: "dataStructures",
      title: "Data Structures",
      icon: Database,
      path: "/dashboard",
    },
    {
      id: "algorithms",
      title: "Algorithms",
      icon: Brain,
      path: "/dashboard/algorithms",
    },
    {
      id: "favorites",
      title: "Favorites",
      icon: Star,
      path: "/dashboard/favorites",
    },
    {
      id: "history",
      title: "History",
      icon: History,
      path: "/dashboard/history",
    },
  ];

  const isActive = (item) => {

  if (item.id === "dataStructures") {
    return location.pathname === "/dashboard";
  }

  if (item.id === "algorithms") {
    return (
      location.pathname.startsWith("/dashboard/algorithms")
      ||
      location.pathname.includes("search")
      ||
      location.pathname.includes("sort")
      ||
      location.pathname.includes("dijkstra")
      ||
      location.pathname.includes("bellman")
      ||
      location.pathname.includes("floyd")
      ||
      location.pathname.includes("prims")
      ||
      location.pathname.includes("krushkal")
      ||
      location.pathname.includes("topo")
      ||
      location.pathname.includes("activity")
      ||
      location.pathname.includes("job")
      ||
      location.pathname.includes("kmp")
      ||
      location.pathname.includes("rabin")
      ||
      location.pathname.includes("huffman")
    );
  }

  return location.pathname === item.path;
};

  return (
    <aside className={`
fixed
lg:relative
top-0
left-0
h-screen
border-r
transition-all
duration-300
ease-in-out
flex
flex-col
justify-between
overflow-hidden
z-50

${sidebarOpen
    ? "translate-x-0 w-64 px-5 py-6"
    : "-translate-x-full lg:translate-x-0 lg:w-24 lg:px-3 lg:py-6"
}
`}
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* ---------------- Top ---------------- */}

      <div>
        <div className="flex justify-between items-center">

    <div
        className={`flex items-center ${
            sidebarOpen
                ? "gap-3"
                : ""
        }`}
    >
        <img
            src={logo}
            alt="TraceDS"
            className="w-12 h-12 object-contain"
        />

        {sidebarOpen && (
            <div>
                <h2
                    className="text-xl font-bold"
                    style={{
                        color:
                            "var(--heading)",
                    }}
                >
                    TraceDS
                </h2>

                <p
                    className="text-xs"
                    style={{
                        color:
                            "var(--muted)",
                    }}
                >
                    Learn • Visualize
                </p>
            </div>
        )}
    </div>

    <button
        className="lg:hidden"
        onClick={() =>
            setSidebarOpen(false)
        }
    >
        <X size={20} />
    </button>

</div>

        {/* Divider */}

        <div
          className="w-full h-px my-2"
          style={{
            background: "var(--border)",
          }}
        />

        {/* Navigation */}

        {sidebarOpen && (
          <h3
            className="uppercase text-xs tracking-widest mb-3"
            style={{
              color: "var(--muted)",
            }}
          >
            Navigation
          </h3>
        )}

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${isActive(item)
                    ? "bg-emerald-500 text-white"
                    : ""
                  }`}
                style={
                  !isActive(item)
                    ? {
                      color: "var(--heading)",
                      textDecoration: "none",
                    }
                    : {
                      textDecoration: "none",
                    }
                }
              >
                <Icon size={20} />

                {sidebarOpen && (
                  <span className="font-medium text-sm">
                    {item.title}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

      </div>

      {/* ---------------- Bottom ---------------- */}

      {sidebarOpen && (
        <div
          className="rounded-xl p-4"
          style={{
            background:
              "rgba(16,185,129,.08)",
          }}
        >
          <p
            className="text-sm"
            style={{
              color: "var(--muted)",
            }}
          >
            More visualizers are coming soon.
          </p>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;