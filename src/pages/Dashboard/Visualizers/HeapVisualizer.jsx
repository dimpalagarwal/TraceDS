import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import HeapControls from "../../../components/Visualizer/HeapControls";
import HeapCanvas from "../../../components/Visualizer/HeapCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function HeapVisualizer() {
    const [activeTab, setActiveTab] = useState("visualization");
    const [heapType, setHeapType] = useState("max");
    const [maxHeap, setMaxHeap] = useState([]);
    const [minHeap, setMinHeap] = useState([]);
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
                    label: "Heap",
                    path: "/dashboard/heap",
                },
            ]}
        >
            <h1
                className="text-4xl"
                style={{
                    color: "var(--heading)",
                }}
            >
                Heap (Max & Min Heap)
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color: "var(--muted)",
                }}
            >
                A complete binary tree where parent node is either greater (Max Heap) 
                or smaller (Min Heap) than its children. Perfect for priority queues and sorting.
            </p>

            <VisualizerTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {activeTab === "visualization" ? (
                <VisualizerLayout
                    controls={
                        <HeapControls
                            heapType={heapType}
                            setHeapType={setHeapType}
                            maxHeap={maxHeap}
                            setMaxHeap={setMaxHeap}
                            minHeap={minHeap}
                            setMinHeap={setMinHeap}
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
                        <HeapCanvas
                            heapType={heapType}
                            maxHeap={maxHeap}
                            minHeap={minHeap}
                            activeIndex={activeIndex}
                            peekValue={peekValue}
                        />
                    }
                />
            ) : (
                <Explanation 
                    data = {
                        explanationData.heap
                    }
                />
            )}
        </VisualizerPageLayout>
    );
}

export default HeapVisualizer;
