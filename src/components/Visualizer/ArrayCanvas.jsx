function ArrayCanvas({ array, activeIndex, accessValue, }) {
    const boxes = array;
    console.log("Canvas:", accessValue);
    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color: "var(--heading)",
                }}
            >
                Array Visualization
            </h2>
            <div className="flex justify-center gap-3 flex-wrap mt-8">

                {array.length === 0 ? (

                    <p
                        className="text-lg"
                        style={{
                            color: "var(--muted)",
                        }}
                    >
                        Array is Empty
                    </p>

                ) : (

                    array.map((item, index) => (

                        <div
                            key={index}
                            className="flex flex-col items-center"
                        >

                            <div
                                className={`w-14 h-14 rounded-lg border flex items-center justify-center
          font-semibold text-lg transition-all duration-300
          ${activeIndex === index
                                        ? "bg-emerald-500 text-white scale-110"
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

                            <span
                                className="mt-2 text-sm"
                                style={{
                                    color: "var(--muted)",
                                }}
                            >
                                {index}
                            </span>

                        </div>

                    ))

                )}

            </div>

            {accessValue !== null && (
                <div
                    className="mt-10 text-center"
                >
                    <p className="text-lg font-medium" style={{color: "var(--heading)",}}>
                        Access Result
                    </p>
                    <div
                        className="mt-3 inline-flex items-center justify-center
            px-6 py-3 rounded-xl border"
                        style={{
                            borderColor: "var(--border)",
                            color: "var(--primary)",
                        }}
                    >
                        Value = {accessValue}
                    </div>
                </div>
            )
            }
        </>
    );
}

export default ArrayCanvas;