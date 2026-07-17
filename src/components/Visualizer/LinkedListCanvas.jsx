import LinkedListNode from "./LinkedListNode";
function LinkedListCanvas({ list, activeIndex, accessResult }) {
    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color: "var(--heading)"
                }}
            >
                Linked List Visualization
            </h2>
            {
                list.length === 0
                    ?
                    <p
                        style={{
                            color: "var(--muted)"
                        }}
                    >
                        Linked List is Empty
                    </p>
                    :
                    <div className="flex items-center flex-wrap gap-y-6">
                        {
                            list.map((node, index) => (
                                <LinkedListNode
                                    key={index}
                                    value={node}
                                    active={activeIndex === index}
                                    isLast={index === list.length - 1}
                                />
                            ))
                        }
                    </div>
            }

            {accessResult && (

                <div className="mt-10 text-center">

                    <h3
                        className="text-lg font-semibold"
                        style={{
                            color: "var(--heading)",
                        }}
                    >
                        Access Result
                    </h3>

                    <div
                        className="mt-4 inline-block rounded-xl border px-6 py-3"
                        style={{
                            borderColor: "var(--border)",
                        }}
                    >
                        <p>Index : {accessResult.index}</p>
                        <p>Value : {accessResult.value}</p>
                    </div>

                </div>

            )}
        </>
    );
}

export default LinkedListCanvas;