import Button from "../common/Button";
import { useSpeed } from "../../context/SpeedContext";
import { sleep } from "../../utils/sleep";

function StringMatchingControls({
    text,
    setText,
    pattern,
    setPattern,
    startAlgorithm,
    clearAll,
    isAnimating,
}) {

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color:"var(--heading)"
                }}
            >
                Controls
            </h2>

            <div className="space-y-4">

                <input
                    type="text"
                    placeholder="Enter Text"
                    value={text}
                    onChange={(e)=>
                        setText(
                            e.target.value
                        )
                    }
                    className="w-full rounded-xl border px-4 py-3"
                />

                <input
                    type="text"
                    placeholder="Enter Pattern"
                    value={pattern}
                    onChange={(e)=>
                        setPattern(
                            e.target.value
                        )
                    }
                    className="w-full rounded-xl border px-4 py-3"
                />

                <Button
                    disabled={isAnimating}
                    onClick={startAlgorithm}
                >
                    Run
                </Button>

                <Button
                    hoverColor="red-500"
                    onClick={clearAll}
                >
                    Clear
                </Button>

            </div>
        </>
    );
}

export default StringMatchingControls;