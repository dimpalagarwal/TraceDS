import StringMatchingVisualizer from "../../../components/Visualizer/StringMatchingVisualizer";
import { explanationData } from "../../../data/explanationData";

function RabinKarpVisualizer() {

    const sleep = (ms) =>
        new Promise(resolve =>
            setTimeout(resolve, ms));

    const runRabinKarp = async ({
        text,
        pattern,
        setActiveTextIndex,
        setActivePatternIndex,
        setActiveWindow,
        setMatchedIndices,
        setCurrentStep,
        setLps,
        setHashes,
        setIsAnimating,
    }) => {

        if (
            !text.trim() ||
            !pattern.trim()
        ) return;

        setIsAnimating(true);

        setMatchedIndices([]);
        setLps([]);

        const matches = [];

        const patternLength =
            pattern.length;

        const calculateHash =
            (str) => {

                let hash = 0;

                for (
                    let i = 0;
                    i < str.length;
                    i++
                ) {

                    hash +=
                        str.charCodeAt(i);
                }

                return hash;
            };

        const patternHash =
            calculateHash(pattern);

        for (
            let i = 0;
            i <= text.length - patternLength;
            i++
        ) {

            setActiveWindow(
    Array.from(
        {
            length: patternLength
        },
        (_,idx) => i + idx
    )
);

            const window =
                text.slice(
                    i,
                    i + patternLength
                );

            const windowHash =
                calculateHash(window);

            setHashes({
                patternHash,
                windowHash,
            });

            setActiveTextIndex(i);

            setCurrentStep(
                `Checking Window ${i} - ${i + patternLength - 1}`
            );

            await sleep(700);

            if (
                patternHash ===
                windowHash
            ) {

                let matched =
                    true;

                for (
                    let j = 0;
                    j < patternLength;
                    j++
                ) {

                    setActivePatternIndex(j);

                    await sleep(250);

                    if (
                        text[i + j] !==
                        pattern[j]
                    ) {

                        matched =
                            false;

                        break;
                    }
                }

                if (matched) {

                    for (
                        let k = i;
                        k < i + patternLength;
                        k++
                    ) {

                        matches.push(k);
                    }

                    setMatchedIndices([
                        ...matches,
                    ]);

                    setCurrentStep(
                        `Pattern Found at Index ${i}`
                    );

                    await sleep(1000);
                }
            }
        }

        setActiveTextIndex(-1);

        setActivePatternIndex(-1);

        setCurrentStep(
            "Rabin-Karp Complete"
        );

        setActiveWindow([]);

        setIsAnimating(false);
    };

    return (
        <StringMatchingVisualizer
            title="Rabin-Karp Algorithm"
            description="Pattern matching using rolling hash technique."
            runAlgorithm={runRabinKarp}
            explanationData={
                explanationData.rabin
            }
            breadcrumbs={[
                {
                    label:
                        "Dashboard",
                    path:
                        "/dashboard",
                },
                {
                    label:
                        "Algorithms",
                    path:
                        "/dashboard/algorithms",
                },
                {
                    label:
                        "Rabin-Karp",
                    path:
                        "/dashboard/rabin-karp",
                },
            ]}
        />
    );
}

export default RabinKarpVisualizer;