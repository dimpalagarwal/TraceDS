function LinearSearchCanvas({
    array,
    activeIndex,
    result
}) {

    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color: "var(--heading)"
                }}
            >
                Linear Search Visualization
            </h2>

            {
                array.length === 0
                    ?
                    <p
                        style={{
                            color: "var(--muted)"
                        }}
                    >
                        Array is Empty
                    </p>
                    :
                    <div className="flex flex-wrap gap-4 justify-center">

                        {
                            array.map((num, index) => (

                                <div
                                    key={index}
                                    className="w-16 h-16 rounded-xl border flex items-center justify-center text-lg font-bold transition-all duration-300"
                                    style={{
                                        borderColor:
                                            activeIndex === index
                                                ? "#10B981"
                                                : "var(--border)",

                                        background:
                                            activeIndex === index
                                                ? "#10B981"
                                                : "transparent",

                                        color:
                                            activeIndex === index
                                                ? "white"
                                                : "var(--heading)"
                                    }}
                                >
                                    {num}
                                </div>

                            ))
                        }

                    </div>
            }

            {
                result &&

                <div className="mt-8 text-center">

                    <div
                        className="inline-flex px-6 py-3 rounded-xl border"
                        style={{
                            borderColor: "var(--border)"
                        }}
                    >
                        {result}
                    </div>

                </div>
            }
        </>
    );
}

export default LinearSearchCanvas;