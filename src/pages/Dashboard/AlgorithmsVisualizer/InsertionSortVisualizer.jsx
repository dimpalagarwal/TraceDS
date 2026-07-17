import SortingVisualizer from "../../../components/Visualizer/SortingVisualizer";
import { explanationData } from "../../../data/explanationData";

function InsertionSortVisualizer() {

    const sleep = (ms) =>
        new Promise(resolve =>
            setTimeout(resolve, ms)
        );

    const insertionSort = async ({
        array,
        setArray,
        setActiveIndices,
        setSortedIndices,
        setCurrentStep,
        setIsAnimating,
    }) => {

        setIsAnimating(true);

        const temp = [...array];

        for (
            let i = 1;
            i < temp.length;
            i++
        ) {

            let key = temp[i];

            let j = i - 1;

            setCurrentStep(
                `Inserting ${key}`
            );

            while (
                j >= 0 &&
                temp[j] > key
            ) {

                setActiveIndices([
                    j,
                    j + 1,
                ]);

                await sleep(600);

                temp[j + 1] = temp[j];

                setArray([...temp]);

                j--;

                await sleep(600);
            }

            temp[j + 1] = key;

            setArray([...temp]);

            setSortedIndices(
                [...Array(i + 1).keys()]
            );

            await sleep(600);
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
            title="Insertion Sort"
            description="Insert each element into its correct position."
            sortFunction={insertionSort}
            explanationData={
                explanationData.insertion
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
                    label: "Insertion Sort",
                    path: "/dashboard/insertion-sort",
                },
            ]}
        />
    );
}

export default InsertionSortVisualizer;