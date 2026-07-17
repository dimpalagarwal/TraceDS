import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { addToHistory }
from "../../utils/history";
import Sidebar from "../dashboard/Sidebar";
import DashboardHeader from "../dashboard/DashboardHeader";

function VisualizerPageLayout({
  breadcrumbs,
  children,
}) {
  const location =
    useLocation();
  const [sidebarOpen, setSidebarOpen] =
    useState(window.innerWidth >= 1024);
    useEffect(() => {

    if (
        breadcrumbs &&
        breadcrumbs.length > 0
    ) {

        const current =
            breadcrumbs[
                breadcrumbs.length - 1
            ];

        addToHistory({
            title:
                current.label,

            path:
                location.pathname,
        });
    }

},[
    location.pathname,
    breadcrumbs
]);
  return (
    <div
      className="flex h-screen overflow-hidden relative"
      style={{
        background: "var(--bg)",
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
          breadcrumbs={breadcrumbs}
        />

        <main
          className="flex-1 overflow-y-auto px-3 sm:px-6 py-5"
          style={{
            background: "var(--bg)",
          }}
        >
          {children}
        </main>

      </div>
    </div>
  );
}

export default VisualizerPageLayout;