import Button from "../common/Button";

function DijkstraControls({
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
    startNode,
    setStartNode,
    activeNodes,
    setActiveNodes,
    activeEdges,
    setActiveEdges,
    distances,
    setDistances,
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
        )
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

    const buildAdjList = () => {

        const adj = {};

        vertices.forEach(v => {
            adj[v.id] = [];
        });

        edges.forEach(edge => {

            adj[edge.from].push({
                node: edge.to,
                weight: edge.weight,
            });

            adj[edge.to].push({
                node: edge.from,
                weight: edge.weight,
            });

        });

        return adj;
    };

    const runDijkstra = async () => {

        if (!startNode)
            return;

        setIsAnimating(true);

        setActiveNodes([]);

        setActiveEdges([]);

        const adj =
            buildAdjList();

        const dist = {};

        vertices.forEach(v => {
            dist[v.id] =
                Infinity;
        });

        dist[startNode] = 0;

        const visited =
            new Set();

        while (
            visited.size <
            vertices.length
        ) {

            let current =
                null;

            let minDist =
                Infinity;

            for (
                const node
                in dist
            ) {

                if (
                    !visited.has(node) &&
                    dist[node] <
                    minDist
                ) {

                    minDist =
                        dist[node];

                    current =
                        node;
                }
            }

            if (!current)
                break;

            visited.add(current);

            setActiveNodes([
                ...visited
            ]);

            setDistances({
                ...dist
            });

            await sleep(800);

            for (
                const neighbour
                of adj[current]
            ) {

                const newDist =
                    dist[current] +
                    neighbour.weight;

                if (
                    newDist <
                    dist[
                        neighbour.node
                    ]
                ) {

                    dist[
                        neighbour.node
                    ] = newDist;

                    setDistances({
                        ...dist
                    });

                    await sleep(800);
                }
            }
        }

        setIsAnimating(false);
    };

    const clearGraph = () => {

        setVertices([]);

        setEdges([]);

        setVertex("");

        setFrom("");

        setTo("");

        setWeight("");

        setStartNode("");

        setActiveNodes([]);

        setActiveEdges([]);

        setDistances({});
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
                Dijkstra Controls
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
                        onClick={
                            addVertex
                        }
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

                <input
                    type="text"
                    placeholder="Start Node"
                    value={startNode}
                    onChange={(e) =>
                        setStartNode(
                            e.target.value
                        )
                    }
                    className="w-full rounded-xl border px-4 py-3"
                />

                <Button
                    disabled={isAnimating}
                    onClick={runDijkstra}
                >
                    Run Dijkstra
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

export default DijkstraControls;