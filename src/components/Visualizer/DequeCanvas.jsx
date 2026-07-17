function DequeCanvas({ deque, activeIndex, peekValue }) {
    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color: "var(--heading)",
                }}
            >
                Deque Visualization (Double-Ended)
            </h2>

            <div className="flex justify-center items-center gap-0 min-h-96">
                {deque.length === 0 ? (
                    <p
                        className="text-lg"
                        style={{
                            color: "var(--muted)",
                        }}
                    >
                        Deque is Empty
                    </p>
                ) : (
                    <div className="flex gap-2 flex-wrap justify-center">
                        {deque.map((item, index) => (
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

                                {index === 0 && (
                                    <div className="absolute -top-8 left-0 right-0 text-center">
                                        <span
                                            className="text-xs font-semibold px-2 py-1 rounded"
                                            style={{
                                                background: "var(--heading)",
                                                color: "var(--bg)",
                                            }}
                                        >
                                            FRONT
                                        </span>
                                    </div>
                                )}

                                {index === deque.length - 1 && (
                                    <div className="absolute -bottom-8 left-0 right-0 text-center">
                                        <span
                                            className="text-xs font-semibold px-2 py-1 rounded"
                                            style={{
                                                background: "var(--heading)",
                                                color: "var(--bg)",
                                            }}
                                        >
                                            REAR
                                        </span>
                                    </div>
                                )}

                                {peekValue === item && index === 0 && (
                                    <div className="absolute -top-20 left-0 right-0 flex justify-center">
                                        <div className="text-black px-4 py-2 rounded-lg text-sm whitespace-nowrap"
                                            style={{
                                                background: "var(--heading)",
                                                boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
                                            }}
                                        >
                                            Front: {peekValue}
                                        </div>
                                    </div>
                                )}

                                {peekValue === item && index === deque.length - 1 && (
                                    <div className="absolute -bottom-20 left-0 right-0 flex justify-center">
                                        <div className="text-black px-4 py-2 rounded-lg text-sm whitespace-nowrap"
                                            style={{
                                                background: "var(--heading)",
                                                boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
                                            }}
                                        >
                                            Rear: {peekValue}
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
                        👆 Peek value shown above/below respective element
                    </p>
                </div>
            )}
        </>
    );
}

export default DequeCanvas;
