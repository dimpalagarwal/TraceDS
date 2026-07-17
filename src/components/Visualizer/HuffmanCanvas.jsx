import TreeRenderer from "./TreeRenderer";

function HuffmanCanvas({
    characters,
    treeRoot,
    codes,
}) {

    const convertToTree = (node) => {

    if (!node)
        return null;

    return {

        val: node.char
            ? `${node.char}:${node.freq}`
            : `${node.freq}`,

        left: convertToTree(
            node.left
        ),

        right: convertToTree(
            node.right
        ),
    };
};

    return (
        <>
            <h2
                className="text-xl mb-8"
                style={{
                    color:"var(--heading)"
                }}
            >
                Huffman Visualization
            </h2>

            {
    characters.length > 0 &&
    (
        <div
            className="mb-8 rounded-xl border p-4"
            style={{
                borderColor:"var(--border)"
            }}
        >
            <h3
                className="font-semibold mb-3"
                style={{
                    color:"var(--heading)"
                }}
            >
                Characters
            </h3>

            <div className="space-y-2">

                {
                    characters.map(
                        (item,index) => (
                            <div
                                key={index}
                                className="flex justify-between"
                            >
                                <span>{item.char}</span>
                                <span>{item.freq}</span>
                            </div>
                        )
                    )
                }

            </div>
        </div>
    )
}

            {
                !treeRoot
                ?
                (
                    <p
                        style={{
                            color:
                            "var(--muted)"
                        }}
                    >
                        Generate a Huffman Tree
                    </p>
                )
                :
                (
                    <>
                        <div
    className="rounded-xl border p-6"
    style={{
        borderColor:"var(--border)"
    }}
>

    <h3
        className="text-lg font-semibold mb-6"
        style={{
            color:"var(--heading)"
        }}
    >
        Huffman Tree
    </h3>

    <TreeRenderer
        root={
            convertToTree(
                treeRoot
            )
        }
    />

</div>

                        <div className="mt-8">

                            <h3
                                className="text-xl font-semibold mb-4"
                                style={{
                                    color:
                                    "var(--heading)"
                                }}
                            >
                                Generated Codes
                            </h3>

                            <div className="space-y-3">

                                {
                                    Object.entries(
                                        codes
                                    ).map(
                                        (
                                            [char,code]
                                        ) => (

                                            <div
                                                key={char}
                                                className="flex justify-between border rounded-xl px-4 py-3"
                                                style={{
                                                    borderColor:
                                                    "var(--border)"
                                                }}
                                            >
                                                <span>
                                                    {char}
                                                </span>

                                                <span>
                                                    {code}
                                                </span>

                                            </div>
                                        )
                                    )
                                }

                            </div>

                        </div>
                    </>
                )
            }
        </>
    );
}

export default HuffmanCanvas;