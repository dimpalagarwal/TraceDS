function TrieNode({
  x,
  y,
  char,
  isEnd,
  active,
}) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r="32"
        fill={
          active
            ? "#10B981"
            : "var(--bg)"
        }
        stroke={
          isEnd
            ? "#10B981"
            : "var(--heading)"
        }
        strokeWidth="2"
      />

      <>
        <text
          x={x}
          y={y + 6}
          textAnchor="middle"
          fill={
            active
              ? "white"
              : "var(--heading)"
          }
          fontSize="18"
          fontWeight="bold"
        >
          {char}
        </text>

        {isEnd && (
          <text
            x={x}
            y={y + 55}
            textAnchor="middle"
            fill="#10B981"
            fontSize="12"
            fontWeight="bold"
          >
            End
          </text>
        )}
      </>
    </g>
  );
}

export default TrieNode;