import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import BSTControls from "../../../components/Visualizer/BSTControls";
import BSTCanvas from "../../../components/Visualizer/BSTCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function BSTVisualizer() {
    const [activeTab, setActiveTab] = useState("visualization");
    const [bstTree, setBSTTree] = useState(null);
    const [value, setValue] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [traversalResult, setTraversalResult] = useState(null);
    const [balanceResult, setBalanceResult] = useState(null);

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
                    label: "Binary Search Tree",
                    path: "/dashboard/bst",
                },
            ]}
        >
            <h1
                className="text-2xl sm:text-3xl md:text-4xl"
                style={{
                    color: "var(--heading)",
                }}
            >
                Binary Search Tree (BST)
            </h1>

            <p
                className="mt-3 text-sm sm:text-base md:text-lg"
                style={{
                    color: "var(--muted)",
                }}
            >
                A tree data structure where each node has at most two children,
                and all left descendants are smaller and right descendants are larger.
            </p>

            <VisualizerTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {activeTab === "visualization" ? (
                <VisualizerLayout
                    controls={
                        <BSTControls
                            bstTree={bstTree}
                            setBSTTree={setBSTTree}
                            value={value}
                            setValue={setValue}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            isAnimating={isAnimating}
                            setIsAnimating={setIsAnimating}
                            traversalResult={traversalResult}
                            setTraversalResult={setTraversalResult}
                            balanceResult={balanceResult}
                            setBalanceResult={setBalanceResult}
                        />
                    }
                    visualization={
                        <BSTCanvas
                            bstTree={bstTree}
                            activeIndex={activeIndex}
                            traversalResult={traversalResult}
                            balanceResult={balanceResult}
                        />
                    }
                />
            ) : (
                <Explanation 
                    data = {
                        explanationData.bst
                    }
                />
            )}
        </VisualizerPageLayout>
    );
}

export default BSTVisualizer;
