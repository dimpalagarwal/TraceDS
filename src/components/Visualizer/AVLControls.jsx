import Button from "../common/Button";

class AVLNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

function AVLControls({ root, setRoot, value, setValue, rotationType, setRotationType, highlightNode, setHighlightNode, message, setMessage, displayRoot, setDisplayRoot }) {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const height = (node) => {
        return node ? node.height : 0;
    };

    const getBalance = (node) => {
        return node ? height(node.left) - height(node.right) : 0;
    };

    const rightRotate = (y) => {
        const x = y.left;
        const T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = Math.max(height(y.left), height(y.right)) + 1;
        x.height = Math.max(height(x.left), height(x.right)) + 1;
        return x;
    };

    const leftRotate = (x) => {
        const y = x.right;
        const T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = Math.max(height(x.left), height(x.right)) + 1;

        y.height = Math.max(height(y.left), height(y.right)) + 1;
        return y;
    };

    const insertAVL = (node, value) => {
        if (!node) return new AVLNode(value);

        if (value < node.val) node.left = insertAVL(node.left, value);
        else if (value > node.val) node.right = insertAVL(node.right, value);
        else return node;

        node.height = 1 + Math.max(height(node.left), height(node.right));
        const balance = getBalance(node);

        // LL
        if (balance > 1 && value < node.left.val) {
            setHighlightNode(node.val);
            setMessage(`Node ${node.val} is unbalanced. Performing LL Rotation.`);
            setRotationType("LL Rotation");
            return rightRotate(node);
        }

        // RR
        if (balance < -1 && value > node.right.val) {
            setHighlightNode(node.val);
            setMessage(`Node ${node.val} is unbalanced. Performing RR Rotation.`);
            setRotationType("RR Rotation");
            return leftRotate(node);
        }

        // LR
        if (balance > 1 && value > node.left.val) {
            setHighlightNode(node.val);
            setMessage(`Node ${node.val} is unbalanced. Performing LR Rotation.`);
            setRotationType("LR Rotation");
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }

        // RL
        if (balance < -1 && value < node.right.val) {
            setHighlightNode(node.val);
            setMessage(`Node ${node.val} is unbalanced. Performing RL Rotation.`);
            setRotationType("RL Rotation");
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }

        return node;
    };

    const handleInsert = async () => {
        if (value === "") return;
        setRotationType("");
        setMessage("");
        const newRoot = insertAVL( cloneTree(root),Number(value));
        await sleep(1500);
        setRoot(newRoot);
        setDisplayRoot(newRoot);
        await sleep(1000);
        setHighlightNode(null);
        setValue("");
    };

    const handleClear = () => {
        setRoot(null);
        setValue("");
        setRotationType("");
        setHighlightNode(null);
        setMessage("");
    };

    const cloneTree = (node) => {
        if (!node) return null;
        const newNode = new AVLNode(node.val);
        newNode.height = node.height;
        newNode.left = cloneTree(node.left);
        newNode.right = cloneTree(node.right);
        return newNode;
    };

    return (
        <>
            <h2 className="text-xl mb-6" style={{ color: "var(--heading)", }}>
                AVL Controls
            </h2>
            <div className="space-y-5">
                <input
                    type="number"
                    placeholder="Enter Value"
                    value={value}
                    onChange={(e) =>
                        setValue(e.target.value)
                    }
                    className="w-full rounded-xl border px-4 py-3 outline-none"
                />

                <div className="grid grid-cols-2 gap-4">
                    <Button onClick={handleInsert} hoverColor="emerald-500">
                        Insert
                    </Button>

                    <Button onClick={handleClear} hoverColor="red-500">
                        Clear
                    </Button>
                </div>
            </div>
        </>
    );
}

export default AVLControls;