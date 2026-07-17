import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import DequeControls from "../../../components/Visualizer/DequeControls";
import DequeCanvas from "../../../components/Visualizer/DequeCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function DequeVisualizer() {
    const [activeTab, setActiveTab] = useState("visualization");
    const [deque, setDeque] = useState([]);
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
                    label: "Deque",
                    path: "/dashboard/deque",
                },
            ]}
        >
            <h1
                className="text-4xl"
                style={{
                    color: "var(--heading)",
                }}
            >
                Deque (Double-Ended Queue)
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color: "var(--muted)",
                }}
            >
                A Double-Ended Queue where you can insert and delete
                elements from both the front and rear ends.
            </p>

            <VisualizerTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {activeTab === "visualization" ? (
                <VisualizerLayout
                    controls={
                        <DequeControls
                            deque={deque}
                            setDeque={setDeque}
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
                        <DequeCanvas
                            deque={deque}
                            activeIndex={activeIndex}
                            peekValue={peekValue}
                        />
                    }
                />
            ) : (
                <Explanation 
                    data = {
                        explanationData.deque
                    }
                />
            )}
        </VisualizerPageLayout>
    );
}

export default DequeVisualizer;
