import { useState } from "react";
import VisualizerPageLayout from "./VisualizerPageLayout";
import VisualizerTabs from "./VisualizerTabs";
import VisualizerLayout from "./VisualizerLayout";
import SortingControls from "./SortingControls";
import SortingCanvas from "./SortingCanvas";
import Explanation from "./Explanation";

function SortingVisualizer({title,description,sortFunction,explanationData,breadcrumbs,}) {
    const [activeTab,setActiveTab] = useState("visualization");
    const [array,setArray] = useState([]);
    const [inputArray,setInputArray] = useState("");
    const [activeIndices,setActiveIndices] = useState([]);
    const [sortedIndices,setSortedIndices] = useState([]);
    const [currentStep,setCurrentStep] = useState("");
    const [isAnimating,setIsAnimating] = useState(false);
    const [pivotIndex,setPivotIndex] =
    useState(-1);

const [mergeRange,setMergeRange] =
    useState([]);

const [heapIndices,setHeapIndices] =
    useState([]);

    const buildArray = () => {
        if (!inputArray.trim())
            return;

        setArray(
            inputArray
                .split(",")
                .map(Number)
        );
    };

    const clearArray = () => {

        setArray([]);
        setInputArray("");

        setActiveIndices([]);
        setSortedIndices([]);

        setPivotIndex(-1);
setMergeRange([]);
setHeapIndices([]);

        setCurrentStep("");

        setIsAnimating(false);
    };

    const startSort = async () => {

        await sortFunction({
            array,
            setArray,
            setActiveIndices,
            setSortedIndices,
            setCurrentStep,
            setIsAnimating,
            setPivotIndex,
    setMergeRange,
    setHeapIndices,
        });
    };

    return (
        <VisualizerPageLayout breadcrumbs={breadcrumbs}>
            <h1
                className="text-4xl"
                style={{
                    color:"var(--heading)"
                }}
            >
                {title}
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color:"var(--muted)"
                }}
            >
                {description}
            </p>

            <VisualizerTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {
                activeTab === "visualization"
                ?
                (
                    <VisualizerLayout
                        controls={
                            <SortingControls
                                inputArray={inputArray}
                                setInputArray={setInputArray}
                                buildArray={buildArray}
                                startSort={startSort}
                                clearArray={clearArray}
                                isAnimating={isAnimating}
                            />
                        }
                        visualization={
                            <SortingCanvas
                                array={array}
                                activeIndices={activeIndices}
                                sortedIndices={sortedIndices}
                                currentStep={currentStep}
                                pivotIndex={pivotIndex}
    mergeRange={mergeRange}
    heapIndices={heapIndices}
                            />
                        }
                    />
                )
                :
                (
                    <Explanation 
                        data={explanationData}
                    />
                )
            }

        </VisualizerPageLayout>
    );
}

export default SortingVisualizer;