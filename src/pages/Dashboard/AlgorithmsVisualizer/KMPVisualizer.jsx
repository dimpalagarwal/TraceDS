import StringMatchingVisualizer from "../../../components/Visualizer/StringMatchingVisualizer";
import { explanationData } from "../../../data/explanationData";

function KMPVisualizer() {

    const sleep = (ms) =>
        new Promise(resolve =>
            setTimeout(resolve,ms)
        );

    const buildLPS = (pattern) => {

        const lps =
            Array(pattern.length).fill(0);

        let len = 0;
        let i = 1;

        while (i < pattern.length) {

            if (
                pattern[i] ===
                pattern[len]
            ) {

                len++;

                lps[i] = len;

                i++;
            }

            else {

                if (len !== 0) {

                    len =
                        lps[len - 1];
                }

                else {

                    lps[i] = 0;

                    i++;
                }
            }
        }

        return lps;
    };

    const runKMP = async ({
        text,
        pattern,
        setActiveTextIndex,
        setActivePatternIndex,
        setMatchedIndices,
        setCurrentStep,
        setLps,
        setHashes,
        setIsAnimating,
    }) => {

        if (
            !text.trim() ||
            !pattern.trim()
        )
            return;

        setIsAnimating(true);

        setMatchedIndices([]);

        const lps =
            buildLPS(pattern);

        setLps(lps);

        let i = 0;
        let j = 0;

        const matches = [];

        while (
            i < text.length
        ) {

            setActiveTextIndex(i);

            setActivePatternIndex(j);

            setCurrentStep(
                `Comparing ${text[i]} with ${pattern[j]}`
            );

            await sleep(700);

            if (
                text[i] === pattern[j]
            ) {

                i++;
                j++;

                if (
                    j === pattern.length
                ) {

                    const start =
                        i - j;

                    for (
                        let k = start;
                        k < start + pattern.length;
                        k++
                    ) {
                        matches.push(k);
                    }

                    setMatchedIndices([
                        ...matches
                    ]);

                    setCurrentStep(
                        `Pattern Found at Index ${start}`
                    );

                    await sleep(1000);

                    j =
                        lps[j - 1];
                }
            }

            else {

                if (j !== 0) {

                    setCurrentStep(
                        `Mismatch → Jump to LPS[${j - 1}]`
                    );

                    j =
                        lps[j - 1];
                }

                else {

                    i++;
                }

                await sleep(700);
            }
        }

        setActiveTextIndex(-1);

        setActivePatternIndex(-1);

        setCurrentStep(
            "KMP Complete"
        );

        setIsAnimating(false);
    };

    return (
        <StringMatchingVisualizer
            title="KMP Algorithm"
            description="Efficient pattern matching using Longest Prefix Suffix Array."
            runAlgorithm={runKMP}
            explanationData={
                explanationData.kmp
            }
            breadcrumbs={[
                {
                    label:"Dashboard",
                    path:"/dashboard",
                },
                {
                    label:"Algorithms",
                    path:"/dashboard/algorithms",
                },
                {
                    label:"KMP",
                    path:"/dashboard/kmp",
                },
            ]}
        />
    );
}

export default KMPVisualizer;