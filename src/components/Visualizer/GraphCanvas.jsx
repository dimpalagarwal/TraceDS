import GraphRenderer from "./GraphRenderer";

function GraphCanvas({ vertices, edges, activeNodes, traversalOrder=[], activeEdges=[], result="", distances={} }) {
    return (
        <>
            <h2 className="text-xl mb-10" style={{ color: "var(--heading)", }}>Graph Visualization</h2>
            {
                vertices.length === 0 ? (<p className="text-center" style={{ color: "var(--muted)", }}>Graph is Empty</p>) : (<GraphRenderer nodes={vertices} edges={edges} activeNodeIds={activeNodes} activeEdges={activeEdges} />)
            }

            {
                traversalOrder.length > 0 &&
                (<div className="mt-8 text-center">
                    <p className="text-lg font-medium" style={{ color: "var(--heading)", }}>Traversal Order</p>
                    <div className="mt-3 inline-flex px-6 py-3 rounded-xl border" style={{ borderColor: "var(--border)", }}>
                        {traversalOrder.join(" → ")}
                    </div>
                </div>)
            }

            {
                result && (<div className="mt-8 text-center">
                    <p className="text-lg font-medium" style={{ color: "var(--heading)" }}>Result</p>
                    <div className="mt-3 inline-flex px-6 py-3 rounded-xl border" style={{ borderColor: "var(--border)" }}>
                        {result}
                    </div>
                </div>
                )
            }

            {
                distances && Object.keys(distances).length > 0 &&
                (<div className="mt-8 text-center">
                    <p className="text-lg font-medium" style={{color: "var(--heading)"}}>Distances</p>
                    <div className="mt-3 p-4 rounded-xl border"  style={{borderColor:"var(--border)"}}>{
                        Object.entries(distances).map(([node, dist]) => (<div key={node}>{node} → {dist}</div>))
                    }
                    </div>
                </div>)
            }
        </>
    );
}

export default GraphCanvas;