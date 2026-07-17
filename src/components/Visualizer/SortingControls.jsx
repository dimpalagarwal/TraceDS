import Button from "../common/Button";

function SortingControls({
    inputArray,
    setInputArray,
    buildArray,
    startSort,
    clearArray,
    isAnimating,
}) {

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color: "var(--heading)",
                }}
            >
                Sorting Controls
            </h2>

            <div className="space-y-4">

                <div className="flex gap-3">

                    <input
                        type="text"
                        placeholder="5,2,8,1,9"
                        value={inputArray}
                        onChange={(e) =>
                            setInputArray(
                                e.target.value
                            )
                        }
                        className="flex-1 rounded-xl border px-4 py-3"
                    />

                    <Button
                        onClick={buildArray}
                    >
                        Build
                    </Button>

                </div>

                <Button
                    disabled={isAnimating}
                    onClick={startSort}
                >
                    Start Sort
                </Button>

                <Button
                    hoverColor="red-500"
                    onClick={clearArray}
                >
                    Clear
                </Button>

            </div>
        </>
    );
}

export default SortingControls;