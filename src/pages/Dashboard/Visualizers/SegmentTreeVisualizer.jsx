import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import SegmentTreeControls from "../../../components/Visualizer/SegmentTreeControls";
import SegmentTreeCanvas from "../../../components/Visualizer/SegmentTreeCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function SegmentTreeVisualizer() {
  const [highlightNode, setHighlightNode] = useState(null);
  const [activeTab, setActiveTab] = useState("visualization");
  const [array, setArray] = useState([]);
  const [root, setRoot] = useState(null);
  const [inputArray, setInputArray] = useState("");
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [updateIndex, setUpdateIndex] = useState("");
  const [updateValue, setUpdateValue] = useState("");
  const [queryResult, setQueryResult] = useState(null);

  return (
    <VisualizerPageLayout
      breadcrumbs={[
        { label: "Dashboard", path: "/dashboard" },
        { label: "Data Structures", path: "/dashboard" },
        { label: "Segment Tree", path: "/dashboard/segment-tree" },
      ]}
    >
      <h1 className="text-4xl" style={{ color: "var(--heading)" }}>
        Segment Tree
      </h1>
      <p className="mt-3 text-lg" style={{ color: "var(--muted)" }}>
        Efficient range query and update data structure.
      </p>
      <VisualizerTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

      {activeTab === "visualization" ? (
        <VisualizerLayout
          controls={
            <SegmentTreeControls array={array} setArray={setArray} root={root} setRoot={setRoot} inputArray={inputArray} setInputArray={setInputArray} left={left} setLeft={setLeft} right={right} setRight={setRight} updateIndex={updateIndex} setUpdateIndex={setUpdateIndex} updateValue={updateValue}setUpdateValue={setUpdateValue} queryResult={queryResult} setQueryResult={setQueryResult} highlightNode={highlightNode} setHighlightNode={setHighlightNode}/>
          }
          visualization={
            <SegmentTreeCanvas root={root} queryResult={queryResult} highlightNode={highlightNode}/>
          }
        />
      ) : (
        <Explanation 
          data = {
            explanationData.segment
          }
        />
      )}
    </VisualizerPageLayout>
  );
}

export default SegmentTreeVisualizer;