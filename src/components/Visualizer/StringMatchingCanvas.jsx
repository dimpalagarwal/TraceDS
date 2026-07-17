function StringMatchingCanvas({
    text,
    pattern,
    activeTextIndex,
    activePatternIndex,
    activeWindow,
    matchedIndices,
    currentStep,
    lps,
    hashes,
}) {

    const renderString = (
        str,
        activeIndex,
        matched = []
    ) => {

        return (
            <div className="flex gap-2 flex-wrap">

                {
                    str.split("").map(
                        (ch,index) => {

                            let bg =
                                "transparent";

                            let color =
                                "var(--heading)";

                            if (
    matched.includes(index)
) {

    bg = "#10B981";
    color = "white";
}

else if (
    activeWindow?.includes(index)
) {

    bg = "#F59E0B";
    color = "white";
}

else if (
    index === activeIndex
) {

    bg = "#F59E0B";
    color = "white";
}

                            return (
                                <div
                                    key={index}
                                    className="w-12 h-12 rounded-xl border flex items-center justify-center font-bold transition-all duration-300"
                                    style={{
                                        background:bg,
                                        color,
                                        borderColor:
                                            "var(--border)",
                                    }}
                                >
                                    {ch}
                                </div>
                            );
                        }
                    )
                }

            </div>
        );
    };

    return (
        <>
            <h2
                className="text-xl mb-8"
                style={{
                    color:"var(--heading)"
                }}
            >
                Visualization
            </h2>

            <div className="space-y-8">

                <div>

                    <p
                        className="mb-3 font-medium"
                        style={{
                            color:"var(--heading)"
                        }}
                    >
                        Text
                    </p>

                    {
                        renderString(
                            text,
                            activeTextIndex,
                            matchedIndices
                        )
                    }

                </div>

                <div>

                    <p
                        className="mb-3 font-medium"
                        style={{
                            color:"var(--heading)"
                        }}
                    >
                        Pattern
                    </p>

                    {
                        renderString(
                            pattern,
                            activePatternIndex
                        )
                    }

                </div>

                {
                    lps.length > 0 &&
                    (
                        <div>

                            <p
                                className="mb-3 font-medium"
                                style={{
                                    color:"var(--heading)"
                                }}
                            >
                                LPS Array
                            </p>

                            <div className="flex gap-2">

                                {
                                    lps.map(
                                        (num,index) => (
                                            <div
                                                key={index}
                                                className="w-12 h-12 rounded-xl border flex items-center justify-center"
                                            >
                                                {num}
                                            </div>
                                        )
                                    )
                                }

                            </div>

                        </div>
                    )
                }

                {
                    Object.keys(hashes).length > 0 &&
                    (
                        <div
                            className="border rounded-xl p-4"
                            style={{
                                borderColor:
                                    "var(--border)"
                            }}
                        >
                            <div>
                                Pattern Hash:
                                {" "}
                                {
                                    hashes.patternHash
                                }
                            </div>

                            <div>
                                Window Hash:
                                {" "}
                                {
                                    hashes.windowHash
                                }
                            </div>
                        </div>
                    )
                }

                {
                    currentStep &&
                    (
                        <div
                            className="inline-flex px-6 py-3 rounded-xl border"
                            style={{
                                borderColor:
                                    "var(--border)"
                            }}
                        >
                            {currentStep}
                        </div>
                    )
                }

            </div>
        </>
    );
}

export default StringMatchingCanvas;