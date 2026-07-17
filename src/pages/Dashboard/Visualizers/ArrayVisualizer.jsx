import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import ArrayControls from "../../../components/Visualizer/ArrayControls";
import ArrayCanvas from "../../../components/Visualizer/ArrayCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function ArrayVisualizer() {
  const [activeTab, setActiveTab] = useState("visualization");
  const [array, setArray] = useState([]);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [accessValue, setAccessValue] = useState(null);

  console.log(accessValue);
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
          label: "Array",
          path: "/dashboard/array",
        },
      ]}
    >
      <h1
        className="text-4xl"
        style={{
          color: "var(--heading)",
        }}
      >
        Array
      </h1>

      <p
        className="mt-3 text-lg"
        style={{
          color: "var(--muted)",
        }}
      >
        A contiguous memory data structure supporting
        constant-time random access.
      </p>

      <VisualizerTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "visualization" ? (
        <VisualizerLayout
          controls={<ArrayControls value={value} setValue={setValue} index={index} setIndex={setIndex} array={array} setArray={setArray} activeIndex={activeIndex} setActiveIndex={setActiveIndex} isAnimating={isAnimating} setIsAnimating={setIsAnimating}  setAccessValue={setAccessValue}/>}
          visualization={<ArrayCanvas array={array} activeIndex={activeIndex} accessValue={accessValue} />}
        />
      ) : (
        <Explanation 
          data = {
            explanationData.array
          }
        />
      )}
    </VisualizerPageLayout>
  );
}

export default ArrayVisualizer;