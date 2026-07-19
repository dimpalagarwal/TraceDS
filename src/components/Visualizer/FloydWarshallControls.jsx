import Button from "../common/Button";
import { useSpeed } from "../../context/SpeedContext";
import { sleep } from "../../utils/sleep";

function FloydWarshallControls({
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
    distanceMatrix,
    setDistanceMatrix,
    activeNodes,
    setActiveNodes,
    activeEdges,
    setActiveEdges,
    isAnimating,
    setIsAnimating,
}) {

    const {speed} = useSpeed();

    const addVertex = () => {

        if (!vertex.trim())
            return;

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
                id:vertex,
                value:vertex,
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
                weight:Number(weight),
            },
        ]);

        setFrom("");
        setTo("");
        setWeight("");
    };

    const runFloydWarshall = async () => {

        const n =
            vertices.length;

        if (n === 0)
            return;

        setIsAnimating(true);

        const dist =
            Array(n)
            .fill()
            .map(() =>
                Array(n).fill(Infinity)
            );

        for (
            let i = 0;
            i < n;
            i++
        ) {
            dist[i][i] = 0;
        }

        edges.forEach(edge => {

            const u =
                vertices.findIndex(
                    v =>
                        v.id === edge.from
                );

            const v =
                vertices.findIndex(
                    x =>
                        x.id === edge.to
                );

            dist[u][v] =
                edge.weight;

            dist[v][u] =
                edge.weight;
        });

        setDistanceMatrix(
            dist.map(
                row => [...row]
            )
        );

        await sleep(700, speed);

        for (
            let k = 0;
            k < n;
            k++
        ) {

            setActiveNodes([
                vertices[k].id
            ]);

            await sleep(500, speed);

            for (
                let i = 0;
                i < n;
                i++
            ) {

                for (
                    let j = 0;
                    j < n;
                    j++
                ) {

                    if (
                        dist[i][k] +
                        dist[k][j] <
                        dist[i][j]
                    ) {

                        dist[i][j] =
                            dist[i][k] +
                            dist[k][j];

                        setDistanceMatrix(
                            dist.map(
                                row => [...row]
                            )
                        );

                        await sleep(250, speed);
                    }
                }
            }
        }

        setActiveNodes([]);
        setIsAnimating(false);
    };

    const clearGraph = () => {

        setVertices([]);
        setEdges([]);

        setVertex("");
        setFrom("");
        setTo("");
        setWeight("");

        setDistanceMatrix([]);

        setActiveNodes([]);
        setActiveEdges([]);
    };

    return (
        <>
            <h2
                className="text-xl mb-6"
                style={{
                    color:"var(--heading)"
                }}
            >
                Floyd Warshall Controls
            </h2>

            <div className="space-y-4">

                <div className="flex gap-3">

                    <input
                        type="text"
                        placeholder="Vertex"
                        value={vertex}
                        onChange={(e)=>
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
                        onChange={(e)=>
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
                        onChange={(e)=>
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
                        onChange={(e)=>
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
                    onClick={runFloydWarshall}
                >
                    Run Floyd Warshall
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

export default FloydWarshallControls;