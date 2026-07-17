function ActivitySelectionCanvas({
    activities,
    selectedActivities,
    activeActivity,
}) {

    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color:"var(--heading)"
                }}
            >
                Activity Visualization
            </h2>

            {
                activities.length === 0
                ?
                (
                    <p
                        style={{
                            color:"var(--muted)"
                        }}
                    >
                        No Activities Added
                    </p>
                )
                :
                (
                    <div className="flex flex-wrap gap-4">

                        {
                            activities.map(
                                activity => {

                                    let bg =
                                        "transparent";

                                    let color =
                                        "var(--heading)";

                                    if (
                                        selectedActivities.includes(
                                            activity.id
                                        )
                                    ) {

                                        bg =
                                            "#10B981";

                                        color =
                                            "white";
                                    }

                                    else if (
                                        activeActivity ===
                                        activity.id
                                    ) {

                                        bg =
                                            "#F59E0B";

                                        color =
                                            "white";
                                    }

                                    return (
                                        <div
                                            key={
                                                activity.id
                                            }
                                            className="w-36 border rounded-xl p-4 transition-all duration-300"
                                            style={{
                                                background:bg,
                                                color,
                                                borderColor:
                                                    "var(--border)",
                                            }}
                                        >

                                            <div className="font-bold">
                                                {
                                                    activity.id
                                                }
                                            </div>

                                            <div>
                                                Start:
                                                {" "}
                                                {
                                                    activity.start
                                                }
                                            </div>

                                            <div>
                                                Finish:
                                                {" "}
                                                {
                                                    activity.finish
                                                }
                                            </div>

                                        </div>
                                    );
                                }
                            )
                        }

                    </div>
                )
            }

            {
                selectedActivities.length > 0 &&
                (
                    <div className="mt-8 text-center">

                        <p
                            className="text-lg font-medium"
                            style={{
                                color:"var(--heading)"
                            }}
                        >
                            Selected Activities
                        </p>

                        <div
                            className="mt-3 inline-flex px-6 py-3 rounded-xl border"
                            style={{
                                borderColor:
                                    "var(--border)"
                            }}
                        >
                            {
                                selectedActivities.join(
                                    " → "
                                )
                            }
                        </div>

                    </div>
                )
            }
        </>
    );
}

export default ActivitySelectionCanvas;