import Button from "../common/Button";
import { useSpeed } from "../../context/SpeedContext";
import { sleep } from "../../utils/sleep";

function GraphControls({vertices,setVertices,edges,setEdges,vertex,setVertex,from,setFrom,to,setTo,startNode,setStartNode,activeNodes,setActiveNodes,traversalOrder,setTraversalOrder,isAnimating,setIsAnimating,}) {
    const {speed} = useSpeed();
    const addVertex = () => {
        if (!vertex.trim()) return;
        if (
            vertices.some(v => v.id === vertex)
        ) {
            alert("Vertex already exists");
            return;
        }

        const index = vertices.length;
        const angle = (2 * Math.PI * index) / 10;
        const x = 300 + 180 * Math.cos(angle);
        const y = 250 + 180 * Math.sin(angle);

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
        if (!from || !to) return;
        const edgeExists =
            edges.some(
                edge =>
                    (edge.from === from &&
                        edge.to === to)
                    ||
                    (edge.from === to &&
                        edge.to === from)
            );

        if (edgeExists)
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

    const removeEdge = () => {

        setEdges(
            edges.filter(
                edge =>
                    !(
                        (edge.from === from &&
                            edge.to === to)
                        ||
                        (edge.from === to &&
                            edge.to === from)
                    )
            )
        );
    };

    const buildAdjList = () => {

        const adj = {};

        vertices.forEach(v => {
            adj[v.id] = [];
        });

        edges.forEach(edge => {

            adj[edge.from].push(
                edge.to
            );

            adj[edge.to].push(
                edge.from
            );
        });

        return adj;
    };

    const runBFS = async () => {

        if (!startNode)
            return;

        setIsAnimating(true);

        const adj = buildAdjList();

        const queue = [startNode];

        const visited =
            new Set([startNode]);

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

            await sleep(700, speed);

            for (
                const next
                of adj[node]
            ) {

                if (
                    !visited.has(next)
                ) {

                    visited.add(next);

                    queue.push(next);
                }
            }
        }

        setTraversalOrder(order);

        setIsAnimating(false);
    };

    const dfsHelper = async (
        node,
        adj,
        visited,
        order
    ) => {

        visited.add(node);

        order.push(node);

        setActiveNodes(
            prev => [
                ...prev,
                node,
            ]
        );

        await sleep(700, speed);

        for (
            const next
            of adj[node]
        ) {

            if (
                !visited.has(next)
            ) {

                await dfsHelper(
                    next,
                    adj,
                    visited,
                    order
                );
            }
        }
    };

    const runDFS = async () => {

        if (!startNode)
            return;

        setIsAnimating(true);

        setActiveNodes([]);

        const adj = buildAdjList();

        const visited =
            new Set();

        const order = [];

        await dfsHelper(
            startNode,
            adj,
            visited,
            order
        );

        setTraversalOrder(order);

        setIsAnimating(false);
    };

    const clearGraph = () => {

        setVertices([]);

        setEdges([]);

        setVertex("");

        setFrom("");

        setTo("");

        setStartNode("");

        setActiveNodes([]);

        setTraversalOrder([]);
    };

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color: "var(--heading)",
                }}
            >
                Graph Controls
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
                    disabled={isAnimating}
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

                <div className="grid grid-cols-2 gap-3">

                    <Button
                        disabled={isAnimating}
                        onClick={addEdge}
                    >
                        Add Edge
                    </Button>

                    <Button
                        disabled={isAnimating}
                        hoverColor="red-500"
                        onClick={removeEdge}
                    >
                        Remove Edge
                    </Button>

                </div>

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

                <div className="grid grid-cols-2 gap-3">

                    <Button
                        disabled={isAnimating}
                        onClick={runBFS}
                    >
                        BFS
                    </Button>

                    <Button
                        disabled={isAnimating}
                        onClick={runDFS}
                    >
                        DFS
                    </Button>

                </div>

                <Button
                    disabled={isAnimating}
                    hoverColor="red-500"
                    onClick={clearGraph}
                >
                    Clear
                </Button>

            </div>
        </>
    );
}

export default GraphControls;