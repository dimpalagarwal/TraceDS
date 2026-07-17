function VisualizerTabs({ activeTab, setActiveTab }) {
  return (
    <div
      className="flex rounded-xl border p-1 mt-8"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
    >
      <button
        onClick={() => setActiveTab("visualization")}
        className={`flex-1 py-3 rounded-lg font-medium transition-all ${
          activeTab === "visualization"
            ? "bg-emerald-500 text-white"
            : ""
        }`}
      >
        Visualization
      </button>

      <button
        onClick={() => setActiveTab("explanation")}
        className={`flex-1 py-3 rounded-lg font-medium transition-all ${
          activeTab === "explanation"
            ? "bg-emerald-500 text-white"
            : ""
        }`}
      >
        Explanation
      </button>
    </div>
  );
}

export default VisualizerTabs;