import { useSpeed } from "../../context/SpeedContext";
import Button from "../common/Button";
import { sleep } from "../../utils/sleep";

function QueueControls({ queue, setQueue, value, setValue, activeIndex, setActiveIndex, isAnimating, setIsAnimating, frontValue, setFrontValue }) {
    const {speed} = useSpeed();

    const handleEnqueue = async () => {
        if (value === "") return;

        setIsAnimating(true);
        
        const temp = [...queue];
        temp.push(Number(value));
        
        setActiveIndex(temp.length - 1);
        await sleep(500, speed);
        
        setQueue(temp);
        await sleep(400, speed);
        
        setActiveIndex(-1);
        setValue("");
        
        setIsAnimating(false);
    };

    const handleDequeue = async () => {
        if (queue.length === 0) {
            alert("Queue is Empty");
            return;
        }

        setIsAnimating(true);
        
        setActiveIndex(0);
        await sleep(500, speed);
        
        const temp = [...queue];
        const dequeuedValue = temp.shift();
        setFrontValue(dequeuedValue);
        
        setQueue(temp);
        await sleep(400, speed);
        
        setActiveIndex(-1);
        await sleep(300, speed);
        setFrontValue(null);
        
        setIsAnimating(false);
    };

    const handleFront = async () => {
        if (queue.length === 0) {
            alert("Queue is Empty");
            return;
        }

        setIsAnimating(true);
        
        setActiveIndex(0);
        await sleep(400, speed);
        
        setFrontValue(queue[0]);
        await sleep(600, speed);
        
        setActiveIndex(-1);
        await sleep(300, speed);
        setFrontValue(null);
        
        setIsAnimating(false);
    };

    const handleClear = () => {
        setQueue([]);
        setFrontValue(null);
        setValue("");
        setActiveIndex(-1);
    };

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color: "var(--heading)",
                }}
            >
                Queue Controls
            </h2>

            <div className="space-y-5">
                <input
                    type="number"
                    placeholder="Enter Value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3 outline-none"
                />

                <div className="grid grid-cols-2 gap-4">
                    <Button disabled={isAnimating} onClick={handleEnqueue} hoverColor="emerald-500">
                        Enqueue
                    </Button>

                    <Button disabled={isAnimating} onClick={handleDequeue} hoverColor="red-500">
                        Dequeue
                    </Button>

                    <Button disabled={isAnimating} onClick={handleFront} hoverColor="blue-500">
                        Front
                    </Button>

                    <Button disabled={isAnimating} onClick={handleClear} hoverColor="orange-500">
                        Clear
                    </Button>
                </div>
            </div>
        </>
    );
}

export default QueueControls;
