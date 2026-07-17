function JobSchedulingCanvas({
    jobs,
    selectedJobs,
    activeJobs,
    totalProfit,
}) {

    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color:"var(--heading)"
                }}
            >
                Jobs Visualization
            </h2>

            {
                jobs.length === 0
                ?
                (
                    <p
                        style={{
                            color:"var(--muted)"
                        }}
                    >
                        No Jobs Added
                    </p>
                )
                :
                (
                    <div className="flex flex-wrap gap-4">

{
    jobs.map(job => {

        let bg =
            "transparent";

        let color =
            "var(--heading)";

        if (
            selectedJobs.includes(
                job.id
            )
        ) {

            bg = "#10B981";
            color = "white";
        }

        else if (
            activeJobs === job.id
        ) {

            bg = "#F59E0B";
            color = "white";
        }

        return (
            <div
                key={job.id}
                className="w-40 border rounded-xl p-4 transition-all duration-300"
                style={{
                    background:bg,
                    color,
                    borderColor:
                        "var(--border)"
                }}
            >

                <div className="font-bold">
                    {job.id}
                </div>

                <div>
                    Deadline:
                    {" "}
                    {job.deadline}
                </div>

                <div>
                    Profit:
                    {" "}
                    {job.profit}
                </div>

            </div>
        );
    })
}

</div>
                )
            }

            {
    selectedJobs.length > 0 &&
    (
        <div className="mt-8 text-center">

            <p
                className="text-lg font-medium"
                style={{
                    color:
                        "var(--heading)"
                }}
            >
                Selected Jobs
            </p>

            <div
                className="mt-3 inline-flex px-6 py-3 rounded-xl border"
                style={{
                    borderColor:
                        "var(--border)"
                }}
            >
                {
                    selectedJobs.join(
                        " → "
                    )
                }
            </div>

        </div>
    )
}

{
    totalProfit > 0 &&
    (
        <div className="mt-6 text-center">

            <div
                className="inline-flex px-6 py-3 rounded-xl border"
                style={{
                    borderColor:
                        "var(--border)"
                }}
            >
                Total Profit:
                {" "}
                {totalProfit}
            </div>

        </div>
    )
}
        </>
    );
}

export default JobSchedulingCanvas;