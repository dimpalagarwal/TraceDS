import { useState } from "react";
import VisualizerPageLayout from "../../../components/Visualizer/VisualizerPageLayout";
import VisualizerTabs from "../../../components/Visualizer/VisualizerTabs";
import VisualizerLayout from "../../../components/Visualizer/VisualizerLayout";
import TrieControls from "../../../components/Visualizer/TrieControls";
import TrieCanvas from "../../../components/Visualizer/TrieCanvas";
import Explanation from "../../../components/Visualizer/Explanation";
import { explanationData } from "../../../data/explanationData";

function TrieVisualizer() {
  const [activeTab, setActiveTab] =
    useState("visualization");

  const [root, setRoot] = useState({
    children: {},
    isEnd: false,
  });

  const [word, setWord] = useState("");

  const [activePath, setActivePath] =
    useState([]);

  const [searchResult, setSearchResult] =
    useState("");

  const [isAnimating, setIsAnimating] =
    useState(false);

  return (
    <VisualizerPageLayout
      breadcrumbs={[
        {
          label: "Dashboard",
          path: "/dashboard",
        },
        {
          label: "Data Structures",
          path: "/dashboard",
        },
        {
          label: "Trie",
          path: "/dashboard/trie",
        },
      ]}
    >
      <h1
        className="text-4xl"
        style={{
          color: "var(--heading)",
        }}
      >
        Trie
      </h1>

      <p
        className="mt-3 text-lg"
        style={{
          color: "var(--muted)",
        }}
      >
        Efficient tree structure for
        storing and searching strings.
      </p>

      <VisualizerTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "visualization" ? (
        <VisualizerLayout
          controls={
            <TrieControls
              root={root}
              setRoot={setRoot}
              word={word}
              setWord={setWord}
              activePath={activePath}
              setActivePath={setActivePath}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              isAnimating={isAnimating}
              setIsAnimating={setIsAnimating}
            />
          }
          visualization={
            <TrieCanvas
              root={root}
              activePath={activePath}
              searchResult={searchResult}
            />
          }
        />
      ) : (
        <Explanation 
          data = {
            explanationData.trie
          }
        />
      )}
    </VisualizerPageLayout>
  );
}

export default TrieVisualizer;