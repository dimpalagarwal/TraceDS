function ActivitySelectionCanvas({ activities, selectedActivities, activeActivity, comparison }) {
    return (
        <>
            <h2 className="visualizer-heading"> Activity Visualization </h2>
            {activities.length === 0 ?
                (<p style={{ color: "var(--muted)" }}> No Activities Added </p>) : (
                    <div className="flex flex-wrap gap-4">
                        {
                            activities.map(
                                activity => {
                                    let bg = "transparent";
                                    let color = "var(--heading)";
                                    if (selectedActivities.includes(activity.id)) {
                                        bg = "#10B981";
                                        color = "white";
                                    } else if (
                                        activeActivity === activity.id
                                    ) {
                                        bg = "#F59E0B";
                                        color = "white";
                                    }
                                    return (
                                        <div key={activity.id} className="min-w-30 sm:min-w-35 md:w-36 border rounded-xl p-3 sm:p-4 transition-all duration-300" style={{ background: bg, color, borderColor: "var(--border)", }}>
                                            <div > {activity.id} </div>
                                            <div> Start: {" "} {activity.start} </div>
                                            <div> Finish: {" "} {activity.finish} </div>
                                        </div>
                                    );
                                }
                            )
                        }
                    </div>
                )
            }

            {comparison && (
                    <div className="mt-8 rounded-xl border p-5"
                        style={{borderColor: "var(--border)",background: "var(--card)",color: "var(--heading)",}}>
                        <h3 className="font-semibold text-lg mb-4"> Current Comparison </h3>
                        {comparison.decision === "Algorithm Completed" ? (
                            <p className="font-medium"> Algorithm Completed </p> )
                            :
                            (
                                <div className="space-y-2">
                                    <p><strong>Current Activity:</strong>{" "}{comparison.activity}
                                    </p>
                                    <p><strong>Last Selected Finish Time:</strong>{" "}{comparison.lastFinish}</p>
                                    <p><strong>Current Start Time:</strong>{" "}{comparison.currentStart}</p>
                                    <p><strong>Condition:</strong>{" "}{comparison.condition}</p>
                                    <p><strong>Decision:</strong>{" "}{comparison.decision}</p>
                                </div>
                            )
                        }
                    </div>
                )}

            {selectedActivities.length > 0 && (
                <div className="mt-8 text-center">
                    <p className="text-lg font-medium" style={{ color: "var(--heading)" }}>
                        Selected Activities
                    </p>
                    <div
                        className="mt-3 inline-flex px-6 py-3 rounded-xl border" style={{ borderColor: "var(--border)" }}>
                        {selectedActivities.join(" → ")}
                    </div>
                </div>
            )}
        </>
    );
}

export default ActivitySelectionCanvas;