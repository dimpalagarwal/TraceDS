import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import ActivitySelectionControls from "../../../components/Visualizer/ActivitySelectionControls";
import ActivitySelectionCanvas from "../../../components/Visualizer/ActivitySelectionCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function ActivitySelectionVisualizer() {

    const [activeTab,setActiveTab] =
        useState("visualization");

    const [activities,setActivities] =
        useState([]);

    const [activityId,setActivityId] =
        useState("");

    const [start,setStart] =
        useState("");

    const [finish,setFinish] =
        useState("");

    const [selectedActivities,setSelectedActivities] =
        useState([]);

    const [activeActivity,setActiveActivity] =
        useState("");

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
                    label:"Activity Selection",
                    path:"/dashboard/activity-selection",
                },
            ]}
        >
            <h1
                className="text-4xl"
                style={{
                    color:"var(--heading)"
                }}
            >
                Activity Selection
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color:"var(--muted)"
                }}
            >
                Select maximum number of non-overlapping activities.
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
                            <ActivitySelectionControls
                                activities={activities}
                                setActivities={setActivities}
                                activityId={activityId}
                                setActivityId={setActivityId}
                                start={start}
                                setStart={setStart}
                                finish={finish}
                                setFinish={setFinish}
                                selectedActivities={selectedActivities}
                                setSelectedActivities={setSelectedActivities}
                                activeActivity={activeActivity}
                                setActiveActivity={setActiveActivity}
                                isAnimating={isAnimating}
                                setIsAnimating={setIsAnimating}
                            />
                        }
                        visualization={
                            <ActivitySelectionCanvas
                                activities={activities}
                                selectedActivities={selectedActivities}
                                activeActivity={activeActivity}
                            />
                        }
                    />
                )
                :
                (
                    <Explanation 
                        data={
                            explanationData.activity
                        }    
                    />
                )
            }

        </VisualizerPageLayout>
    );
}

export default ActivitySelectionVisualizer;