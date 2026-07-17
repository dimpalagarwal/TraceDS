import { useState } from "react";
import VisualizerPageLayout from "./VisualizerPageLayout";
import VisualizerTabs from "./VisualizerTabs";
import VisualizerLayout from "./VisualizerLayout";
import StringMatchingControls from "./StringMatchingControls";
import StringMatchingCanvas from "./StringMatchingCanvas";
import Explanation from "./Explanation";

function StringMatchingVisualizer({
    title,
    description,
    runAlgorithm,explanationData,
    breadcrumbs,
}) {

    const [activeTab,setActiveTab] =
        useState("visualization");

    const [text,setText] =
        useState("");

    const [pattern,setPattern] =
        useState("");

    const [activeTextIndex,setActiveTextIndex] =
        useState(-1);

    const [activePatternIndex,setActivePatternIndex] =
        useState(-1);

    const [matchedIndices,setMatchedIndices] =
        useState([]);

    const [currentStep,setCurrentStep] =
        useState("");

    const [lps,setLps] =
        useState([]);

    const [hashes,setHashes] =
        useState({});

    const [isAnimating,setIsAnimating] =
        useState(false);
    
    const [activeWindow,setActiveWindow] =
        useState([]);

    const startAlgorithm = async () => {

        await runAlgorithm({
            text,
            pattern,
            setActiveTextIndex,
            setActivePatternIndex,
            setActiveWindow,
            setMatchedIndices,
            setCurrentStep,
            setLps,
            setHashes,
            setIsAnimating,
        });
    };

    const clearAll = () => {

        setText("");
        setPattern("");

        setActiveTextIndex(-1);
        setActivePatternIndex(-1);

        setMatchedIndices([]);

        setCurrentStep("");

        setLps([]);

        setHashes({});
        setActiveWindow([]);

        setIsAnimating(false);
    };

    return (
        <VisualizerPageLayout
            breadcrumbs={breadcrumbs}
        >
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
                            <StringMatchingControls
                                text={text}
                                setText={setText}
                                pattern={pattern}
                                setPattern={setPattern}
                                startAlgorithm={startAlgorithm}
                                clearAll={clearAll}
                                isAnimating={isAnimating}
                            />
                        }
                        visualization={
                            <StringMatchingCanvas
                                text={text}
                                pattern={pattern}
                                activeTextIndex={activeTextIndex}
                                activePatternIndex={activePatternIndex}
                                activeWindow={activeWindow}
                                matchedIndices={matchedIndices}
                                currentStep={currentStep}
                                lps={lps}
                                hashes={hashes}
                            />
                        }
                    />
                )
                :
                (
                    <Explanation 
                        data = {explanationData}
                    />
                )
            }
        </VisualizerPageLayout>
    );
}

export default StringMatchingVisualizer;