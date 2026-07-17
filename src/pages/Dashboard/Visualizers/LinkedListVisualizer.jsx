import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import LinkedListControls from "../../../components/Visualizer/LinkedListControls";
import LinkedListCanvas from "../../../components/Visualizer/LinkedListCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function LinkedListVisualizer() {
    const [activeTab, setActiveTab] = useState("visualization");
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");
    const [index, setIndex] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [accessResult, setAccessResult] = useState(null);

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
                    label: "Linked List",
                    path: "/dashboard/linked-list",
                },
            ]}
        >
            <h1
                className="text-4xl"
                style={{
                    color: "var(--heading)",
                }}
            >
                Linked List
            </h1>
            <p
                className="mt-3 text-lg"
                style={{
                    color: "var(--muted)",
                }}
            >
                A linear data structure where every node stores data
                and a pointer to the next node.
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
                            <LinkedListControls
                                list={list}
                                setList={setList}
                                value={value}
                                setValue={setValue}
                                index={index}
                                setIndex={setIndex}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                                isAnimating={isAnimating}
                                setIsAnimating={setIsAnimating}
                                setAccessResult={setAccessResult}
                            />
                        }
                        visualization={
                            <LinkedListCanvas
                                list={list}
                                activeIndex={activeIndex}
                                accessResult={accessResult}
                            />
                        }
                    />
                    :
                    <Explanation 
                        data = {
                            explanationData.linked
                        }
                    />
            }

        </VisualizerPageLayout>

    );

}

export default LinkedListVisualizer;