import { useState, useEffect } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StructureCard from "../../components/common/StructureCard";
import { algorithmSections } from "../../data/Algorithms";

function Algorithms() {
    const [sidebarOpen, setSidebarOpen] = useState(() => {
            const saved = localStorage.getItem("sidebarOpen");
            return saved !== null ? JSON.parse(saved) : false;
          });
          useEffect(() => {
            localStorage.setItem(
                "sidebarOpen",
                JSON.stringify(sidebarOpen)
            );
        }, [sidebarOpen]);

    return (
        <div
            className="flex h-screen overflow-hidden"
            style={{ background: "var(--bg)" }}
        >
            {/* Sidebar */}

            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={
                    setSidebarOpen
                }
            />

            {/* Right Side */}

            <div className="flex-1 flex flex-col">

                <DashboardHeader
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    breadcrumbs={[
                        {
                            label: "Dashboard",
                            path: "/dashboard",
                        },
                        {
                            label: "Algorithms",
                            path: "/dashboard/algorithms",
                        },
                    ]}
                />

                <main
                    className="flex-1 overflow-y-auto"
                    style={{
                        background: "var(--bg)",
                    }}
                >
                    <div className="px-10 py-8">

                        <h1
                            className="text-5xl font-bold"
                            style={{
                                color: "var(--heading)",
                            }}
                        >
                            Algorithms
                        </h1>

                        <p
                            className="mt-3 text-lg"
                            style={{
                                color: "var(--muted)",
                            }}
                        >
                            Searching, sorting, graph, tree, greedy, and string algorithms — all interactive.
                        </p>

                        {algorithmSections.map((section) => (

                            <div
                                key={section.title}
                                className="mt-14"
                            >

                                <h2
                                    className="uppercase text-sm tracking-[4px] mb-8"
                                    style={{
                                        color: "var(--muted)",
                                    }}
                                >
                                    {section.title}
                                </h2>

                                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">

                                    {section.items.map((item) => (

                                        <StructureCard
                                            id={item.id}
                                            key={item.title}
                                            title={item.title}
                                            description={item.description}
                                            Icon={item.icon}
                                            path={item.path}
                                        />

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>
                </main>

            </div>
        </div>
    );
}

export default Algorithms;