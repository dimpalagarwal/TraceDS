import TrieNode from "./TrieNode";

function TrieRenderer({
  root,
  activePath = [],
}) {
  if (!root) return null;

  const nodes = [];
  const edges = [];

  let nodeId = 0;
  let nextX = 40;

  const buildTrie = (
    node,
    depth = 0,
    parent = null,
    char = "Root",
    path = ""
  ) => {

    const currentId = nodeId++;

    const children =
      Object.entries(node.children);

    let x;

    if (children.length === 0) {

      x = nextX;
      nextX += 160;

    } else {

      const childXs = [];

      children.forEach(
        ([childChar, childNode]) => {

          const childX =
            buildTrie(
              childNode,
              depth + 1,
              currentId,
              childChar,
              path + childChar
            );

          childXs.push(childX);
        }
      );

      x =
        (
          Math.min(...childXs) +
          Math.max(...childXs)
        ) / 2;
    }

    const y = depth * 90 + 80;

    nodes.push({
      id: currentId,
      parent,
      char,
      x,
      y,
      isEnd: node.isEnd,
      path,
    });

    if (parent !== null) {

      edges.push({
        parent,
        child: currentId,
      });

    }

    return x;
  };

  buildTrie(root);

  return (
    <svg
      width="100%"
      height="700"
      viewBox="0 0 800 800"
      className="mx-auto"
    >

      {edges.map((edge, idx) => {

        const parentNode =
          nodes.find(
            (n) => n.id === edge.parent
          );

        const childNode =
          nodes.find(
            (n) => n.id === edge.child
          );

        return (
          <line
            key={idx}
            x1={parentNode.x}
            y1={parentNode.y}
            x2={childNode.x}
            y2={childNode.y}
            stroke="var(--border)"
            strokeWidth="2"
          />
        );
      })}

      {nodes.map((node) => (

        <TrieNode
          key={node.id}
          x={node.x}
          y={node.y}
          char={node.char}
          isEnd={node.isEnd}
          active={
            activePath.join("")
              .startsWith(node.path)
          }
        />

      ))}

    </svg>
  );
}

export default TrieRenderer;