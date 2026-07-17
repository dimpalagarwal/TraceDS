import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import FloydWarshallControls from "../../../components/Visualizer/FloydWarshallControls";
import FloydWarshallCanvas from "../../../components/Visualizer/FloydWarshallCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function FloydWarshallVisualizer() {

    const [activeTab,setActiveTab] =
        useState("visualization");

    const [vertices,setVertices] =
        useState([]);

    const [edges,setEdges] =
        useState([]);

    const [vertex,setVertex] =
        useState("");

    const [from,setFrom] =
        useState("");

    const [to,setTo] =
        useState("");

    const [weight,setWeight] =
        useState("");

    const [distanceMatrix,setDistanceMatrix] =
        useState([]);

    const [activeNodes,setActiveNodes] =
        useState([]);

    const [activeEdges,setActiveEdges] =
        useState([]);

    const [isAnimating,setIsAnimating] =
        useState(false);

    return (
        <VisualizerPageLayout
            breadcrumbs={[
                {
                    label:"Dashboard",
                    path:"/dashboard",
                },
                {
                    label:"Algorithms",
                    path:"/dashboard/algorithms",
                },
                {
                    label:"Floyd Warshall",
                    path:"/dashboard/floyd-warshall",
                },
            ]}
        >

            <h1
                className="text-4xl"
                style={{
                    color:"var(--heading)"
                }}
            >
                Floyd Warshall
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color:"var(--muted)"
                }}
            >
                All Pairs Shortest Path Algorithm
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
                            <FloydWarshallControls
                                vertices={vertices}
                                setVertices={setVertices}
                                edges={edges}
                                setEdges={setEdges}
                                vertex={vertex}
                                setVertex={setVertex}
                                from={from}
                                setFrom={setFrom}
                                to={to}
                                setTo={setTo}
                                weight={weight}
                                setWeight={setWeight}
                                distanceMatrix={distanceMatrix}
                                setDistanceMatrix={setDistanceMatrix}
                                activeNodes={activeNodes}
                                setActiveNodes={setActiveNodes}
                                activeEdges={activeEdges}
                                setActiveEdges={setActiveEdges}
                                isAnimating={isAnimating}
                                setIsAnimating={setIsAnimating}
                            />
                        }
                        visualization={
                            <FloydWarshallCanvas
                                vertices={vertices}
                                edges={edges}
                                activeNodes={activeNodes}
                                activeEdges={activeEdges}
                                distanceMatrix={distanceMatrix}
                            />
                        }
                    />
                )
                :
                (
                    <Explanation 
                        data = {
                            explanationData.floyd
                        }
                    />
                )
            }

        </VisualizerPageLayout>
    );
}

export default FloydWarshallVisualizer;