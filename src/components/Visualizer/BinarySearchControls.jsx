import Button from "../common/Button";

function BinarySearchControls({
    array,
    setArray,
    inputArray,
    setInputArray,
    target,
    setTarget,
    setLowIndex,
    setMidIndex,
    setHighIndex,
    setResult,
    isAnimating,
    setIsAnimating,
}) {

    const sleep = (ms) =>
        new Promise(resolve =>
            setTimeout(resolve, ms)
        );

    const handleBuild = () => {

        if (!inputArray.trim())
            return;

        const arr =
            inputArray
                .split(",")
                .map(Number)
                .sort((a, b) => a - b);

        setArray(arr);

        setResult("");
    };

    const handleSearch = async () => {

        if (
            array.length === 0 ||
            target === ""
        )
            return;

        setIsAnimating(true);

        setResult("");

        let low = 0;
        let high = array.length - 1;

        while (low <= high) {

            const mid =
                Math.floor(
                    (low + high) / 2
                );

            setLowIndex(low);
            setMidIndex(mid);
            setHighIndex(high);

            await sleep(1000);

            if (
                array[mid] === Number(target)
            ) {

                setResult(
                    `Found at Index ${mid}`
                );

                setIsAnimating(false);

                return;
            }

            if (
                array[mid] <
                Number(target)
            ) {

                low = mid + 1;
            }
            else {

                high = mid - 1;
            }
        }

        setResult("Element Not Found");

        setIsAnimating(false);
    };

    const handleClear = () => {

        setArray([]);
        setInputArray("");
        setTarget("");

        setLowIndex(-1);
        setMidIndex(-1);
        setHighIndex(-1);

        setResult("");
    };

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color: "var(--heading)",
                }}
            >
                Binary Search Controls
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
                        onClick={handleBuild}
                    >
                        Build
                    </Button>

                </div>

                <div className="flex gap-3">

                    <input
                        type="number"
                        placeholder="Target"
                        value={target}
                        onChange={(e) =>
                            setTarget(
                                e.target.value
                            )
                        }
                        className="flex-1 rounded-xl border px-4 py-3"
                    />

                    <Button
                        disabled={isAnimating}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>

                </div>

                <Button
                    hoverColor="red-500"
                    onClick={handleClear}
                >
                    Clear
                </Button>

            </div>
        </>
    );
}

export default BinarySearchControls;