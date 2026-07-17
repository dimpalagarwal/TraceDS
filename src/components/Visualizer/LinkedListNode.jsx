import { ArrowRight } from "lucide-react";

function LinkedListNode({value,isLast,active,}) {
    return (
        <div className="flex items-center">
            <div
                className={`flex rounded-lg border overflow-hidden transition-all duration-300
                ${active ? "scale-110" : ""}`}
                style={{
                    borderColor: active
                        ? "#10B981"
                        : "var(--border)"
                }}
            >
                <div
                    className="w-16 h-14 flex items-center justify-center font-bold"
                >
                    {value}
                </div>
                <div
                    className="w-10 h-14 border-l flex items-center justify-center"
                    style={{
                        borderColor: "var(--border)"
                    }}
                >
                    •
                </div>
            </div>
            {
                !isLast &&
                <ArrowRight
                    size={22}
                    className="mx-3"
                />
            }
        </div>
    );
}

export default LinkedListNode;