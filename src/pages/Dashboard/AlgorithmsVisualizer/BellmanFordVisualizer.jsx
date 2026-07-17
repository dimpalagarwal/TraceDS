import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import BellmanFordControls from "../../../components/Visualizer/BellmanFordControls";
import GraphCanvas from "../../../components/Visualizer/GraphCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function BellmanFordVisualizer() {
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
                    label: "Bellman-Ford",
                    path: "/dashboard/bellman",
                },
            ]}
        >
            <h1 className="text-4xl" style={{color: "var(--heading)",}}>Bellman-Ford Algorithm</h1>
            <p className="mt-3 text-lg" style={{color: "var(--muted)",}}>Shortest Path Algorithm that supports negative edge weights.</p>

            <VisualizerTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

            {
                activeTab === "visualization" ?
                (
                    <VisualizerLayout
                        controls={
                            <BellmanFordControls vertices={vertices} setVertices={setVertices} edges={edges} setEdges={setEdges} vertex={vertex} setVertex={setVertex} from={from} setFrom={setFrom} to={to} setTo={setTo} weight={weight} setWeight={setWeight} startNode={startNode} setStartNode={setStartNode} activeNodes={activeNodes} setActiveNodes={setActiveNodes} activeEdges={activeEdges} setActiveEdges={setActiveEdges}distances={distances}setDistances={setDistances}isAnimating={isAnimating}setIsAnimating={setIsAnimating}/>
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
                            explanationData.bellman
                        }
                    />
                )
            }

        </VisualizerPageLayout>
    );
}

export default BellmanFordVisualizer;