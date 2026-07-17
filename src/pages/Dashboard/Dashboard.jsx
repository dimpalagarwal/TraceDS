import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DataStructures from "./DataStructures";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: "var(--bg)" }}
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
          breadcrumbs={[{
            label: "Dashboard",
            path: "/dashboard",
          },]}
        />
        <main className="flex-1 overflow-y-auto"
          style={{
            background: "var(--bg)",
          }}
        >
          <DataStructures />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;