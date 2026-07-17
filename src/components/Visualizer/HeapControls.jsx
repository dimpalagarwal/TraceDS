import Button from "../common/Button";

function HeapControls({ heapType, setHeapType, maxHeap, setMaxHeap, minHeap, setMinHeap, value, setValue, activeIndex, setActiveIndex, isAnimating, setIsAnimating, peekValue, setPeekValue }) {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Helper function to get parent index
    const getParentIndex = (index) => Math.floor((index - 1) / 2);
    const getLeftChildIndex = (index) => 2 * index + 1;
    const getRightChildIndex = (index) => 2 * index + 2;

    // Heapify up (for insertion)
    const heapifyUp = async (arr, index, setActiveIndexFn, isMax = true) => {
        while (index > 0) {
            const parentIndex = getParentIndex(index);
            const shouldSwap = isMax ? arr[index] > arr[parentIndex] : arr[index] < arr[parentIndex];
            
            if (shouldSwap) {
                setActiveIndexFn(index);
                await sleep(300);
                [arr[index], arr[parentIndex]] = [arr[parentIndex], arr[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    };

    // Heapify down (for extraction)
    const heapifyDown = async (arr, index, setActiveIndexFn, isMax = true) => {
        while (true) {
            let extreme = index;
            const leftChild = getLeftChildIndex(index);
            const rightChild = getRightChildIndex(index);

            if (isMax) {
                if (leftChild < arr.length && arr[leftChild] > arr[extreme]) {
                    extreme = leftChild;
                }
                if (rightChild < arr.length && arr[rightChild] > arr[extreme]) {
                    extreme = rightChild;
                }
            } else {
                if (leftChild < arr.length && arr[leftChild] < arr[extreme]) {
                    extreme = leftChild;
                }
                if (rightChild < arr.length && arr[rightChild] < arr[extreme]) {
                    extreme = rightChild;
                }
            }

            if (extreme !== index) {
                setActiveIndexFn(index);
                await sleep(300);
                [arr[index], arr[extreme]] = [arr[extreme], arr[index]];
                index = extreme;
            } else {
                break;
            }
        }
    };

    const currentHeap = heapType === "max" ? maxHeap : minHeap;
    const setCurrentHeap = heapType === "max" ? setMaxHeap : setMinHeap;
    const isMax = heapType === "max";

    const handleInsert = async () => {
        if (value === "") return;

        setIsAnimating(true);

        const temp = [...currentHeap];
        temp.push(Number(value));

        setActiveIndex(temp.length - 1);
        await sleep(400);

        await heapifyUp(temp, temp.length - 1, setActiveIndex, isMax);

        setCurrentHeap(temp);
        await sleep(400);

        setActiveIndex(-1);
        setValue("");

        setIsAnimating(false);
    };

    const handleExtract = async () => {
        if (currentHeap.length === 0) {
            alert("Heap is Empty");
            return;
        }

        setIsAnimating(true);

        const temp = [...currentHeap];
        const extremeValue = temp[0];
        setPeekValue(extremeValue);

        setActiveIndex(0);
        await sleep(400);

        temp[0] = temp[temp.length - 1];
        temp.pop();

        if (temp.length > 0) {
            await heapifyDown(temp, 0, setActiveIndex, isMax);
        }

        setCurrentHeap(temp);
        await sleep(400);

        setActiveIndex(-1);
        await sleep(300);
        setPeekValue(null);

        setIsAnimating(false);
    };

    const handlePeek = async () => {
        if (currentHeap.length === 0) {
            alert("Heap is Empty");
            return;
        }

        setIsAnimating(true);

        setActiveIndex(0);
        await sleep(400);

        setPeekValue(currentHeap[0]);
        await sleep(600);

        setActiveIndex(-1);
        await sleep(300);
        setPeekValue(null);

        setIsAnimating(false);
    };

    const handleClear = () => {
        setCurrentHeap([]);
        setPeekValue(null);
        setValue("");
        setActiveIndex(-1);
    };

    return (
        <>
            <div className="flex gap-3 mb-6">
                <button
                    onClick={() => setHeapType("max")}
                    className="px-4 py-2 rounded-lg border-2 font-semibold transition-all"
                    style={{
                        borderColor: heapType === "max" ? "var(--heading)" : "var(--border)",
                        backgroundColor: heapType === "max" ? "var(--heading)" : "transparent",
                        color: heapType === "max" ? "var(--bg)" : "var(--heading)",
                    }}
                >
                    Max Heap
                </button>
                <button
                    onClick={() => setHeapType("min")}
                    className="px-4 py-2 rounded-lg border-2 font-semibold transition-all"
                    style={{
                        borderColor: heapType === "min" ? "var(--heading)" : "var(--border)",
                        backgroundColor: heapType === "min" ? "var(--heading)" : "transparent",
                        color: heapType === "min" ? "var(--bg)" : "var(--heading)",
                    }}
                >
                    Min Heap
                </button>
            </div>

            <h2
                className="text-xl mb-6"
                style={{
                    color: "var(--heading)",
                }}
            >
                {heapType === "max" ? "Max" : "Min"} Heap Controls
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
                    <Button disabled={isAnimating} onClick={handleInsert} hoverColor="emerald-500">
                        Insert
                    </Button>

                    <Button disabled={isAnimating} onClick={handleExtract} hoverColor="red-500">
                        Extract {heapType === "max" ? "Max" : "Min"}
                    </Button>

                    <Button disabled={isAnimating} onClick={handlePeek} hoverColor="blue-500">
                        Peek Root
                    </Button>

                    <Button disabled={isAnimating} onClick={handleClear} hoverColor="orange-500">
                        Clear
                    </Button>
                </div>
            </div>
        </>
    );
}

export default HeapControls;
