function StackCanvas({ stack, activeIndex, peekValue, pivotIndex,mergeRange,heapIndices}) {
    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color: "var(--heading)",
                }}
            >
                Stack Visualization
            </h2>

            <div className="flex justify-center items-end gap-0 min-h-96">
                {stack.length === 0 ? (
                    <p
                        className="text-lg"
                        style={{
                            color: "var(--muted)",
                        }}
                    >
                        Stack is Empty
                    </p>
                ) : (
                    <div className="flex flex-col-reverse gap-2">
                        {stack.map((item, index) => (
                            <div key={index} className="relative">
                                <div
                                    className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center
                                    font-bold text-lg transition-all duration-300 relative
                                    ${activeIndex === index
                                            ? "bg-emerald-500 text-white scale-110 shadow-lg"
                                            : ""
                                        }`}
                                    style={{
                                        borderColor: "var(--border)",
                                        color:
                                            activeIndex === index
                                                ? "white"
                                                : "var(--heading)",
                                    }}
                                >
                                    {item}
                                </div>

                                {index === stack.length - 1 && (
                                    <div className="absolute -top-8 left-0 right-0 text-center">
                                        <span
                                            className="text-xs font-semibold px-2 py-1 rounded bg-blue-500 text-white"
                                            style={{
                                                background: "var(--heading)",
                                                color: "var(--bg)",
                                            }}
                                        >
                                            TOP
                                        </span>
                                    </div>
                                )}

                                {peekValue === item && index === stack.length - 1 && (
                                    <div className="absolute -right-28 top-0 bottom-0 flex items-center">
                                        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap"
                                            style={{
                                                background: "var(--heading)",
                                                color: "var(--bg)",
                                                boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
                                            }}
                                        >
                                            Peek: {peekValue}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {peekValue !== null && (
                <div className="mt-10 text-center">
                    <p style={{ color: "var(--muted)" }} className="text-sm">
                        👆 Peek value shown next to TOP element
                    </p>
                </div>
            )}
        </>
    );
}

export default StackCanvas;
