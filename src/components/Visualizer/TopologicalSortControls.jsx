import Button from "../common/Button";

function TopologicalSortControls({
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
    activeNodes,
    setActiveNodes,
    traversalOrder,
    setTraversalOrder,
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

        const index = vertices.length;

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

        if (!from || !to)
            return;

        setEdges([
            ...edges,
            {
                from,
                to,
            },
        ]);

        setFrom("");
        setTo("");
    };

    const runTopoSort = async () => {

        setIsAnimating(true);

        const indegree = {};

        const adj = {};

        vertices.forEach(v => {

            indegree[v.id] = 0;
            adj[v.id] = [];
        });

        edges.forEach(edge => {

            adj[edge.from].push(
                edge.to
            );

            indegree[edge.to]++;
        });

        const queue = [];

        Object.keys(indegree).forEach(
            node => {

                if (
                    indegree[node] === 0
                ) {
                    queue.push(node);
                }
            }
        );

        const order = [];

        setActiveNodes([]);

        while (queue.length) {

            const node =
                queue.shift();

            order.push(node);

            setActiveNodes(
                prev => [
                    ...prev,
                    node,
                ]
            );

            await sleep(700);

            for (
                const next
                of adj[node]
            ) {

                indegree[next]--;

                if (
                    indegree[next] === 0
                ) {

                    queue.push(next);
                }
            }
        }

        if (
            order.length !==
            vertices.length
        ) {

            alert(
                "Graph contains a cycle"
            );

            setIsAnimating(false);
            return;
        }

        setTraversalOrder(order);

        setIsAnimating(false);
    };

    const clearGraph = () => {

        setVertices([]);

        setEdges([]);

        setVertex("");

        setFrom("");

        setTo("");

        setActiveNodes([]);

        setTraversalOrder([]);
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
                Topological Sort Controls
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

                    <button
                        onClick={addVertex}
                        className="w-full rounded-xl border px-4 py-3"
                    >
                        Add Vertex
                    </button>

                </div>

                <div className="flex gap-3">

                    <input
                        type="text"
                        placeholder="From"
                        value={from}
                        onChange={(e) =>
                            setFrom(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border px-4 py-3"
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
                        className="w-full rounded-xl border px-4 py-3"
                    />

                </div>

                <Button
                    disabled={isAnimating}
                    onClick={addEdge}
                >
                    Add Directed Edge
                </Button>

                <Button
                    disabled={isAnimating}
                    onClick={runTopoSort}
                >
                    Run Topological Sort
                </Button>

                <Button
                    hoverColor="red-500"
                    disabled={isAnimating}
                    onClick={clearGraph}
                >
                    Clear
                </Button>

            </div>
        </>
    );
}

export default TopologicalSortControls;