import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import JobSchedulingControls from "../../../components/Visualizer/JobSchedulingControls";
import JobSchedulingCanvas from "../../../components/Visualizer/JobSchedulingCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function JobSchedulingVisualizer() {

    const [jobs,setJobs] = useState([]);

const [jobId,setJobId] = useState("");
const [deadline,setDeadline] = useState("");
const [profit,setProfit] = useState("");

const [selectedJobs,setSelectedJobs] =
useState([]);

const [activeJob,setActiveJob] =
useState("");

const [totalProfit,setTotalProfit] =
useState(0);

const [isAnimating,setIsAnimating] =
useState(false);
const [activeTab,setActiveTab] =
    useState("visualization");

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
                    label:"Job Scheduling",
                    path:"/dashboard/job-scheduling",
                },
            ]}
        >
            <h1
                className="text-4xl"
                style={{
                    color:"var(--heading)"
                }}
            >
                Job Scheduling
            </h1>

            <p
                className="mt-3 text-lg"
                style={{
                    color:"var(--muted)"
                }}
            >
                Maximize profit by scheduling jobs before their deadlines.
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
                            <JobSchedulingControls
                                jobs={jobs}
    setJobs={setJobs}
    jobId={jobId}
    setJobId={setJobId}
    deadline={deadline}
    setDeadline={setDeadline}
    profit={profit}
    setProfit={setProfit}
    selectedJobs={selectedJobs}
    setSelectedJobs={setSelectedJobs}
    activeJob={activeJob}
    setActiveJob={setActiveJob}
    totalProfit={totalProfit}
    setTotalProfit={setTotalProfit}
    isAnimating={isAnimating}
    setIsAnimating={setIsAnimating}
                            />
                        }
                        visualization={
                            <JobSchedulingCanvas
                                jobs={jobs}
    selectedJobs={selectedJobs}
    activeJob={activeJob}
    totalProfit={totalProfit}
                            />
                        }
                    />
                )
                :
                (
                    <Explanation 
                        data = {
                            explanationData.job
                        }
                    />
                )
            }

        </VisualizerPageLayout>
    );
}

export default JobSchedulingVisualizer;