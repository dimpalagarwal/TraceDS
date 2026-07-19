import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import ActivitySelectionControls from "../../../components/Visualizer/ActivitySelectionControls";
import ActivitySelectionCanvas from "../../../components/Visualizer/ActivitySelectionCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function ActivitySelectionVisualizer() {
    const [activeTab,setActiveTab] = useState("visualization");
    const [activities,setActivities] = useState([]);
    const [activityId,setActivityId] = useState("");
    const [start,setStart] = useState("");
    const [finish,setFinish] = useState("");
    const [selectedActivities,setSelectedActivities] = useState([]);
    const [activeActivity,setActiveActivity] = useState("");
    const [isAnimating,setIsAnimating] = useState(false);
    const [comparison, setComparison] = useState(null);

    return (
        <VisualizerPageLayout breadcrumbs={[
                {label:"Dashboard", path:"/dashboard",},
                {label:"Algorithms", path:"/dashboard/algorithms",},
                {label:"Activity Selection", path:"/dashboard/activity-selection",},
            ]}
        >
            <h1 className="visualizer-title"> Activity Selection</h1>
            <p className="visualizer-subtitle">
                Select maximum number of non-overlapping activities.
            </p>
            <VisualizerTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

            {
                activeTab === "visualization"
                ?
                (
                    <VisualizerLayout
                        controls={
                            <ActivitySelectionControls activities={activities} setActivities={setActivities} activityId={activityId} setActivityId={setActivityId} start={start} setStart={setStart} finish={finish} setFinish={setFinish} selectedActivities={selectedActivities} setSelectedActivities={setSelectedActivities} activeActivity={activeActivity} setActiveActivity={setActiveActivity} isAnimating={isAnimating} setIsAnimating={setIsAnimating} comparison={comparison} setComparison={setComparison}/>
                        }
                        visualization={
                            <ActivitySelectionCanvas activities={activities} selectedActivities={selectedActivities} activeActivity={activeActivity} comparison={comparison}/>
                        }
                    />
                )
                :
                (
                    <Explanation data={ explanationData.activity }/>
                )
            }
        </VisualizerPageLayout>
    );
}

export default ActivitySelectionVisualizer;