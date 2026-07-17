function BinarySearchCanvas({
    array,
    lowIndex,
    midIndex,
    highIndex,
    result,
}) {

    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color: "var(--heading)",
                }}
            >
                Binary Search Visualization
            </h2>

            {
                array.length === 0
                    ?
                    (
                        <p
                            style={{
                                color:
                                    "var(--muted)",
                            }}
                        >
                            Array is Empty
                        </p>
                    )
                    :
                    (
                        <div className="flex justify-center gap-3 flex-wrap">

                            {
                                array.map(
                                    (
                                        num,
                                        index
                                    ) => {

                                        let bg =
                                            "transparent";

                                        let color =
                                            "var(--heading)";

                                        if (
                                            index === lowIndex
                                        ) {
                                            bg = "#3B82F6";
                                            color = "white";
                                        }

                                        if (
                                            index === highIndex
                                        ) {
                                            bg = "#EF4444";
                                            color = "white";
                                        }

                                        if (
                                            index === midIndex
                                        ) {
                                            bg = "#10B981";
                                            color = "white";
                                        }

                                        return (
                                            <div
                                                key={index}
                                                className="w-14 h-14 rounded-xl border flex items-center justify-center font-bold transition-all duration-300"
                                                style={{
                                                    background:
                                                        bg,
                                                    color,
                                                    borderColor:
                                                        "var(--border)",
                                                }}
                                            >
                                                {num}
                                            </div>
                                        );
                                    }
                                )
                            }

                        </div>
                    )
            }

            {
                midIndex !== -1 &&
                (
                    <div className="mt-6 text-center">

                        <p
                            style={{
                                color:
                                    "var(--heading)",
                            }}
                        >
                            Low = {lowIndex}
                            {" | "}
                            Mid = {midIndex}
                            {" | "}
                            High = {highIndex}
                        </p>

                    </div>
                )
            }

            {
                result &&
                (
                    <div className="mt-8 text-center">

                        <div
                            className="inline-flex px-6 py-3 rounded-xl border"
                            style={{
                                borderColor:
                                    "var(--border)",
                            }}
                        >
                            {result}
                        </div>

                    </div>
                )
            }

        </>
    );
}

export default BinarySearchCanvas;