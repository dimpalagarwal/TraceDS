import TreeNode from "./TreeNode";

// Reusable graph renderer component for non-tree structures
// Props:
// - nodes: array of node objects {id, value, x, y}
// - edges: array of edge objects {from, to}
// - activeNodeIds: array of currently active/highlighted node ids
// - nodeRadius: size of nodes (default 24)
function GraphRenderer({ nodes = [], edges = [], activeNodeIds = [], nodeRadius = 24, activeEdges = [], }) {
    if (!nodes || nodes.length === 0) return null;

    // Calculate bounding box
    const minX = Math.min(...nodes.map(n => n.x));
    const maxX = Math.max(...nodes.map(n => n.x));
    const minY = Math.min(...nodes.map(n => n.y));
    const maxY = Math.max(...nodes.map(n => n.y));
    const padding = 60;
    const width = maxX - minX + padding * 2;
    const height = maxY - minY + padding * 2;

    return (
        <svg width="100%" height={height} viewBox={`${minX - padding} ${minY - padding} ${width} ${height}`} className="mx-auto">{edges.map((edge, idx) => {
            const fromNode = nodes.find(n => n.id === edge.from);
            const toNode = nodes.find(n => n.id === edge.to);
            if (!fromNode || !toNode) return null;

            const isActiveEdge = activeEdges.some( e => (e.from === edge.from && e.to === edge.to) || (e.from === edge.to && e.to === edge.from));
            const midX = (fromNode.x + toNode.x) / 2;
            const midY = (fromNode.y + toNode.y) / 2;
            return (
                <g key={`edge-${idx}`}>
                    <line x1={fromNode.x} y1={fromNode.y} x2={toNode.x} y2={toNode.y} stroke={isActiveEdge? "#10B981": "var(--border)"} strokeWidth={ isActiveEdge? 4: 2}/>
                    {edge.weight !== undefined && (
                        <text x={midX} y={midY - 5} textAnchor="middle" fill="#F59E0B" fontSize="14" fontWeight="bold">{edge.weight}</text>
                    )}
                </g>
            );
        })}
            {nodes.map((node) => (
                <TreeNode key={`node-${node.id}`} value={node.value} x={node.x} y={node.y} radius={nodeRadius} isActive={activeNodeIds.includes(node.id)} />
            ))}
        </svg>
    );
}

export default GraphRenderer;
