import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import HashTableControls from "../../../components/Visualizer/HashTableControls";
import HashTableCanvas from "../../../components/Visualizer/HashTableCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function HashTableVisualizer() {

    const TABLE_SIZE = 7;

    const [activeTab, setActiveTab] = useState("visualization");

    const [table, setTable] = useState(
        Array.from(
            { length: TABLE_SIZE },
            () => []
        )
    );

    const [value, setValue] = useState("");

    const [activeBucket, setActiveBucket] =
        useState(-1);

    const [activeValue, setActiveValue] =
        useState(null);

    const [result, setResult] =
        useState("");

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
                    label: "Hash Table",
                    path: "/dashboard/hash-table",
                },
            ]}
        >
            <h1
                className="text-4xl"
                style={{
                    color: "var(--heading)",
                }}
            >
                Hash Table
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color: "var(--muted)",
                }}
            >
                Stores values using hashing and
                handles collisions through chaining.
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
                            <HashTableControls
                                table={table}
                                setTable={setTable}
                                value={value}
                                setValue={setValue}
                                activeBucket={activeBucket}
                                setActiveBucket={setActiveBucket}
                                activeValue={activeValue}
                                setActiveValue={setActiveValue}
                                result={result}
                                setResult={setResult}
                                isAnimating={isAnimating}
                                setIsAnimating={setIsAnimating}
                                tableSize={TABLE_SIZE}
                            />
                        }
                        visualization={
                            <HashTableCanvas
                                table={table}
                                activeBucket={activeBucket}
                                activeValue={activeValue}
                                result={result}
                            />
                        }
                    />
                    :
                    <Explanation 
                        data = {
                            explanationData.hash
                        }
                    />
            }

        </VisualizerPageLayout>
    );
}

export default HashTableVisualizer;