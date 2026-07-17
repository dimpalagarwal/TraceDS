// Reusable component for rendering a single tree node
function TreeNode({ value, x, y, radius = 24, isActive = false, isHighlighted = false,}) {
    return (
        <g key={`node-${x}-${y}`}>
            <circle
                cx={x}
                cy={y}
                r={isActive ? radius + 4 : radius}
                fill={isHighlighted? "#ef4444" : isActive ? "#10b981" : "var(--bg)"}
                stroke={isHighlighted? "#ef4444" : isActive ? "#10b981" : "var(--heading)"}
                strokeWidth="2"
                className={`transition-all duration-300 ${isActive ? "filter drop-shadow-lg" : ""}`}
            /> 
            <text
                x={x}
                y={y + 7}
                textAnchor="middle"
                fill={isHighlighted || isActive ? "white" : "var(--heading)"}
                fontSize={radius <= 14 ? 9 : 13}
                fontWeight="bold"
                className="transition-all duration-300 pointer-events-none"
            >
                {value}
            </text>
        </g>
    );
}

export default TreeNode;
