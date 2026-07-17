import HashBucket from "./HashBucket";

function HashTableCanvas({
    table,
    activeBucket,
    activeValue,
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
                Hash Table Visualization
            </h2>

            {
                table.map(
                    (bucket, index) => (

                        <HashBucket
                            key={index}
                            index={index}
                            values={bucket}
                            activeBucket={activeBucket}
                            activeValue={activeValue}
                        />

                    )
                )
            }

            {
                result && (

                    <div className="mt-10 text-center">

                        <p
                            className="text-lg font-medium"
                            style={{
                                color:
                                    "var(--heading)",
                            }}
                        >
                            Result
                        </p>

                        <div
                            className="mt-3 inline-flex px-6 py-3 rounded-xl border"
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

export default HashTableCanvas;