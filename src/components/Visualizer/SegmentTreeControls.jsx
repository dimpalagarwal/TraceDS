import Button from "../common/Button";
import { useSpeed } from "../../context/SpeedContext";
import { sleep } from "../../utils/sleep";

function SegmentTreeControls({ array, setArray, root, setRoot, inputArray, setInputArray, left, setLeft, right, setRight, updateIndex, setUpdateIndex, updateValue, setUpdateValue, setQueryResult, highlightNode,setHighlightNode,}) {
    const {speed} = useSpeed();
    const buildTree = (arr, start, end) => {
        if (start === end) {
            return { val: arr[start], start, end, left: null, right: null, };
        }
        const mid = Math.floor((start + end) / 2);
        const leftNode = buildTree(arr, start, mid);
        const rightNode = buildTree(arr, mid + 1, end);

        return { val: leftNode.val + rightNode.val, start, end, left: leftNode, right: rightNode, };
    };

    const handleBuild = () => {
        if (!inputArray.trim()) return;

        const arr = inputArray.split(",").map(Number);
        setArray(arr);
        const tree = buildTree(arr, 0, arr.length - 1);
        setRoot(tree);
    };

    const rangeQuery = (node, l, r) => {
        if (!node) return 0;
        if (node.end < l || node.start > r) return 0;

        if (node.start >= l && node.end <= r) return node.val;

        return (
            rangeQuery(node.left, l, r) + rangeQuery(node.right, l, r)
        );
    };

    const handleQuery = () => {
        if (!root) return;
        const ans = rangeQuery(root, Number(left), Number(right));
        setQueryResult(ans);
    };

    const updateTree = async (node, idx, value) => {
        setHighlightNode(node.val);
        await sleep(700, speed);
        if (
            node.start === idx && node.end === idx
        ) {
            node.val = value;
            setHighlightNode(node.val);
            await sleep(700, speed);
            return;
        }

        const mid = Math.floor((node.start + node.end) / 2);

        if (idx <= mid) await updateTree(node.left, idx, value);
        else await updateTree(node.right, idx, value);
        node.val = node.left.val + node.right.val;

        setHighlightNode(node.val);
        await sleep(700, speed);
    };

    const handleUpdate = async () => {
        if (!root) return;
        const idx = Number(updateIndex);
        const val = Number(updateValue);
        const newRoot = structuredClone(root);
        await updateTree(newRoot, idx, val);

        const newArray = [...array];
        newArray[idx] = val;
        setArray(newArray);
        setRoot(newRoot);

        await sleep(700, speed);
        setHighlightNode(null);
    };

    const handleClear = () => {
        setArray([]);
        setRoot(null);
        setInputArray("");
        setLeft("");
        setRight("");
        setUpdateIndex("");
        setUpdateValue("");
        setQueryResult(null);
    };
    return (
        <>
            <h2 className="text-xl mb-6" style={{ color: "var(--heading)", }}> Segment Tree Controls </h2>
            <div className="space-y-4">
                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="2,4,1,6,8"
                        value={inputArray}
                        onChange={(e) => setInputArray(e.target.value)}
                        className="flex-1 rounded-xl border px-4 py-3"
                    />
                    <Button onClick={handleBuild} className="px-5 rounded-xl border">
                        Build
                    </Button>
                </div>
                <div className="flex gap-3">
                    <input
                        type="number"
                        placeholder="L"
                        value={left}
                        onChange={(e) => setLeft(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3"
                    />
                    <input
                        type="number"
                        placeholder="R"
                        value={right}
                        onChange={(e) => setRight(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3"
                    />
                </div>
                <Button hoverColor="emrald-500" onClick={handleQuery}>
                    Query
                </Button>
                <div className="flex gap-3">
                    <input
                        type="number"
                        placeholder="Index"
                        value={updateIndex}
                        onChange={(e) => setUpdateIndex(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3"
                    />
                    <input
                        type="number"
                        placeholder="Value"
                        value={updateValue}
                        onChange={(e) => setUpdateValue(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3"
                    />
                    <button onClick={handleUpdate} className="w-full rounded-xl border px-4 py-3">
                        Update
                    </button>
                </div>
                <Button hoverColor="red-500" onClick={handleClear}> Clear </Button>
            </div>
        </>
    );
}

export default SegmentTreeControls;