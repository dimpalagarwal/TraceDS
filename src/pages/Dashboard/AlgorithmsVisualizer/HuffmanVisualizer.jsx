import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import HuffmanControls from "../../../components/Visualizer/HuffmanControls";
import HuffmanCanvas from "../../../components/Visualizer/HuffmanCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function HuffmanVisualizer() {

    const [activeTab,setActiveTab] =
        useState("visualization");

    const [characters,setCharacters] =
        useState([]);

    const [charInput,setCharInput] =
        useState("");

    const [freqInput,setFreqInput] =
        useState("");

    const [treeRoot,setTreeRoot] =
        useState(null);

    const [codes,setCodes] =
        useState({});

    const [activeNodes,setActiveNodes] =
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
                    label:"Huffman Coding",
                    path:"/dashboard/huffman",
                },
            ]}
        >
            <h1
                className="text-4xl"
                style={{
                    color:"var(--heading)"
                }}
            >
                Huffman Coding
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color:"var(--muted)"
                }}
            >
                Optimal prefix coding using greedy strategy.
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
                            <HuffmanControls
                                characters={characters}
                                setCharacters={setCharacters}
                                charInput={charInput}
                                setCharInput={setCharInput}
                                freqInput={freqInput}
                                setFreqInput={setFreqInput}
                                treeRoot={treeRoot}
                                setTreeRoot={setTreeRoot}
                                codes={codes}
                                setCodes={setCodes}
                                activeNodes={activeNodes}
                                setActiveNodes={setActiveNodes}
                                isAnimating={isAnimating}
                                setIsAnimating={setIsAnimating}
                            />
                        }
                        visualization={
                            <HuffmanCanvas
                                characters={characters}
                                treeRoot={treeRoot}
                                codes={codes}
                                activeNodes={activeNodes}
                            />
                        }
                    />
                )
                :
                (
                    <Explanation 
                        data = {
                            explanationData.huffman
                        }
                    />
                )
            }
        </VisualizerPageLayout>
    );
}

export default HuffmanVisualizer;