import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import AVLControls from "../../../components/Visualizer/AVLControls";
import AVLCanvas from "../../../components/Visualizer/AVLCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function AVLVisualizer() {
    const [activeTab, setActiveTab] = useState("visualization");
    const [root, setRoot] = useState(null);
    const [value, setValue] = useState("");
    const [rotationType, setRotationType] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [highlightNode, setHighlightNode] = useState(null);
    const [message, setMessage] = useState("");
    const [displayRoot, setDisplayRoot] = useState(null);

    return (
        <VisualizerPageLayout
            breadcrumbs={[
                {label: "Dashboard",path: "/dashboard",},
                {label: "Data Structures",path: "/dashboard",},
                {label: "AVL Tree",path: "/dashboard/avl-tree",},
            ]}
        >
            <h1 className="text-4xl" style={{ color: "var(--heading)",}}>
                AVL Tree
            </h1>
            <p className="mt-3 text-lg" style={{color: "var(--muted)",}}>
                A self-balancing Binary Search Tree
                where the height difference between
                left and right subtrees never exceeds 1.
            </p>
            <VisualizerTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            {activeTab === "visualization"? (
                        <VisualizerLayout
                            controls={
                                <AVLControls root={root} setRoot={setRoot} value={value} setValue={setValue} rotationType={rotationType} setRotationType={setRotationType}
                                    activeIndex={activeIndex} setActiveIndex={setActiveIndex} isAnimating={isAnimating} setIsAnimating={setIsAnimating} highlightNode={highlightNode}setHighlightNode={setHighlightNode} message={message} setMessage={setMessage} displayRoot={displayRoot} setDisplayRoot={setDisplayRoot}/>
                            }
                            visualization={
                                <AVLCanvas root={root} activeIndex={activeIndex} rotationType={rotationType} highlightNode={highlightNode} message={message} root={displayRoot}/>
                            }
                        />
                    )
                    : (
                        <Explanation 
                            data = {
                                explanationData.avl
                            }
                        />
                    )
            }
        </VisualizerPageLayout>
    );
}

export default AVLVisualizer;