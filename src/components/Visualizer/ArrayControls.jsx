import Button from "../common/Button";
import { useSpeed } from "../../context/SpeedContext";
import { sleep } from "../../utils/sleep";

function ArrayControls({ value, setValue, index, setIndex, array, setArray, activeIndex, setActiveIndex, isAnimating, setIsAnimating, setAccessValue, shiftIndex,setShiftIndex,operationText,setOperationText}) {
    const { speed } = useSpeed();
    const handleInsert = async () => {
        if (value === "" || index === "") {
            alert("No value Entered")
            return;
        }

        const i = Number(index);
        if (i < 0 || i > array.length) {
            alert("Invalid Index");
            return;
        }

        setIsAnimating(true);
        const temp = [...array];
        temp.push(null);
        setArray([...temp]);
        setOperationText("Creating space for new element...");
        await sleep(600, speed);
        for (let j = temp.length - 2; j >= i; j--) {
            setShiftIndex(j);
            setOperationText(
                `Shifting ${temp[j]} from index ${j} → ${j + 1}`
            );
            await sleep(600, speed);
            temp[j + 1] = temp[j];
            setArray([...temp]);
            await sleep(600, speed);
        }
        setShiftIndex(-1);
        setActiveIndex(i);
        setOperationText(
            `Inserting ${value} at index ${i}`
        );
        await sleep(700, speed);
        temp[i] = Number(value);
        setArray([...temp]);
        await sleep(700, speed);
        setActiveIndex(-1);
        setShiftIndex(-1);
        setOperationText("");
        setValue("");
        setIndex("");
        setIsAnimating(false);
    };

    const handleDelete = async () => {
        if (index === "") return;

        const i = Number(index);
        if (i < 0 || i >= array.length) {
            alert("Invalid Index");
            return;
        }

        setIsAnimating(true);
        const temp = [...array];
        setActiveIndex(i);
        setOperationText(`Deleting ${temp[i]} from index ${i}`);

        await sleep(700, speed);
        for (let j = i; j < temp.length - 1; j++) {
            setShiftIndex(j + 1);
            setOperationText(
                `Shifting ${temp[j + 1]} from index ${j + 1} → ${j}`
            );
            await sleep(600, speed);
            temp[j] = temp[j + 1];
            setArray([...temp]);
            await sleep(600, speed);
        }
        setOperationText("Removing duplicate last element...");
        await sleep(500, speed);
        temp.pop();
        setArray([...temp]);
        await sleep(500, speed);
        setShiftIndex(-1);
        setActiveIndex(-1);
        setOperationText("");
        setIndex("");
        setIsAnimating(false);
    };

    const handleUpdate = async () => {
        if (value === "" || index === "") return;

        const i = Number(index);
        if (i < 0 || i >= array.length) {
            alert("Invalid Index");
            return;
        }

        setIsAnimating(true);
        const temp = [...array];
        setActiveIndex(i);
        setOperationText(
            `Updating index ${i}`
        );
        await sleep(700, speed);
        setOperationText(
            `Replacing ${temp[i]} with ${value}`
        );
        await sleep(700, speed);
        temp[i] = Number(value);
        setArray([...temp]);
        await sleep(700, speed);
        setOperationText("Update completed");
        await sleep(500, speed);
        setOperationText("");
        setActiveIndex(-1);
        setValue("");
        setIndex("");
        setIsAnimating(false);
    };

    const handleAccess = async () => {
        if (index === "") return;

        const i = Number(index);
        if (i < 0 || i >= array.length) {
            alert("Invalid Index");
            return;
        }

        setIsAnimating(true);
        setAccessValue(null);
        setActiveIndex(i);
        await sleep(700, speed);
        const accessedValue = array[i];
        setAccessValue(accessedValue);
        await sleep(500, speed);
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
        if (value === "") return;

        setIsAnimating(true);
        const temp = [...array];
        temp.push(Number(value));
        setArray(temp);
        setActiveIndex(temp.length - 1);
        await sleep(600, speed);
        setActiveIndex(-1);
        setValue("");
        setIsAnimating(false);
    };

    return (
        <>
            <h2 className="visualizer-heading"> Array Controls </h2>
            <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                    <input type="number" placeholder="Enter Value" value={value} onChange={(e) => setValue(e.target.value)} className="visualizer-input" />

                    <input type="number" placeholder="Enter Index" value={index} onChange={(e) => setIndex(e.target.value)} className="visualizer-input" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button disabled={isAnimating} onClick={handleInsert} variant="success"> Insert </Button>
                    <Button disabled={isAnimating} onClick={handleDelete} variant="danger"> Delete </Button>
                    <Button disabled={isAnimating} onClick={handleUpdate} variant="success"> Update </Button>
                    <Button disabled={isAnimating} onClick={handleAccess} variant="success">Access</Button>
                    <Button disabled={isAnimating} onClick={handleClear} variant="danger">Clear</Button>
                    <Button disabled={isAnimating} onClick={handlePushBack} variant="success">Push Back</Button>
                </div>
            </div>
        </>
    );
}

export default ArrayControls;