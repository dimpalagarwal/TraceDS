import TreeRenderer from "./TreeRenderer";

function BSTCanvas({ bstTree, activeIndex, traversalResult, balanceResult }) {
    // Convert tree to array for display
    const treeToArray = (root) => {
        if (!root) return [];
        const result = [];
        const queue = [root];

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return result;
    };

    const displayArray = treeToArray(bstTree);

    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color: "var(--heading)",
                }}
            >
                Binary Search Tree Visualization
            </h2>

            <div className="flex justify-center items-start min-h-96">
                {!bstTree || displayArray.length === 0 ? (
                    <p
                        className="text-lg"
                        style={{
                            color: "var(--muted)",
                        }}
                    >
                        BST is Empty
                    </p>
                ) : (
                    <div className="w-full">
                        <TreeRenderer
                            root={bstTree}
                            activeIndex={activeIndex}
                            nodeRadius={24}
                            levelHeight={100}
                        />
                    </div>
                )}
            </div>

            {traversalResult && (
                <div className="mt-10 text-center">
                    <h3
                        className="text-lg font-semibold"
                        style={{
                            color: "var(--heading)",
                        }}
                    >
                        Traversal Order
                    </h3>

                    <div
                        className="mt-4 inline-block rounded-xl border-2 px-6 py-3 max-w-md break-all"
                        style={{
                            borderColor: "var(--border)",
                        }}
                    >
                        <p style={{ color: "var(--heading)" }} className="font-mono text-sm">
                            {traversalResult}
                        </p>
                    </div>
                </div>
            )}

            {balanceResult && (
                <div className="mt-10 text-center">
                    <h3
                        className="text-lg font-semibold"
                        style={{
                            color: "var(--heading)",
                        }}
                    >
                        Balance Status
                    </h3>

                    <div
                        className="mt-4 inline-block rounded-xl border-2 px-6 py-3"
                        style={{
                            borderColor: balanceResult.includes("✓") ? "#10b981" : "#ef4444",
                            backgroundColor: balanceResult.includes("✓") ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                        }}
                    >
                        <p style={{ color: balanceResult.includes("✓") ? "#10b981" : "#ef4444" }} className="font-bold text-lg">
                            {balanceResult}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default BSTCanvas;
