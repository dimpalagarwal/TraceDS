import GraphRenderer from "./GraphRenderer";

function FloydWarshallCanvas({
    vertices,
    edges,
    activeNodes,
    activeEdges,
    distanceMatrix,
}) {

    return (
        <>
            <h2
                className="text-xl mb-10"
                style={{
                    color:"var(--heading)"
                }}
            >
                Floyd Warshall Visualization
            </h2>

            {
                vertices.length === 0
                ?
                (
                    <p
                        style={{
                            color:"var(--muted)"
                        }}
                    >
                        Graph is Empty
                    </p>
                )
                :
                (
                    <GraphRenderer
                        nodes={vertices}
                        edges={edges}
                        activeNodeIds={activeNodes}
                        activeEdges={activeEdges}
                    />
                )
            }

            {
                distanceMatrix.length > 0 &&
                (
                    <div className="mt-8 overflow-auto">

                        <h3
                            className="text-lg mb-4"
                            style={{
                                color:"var(--heading)"
                            }}
                        >
                            Distance Matrix
                        </h3>

                        <table
                            className="border-collapse"
                        >
                            <tbody>

                                {
                                    distanceMatrix.map(
                                        (row,i) => (
                                            <tr key={i}>
                                                {
                                                    row.map(
                                                        (val,j) => (
                                                            <td
                                                                key={j}
                                                                className="border px-4 py-2 text-center"
                                                            >
                                                                {
                                                                    val === Infinity
                                                                    ?
                                                                    "∞"
                                                                    :
                                                                    val
                                                                }
                                                            </td>
                                                        )
                                                    )
                                                }
                                            </tr>
                                        )
                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                )
            }

        </>
    );
}

export default FloydWarshallCanvas;