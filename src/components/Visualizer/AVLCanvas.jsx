import TreeRenderer from "./TreeRenderer";

function AVLCanvas({ root, activeIndex, rotationType, highlightNode, message, }) {
    return (
        <>
            <h2 className="text-xl mb-10" style={{ color: "var(--heading)", }}>
                AVL Tree Visualization
            </h2>

            {!root ? (
                <p className="text-center mt-10" style={{ color: "var(--muted)", }}>
                    AVL Tree is Empty
                </p>
            ) : (
                <TreeRenderer root={root} activeIndex={activeIndex} highlightNode={highlightNode} />
            )}

            {rotationType && (
                <div className="mt-8 text-center">
                    <p className="text-lg font-medium" style={{ color: "var(--heading)", }}>
                        Last Rotation
                    </p>

                    <div className="mt-3 inline-flex items-center justify-center px-6 py-3 rounded-xl border" style={{ borderColor: "var(--border)", color: "#10B981", }}>
                        {rotationType}
                    </div>
                </div>
            )}

            {message && (
                <div className="mt-6 text-center">
                    <p className="text-lg font-medium" style={{color: "#ef4444",}}>
                        {message}
                    </p>
                </div>
            )}
        </>
    );
}

export default AVLCanvas;