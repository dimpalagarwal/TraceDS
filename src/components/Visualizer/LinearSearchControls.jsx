import { useSpeed } from "../../context/SpeedContext";
import Button from "../common/Button";
import { sleep } from "../../utils/sleep";

function LinearSearchControls({
    array,
    setArray,
    inputArray,
    setInputArray,
    target,
    setTarget,
    setActiveIndex,
    result,
    setResult,
    isAnimating,
    setIsAnimating
}) {

    const {speed} = useSpeed();

    const handleBuild = () => {

        if (!inputArray.trim()) return;

        const arr =
            inputArray
                .split(",")
                .map(Number);

        setArray(arr);

        setResult("");
    };

    const handleSearch = async () => {

        if (!target || array.length === 0)
            return;

        setIsAnimating(true);

        setResult("");

        for (let i = 0; i < array.length; i++) {

            setActiveIndex(i);

            await sleep(600, speed);

            if (array[i] === Number(target)) {

                setResult(
                    `Found at Index ${i}`
                );

                setIsAnimating(false);

                return;
            }
        }

        setResult("Element Not Found");

        setActiveIndex(-1);

        setIsAnimating(false);
    };

    const handleClear = () => {

        setArray([]);

        setInputArray("");

        setTarget("");

        setResult("");

        setActiveIndex(-1);
    };

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color: "var(--heading)"
                }}
            >
                Linear Search Controls
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

                    <Button onClick={handleBuild}>
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

export default LinearSearchControls;