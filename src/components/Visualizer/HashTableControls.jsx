import Button from "../common/Button";

function HashTableControls({
    table,
    setTable,
    value,
    setValue,
    activeBucket,
    setActiveBucket,
    activeValue,
    setActiveValue,
    result,
    setResult,
    isAnimating,
    setIsAnimating,
    tableSize,
}) {

    const sleep = (ms) =>
        new Promise((resolve) =>
            setTimeout(resolve, ms)
        );

    const hash = (value) =>
        value % tableSize;

    const handleInsert = async () => {

        if (value === "")
            return;

        setIsAnimating(true);

        const num = Number(value);

        const bucket = hash(num);

        setResult("");

        setActiveBucket(bucket);

        await sleep(700);

        const newTable = [...table];

        newTable[bucket] = [
            ...newTable[bucket],
            num,
        ];

        setTable(newTable);

        setActiveValue(num);

        await sleep(700);

        setActiveBucket(-1);
        setActiveValue(null);

        setValue("");

        setIsAnimating(false);
    };

    const handleFind = async () => {

        if (value === "")
            return;

        setIsAnimating(true);

        const num = Number(value);

        const bucket = hash(num);

        setResult("");

        setActiveBucket(bucket);

        await sleep(700);

        let found = false;

        for (const element of table[bucket]) {

            setActiveValue(element);

            await sleep(600);

            if (element === num) {

                found = true;

                break;
            }
        }

        setResult(
            found
                ? "Value Found"
                : "Value Not Found"
        );

        setActiveBucket(-1);
        setActiveValue(null);

        setIsAnimating(false);
    };

    const handleAccess = async () => {

        if (value === "")
            return;

        setIsAnimating(true);

        const num = Number(value);

        const bucket = hash(num);

        setResult("");

        setActiveBucket(bucket);

        await sleep(700);

        setResult(
            `Hash(${num}) = ${bucket}`
        );

        await sleep(700);

        setActiveBucket(-1);

        setIsAnimating(false);
    };

    const handleDelete = async () => {

        if (value === "")
            return;

        setIsAnimating(true);

        const num = Number(value);

        const bucket = hash(num);

        setResult("");

        setActiveBucket(bucket);

        await sleep(700);

        const newTable = [...table];

        let found = false;

        for (
            let i = 0;
            i < newTable[bucket].length;
            i++
        ) {

            setActiveValue(
                newTable[bucket][i]
            );

            await sleep(600);

            if (
                newTable[bucket][i] === num
            ) {

                newTable[bucket].splice(
                    i,
                    1
                );

                found = true;

                break;
            }
        }

        setTable(newTable);

        setResult(
            found
                ? "Value Deleted"
                : "Value Not Found"
        );

        setActiveBucket(-1);
        setActiveValue(null);

        setValue("");

        setIsAnimating(false);
    };

    const handleClear = () => {

        setTable(
            Array.from(
                { length: tableSize },
                () => []
            )
        );

        setValue("");

        setResult("");

        setActiveBucket(-1);

        setActiveValue(null);
    };

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color: "var(--heading)",
                }}
            >
                Hash Table Controls
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

                    <Button
                        disabled={isAnimating}
                        onClick={handleInsert}
                    >
                        Insert
                    </Button>

                    <Button
                        disabled={isAnimating}
                        onClick={handleDelete}
                        hoverColor="red-500"
                    >
                        Delete
                    </Button>

                    <Button
                        disabled={isAnimating}
                        onClick={handleFind}
                    >
                        Find
                    </Button>

                    <Button
                        disabled={isAnimating}
                        onClick={handleAccess}
                    >
                        Access
                    </Button>

                    <div className="col-span-2">
                        <Button
                            disabled={isAnimating}
                            hoverColor="red-500"
                            onClick={handleClear}
                        >
                            Clear
                        </Button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default HashTableControls;