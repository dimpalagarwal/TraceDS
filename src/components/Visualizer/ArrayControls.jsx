import Button from "../common/Button";

function ArrayControls({ value, setValue, index, setIndex, array, setArray, activeIndex, setActiveIndex, isAnimating, setIsAnimating, setAccessValue }) {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const handleInsert = async () => {

    if (value === "" || index === "")
        return;

    const i = Number(index);

    if (i < 0 || i > array.length) {
        alert("Invalid Index");
        return;
    }

    setIsAnimating(true);

    const temp = [...array];

    setActiveIndex(i);

    await sleep(400);

    temp.splice(i, 0, Number(value));

    setArray(temp);

    await sleep(400);

    setActiveIndex(-1);

    setValue("");
    setIndex("");

    setIsAnimating(false);
};

    const handleDelete = async () => {

    if (index === "")
        return;

    const i = Number(index);

    if (i < 0 || i >= array.length) {
        alert("Invalid Index");
        return;
    }

    setIsAnimating(true);

    setActiveIndex(i);

    await sleep(500);

    const temp = [...array];

    temp.splice(i, 1);

    setArray(temp);

    await sleep(400);

    setActiveIndex(-1);

    setIndex("");

    setIsAnimating(false);
};

    const handleUpdate = async () => {

    if (value === "" || index === "")
        return;

    const i = Number(index);

    if (i < 0 || i >= array.length) {
        alert("Invalid Index");
        return;
    }

    setIsAnimating(true);

    setActiveIndex(i);

    await sleep(500);

    const temp = [...array];

    temp[i] = Number(value);

    setArray(temp);

    await sleep(500);

    setActiveIndex(-1);

    setValue("");
    setIndex("");

    setIsAnimating(false);
};

    const handleAccess = async () => {

    if (index === "")
        return;

    const i = Number(index);

    if (i < 0 || i >= array.length) {
        alert("Invalid Index");
        return;
    }

    setIsAnimating(true);

    setAccessValue(null);

    setActiveIndex(i);

    await sleep(700);

    const accessedValue = array[i];

console.log(accessedValue);

setAccessValue(accessedValue);

    await sleep(500);

    setActiveIndex(-1);

    setIndex("");

    setIsAnimating(false);
};

    const handleClear = () => {
    setArray([]);
    setAccessValue(null);
    setValue("");
    setIndex("");
};

    const handlePushBack = async () => {

    if (value === "")
        return;

    setIsAnimating(true);

    const temp = [...array];

    temp.push(Number(value));

    setArray(temp);

    setActiveIndex(temp.length - 1);

    await sleep(600);

    setActiveIndex(-1);

    setValue("");

    setIsAnimating(false);
};

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color: "var(--heading)",
                }}
            >
                Array Controls
            </h2>

            <div className="space-y-5">
                <input
                    type="number"
                    placeholder="Enter Value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3 outline-none"
                />

                <input
                    type="number"
                    placeholder="Enter Index"
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3 outline-none"
                />

                <div className="grid grid-cols-2 gap-4">
                    <Button disabled={isAnimating} onClick={handleInsert} hoverColor="emerald-500">
                        Insert
                    </Button>

                    <Button disabled={isAnimating} onClick={handleDelete} hoverColor="red-500">
                        Delete
                    </Button>

                    <Button disabled={isAnimating} onClick={handleUpdate} hoverColor="emerald-500">
                        Update
                    </Button>

                    <Button disabled={isAnimating} onClick={handleAccess} hoverColor="emerald-500">
                        Access
                    </Button>

                    <Button disabled={isAnimating} onClick={handleClear} hoverColor="emerald-500">
                        Clear
                    </Button>

                    <Button disabled={isAnimating} onClick={handlePushBack} hoverColor="emerald-500">
                        Push Back
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ArrayControls;