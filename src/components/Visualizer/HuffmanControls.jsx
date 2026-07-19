import { useSpeed } from "../../context/SpeedContext";
import Button from "../common/Button";
import { sleep } from "../../utils/sleep";

function HuffmanControls({
    characters,
    setCharacters,
    charInput,
    setCharInput,
    freqInput,
    setFreqInput,
    treeRoot,
    setTreeRoot,
    codes,
    setCodes,
    activeNodes,
    setActiveNodes,
    isAnimating,
    setIsAnimating,
}) {

    const {speed} = useSpeed();

    const addCharacter = () => {

        if (
            !charInput.trim() ||
            !freqInput
        )
            return;

        setCharacters([
            ...characters,
            {
                char: charInput,
                freq: Number(freqInput),
            },
        ]);

        setCharInput("");
        setFreqInput("");
    };

    const buildCodes = (
        node,
        code,
        result
    ) => {

        if (!node)
            return;

        if (node.char) {

            result[node.char] =
                code || "0";

            return;
        }

        buildCodes(
            node.left,
            code + "0",
            result
        );

        buildCodes(
            node.right,
            code + "1",
            result
        );
    };

    const buildTree = async () => {

        if (
            characters.length === 0
        )
            return;

        setIsAnimating(true);

        let pq =
            characters.map(c => ({
                char: c.char,
                freq: c.freq,
                value:
                    `${c.char}:${c.freq}`,
                left: null,
                right: null,
            }));

        while (
            pq.length > 1
        ) {

            pq.sort(
                (a,b) =>
                    a.freq - b.freq
            );

            const left =
                pq.shift();

            const right =
                pq.shift();

            setActiveNodes([
                left.value,
                right.value,
            ]);

            await sleep(800, speed);

            const merged = {

                char:null,

                freq:
                    left.freq +
                    right.freq,

                value:
                    String(
                        left.freq +
                        right.freq
                    ),

                left,
                right,
            };

            pq.push(merged);
        }

        const root = pq[0];

        const result = {};

        buildCodes(
            root,
            "",
            result
        );

        setTreeRoot(root);

        setCodes(result);

        setActiveNodes([]);

        setIsAnimating(false);
    };

    const clearAll = () => {

        setCharacters([]);

        setTreeRoot(null);

        setCodes({});

        setActiveNodes([]);

        setCharInput("");

        setFreqInput("");
    };

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color:
                        "var(--heading)"
                }}
            >
                Huffman Controls
            </h2>

            <div className="space-y-4">

                <div className="flex gap-3">

                    <input
                        type="text"
                        placeholder="Character"
                        value={charInput}
                        onChange={(e)=>
                            setCharInput(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border px-4 py-3"
                    />

                    <input
                        type="number"
                        placeholder="Frequency"
                        value={freqInput}
                        onChange={(e)=>
                            setFreqInput(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border px-4 py-3"
                    />

                </div>

                <Button
                    onClick={addCharacter}
                >
                    Add Character
                </Button>

                <Button
                    disabled={isAnimating}
                    onClick={buildTree}
                >
                    Generate Huffman Tree
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

export default HuffmanControls;