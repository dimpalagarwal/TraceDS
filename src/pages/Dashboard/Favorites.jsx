import { useMemo } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StructureCard from "../../components/common/StructureCard";
import { getFavorites } from "../../utils/favorites";
import { dsSections } from "../../data/DsCards";
import { algorithmSections } from "../../data/Algorithms";
import { useState, useEffect } from "react";

function Favorites() {
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

    const favoriteIds =
        getFavorites();

    const favoriteItems =
        useMemo(() => {

            const allItems = [
                ...dsSections.flatMap(
                    section => section.items
                ),
                ...algorithmSections.flatMap(
                    section => section.items
                ),
            ];

            return allItems.filter(
                item =>
                    favoriteIds.includes(
                        item.id
                    )
            );

        },[favoriteIds]);

    return (
        <div
            className="flex h-screen overflow-hidden"
            style={{
                background:
                    "var(--bg)"
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
                            label:
                                "Dashboard",
                            path:
                                "/dashboard",
                        },
                        {
                            label:
                                "Favorites",
                            path:
                                "/dashboard/favorites",
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
                            Favorites
                        </h1>

                        <p
                            className="mt-3 text-lg"
                            style={{
                                color:
                                    "var(--muted)"
                            }}
                        >
                            Your starred visualizations.
                        </p>

                        {
                            favoriteItems.length === 0
                            ?
                            (
                                <p
                                    className="mt-10"
                                    style={{
                                        color:
                                            "var(--muted)"
                                    }}
                                >
                                    No favorites yet.
                                </p>
                            )
                            :
                            (
                                <div
                                    className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-10"
                                >

                                    {
                                        favoriteItems.map(
                                            item => (
                                                <StructureCard
                                                    key={item.id}
                                                    id={item.id}
                                                    title={item.title}
                                                    description={item.description}
                                                    Icon={item.icon}
                                                    path={item.path}
                                                />
                                            )
                                        )
                                    }

                                </div>
                            )
                        }

                    </div>
                </main>

            </div>
        </div>
    );
}

export default Favorites;