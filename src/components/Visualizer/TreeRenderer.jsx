import TreeNode from "./TreeNode";

function TreeRenderer({root,activeIndex = -1,highlightNode,nodeRadius = 28,levelHeight = 100,}) {
    if (!root) return null;
    const nodes = [];
    const edges = [];
    const isMobile = window.innerWidth < 768;

    const traverse = (node,x,y,horizontalGap,index = { value: 0 }) => {
        if (!node) return;
        const currentIndex = index.value++;
        if (node.left) {
            edges.push({x1: x,y1: y,x2: x - horizontalGap,y2: y + levelHeight,});

            traverse(node.left,x - horizontalGap,y + levelHeight,Math.max(horizontalGap / 2, 35),index);
        }

        nodes.push({value: node.val,x,y,index: currentIndex,});

        if (node.right) {
            edges.push({x1: x,y1: y,x2: x + horizontalGap,y2: y + levelHeight,});

            traverse(node.right,x + horizontalGap,y + levelHeight,Math.max(horizontalGap / 2, 35),index);
        }
    };

    traverse(root, 300, 60, 90);

    return (
        <svg width="100%" height="500" viewBox="0 0 600 500" className="mx-auto">
            {edges.map((edge, idx) => (
                <line key={idx} x1={edge.x1} y1={edge.y1} x2={edge.x2} y2={edge.y2} stroke="var(--border)" strokeWidth="2"/>
            ))}

            {nodes.map((node) => (
                <TreeNode key={node.index} value={node.value} x={node.x} y={node.y} radius={isMobile ? 14 : nodeRadius} isActive={activeIndex === node.index} isHighlighted={highlightNode === node.value}/>
            ))}
        </svg>
    );
}

export default TreeRenderer;