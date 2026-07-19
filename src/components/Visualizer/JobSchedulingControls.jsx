import Button from "../common/Button";
import { useSpeed } from "../../context/SpeedContext";
import { sleep } from "../../utils/sleep";

function JobSchedulingControls({
    jobs,
    setJobs,
    jobId,
    setJobId,
    deadline,
    setDeadline,
    profit,
    setProfit,
    selectedJobs,
    setSelectedJobs,
    activeJob,
    setActiveJob,
    totalProfit,
    setTotalProfit,
    isAnimating,
    setIsAnimating,
}) {

    const {speed} = useSpeed();

    const addJob = () => {

    if (
        !jobId ||
        deadline === "" ||
        profit === ""
    )
        return;

    setJobs([
        ...jobs,
        {
            id:jobId,
            deadline:Number(deadline),
            profit:Number(profit),
        }
    ]);

    setJobId("");
    setDeadline("");
    setProfit("");
};

    const runJobScheduling = async () => {

    setIsAnimating(true);

    setSelectedJobs([]);

    setTotalProfit(0);

    const sorted =
        [...jobs].sort(
            (a,b) =>
                b.profit - a.profit
        );

    const maxDeadline =
        Math.max(
            ...sorted.map(
                job => job.deadline
            )
        );

    const slots =
        Array(maxDeadline)
        .fill(null);

    let profitSum = 0;

    const selected = [];

    for (
        const job
        of sorted
    ) {

        setActiveJob(
            job.id
        );

        await sleep(800, speed);

        for (
            let slot =
            job.deadline - 1;
            slot >= 0;
            slot--
        ) {

            if (
                slots[slot] === null
            ) {

                slots[slot] =
                    job.id;

                selected.push(
                    job.id
                );

                profitSum +=
                    job.profit;

                setSelectedJobs([
                    ...selected
                ]);

                setTotalProfit(
                    profitSum
                );

                break;
            }
        }

        await sleep(500, speed);
    }

    setActiveJob("");

    setIsAnimating(false);
};

    const clearJobs = () => {

    setJobs([]);

    setJobId("");

    setDeadline("");

    setProfit("");

    setSelectedJobs([]);

    setActiveJob("");

    setTotalProfit(0);
};

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color:"var(--heading)"
                }}
            >
                Job Scheduling
            </h2>

            <div className="space-y-4">

                <div className="grid grid-cols-3 gap-3">

    <input
        placeholder="Job ID"
        value={jobId}
        onChange={(e)=>
            setJobId(
                e.target.value
            )
        }
        className="rounded-xl border px-4 py-3"
    />

    <input
        type="number"
        placeholder="Deadline"
        value={deadline}
        onChange={(e)=>
            setDeadline(
                e.target.value
            )
        }
        className="rounded-xl border px-4 py-3"
    />

    <input
        type="number"
        placeholder="Profit"
        value={profit}
        onChange={(e)=>
            setProfit(
                e.target.value
            )
        }
        className="rounded-xl border px-4 py-3"
    />

</div>

                <Button onClick={addJob}>
    Add Job
</Button>

<Button
    disabled={isAnimating}
    onClick={runJobScheduling}
>
    Run Algorithm
</Button>

<Button
    hoverColor="red-500"
    onClick={clearJobs}
>
    Clear
</Button>

            </div>
        </>
    );
}

export default JobSchedulingControls;