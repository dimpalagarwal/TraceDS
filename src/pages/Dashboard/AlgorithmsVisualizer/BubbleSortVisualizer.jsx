import SortingVisualizer from "../../../components/Visualizer/SortingVisualizer";
import { explanationData } from "../../../data/explanationData";

function BubbleSortVisualizer() {

    const sleep = (ms) =>
        new Promise(resolve =>
            setTimeout(resolve, ms)
        );

    const bubbleSort = async ({
        array,
        setArray,
        setActiveIndices,
        setSortedIndices,
        setCurrentStep,
        setIsAnimating,
    }) => {

        setIsAnimating(true);

        const temp = [...array];

        const sorted = [];

        for (
            let i = 0;
            i < temp.length - 1;
            i++
        ) {

            for (
                let j = 0;
                j < temp.length - i - 1;
                j++
            ) {

                setActiveIndices([j, j + 1]);

                setCurrentStep(
                    `Comparing ${temp[j]} and ${temp[j + 1]}`
                );

                await sleep(600);

                if (
                    temp[j] > temp[j + 1]
                ) {

                    setCurrentStep(
                        `Swapping ${temp[j]} and ${temp[j + 1]}`
                    );

                    [temp[j], temp[j + 1]] =
                        [temp[j + 1], temp[j]];

                    setArray([...temp]);

                    await sleep(600);
                }
            }

            sorted.push(
                temp.length - i - 1
            );

            setSortedIndices([...sorted]);
        }

        setSortedIndices(
            [...Array(temp.length).keys()]
        );

        setActiveIndices([]);

        setCurrentStep("Array Sorted");

        setIsAnimating(false);
    };

    return (
        <SortingVisualizer
            title="Bubble Sort"
            description="Repeatedly swap adjacent elements."
            sortFunction={bubbleSort}
            explanationData={
                explanationData.bubble
            }
            breadcrumbs={[
                {
                    label: "Dashboard",
                    path: "/dashboard",
                },
                {
                    label: "Algorithms",
                    path: "/dashboard/algorithms",
                },
                {
                    label: "Bubble Sort",
                    path: "/dashboard/bubble-sort",
                },
            ]}
        />
    );
}

export default BubbleSortVisualizer;