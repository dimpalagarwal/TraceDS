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
  const [shiftIndex, setShiftIndex] = useState(-1);
  const [operationText, setOperationText] = useState("");

  return (
    <VisualizerPageLayout
      breadcrumbs={[
        {label: "Dashboard",path: "/dashboard",},
        {label: "Data Structures",path: "/dashboard",},
        {label: "Array",path: "/dashboard/array",},
      ]}
    >
      <h1 className="visualizer-title"> Array </h1>
      <p className="visualizer-subtitle"> A contiguous memory data structure supporting constant-time random access.</p>
      <VisualizerTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

      {activeTab === "visualization" ? (
        <VisualizerLayout
          controls={<ArrayControls value={value} setValue={setValue} index={index} setIndex={setIndex} array={array} setArray={setArray} activeIndex={activeIndex} setActiveIndex={setActiveIndex} isAnimating={isAnimating} setIsAnimating={setIsAnimating}  setAccessValue={setAccessValue} shiftIndex={shiftIndex} setShiftIndex={setShiftIndex} operationText={operationText} setOperationText={setOperationText}/>}

          visualization={<ArrayCanvas array={array} activeIndex={activeIndex} accessValue={accessValue} shiftIndex={shiftIndex} operationText={operationText}/>}
        />
      ) : (
        <Explanation data = { explanationData.array }/>
      )}
    </VisualizerPageLayout>
  );
}

export default ArrayVisualizer;