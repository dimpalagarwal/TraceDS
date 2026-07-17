import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import KruskalControls from "../../../components/Visualizer/KruskalControls";
import GraphCanvas from "../../../components/Visualizer/GraphCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function KruskalVisualizer() {
    const [activeTab, setActiveTab] = useState("visualization");
    const [vertices, setVertices] = useState([]);
    const [edges, setEdges] = useState([]);
    const [vertex, setVertex] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [weight, setWeight] = useState("");
    const [startNode, setStartNode] = useState("");
    const [activeNodes, setActiveNodes] = useState([]);
    const [activeEdges, setActiveEdges] = useState([]);
    const [result, setResult] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);

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
                    label: "Kruskal MST",
                    path: "/dashboard/krushkal",
                },
            ]}
        >
            <h1 className="text-4xl" style={{color: "var(--heading)",}}>Kruskal's Algorithm</h1>
            <p className="mt-3 text-lg" style={{color: "var(--muted)",}}>Minimum Spanning Tree using edge sorting and Union Find.</p>

            <VisualizerTabs activeTab={activeTab}setActiveTab={setActiveTab}/>
            {
                activeTab === "visualization"
                    ?
                    (<VisualizerLayout
                            controls={
                                <KruskalControls vertices={vertices}setVertices={setVertices}edges={edges}setEdges={setEdges}vertex={vertex}setVertex={setVertex}from={from}setFrom={setFrom}to={to}setTo={setTo}weight={weight}setWeight={setWeight}startNode={startNode}setStartNode={setStartNode}activeNodes={activeNodes}setActiveNodes={setActiveNodes}activeEdges={activeEdges}setActiveEdges={setActiveEdges} result={result} setResult={setResult} isAnimating={isAnimating} setIsAnimating={setIsAnimating}/>
                            }

                            visualization={
                                <GraphCanvas vertices={vertices}edges={edges}activeNodes={activeNodes}activeEdges={activeEdges}traversalOrder={[]}result={result}/>
                            }
                        />)
                    :
                    (<Explanation 
                        data = {
                            explanationData.krushkal
                        }
                    />)
            }
        </VisualizerPageLayout>
    );
}

export default KruskalVisualizer;