import Button from "../common/Button";
import { useSpeed } from "../../context/SpeedContext";
import { sleep } from "../../utils/sleep";

function PrimControls({
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
    result,
    setResult,
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

    const runPrim = async () => {

        if (!startNode)
            return;

        setIsAnimating(true);

        setResult("");

        setActiveNodes([]);

        setActiveEdges([]);

        const visited =
            new Set();

        visited.add(startNode);

        const mstEdges = [];

        let totalCost = 0;

        setActiveNodes([
            startNode,
        ]);

        await sleep(700, speed);

        while (
            visited.size <
            vertices.length
        ) {

            let minEdge =
                null;

            for (
                const edge
                of edges
            ) {

                const fromVisited =
                    visited.has(
                        edge.from
                    );

                const toVisited =
                    visited.has(
                        edge.to
                    );

                if (
                    fromVisited &&
                    !toVisited
                ) {

                    if (
                        !minEdge ||
                        edge.weight <
                        minEdge.weight
                    ) {

                        minEdge =
                            edge;
                    }
                }

                else if (
                    toVisited &&
                    !fromVisited
                ) {

                    if (
                        !minEdge ||
                        edge.weight <
                        minEdge.weight
                    ) {

                        minEdge =
                            edge;
                    }
                }
            }

            if (!minEdge)
                break;

            mstEdges.push(
                minEdge
            );

            totalCost +=
                minEdge.weight;

            setActiveEdges([
                ...mstEdges,
            ]);

            const newNode =
                visited.has(
                    minEdge.from
                )
                    ? minEdge.to
                    : minEdge.from;

            visited.add(
                newNode
            );

            setActiveNodes([
                ...visited,
            ]);

            await sleep(1000, speed);
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

        setStartNode("");

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
                Prim Controls
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
                    onClick={
                        addEdge
                    }
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
                    disabled={
                        isAnimating
                    }
                    onClick={
                        runPrim
                    }
                >
                    Run Prim
                </Button>

                <Button
                    hoverColor="red-500"
                    onClick={
                        clearGraph
                    }
                >
                    Clear
                </Button>

            </div>
        </>
    );
}

export default PrimControls;