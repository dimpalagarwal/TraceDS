function SortingCanvas({
    array,
    activeIndices,
    sortedIndices,
    currentStep,
    pivotIndex,
    mergeRange,
    heapIndices,
}) {

    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color: "var(--heading)",
                }}
            >
                Sorting Visualization
            </h2>

            {
                array.length === 0
                ?
                (
                    <p
                        style={{
                            color: "var(--muted)",
                        }}
                    >
                        Array is Empty
                    </p>
                )
                :
                (
                    <div className="flex justify-center gap-3 flex-wrap">

                        {
                            array.map((num,index) => {

                                let bg = "transparent";
                                let color =
                                    "var(--heading)";

                                if (
    sortedIndices.includes(index)
) {
    bg = "#10B981";
    color = "white";
}

else if (
    index === pivotIndex
) {
    bg = "#8B5CF6";
    color = "white";
}

else if (
    heapIndices.includes(index)
) {
    bg = "#EF4444";
    color = "white";
}

else if (
    mergeRange.includes(index)
) {
    bg = "#3B82F6";
    color = "white";
}

else if (
    activeIndices.includes(index)
) {
    bg = "#F59E0B";
    color = "white";
}

                                return (
                                    <div
                                        key={index}
                                        className="w-14 h-14 rounded-xl border flex items-center justify-center font-bold transition-all duration-300"
                                        style={{
                                            background: bg,
                                            color,
                                            borderColor:
                                                "var(--border)",
                                        }}
                                    >
                                        {num}
                                    </div>
                                );
                            })
                        }

                    </div>
                )
            }

            {
                currentStep &&
                (
                    <div className="mt-8 text-center">

                        <div
                            className="inline-flex px-6 py-3 rounded-xl border"
                            style={{
                                borderColor:
                                    "var(--border)",
                            }}
                        >
                            {currentStep}
                        </div>

                    </div>
                )
            }
        </>
    );
}

export default SortingCanvas;