import Button from "../common/Button";

function ActivitySelectionControls({
    activities,
    setActivities,
    activityId,
    setActivityId,
    start,
    setStart,
    finish,
    setFinish,
    selectedActivities,
    setSelectedActivities,
    activeActivity,
    setActiveActivity,
    isAnimating,
    setIsAnimating,
}) {

    const sleep = (ms) =>
        new Promise(resolve =>
            setTimeout(resolve,ms)
        );

    const addActivity = () => {

        if (
            !activityId ||
            start === "" ||
            finish === ""
        )
            return;

        setActivities([
            ...activities,
            {
                id: activityId,
                start: Number(start),
                finish: Number(finish),
            }
        ]);

        setActivityId("");
        setStart("");
        setFinish("");
    };

    const runActivitySelection = async () => {

        setIsAnimating(true);

        setSelectedActivities([]);

        const sorted =
            [...activities]
            .sort(
                (a,b) =>
                    a.finish - b.finish
            );

        let lastFinish = -1;

        const selected = [];

        for (
            const activity
            of sorted
        ) {

            setActiveActivity(
                activity.id
            );

            await sleep(800);

            if (
                activity.start >=
                lastFinish
            ) {

                selected.push(
                    activity.id
                );

                setSelectedActivities([
                    ...selected
                ]);

                lastFinish =
                    activity.finish;
            }

            await sleep(500);
        }

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
    };

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color:"var(--heading)"
                }}
            >
                Activity Controls
            </h2>

            <div className="space-y-4">

                <div className="grid grid-cols-3 gap-3">

                    <input
                        placeholder="ID"
                        value={activityId}
                        onChange={(e)=>
                            setActivityId(
                                e.target.value
                            )
                        }
                        className="rounded-xl border px-4 py-3"
                    />

                    <input
                        type="number"
                        placeholder="Start"
                        value={start}
                        onChange={(e)=>
                            setStart(
                                e.target.value
                            )
                        }
                        className="rounded-xl border px-4 py-3"
                    />

                    <input
                        type="number"
                        placeholder="Finish"
                        value={finish}
                        onChange={(e)=>
                            setFinish(
                                e.target.value
                            )
                        }
                        className="rounded-xl border px-4 py-3"
                    />

                </div>

                <Button
                    onClick={addActivity}
                >
                    Add Activity
                </Button>

                <Button
                    disabled={isAnimating}
                    onClick={runActivitySelection}
                >
                    Run Algorithm
                </Button>

                <Button
                    hoverColor="red-500"
                    onClick={clearActivities}
                >
                    Clear
                </Button>

            </div>
        </>
    );
}

export default ActivitySelectionControls;