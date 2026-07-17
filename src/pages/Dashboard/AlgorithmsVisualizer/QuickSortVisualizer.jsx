import SortingVisualizer from "../../../components/Visualizer/SortingVisualizer";
import { explanationData } from "../../../data/explanationData";

function QuickSortVisualizer() {

    const sleep = (ms) =>
        new Promise(resolve =>
            setTimeout(resolve, ms)
        );

    const quickSort = async ({
        array,
        setArray,
        setActiveIndices,
        setSortedIndices,
        setCurrentStep,
        setIsAnimating,
        setPivotIndex,
    }) => {

        setIsAnimating(true);

        const temp = [...array];

        const partition = async (
            low,
            high
        ) => {

            const pivot =
                temp[high];

            setPivotIndex(high);

            let i = low - 1;

            for (
                let j = low;
                j < high;
                j++
            ) {

                setActiveIndices([
                    j,
                    high,
                ]);

                setCurrentStep(
                    `Comparing with pivot ${pivot}`
                );

                await sleep(600);

                if (
                    temp[j] < pivot
                ) {

                    i++;

                    [temp[i], temp[j]] =
                        [temp[j], temp[i]];

                    setArray([...temp]);

                    await sleep(600);
                }
            }

            [temp[i + 1], temp[high]] =
                [temp[high], temp[i + 1]];

            setArray([...temp]);

            await sleep(700);

            return i + 1;
        };

        const sort = async (
            low,
            high
        ) => {

            if (low >= high)
                return;

            const pi =
                await partition(
                    low,
                    high
                );

            await sort(
                low,
                pi - 1
            );

            await sort(
                pi + 1,
                high
            );
        };

        await sort(
            0,
            temp.length - 1
        );

        setPivotIndex(-1);

        setSortedIndices(
            [...Array(temp.length).keys()]
        );

        setActiveIndices([]);

        setCurrentStep(
            "Array Sorted"
        );

        setIsAnimating(false);
    };

    return (
        <SortingVisualizer
            title="Quick Sort"
            description="Partition around a pivot."
            sortFunction={quickSort}
            explanationData={
                explanationData.quick
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
                    label: "Quick Sort",
                    path: "/dashboard/quick-sort",
                },
            ]}
        />
    );
}

export default QuickSortVisualizer;