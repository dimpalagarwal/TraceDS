import TreeRenderer from "./TreeRenderer";

function SegmentTreeCanvas({root,queryResult,highlightNode}) {
  return (
    <>
      <h2 className="text-xl mb-10" style={{color: "var(--heading)",}}>
        Segment Tree Visualization
      </h2>
      {!root ? (
        <p className="text-center"style={{color: "var(--muted)",}}>
          Segment Tree is Empty
        </p>
      ) : (
        <TreeRenderer root={root} nodeRadius={24} levelHeight={80} highlightNode={highlightNode}/>
      )}

      {queryResult !== null && (
        <div className="mt-8 text-center">
          <p className="text-lg font-medium" style={{color: "var(--heading)",}}>
            Query Result
          </p>
          <div className="mt-3 inline-flex px-6 py-3 rounded-xl border" style={{borderColor:"var(--border)",}}>
            {queryResult}
          </div>
        </div>
      )}
    </>
  );
}

export default SegmentTreeCanvas;