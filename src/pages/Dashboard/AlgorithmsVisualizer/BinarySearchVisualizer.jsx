import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import BinarySearchControls from "../../../components/Visualizer/BinarySearchControls";
import BinarySearchCanvas from "../../../components/Visualizer/BinarySearchCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function BinarySearchVisualizer() {

    const [activeTab, setActiveTab] =
        useState("visualization");

    const [array, setArray] = useState([]);
    const [inputArray, setInputArray] = useState("");

    const [target, setTarget] = useState("");

    const [lowIndex, setLowIndex] = useState(-1);
    const [midIndex, setMidIndex] = useState(-1);
    const [highIndex, setHighIndex] = useState(-1);

    const [result, setResult] = useState("");

    const [isAnimating, setIsAnimating] =
        useState(false);

    return (
        <VisualizerPageLayout
            breadcrumbs={[
                {
                    label: "Dashboard",
                    path: "/dashboard",
                },
                {
                    label: "Algorithms",
                    path: "/dashboard/algorithms",
                },
                {
                    label: "Binary Search",
                    path: "/dashboard/binary-search",
                },
            ]}
        >
            <h1
                className="text-4xl"
                style={{
                    color: "var(--heading)",
                }}
            >
                Binary Search
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color: "var(--muted)",
                }}
            >
                Search in a sorted array by repeatedly
                dividing the search space.
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
                            <BinarySearchControls
                                array={array}
                                setArray={setArray}
                                inputArray={inputArray}
                                setInputArray={setInputArray}
                                target={target}
                                setTarget={setTarget}
                                lowIndex={lowIndex}
                                setLowIndex={setLowIndex}
                                midIndex={midIndex}
                                setMidIndex={setMidIndex}
                                highIndex={highIndex}
                                setHighIndex={setHighIndex}
                                result={result}
                                setResult={setResult}
                                isAnimating={isAnimating}
                                setIsAnimating={setIsAnimating}
                            />
                        }
                        visualization={
                            <BinarySearchCanvas
                                array={array}
                                lowIndex={lowIndex}
                                midIndex={midIndex}
                                highIndex={highIndex}
                                result={result}
                            />
                        }
                    />
                    :
                    <Explanation
                        data={
                            explanationData.binarySearch
                        }
                    />
            }
        </VisualizerPageLayout>
    );
}

export default BinarySearchVisualizer;