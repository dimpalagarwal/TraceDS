function HashBucket({
    index,
    values,
    activeBucket,
    activeValue,
}) {

    return (
        <div className="flex items-center mb-6">

            <div
                className={`w-14 h-14 rounded-lg border flex items-center justify-center font-bold
                ${activeBucket === index
                        ? "bg-emerald-500 text-white"
                        : ""
                    }`}
                style={{
                    borderColor: "var(--border)",
                }}
            >
                {index}
            </div>

            <div className="flex items-center ml-4 gap-3">

                {
                    values.map((value, idx) => (

                        <div
                            key={idx}
                            className={`w-14 h-14 rounded-lg border flex items-center justify-center
                            ${activeValue === value
                                    ? "bg-emerald-500 text-white scale-110"
                                    : ""
                                }`}
                            style={{
                                borderColor:
                                    "var(--border)",
                            }}
                        >
                            {value}
                        </div>

                    ))
                }

            </div>

        </div>
    );
}

export default HashBucket;