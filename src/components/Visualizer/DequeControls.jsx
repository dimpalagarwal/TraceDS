import Button from "../common/Button";

function DequeControls({ deque, setDeque, value, setValue, activeIndex, setActiveIndex, isAnimating, setIsAnimating, peekValue, setPeekValue }) {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleInsertFront = async () => {
        if (value === "") return;

        setIsAnimating(true);
        
        const temp = [Number(value), ...deque];
        
        setActiveIndex(0);
        await sleep(500);
        
        setDeque(temp);
        await sleep(400);
        
        setActiveIndex(-1);
        setValue("");
        
        setIsAnimating(false);
    };

    const handleInsertRear = async () => {
        if (value === "") return;

        setIsAnimating(true);
        
        const temp = [...deque];
        temp.push(Number(value));
        
        setActiveIndex(temp.length - 1);
        await sleep(500);
        
        setDeque(temp);
        await sleep(400);
        
        setActiveIndex(-1);
        setValue("");
        
        setIsAnimating(false);
    };

    const handleDeleteFront = async () => {
        if (deque.length === 0) {
            alert("Deque is Empty");
            return;
        }

        setIsAnimating(true);
        
        setActiveIndex(0);
        await sleep(500);
        
        const temp = [...deque];
        temp.shift();
        setPeekValue(deque[0]);
        
        setDeque(temp);
        await sleep(400);
        
        setActiveIndex(-1);
        await sleep(300);
        setPeekValue(null);
        
        setIsAnimating(false);
    };

    const handleDeleteRear = async () => {
        if (deque.length === 0) {
            alert("Deque is Empty");
            return;
        }

        setIsAnimating(true);
        
        setActiveIndex(deque.length - 1);
        await sleep(500);
        
        const temp = [...deque];
        temp.pop();
        setPeekValue(deque[deque.length - 1]);
        
        setDeque(temp);
        await sleep(400);
        
        setActiveIndex(-1);
        await sleep(300);
        setPeekValue(null);
        
        setIsAnimating(false);
    };

    const handlePeekFront = async () => {
        if (deque.length === 0) {
            alert("Deque is Empty");
            return;
        }

        setIsAnimating(true);
        
        setActiveIndex(0);
        await sleep(400);
        
        setPeekValue(deque[0]);
        await sleep(600);
        
        setActiveIndex(-1);
        await sleep(300);
        setPeekValue(null);
        
        setIsAnimating(false);
    };

    const handlePeekRear = async () => {
        if (deque.length === 0) {
            alert("Deque is Empty");
            return;
        }

        setIsAnimating(true);
        
        setActiveIndex(deque.length - 1);
        await sleep(400);
        
        setPeekValue(deque[deque.length - 1]);
        await sleep(600);
        
        setActiveIndex(-1);
        await sleep(300);
        setPeekValue(null);
        
        setIsAnimating(false);
    };

    const handleClear = () => {
        setDeque([]);
        setPeekValue(null);
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
                Deque Controls
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
                    <Button disabled={isAnimating} onClick={handleInsertFront} hoverColor="emerald-500">
                        Insert Front
                    </Button>

                    <Button disabled={isAnimating} onClick={handleInsertRear} hoverColor="emerald-500">
                        Insert Rear
                    </Button>

                    <Button disabled={isAnimating} onClick={handleDeleteFront} hoverColor="red-500">
                        Delete Front
                    </Button>

                    <Button disabled={isAnimating} onClick={handleDeleteRear} hoverColor="red-500">
                        Delete Rear
                    </Button>

                    <Button disabled={isAnimating} onClick={handlePeekFront} hoverColor="blue-500">
                        Peek Front
                    </Button>

                    <Button disabled={isAnimating} onClick={handlePeekRear} hoverColor="blue-500">
                        Peek Rear
                    </Button>

                    <div className="col-span-2">
                        <Button disabled={isAnimating} onClick={handleClear} hoverColor="orange-500">
                            Clear
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DequeControls;
