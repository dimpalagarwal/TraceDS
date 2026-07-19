import SpeedSelector from "../common/SpeedSelector";

function VisualizerLayout({controls,visualization,}) {
    return (
        <div
            className="flex flex-col lg:flex-row items-start gap-6 mt-8">
            {/* Controls Panel */}
            <div
                className="w-full lg:w-95 lg:shrink-0 self-start rounded-2xl border p-4" style={{background:"var(--surface)",borderColor:"var(--border)",}}>
                {controls}
                <SpeedSelector />
            </div>
            {/* Visualization Panel */}
            <div className=" w-full flex-1 rounded-2xl border p-4 overflow-x-auto" style={{background:"var(--surface)",borderColor:"var(--border)",minHeight: "450px",}}>
                {visualization}
            </div>
        </div>
    );
}

export default VisualizerLayout;