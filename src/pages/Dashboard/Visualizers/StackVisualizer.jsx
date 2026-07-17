import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import StackControls from "../../../components/Visualizer/StackControls";
import StackCanvas from "../../../components/Visualizer/StackCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function StackVisualizer() {
    const [activeTab, setActiveTab] = useState("visualization");
    const [stack, setStack] = useState([]);
    const [value, setValue] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [peekValue, setPeekValue] = useState(null);

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
                    label: "Stack",
                    path: "/dashboard/stack",
                },
            ]}
        >
            <h1
                className="text-4xl"
                style={{
                    color: "var(--heading)",
                }}
            >
                Stack
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color: "var(--muted)",
                }}
            >
                A Last-In First-Out (LIFO) data structure where
                elements are added and removed from the same end (top).
            </p>

            <VisualizerTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {activeTab === "visualization" ? (
                <VisualizerLayout
                    controls={
                        <StackControls
                            stack={stack}
                            setStack={setStack}
                            value={value}
                            setValue={setValue}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            isAnimating={isAnimating}
                            setIsAnimating={setIsAnimating}
                            peekValue={peekValue}
                            setPeekValue={setPeekValue}
                        />
                    }
                    visualization={
                        <StackCanvas
                            stack={stack}
                            activeIndex={activeIndex}
                            peekValue={peekValue}
                        />
                    }
                />
            ) : (
                <Explanation 
                    data = {
                        explanationData.stack
                    }
                />
            )}
        </VisualizerPageLayout>
    );
}

export default StackVisualizer;
