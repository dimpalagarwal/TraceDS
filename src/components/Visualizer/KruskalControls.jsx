import Button from "../common/Button";

function KruskalControls({
    vertices,
    setVertices,
    edges,
    setEdges,
    vertex,
    setVertex,
    from,
    setFrom,
    to,
    setTo,
    weight,
    setWeight,
    activeNodes,
    setActiveNodes,
    activeEdges,
    setActiveEdges,
    result,
    setResult,
    isAnimating,
    setIsAnimating,
}) {

    const sleep = (ms) =>
        new Promise(resolve =>
            setTimeout(resolve, ms)
        );

    const addVertex = () => {

        if (!vertex.trim())
            return;

        if (
            vertices.some(
                v => v.id === vertex
            )
        ) {
            alert("Vertex already exists");
            return;
        }

        const index =
            vertices.length;

        const angle =
            (2 * Math.PI * index) / 10;

        const x =
            300 +
            180 * Math.cos(angle);

        const y =
            250 +
            180 * Math.sin(angle);

        setVertices([
            ...vertices,
            {
                id: vertex,
                value: vertex,
                x,
                y,
            },
        ]);

        setVertex("");
    };

    const addEdge = () => {

        if (
            !from ||
            !to ||
            !weight
        ) {
            return;
        }

        const edgeExists =
            edges.some(
                edge =>
                    (
                        edge.from === from &&
                        edge.to === to
                    )
                    ||
                    (
                        edge.from === to &&
                        edge.to === from
                    )
            );

        if (edgeExists)
            return;

        setEdges([
            ...edges,
            {
                from,
                to,
                weight:
                    Number(weight),
            },
        ]);

        setFrom("");
        setTo("");
        setWeight("");
    };

    const findParent = (
        parent,
        node
    ) => {

        if (
            parent[node] !== node
        ) {

            parent[node] =
                findParent(
                    parent,
                    parent[node]
                );
        }

        return parent[node];
    };

    const unionSet = (
        parent,
        a,
        b
    ) => {

        const pa =
            findParent(
                parent,
                a
            );

        const pb =
            findParent(
                parent,
                b
            );

        if (pa !== pb) {
            parent[pb] = pa;
        }
    };

    const runKruskal = async () => {

        setIsAnimating(true);

        setResult("");

        setActiveNodes([]);

        setActiveEdges([]);

        const sortedEdges =
            [...edges].sort(
                (a, b) =>
                    a.weight -
                    b.weight
            );

        const parent = {};

        vertices.forEach(v => {
            parent[v.id] =
                v.id;
        });

        const mstEdges = [];

        let totalCost = 0;

        for (
            const edge
            of sortedEdges
        ) {

            const p1 =
                findParent(
                    parent,
                    edge.from
                );

            const p2 =
                findParent(
                    parent,
                    edge.to
                );

            if (p1 !== p2) {

                unionSet(
                    parent,
                    edge.from,
                    edge.to
                );

                mstEdges.push(
                    edge
                );

                totalCost +=
                    edge.weight;

                setActiveEdges(
                    [...mstEdges]
                );

                setActiveNodes(
                    [
                        ...new Set(
                            mstEdges.flatMap(
                                e => [
                                    e.from,
                                    e.to,
                                ]
                            )
                        ),
                    ]
                );

                await sleep(1000);
            }
        }

        setResult(
            `MST Cost = ${totalCost}`
        );

        setIsAnimating(false);
    };

    const clearGraph = () => {

        setVertices([]);

        setEdges([]);

        setVertex("");

        setFrom("");

        setTo("");

        setWeight("");

        setActiveNodes([]);

        setActiveEdges([]);

        setResult("");
    };

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color:
                        "var(--heading)",
                }}
            >
                Kruskal Controls
            </h2>

            <div className="space-y-4">

                <div className="flex gap-3">

                    <input
                        type="text"
                        placeholder="Vertex"
                        value={vertex}
                        onChange={(e) =>
                            setVertex(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border px-4 py-3"
                    />

                    <Button
                        onClick={addVertex}
                    >
                        Add
                    </Button>

                </div>

                <div className="grid grid-cols-3 gap-3">

                    <input
                        type="text"
                        placeholder="From"
                        value={from}
                        onChange={(e) =>
                            setFrom(
                                e.target.value
                            )
                        }
                        className="rounded-xl border px-4 py-3"
                    />

                    <input
                        type="text"
                        placeholder="To"
                        value={to}
                        onChange={(e) =>
                            setTo(
                                e.target.value
                            )
                        }
                        className="rounded-xl border px-4 py-3"
                    />

                    <input
                        type="number"
                        placeholder="Weight"
                        value={weight}
                        onChange={(e) =>
                            setWeight(
                                e.target.value
                            )
                        }
                        className="rounded-xl border px-4 py-3"
                    />

                </div>

                <Button
                    onClick={addEdge}
                >
                    Add Edge
                </Button>

                <Button
                    disabled={isAnimating}
                    onClick={runKruskal}
                >
                    Run Kruskal
                </Button>

                <Button
                    hoverColor="red-500"
                    onClick={clearGraph}
                >
                    Clear
                </Button>

            </div>
        </>
    );
}

export default KruskalControls;