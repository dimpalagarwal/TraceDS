import Button from "../common/Button";
import { useSpeed } from "../../context/SpeedContext";
import { sleep } from "../../utils/sleep";

function ActivitySelectionControls({ activities, setActivities, activityId, setActivityId, start, setStart, finish, setFinish, selectedActivities, setSelectedActivities, activeActivity, setActiveActivity, isAnimating, setIsAnimating, comparison, setComparison}) {
    const { speed } = useSpeed();
    const addActivity = () => {
        if (!activityId || start === "" || finish === "") {
            alert("Input not valid");
            return;
        }

        setActivities([...activities /*this means take every existing activity*/, { id: activityId, start: Number(start), finish: Number(finish), }]);
        setActivityId("");
        setStart("");
        setFinish("");
    };

    const runActivitySelection = async () => {
        setIsAnimating(true);
        setSelectedActivities([]);
        setComparison(null);

        const sorted = [...activities].sort((a, b) => a.finish - b.finish);

        let lastFinish = -1;
        const selected = [];

        for (const activity of sorted) {
            setActiveActivity(activity.id);
            setComparison({
                activity: activity.id,
                lastFinish,
                currentStart: activity.start,
                decision: "",
                condition: `${activity.start} >= ${lastFinish}`
            });
            await sleep(800, speed);
            if (activity.start >= lastFinish) {
                selected.push(activity.id);
                setSelectedActivities([...selected]);
                setComparison({
                    activity: activity.id,
                    lastFinish,
                    currentStart: activity.start,
                    decision: "Selected ✅",
                    condition: `${activity.start} >= ${lastFinish} ✔`
                });
                lastFinish = activity.finish;
            }else{
                setComparison({
                    activity: activity.id,
                    lastFinish,
                    currentStart: activity.start,
                    decision: "Rejected ❌",
                    condition: `${activity.start} >= ${lastFinish} ✘`
                });
            }
            await sleep(600, speed);
        }
        setComparison({decision: "Algorithm Completed "});
        setActiveActivity("");
        setIsAnimating(false);
    };

    const clearActivities = () => {
        setActivities([]);
        setActivityId("");
        setStart("");
        setFinish("");
        setSelectedActivities([]);
        setActiveActivity("");
        setComparison(null);
    };

    return (
        <>
            <h2 className="visualizer-heading"> Activity Controls </h2>
            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                    <input placeholder="ID" value={activityId} onChange={(e) => setActivityId(e.target.value)} className="visualizer-input" />

                    <input type="number" placeholder="Start" value={start} onChange={(e) => setStart(e.target.value)} className="visualizer-input" />

                    <input type="number" placeholder="Finish" value={finish} onChange={(e) => setFinish(e.target.value)} className="visualizer-input" />
                </div>

                <Button onClick={addActivity} variant="success"> Add Activity </Button>
                <Button disabled={isAnimating} onClick={runActivitySelection} variant="success"> Run Algorithm </Button>
                <Button hoverColor="red-500" onClick={clearActivities} variant="danger"> Clear </Button>
            </div>
        </>
    );
}

export default ActivitySelectionControls;