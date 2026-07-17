import SortingVisualizer from "../../../components/Visualizer/SortingVisualizer";
import { explanationData } from "../../../data/explanationData";

function SelectionSortVisualizer() {

    const sleep = (ms) =>
        new Promise(resolve =>
            setTimeout(resolve, ms)
        );

    const selectionSort = async ({
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
            i < temp.length;
            i++
        ) {

            let minIdx = i;

            for (
                let j = i + 1;
                j < temp.length;
                j++
            ) {

                setActiveIndices([
                    minIdx,
                    j,
                ]);

                setCurrentStep(
                    `Finding minimum`
                );

                await sleep(500);

                if (
                    temp[j] <
                    temp[minIdx]
                ) {

                    minIdx = j;
                }
            }

            [temp[i], temp[minIdx]] =
                [temp[minIdx], temp[i]];

            setArray([...temp]);

            sorted.push(i);

            setSortedIndices([...sorted]);

            await sleep(600);
        }

        setActiveIndices([]);

        setCurrentStep("Array Sorted");

        setIsAnimating(false);
    };

    return (
        <SortingVisualizer
            title="Selection Sort"
            description="Repeatedly select minimum element."
            sortFunction={selectionSort}
            explanationData={
                explanationData.selection
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
                    label: "Selection Sort",
                    path: "/dashboard/selection-sort",
                },
            ]}
        />
    );
}

export default SelectionSortVisualizer;