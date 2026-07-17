import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import QueueControls from "../../../components/Visualizer/QueueControls";
import QueueCanvas from "../../../components/Visualizer/QueueCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function QueueVisualizer() {
    const [activeTab, setActiveTab] = useState("visualization");
    const [queue, setQueue] = useState([]);
    const [value, setValue] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [frontValue, setFrontValue] = useState(null);

    return (
        <VisualizerPageLayout
            breadcrumbs={[
                {
                    label: "Dashboard",
                    path: "/dashboard",
                },
                {
                    label: "Data Structures",
                    path: "/dashboard",
                },
                {
                    label: "Queue",
                    path: "/dashboard/queue",
                },
            ]}
        >
            <h1
                className="text-4xl"
                style={{
                    color: "var(--heading)",
                }}
            >
                Queue
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color: "var(--muted)",
                }}
            >
                A First-In First-Out (FIFO) data structure where
                elements are added at the rear and removed from the front.
            </p>

            <VisualizerTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {activeTab === "visualization" ? (
                <VisualizerLayout
                    controls={
                        <QueueControls
                            queue={queue}
                            setQueue={setQueue}
                            value={value}
                            setValue={setValue}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            isAnimating={isAnimating}
                            setIsAnimating={setIsAnimating}
                            frontValue={frontValue}
                            setFrontValue={setFrontValue}
                        />
                    }
                    visualization={
                        <QueueCanvas
                            queue={queue}
                            activeIndex={activeIndex}
                            frontValue={frontValue}
                        />
                    }
                />
            ) : (
                <Explanation 
                    data = {
                        explanationData.queue
                    }
                />
            )}
        </VisualizerPageLayout>
    );
}

export default QueueVisualizer;
