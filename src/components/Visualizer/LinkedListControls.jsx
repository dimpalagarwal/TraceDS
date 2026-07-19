import Button from "../common/Button";
import { useSpeed } from "../../context/SpeedContext";
import { sleep } from "../../utils/sleep";

function LinkedListControls({list,setList,value,setValue,index,setIndex,activeIndex,setActiveIndex,isAnimating,setIsAnimating,setAccessResult}) {
    const {speed} = useSpeed();
    const handleInsert = async () => {
        console.log("Insert Clicked");


    if (value === "" || index === "")
        return;

    const i = Number(index);

    if (i < 0 || i > list.length) {
        alert("Invalid Index");
        return;
    }

    setIsAnimating(true);

    const temp = [...list];

    for (let j = 0; j <= i; j++) {
        setActiveIndex(j);
        await sleep(400, speed);
    }
    temp.splice(i, 0, Number(value));

    setList(temp);

    await sleep(500, speed);

    setActiveIndex(-1);

    setValue("");
    setIndex("");

    setIsAnimating(false);
};

const handleDelete = async () => {

    if (index === "")
        return;

    const i = Number(index);

    if (i < 0 || i >= list.length) {
        alert("Invalid Index");
        return;
    }

    setIsAnimating(true);

    for (let j = 0; j <= i; j++) {
        setActiveIndex(j);
        await sleep(400, speed);
    }

    const temp = [...list];

    temp.splice(i, 1);

    setList(temp);

    await sleep(500, speed);

    setActiveIndex(-1);

    setIndex("");

    setIsAnimating(false);
};

const handleUpdate = async () => {

    if (value === "" || index === "")
        return;

    const i = Number(index);

    if (i < 0 || i >= list.length) {
        alert("Invalid Index");
        return;
    }

    for (let j = 0; j <= i; j++) {
        setActiveIndex(j);
        await sleep(450, speed);
    }

    await sleep(500, speed);

    const temp = [...list];

    temp[i] = Number(value);

    setList(temp);

    await sleep(500, speed);

    setActiveIndex(-1);

    setValue("");
    setIndex("");

    setIsAnimating(false);
};

const handleAccess = async () => {

    if (index === "")
        return;

    const i = Number(index);

    if (i < 0 || i >= list.length) {
        alert("Invalid Index");
        return;
    }

    setIsAnimating(true);

    for (let j = 0; j <= i; j++) {
        setActiveIndex(j);
        await sleep(450, speed);
    }

    setAccessResult({
        index: i,
        value: list[i],
    });

    await sleep(500, speed);

    setActiveIndex(-1);

    setIndex("");

    setIsAnimating(false);
};

const handleClear = () => {

    setList([]);

    setValue("");

    setIndex("");

    setAccessResult(null);

};
    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color: "var(--heading)",
                }}
            >
                Linked List Controls
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

                    <div className="col-span-2">
                        <Button disabled={isAnimating} onClick={handleClear} hoverColor="emerald-500">
                            Clear
                        </Button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default LinkedListControls;