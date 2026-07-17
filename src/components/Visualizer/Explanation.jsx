function Explanation({ data }) {

    if (!data) {
        return (
            <p
                style={{
                    color: "var(--muted)",
                }}
            >
                Explanation not available.
            </p>
        );
    }

    return (
        <div className="space-y-10">

            {/* Title & Introduction */}
            <div>

                <h2
                    className="text-3xl font-bold mb-4"
                    style={{
                        color: "var(--heading)",
                    }}
                >
                    {data.title}
                </h2>

                {data.introduction && (
                    <p
                        className="leading-8"
                        style={{
                            color: "var(--text)",
                        }}
                    >
                        {data.introduction}
                    </p>
                )}

            </div>

            {/* Why Needed */}
            {data.whyNeeded && (
                <Section
                    title="Why do we need it?"
                    content={data.whyNeeded}
                />
            )}

            {/* Real World Analogy */}
            {data.realWorldAnalogy && (
                <Section
                    title="Real World Analogy"
                    content={data.realWorldAnalogy}
                />
            )}

            {/* Working */}
            {data.working && (
                <ListSection
                    title="How does it work?"
                    items={data.working}
                    ordered
                />
            )}

            {/* Example */}
            {data.example && (
                <Section
                    title="Example"
                    content={data.example}
                />
            )}

            {/* Visualization Guide */}
            {data.visualizationGuide && (
                <Section
                    title="What to Observe in the Visualization?"
                    content={data.visualizationGuide}
                />
            )}

            {/* Advantages */}
            {data.advantages && (
                <ListSection
                    title="Advantages"
                    items={data.advantages}
                />
            )}

            {/* Disadvantages */}
            {data.disadvantages && (
                <ListSection
                    title="Disadvantages"
                    items={data.disadvantages}
                />
            )}

            {/* Complexity */}
            {data.complexity && (
                <div>

                    <h3
                        className="text-2xl font-semibold mb-4"
                        style={{
                            color: "var(--heading)",
                        }}
                    >
                        Complexity Analysis
                    </h3>

                    <div className="space-y-3">

                        {data.complexity.map(
                            (item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between rounded-xl border px-4 py-3"
                                    style={{
                                        borderColor:
                                            "var(--border)",
                                    }}
                                >
                                    <span>
                                        {item.operation}
                                    </span>

                                    <span>
                                        {item.value}
                                    </span>
                                </div>
                            )
                        )}

                    </div>

                </div>
            )}

            {/* Applications */}
            {data.applications && (
                <ListSection
                    title="Applications"
                    items={data.applications}
                />
            )}

            {/* Key Takeaways */}
            {data.keyTakeaways && (
                <ListSection
                    title="Key Takeaways"
                    items={data.keyTakeaways}
                />
            )}

        </div>
    );
}

function Section({
    title,
    content,
}) {
    return (
        <div>

            <h3
                className="text-2xl font-semibold mb-4"
                style={{
                    color: "var(--heading)",
                }}
            >
                {title}
            </h3>

            <p
                className="leading-8"
                style={{
                    color: "var(--text)",
                }}
            >
                {content}
            </p>

        </div>
    );
}

function ListSection({
    title,
    items,
    ordered = false,
}) {

    const ListTag = ordered
        ? "ol"
        : "ul";

    return (
        <div>

            <h3
                className="text-2xl font-semibold mb-4"
                style={{
                    color: "var(--heading)",
                }}
            >
                {title}
            </h3>

            <ListTag
                className={`space-y-3 ml-6 ${
                    ordered
                        ? "list-decimal"
                        : "list-disc"
                }`}
                style={{
                    color: "var(--text)",
                }}
            >
                {items.map(
                    (item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    )
                )}
            </ListTag>

        </div>
    );
}

export default Explanation;