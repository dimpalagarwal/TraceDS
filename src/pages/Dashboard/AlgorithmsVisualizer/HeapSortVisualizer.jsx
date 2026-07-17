import SortingVisualizer from "../../../components/Visualizer/SortingVisualizer";
import { explanationData } from "../../../data/explanationData";

function HeapSortVisualizer() {

    const sleep = (ms) =>
        new Promise(resolve =>
            setTimeout(resolve, ms)
        );

    const heapSort = async ({
        array,
        setArray,
        setActiveIndices,
        setSortedIndices,
        setCurrentStep,
        setIsAnimating,
        setHeapIndices,
    }) => {

        setIsAnimating(true);

        const temp = [...array];

        const heapify = async (
            n,
            i
        ) => {

            let largest = i;

            const left =
                2 * i + 1;

            const right =
                2 * i + 2;

            setHeapIndices([
                i,
                left,
                right,
            ]);

            await sleep(600);

            if (
                left < n &&
                temp[left] >
                    temp[largest]
            ) {
                largest = left;
            }

            if (
                right < n &&
                temp[right] >
                    temp[largest]
            ) {
                largest = right;
            }

            if (
                largest !== i
            ) {

                [temp[i], temp[largest]] =
                    [
                        temp[largest],
                        temp[i],
                    ];

                setArray([...temp]);

                await sleep(600);

                await heapify(
                    n,
                    largest
                );
            }
        };

        const n =
            temp.length;

        for (
            let i =
                Math.floor(n / 2) - 1;
            i >= 0;
            i--
        ) {

            await heapify(
                n,
                i
            );
        }

        for (
            let i = n - 1;
            i > 0;
            i--
        ) {

            [temp[0], temp[i]] =
                [temp[i], temp[0]];

            setArray([...temp]);

            setSortedIndices(prev => [
                ...prev,
                i,
            ]);

            await sleep(700);

            await heapify(
                i,
                0
            );
        }

        setHeapIndices([]);

        setSortedIndices(
            [...Array(n).keys()]
        );

        setCurrentStep(
            "Array Sorted"
        );

        setIsAnimating(false);
    };

    return (
        <SortingVisualizer
            title="Heap Sort"
            description="Build heap and repeatedly extract maximum."
            sortFunction={heapSort}
            explanationData={
                explanationData.heapSort
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
                    label: "Heap Sort",
                    path: "/dashboard/heap-sort",
                },
            ]}
        />
    );
}

export default HeapSortVisualizer;