import Button from "../common/Button";

function BSTControls({ bstTree, setBSTTree, value, setValue, activeIndex, setActiveIndex, isAnimating, setIsAnimating, traversalResult, setTraversalResult, balanceResult, setBalanceResult }) {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // BST Node class
    class BSTNode {
        constructor(val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }

    // Convert tree to level-order array for display
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

    // Inorder traversal
    const inorderTraversal = (node, result = []) => {
        if (!node) return result;
        inorderTraversal(node.left, result);
        result.push(node.val);
        inorderTraversal(node.right, result);
        return result;
    };

    // Preorder traversal
    const preorderTraversal = (node, result = []) => {
        if (!node) return result;
        result.push(node.val);
        preorderTraversal(node.left, result);
        preorderTraversal(node.right, result);
        return result;
    };

    // Postorder traversal
    const postorderTraversal = (node, result = []) => {
        if (!node) return result;
        postorderTraversal(node.left, result);
        postorderTraversal(node.right, result);
        result.push(node.val);
        return result;
    };

    // Get all node values in tree
    const getAllNodes = (node, result = []) => {
        if (!node) return result;
        result.push(node.val);
        getAllNodes(node.left, result);
        getAllNodes(node.right, result);
        return result;
    };

    // Check if tree is balanced
    const isBalanced = (node) => {
        if (!node) return { balanced: true, height: -1 };

        const left = isBalanced(node.left);
        if (!left.balanced) return { balanced: false, height: -1 };

        const right = isBalanced(node.right);
        if (!right.balanced) return { balanced: false, height: -1 };

        const heightDiff = Math.abs(left.height - right.height);
        const balanced = heightDiff <= 1;

        return { balanced, height: Math.max(left.height, right.height) + 1 };
    };

    const handleInsert = async () => {
        if (value === "") return;

        setIsAnimating(true);

        const numValue = Number(value);
        let root = bstTree;

        // Check if value already exists
        let temp = root;
        while (temp) {
            if (temp.val === numValue) {
                alert("Value already exists in BST");
                setIsAnimating(false);
                return;
            }
            temp = numValue < temp.val ? temp.left : temp.right;
        }

        // Insert new value
        if (!root) {
            setBSTTree(new BSTNode(numValue));
        } else {
            let current = root;
            while (true) {
                if (numValue < current.val) {
                    if (!current.left) {
                        current.left = new BSTNode(numValue);
                        break;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = new BSTNode(numValue);
                        break;
                    }
                    current = current.right;
                }
            }
            setBSTTree(root);
        }

        await sleep(400);
        setValue("");
        setTraversalResult(null);
        setBalanceResult(null);

        setIsAnimating(false);
    };

    const handleInorder = async () => {
        if (!bstTree) {
            alert("BST is Empty");
            return;
        }

        setIsAnimating(true);

        const result = inorderTraversal(bstTree);
        const allNodes = getAllNodes(bstTree);
        const displayArray = treeToArray(bstTree);

        // Animate through traversal order
        for (let val of result) {
            const idx = displayArray.indexOf(val);
            setActiveIndex(idx);
            await sleep(400);
        }

        setActiveIndex(-1);
        setTraversalResult(`Inorder: ${result.join(" → ")}`);
        await sleep(300);

        setIsAnimating(false);
    };

    const handlePreorder = async () => {
        if (!bstTree) {
            alert("BST is Empty");
            return;
        }

        setIsAnimating(true);

        const result = preorderTraversal(bstTree);
        const displayArray = treeToArray(bstTree);

        for (let val of result) {
            const idx = displayArray.indexOf(val);
            setActiveIndex(idx);
            await sleep(400);
        }

        setActiveIndex(-1);
        setTraversalResult(`Preorder: ${result.join(" → ")}`);
        await sleep(300);

        setIsAnimating(false);
    };

    const handlePostorder = async () => {
        if (!bstTree) {
            alert("BST is Empty");
            return;
        }

        setIsAnimating(true);

        const result = postorderTraversal(bstTree);
        const displayArray = treeToArray(bstTree);

        for (let val of result) {
            const idx = displayArray.indexOf(val);
            setActiveIndex(idx);
            await sleep(400);
        }

        setActiveIndex(-1);
        setTraversalResult(`Postorder: ${result.join(" → ")}`);
        await sleep(300);

        setIsAnimating(false);
    };

    const handleCheckBalance = async () => {
        if (!bstTree) {
            setBalanceResult("BST is Empty");
            return;
        }

        setIsAnimating(true);
        await sleep(300);

        const { balanced } = isBalanced(bstTree);

        setBalanceResult(balanced ? "✓ Tree is Balanced" : "✗ Tree is Not Balanced");
        setActiveIndex(-1);
        await sleep(300);

        setIsAnimating(false);
    };

    const handleDelete = async () => {
        if (value === "") return;

        setIsAnimating(true);

        const numValue = Number(value);

        // Find and delete node
        const deleteNode = (node, val) => {
            if (!node) return null;

            if (val < node.val) {
                node.left = deleteNode(node.left, val);
            } else if (val > node.val) {
                node.right = deleteNode(node.right, val);
            } else {
                // Node to delete found
                if (!node.left) return node.right;
                if (!node.right) return node.left;

                // Node has two children
                let minRight = node.right;
                while (minRight.left) minRight = minRight.left;
                node.val = minRight.val;
                node.right = deleteNode(node.right, minRight.val);
            }
            return node;
        };

        const newRoot = deleteNode(bstTree, numValue);
        if (newRoot === bstTree && bstTree.val === numValue && !bstTree.left && !bstTree.right) {
            setBSTTree(null);
        } else {
            setBSTTree(newRoot);
        }

        await sleep(400);
        setValue("");
        setTraversalResult(null);
        setBalanceResult(null);

        setIsAnimating(false);
    };

    const handleClear = () => {
        setBSTTree(null);
        setTraversalResult(null);
        setBalanceResult(null);
        setValue("");
        setActiveIndex(-1);
    };

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color: "var(--heading)",
                }}
            >
                Binary Search Tree Controls
            </h2>

            <div className="space-y-5">
                <div className="flex gap-3">
                    <input
                        type="number"
                        placeholder="Enter Value"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="flex-1 rounded-xl border px-3 py-2 outline-none"
                    />

                    <div className="w-28">
                        <Button
                            disabled={isAnimating}
                            onClick={handleInsert}
                            hoverColor="emerald-500"
                        >
                            Insert
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button disabled={isAnimating} onClick={handleDelete} hoverColor="red-500">
                        Delete
                    </Button>

                    <Button disabled={isAnimating} onClick={handleInorder} hoverColor="blue-500">
                        Inorder
                    </Button>

                    <Button disabled={isAnimating} onClick={handlePreorder} hoverColor="purple-500">
                        Preorder
                    </Button>

                    <Button disabled={isAnimating} onClick={handlePostorder} hoverColor="pink-500">
                        Postorder
                    </Button>

                    <Button disabled={isAnimating} onClick={handleCheckBalance} hoverColor="yellow-500">
                        Check Balance
                    </Button>
                    <Button disabled={isAnimating} onClick={handleClear} hoverColor="orange-500">
                            Clear
                    </Button>

                    {/* <div className="col-span-2">
                        <Button disabled={isAnimating} onClick={handleClear} hoverColor="orange-500">
                            Clear
                        </Button>
                    </div> */}
                </div>
            </div>

            {traversalResult && (
                <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--bg)", borderLeft: "4px solid #3b82f6" }}>
                    <p style={{ color: "var(--heading)" }} className="font-semibold text-sm break-all">
                        {traversalResult}
                    </p>
                </div>
            )}

            {balanceResult && (
                <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--bg)", borderLeft: balanceResult.includes("✓") ? "4px solid #10b981" : "4px solid #ef4444" }}>
                    <p style={{ color: balanceResult.includes("✓") ? "#10b981" : "#ef4444" }} className="font-semibold">
                        {balanceResult}
                    </p>
                </div>
            )}
        </>
    );
}

export default BSTControls;