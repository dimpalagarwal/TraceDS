import { useState } from "react";
import VisualizerPageLayout from "./VisualizerPageLayout";
import VisualizerTabs from "./VisualizerTabs";
import VisualizerLayout from "./VisualizerLayout";
import GraphCanvas from "./GraphCanvas";
import Explanation from "./Explanation";

function GraphAlgorithmVisualizer({
    title,
    description,
    breadcrumbs,
    controls,
    visualization,
}) {

    const [activeTab, setActiveTab] =
        useState("visualization");

    return (
        <VisualizerPageLayout
            breadcrumbs={breadcrumbs}
        >

            <h1
                className="text-4xl"
                style={{
                    color:
                        "var(--heading)",
                }}
            >
                {title}
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color:
                        "var(--muted)",
                }}
            >
                {description}
            </p>

            <VisualizerTabs
                activeTab={activeTab}
                setActiveTab={
                    setActiveTab
                }
            />

            {
                activeTab ===
                "visualization"
                    ?
                    (
                        <VisualizerLayout
                            controls={
                                controls
                            }
                            visualization={
                                visualization
                            }
                        />
                    )
                    :
                    (
                        <Explanation />
                    )
            }

        </VisualizerPageLayout>
    );
}

export default GraphAlgorithmVisualizer;