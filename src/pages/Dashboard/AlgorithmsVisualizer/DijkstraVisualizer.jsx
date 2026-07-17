import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import DijkstraControls from "../../../components/Visualizer/DijkstraControls";
import GraphCanvas from "../../../components/Visualizer/GraphCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function DijkstraVisualizer() {
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
    const [distances, setDistances] = useState({});
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
                    label: "Dijkstra",
                    path: "/dashboard/dijkstra",
                },
            ]}
        >
            <h1 className="text-4xl" style={{color: "var(--heading)",}}>Dijkstra Algorithm</h1>
            <p className="mt-3 text-lg" style={{color: "var(--muted)",}}>Shortest path from a source node.</p>

            <VisualizerTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

            {
                activeTab === "visualization" ?
                (
                    <VisualizerLayout
                        controls={
                            <DijkstraControls vertices={vertices} setVertices={setVertices} edges={edges} setEdges={setEdges} vertex={vertex} setVertex={setVertex} from={from} setFrom={setFrom} to={to} setTo={setTo} weight={weight} setWeight={setWeight} startNode={startNode} setStartNode={setStartNode} activeNodes={activeNodes} setActiveNodes={setActiveNodes} activeEdges={activeEdges} setActiveEdges={setActiveEdges}distances={distances}setDistances={setDistances}isAnimating={isAnimating}setIsAnimating={setIsAnimating}/>
                        }

                        visualization={
                            <GraphCanvas vertices={vertices} edges={edges} activeNodes={activeNodes}
                                activeEdges={activeEdges} traversalOrder={[]} distances={distances}
                            />
                        }
                    />
                )
                :
                (
                    <Explanation 
                        data = {
                            explanationData.dijkstra
                        }
                    />
                )
            }

        </VisualizerPageLayout>
    );
}

export default DijkstraVisualizer;