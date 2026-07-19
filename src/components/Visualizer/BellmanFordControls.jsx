import Button from "../common/Button";
import { useSpeed } from "../../context/SpeedContext";
import { sleep } from "../../utils/sleep";

function BellmanFordControls({
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

    const {speed} = useSpeed();

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

    const runBellmanFord = async () => {

    if (!startNode)
        return;

    setIsAnimating(true);

    setActiveNodes([]);
    setActiveEdges([]);

    const dist = {};

    vertices.forEach(v => {
        dist[v.id] = Infinity;
    });

    dist[startNode] = 0;

    setDistances({ ...dist });

    await sleep(800, speed);

    // Relax all edges V-1 times
    for (let i = 0; i < vertices.length - 1; i++) {

        let updated = false;

        for (const edge of edges) {

            setActiveEdges([edge]);

            await sleep(600, speed);

            if (
                dist[edge.from] !== Infinity &&
                dist[edge.from] + edge.weight <
                dist[edge.to]
            ) {

                dist[edge.to] =
                    dist[edge.from] +
                    edge.weight;

                updated = true;

                setDistances({ ...dist });

                setActiveNodes([
                    edge.to
                ]);

                await sleep(600, speed);
            }
        }

        // Optimization
        if (!updated)
            break;
    }

    // Negative Cycle Detection
    let negativeCycle = false;

    for (const edge of edges) {

        if (
            dist[edge.from] !== Infinity &&
            dist[edge.from] + edge.weight <
            dist[edge.to]
        ) {

            negativeCycle = true;
            break;
        }
    }

    if (negativeCycle) {

        alert(
            "Negative Weight Cycle Detected"
        );
    }

    setActiveEdges([]);
    setActiveNodes([]);

    setDistances({
        ...dist
    });

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
                Bellman-ford Controls
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
                    onClick={runBellmanFord}
                >
                    Run Bellman-Ford
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

export default BellmanFordControls;
