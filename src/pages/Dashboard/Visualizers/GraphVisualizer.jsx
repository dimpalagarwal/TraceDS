import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import GraphControls from "../../../components/Visualizer/GraphControls";
import GraphCanvas from "../../../components/Visualizer/GraphCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function GraphVisualizer() {

    const [activeTab, setActiveTab] = useState("visualization");

    const [vertices, setVertices] = useState([]);
    const [edges, setEdges] = useState([]);

    const [vertex, setVertex] = useState("");

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const [startNode, setStartNode] = useState("");

    const [activeNodes, setActiveNodes] = useState([]);

    const [traversalOrder, setTraversalOrder] =
        useState([]);

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
                    label: "Data Structures",
                    path: "/dashboard",
                },
                {
                    label: "Graph",
                    path: "/dashboard/graph",
                },
            ]}
        >
            <h1
                className="text-4xl"
                style={{
                    color: "var(--heading)",
                }}
            >
                Graph
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color: "var(--muted)",
                }}
            >
                Non-linear data structure consisting
                of vertices and edges.
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
                            <GraphControls
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
                                startNode={startNode}
                                setStartNode={setStartNode}
                                activeNodes={activeNodes}
                                setActiveNodes={setActiveNodes}
                                traversalOrder={traversalOrder}
                                setTraversalOrder={setTraversalOrder}
                                isAnimating={isAnimating}
                                setIsAnimating={setIsAnimating}
                            />
                        }
                        visualization={
                            <GraphCanvas
                                vertices={vertices}
                                edges={edges}
                                activeNodes={activeNodes}
                                traversalOrder={traversalOrder}
                            />
                        }
                    />
                    :
                    <Explanation 
                        data = {
                            explanationData.graph
                        }
                    />
            }

        </VisualizerPageLayout>
    );
}

export default GraphVisualizer;