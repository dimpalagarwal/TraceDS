import { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

import { getHistory }
from "../../utils/history";

function History() {

    const [sidebarOpen,setSidebarOpen] =
        useState(true);

    const history =
        getHistory();

    return (
        <div
            className="flex h-screen overflow-hidden"
            style={{
                background:"var(--bg)"
            }}
        >
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={
                    setSidebarOpen
                }
            />

            <div className="flex-1 flex flex-col">

                <DashboardHeader
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    breadcrumbs={[
                        {
                            label:"Dashboard",
                            path:"/dashboard",
                        },
                        {
                            label:"History",
                            path:"/dashboard/history",
                        },
                    ]}
                />

                <main
                    className="flex-1 overflow-y-auto"
                >
                    <div className="px-10 py-8">

                        <h1
                            className="text-5xl font-bold"
                            style={{
                                color:
                                "var(--heading)"
                            }}
                        >
                            History
                        </h1>

                        <p
                            className="mt-3 text-lg"
                            style={{
                                color:
                                "var(--muted)"
                            }}
                        >
                            Recently opened visualizers.
                        </p>

                        <div className="mt-10 space-y-4">

                            {
                                history.length === 0
                                ?
                                (
                                    <p
                                        style={{
                                            color:
                                            "var(--muted)"
                                        }}
                                    >
                                        No history yet.
                                    </p>
                                )
                                :
                                history.map(
                                    (
                                        item,
                                        index
                                    ) => (

                                        <Link
                                            key={index}
                                            to={item.path}
                                            className="block rounded-xl border p-5 hover:border-emerald-500 transition-all"
                                            style={{
                                                borderColor:
                                                "var(--border)",
                                                textDecoration:
                                                "none",
                                            }}
                                        >
                                            <h3
                                                style={{
                                                    color:
                                                    "var(--heading)",
                                                }}
                                            >
                                                {
                                                    item.title
                                                }
                                            </h3>
                                        </Link>
                                    )
                                )
                            }

                        </div>

                    </div>
                </main>

            </div>
        </div>
    );
}

export default History;