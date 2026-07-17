import TreeRenderer from "./TreeRenderer";

function HeapCanvas({ heapType, maxHeap, minHeap, activeIndex, peekValue }) {
    const heap = heapType === "max" ? maxHeap : minHeap;
    const isMax = heapType === "max";

    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color: "var(--heading)",
                }}
            >
                {isMax ? "Max" : "Min"} Heap Visualization (Binary Tree)
            </h2>

            <div className="flex justify-center items-start min-h-96">
                {heap.length === 0 ? (
                    <p
                        className="text-lg"
                        style={{
                            color: "var(--muted)",
                        }}
                    >
                        Heap is Empty
                    </p>
                ) : (
                    <div className="w-full">
                        <TreeRenderer 
                            data={heap} 
                            activeIndex={activeIndex}
                            nodeRadius={24}
                            levelHeight={100}
                        />
                    </div>
                )}
            </div>

            {peekValue !== null && (
                <div className="mt-10 text-center">
                    <h3
                        className="text-lg font-semibold"
                        style={{
                            color: "var(--heading)",
                        }}
                    >
                        Root Element ({isMax ? "Max" : "Min"})
                    </h3>

                    <div
                        className="mt-4 inline-block rounded-xl border-2 px-6 py-3"
                        style={{
                            borderColor: "var(--border)",
                        }}
                    >
                        <p style={{ color: "var(--heading)" }} className="font-bold text-lg">
                            {peekValue}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default HeapCanvas;
