import Button from "../common/Button";
import { useSpeed } from "../../context/SpeedContext";
import { sleep } from "../../utils/sleep";

function TrieControls({root,setRoot,word,setWord,activePath,setActivePath,searchResult,setSearchResult,isAnimating,setIsAnimating,}) {
  const {speed} = useSpeed();

  const insertWord = () => {
    if (!word.trim()) return;

    const newRoot =
      structuredClone(root);

    let current = newRoot;

    for (const ch of word) {
      if (!current.children[ch]) {
        current.children[ch] = {
          children: {},
          isEnd: false,
        };
      }

      current =
        current.children[ch];
    }

    current.isEnd = true;

    setRoot(newRoot);
    setWord("");
  };

  const searchWord = async () => {
    if (!word.trim()) return;

    setIsAnimating(true);

    setActivePath([]);

    let current = root;

    const path = [];

    for (const ch of word) {
      path.push(ch);

      setActivePath([...path]);

      await sleep(600, speed);

      if (!current.children[ch]) {
        setSearchResult(
          "Word Not Found"
        );

        setIsAnimating(false);
        return;
      }

      current =
        current.children[ch];
    }

    if (current.isEnd) {
      setSearchResult(
        "Word Found"
      );
    } else {
      setSearchResult(
        "Prefix Exists Only"
      );
    }

    setIsAnimating(false);
  };

  const clearTrie = () => {
    setRoot({
      children: {},
      isEnd: false,
    });

    setWord("");

    setSearchResult("");

    setActivePath([]);
  };

  return (
    <>
      <h2
        className="text-xl mb-6"
        style={{
          color: "var(--heading)",
        }}
      >
        Trie Controls
      </h2>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Enter Word"
          value={word}
          onChange={(e) =>
            setWord(
              e.target.value.toLowerCase()
            )
          }
          className="w-full rounded-xl border px-4 py-3 outline-none"
        />

        <div className="grid grid-cols-3 gap-4">

          <Button
            disabled={isAnimating}
            onClick={insertWord}
          >
            Insert
          </Button>

          <Button
            disabled={isAnimating}
            onClick={searchWord}
          >
            Search
          </Button>

          <Button
            disabled={isAnimating}
            hoverColor="red-500"
            onClick={clearTrie}
          >
            Clear
          </Button>

        </div>
      </div>
    </>
  );
}

export default TrieControls;