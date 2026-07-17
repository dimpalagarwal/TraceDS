import TrieRenderer from "./TrieRenderer";

function TrieCanvas({
  root,
  activePath,
  searchResult,
}) {
  return (
    <>
      <h2
        className="text-xl mb-10"
        style={{
          color: "var(--heading)",
        }}
      >
        Trie Visualization
      </h2>

      <div
        className="overflow-x-auto overflow-y-auto border rounded-xl p-4"
        style={{
          maxHeight: "650px",
          borderColor: "var(--border)",
        }}
      >
        <TrieRenderer
          root={root}
          activePath={activePath}
        />
      </div>

      {searchResult && (
        <div className="mt-8 text-center">
          <p
            className="text-lg font-medium"
            style={{
              color: "var(--heading)",
            }}
          >
            Search Result
          </p>

          <div
            className="mt-3 inline-flex px-6 py-3 rounded-xl border"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {searchResult}
          </div>
        </div>
      )}
    </>
  );
}

export default TrieCanvas;