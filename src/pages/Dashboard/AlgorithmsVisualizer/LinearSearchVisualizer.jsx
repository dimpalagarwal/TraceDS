import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import LinearSearchControls from "../../../components/Visualizer/LinearSearchControls";
import LinearSearchCanvas from "../../../components/Visualizer/LinearSearchCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function LinearSearchVisualizer() {

    const [activeTab, setActiveTab] = useState("visualization");

    const [array, setArray] = useState([]);
    const [inputArray, setInputArray] = useState("");

    const [target, setTarget] = useState("");

    const [activeIndex, setActiveIndex] = useState(-1);

    const [result, setResult] = useState("");

    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <VisualizerPageLayout
            breadcrumbs={[
                { label: "Dashboard", path: "/dashboard" },
                { label: "Algorithms", path: "/dashboard/algorithms" },
                { label: "Linear Search", path: "/dashboard/linear-search" }
            ]}
        >

            <h1
                className="text-4xl"
                style={{ color: "var(--heading)" }}
            >
                Linear Search
            </h1>

            <p
                className="mt-3 text-lg"
                style={{ color: "var(--muted)" }}
            >
                Search element sequentially from left to right.
            </p>

            <VisualizerTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {
                activeTab === "visualization"
                    ?
                    <VisualizerLayout
                        controls={
                            <LinearSearchControls
                                array={array}
                                setArray={setArray}
                                inputArray={inputArray}
                                setInputArray={setInputArray}
                                target={target}
                                setTarget={setTarget}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                                result={result}
                                setResult={setResult}
                                isAnimating={isAnimating}
                                setIsAnimating={setIsAnimating}
                            />
                        }
                        visualization={
                            <LinearSearchCanvas
                                array={array}
                                activeIndex={activeIndex}
                                result={result}
                            />
                        }
                    />
                    :
                    <Explanation 
                        data = {
                            explanationData.linear
                        }
                    />
            }

        </VisualizerPageLayout>
    );
}

export default LinearSearchVisualizer;