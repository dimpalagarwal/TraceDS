import Button from "../common/Button";

function StackControls({ stack, setStack, value, setValue, activeIndex, setActiveIndex, isAnimating, setIsAnimating, peekValue, setPeekValue }) {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handlePush = async () => {
        if (value === "") return;

        setIsAnimating(true);
        
        const temp = [...stack];
        temp.push(Number(value));
        
        setActiveIndex(temp.length - 1);
        await sleep(500);
        
        setStack(temp);
        await sleep(400);
        
        setActiveIndex(-1);
        setValue("");
        setPeekValue(temp[temp.length - 1]);
        await sleep(300);
        setPeekValue(null);
        
        setIsAnimating(false);
    };

    const handlePop = async () => {
        if (stack.length === 0) {
            alert("Stack is Empty");
            return;
        }

        setIsAnimating(true);
        
        setActiveIndex(stack.length - 1);
        await sleep(500);
        
        const temp = [...stack];
        const poppedValue = temp.pop();
        setPeekValue(poppedValue);
        
        setStack(temp);
        await sleep(400);
        
        setActiveIndex(-1);
        await sleep(300);
        setPeekValue(null);
        
        setIsAnimating(false);
    };

    const handlePeek = async () => {
        if (stack.length === 0) {
            alert("Stack is Empty");
            return;
        }

        setIsAnimating(true);
        
        setActiveIndex(stack.length - 1);
        await sleep(400);
        
        setPeekValue(stack[stack.length - 1]);
        await sleep(600);
        
        setActiveIndex(-1);
        await sleep(300);
        setPeekValue(null);
        
        setIsAnimating(false);
    };

    const handleClear = () => {
        setStack([]);
        setPeekValue(null);
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
                Stack Controls
            </h2>

            <div className="space-y-5">
                <input
                    type="number"
                    placeholder="Enter Value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3 outline-none"
                />

                <div className="grid grid-cols-2 gap-4">
                    <Button disabled={isAnimating} onClick={handlePush} hoverColor="emerald-500">
                        Push
                    </Button>

                    <Button disabled={isAnimating} onClick={handlePop} hoverColor="red-500">
                        Pop
                    </Button>

                    <Button disabled={isAnimating} onClick={handlePeek} hoverColor="emerald-500">
                        Peek
                    </Button>

                    <Button disabled={isAnimating} onClick={handleClear} hoverColor="red-500">
                        Clear
                    </Button>
                </div>
            </div>
        </>
    );
}

export default StackControls;
