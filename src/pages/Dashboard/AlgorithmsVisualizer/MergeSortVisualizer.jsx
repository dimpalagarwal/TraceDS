import SortingVisualizer from "../../../components/Visualizer/SortingVisualizer";
import { explanationData } from "../../../data/explanationData";

function MergeSortVisualizer() {

    const sleep = (ms) =>
        new Promise(resolve =>
            setTimeout(resolve, ms)
        );

    const mergeSort = async ({
        array,
        setArray,
        setActiveIndices,
        setSortedIndices,
        setCurrentStep,
        setIsAnimating,
        setMergeRange,
    }) => {

        setIsAnimating(true);

        const temp = [...array];

        const merge = async (left, mid, right) => {

            setMergeRange(
                Array.from(
                    { length: right - left + 1 },
                    (_, i) => left + i
                )
            );

            setCurrentStep(
                `Merging ${left}-${right}`
            );

            await sleep(700);

            const leftArr =
                temp.slice(left, mid + 1);

            const rightArr =
                temp.slice(mid + 1, right + 1);

            let i = 0;
            let j = 0;
            let k = left;

            while (
                i < leftArr.length &&
                j < rightArr.length
            ) {

                setActiveIndices([k]);

                await sleep(500);

                if (
                    leftArr[i] <= rightArr[j]
                ) {

                    temp[k++] =
                        leftArr[i++];
                }
                else {

                    temp[k++] =
                        rightArr[j++];
                }

                setArray([...temp]);

                await sleep(500);
            }

            while (
                i < leftArr.length
            ) {

                temp[k++] =
                    leftArr[i++];

                setArray([...temp]);

                await sleep(300);
            }

            while (
                j < rightArr.length
            ) {

                temp[k++] =
                    rightArr[j++];

                setArray([...temp]);

                await sleep(300);
            }
        };

        const sort = async (left, right) => {

            if (left >= right)
                return;

            const mid =
                Math.floor(
                    (left + right) / 2
                );

            await sort(left, mid);

            await sort(
                mid + 1,
                right
            );

            await merge(
                left,
                mid,
                right
            );
        };

        await sort(
            0,
            temp.length - 1
        );

        setSortedIndices(
            [...Array(temp.length).keys()]
        );

        setMergeRange([]);
        setActiveIndices([]);

        setCurrentStep(
            "Array Sorted"
        );

        setIsAnimating(false);
    };

    return (
        <SortingVisualizer
            title="Merge Sort"
            description="Divide and merge sorted halves."
            sortFunction={mergeSort}
            explanationData={
                explanationData.merge
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
                    label: "Merge Sort",
                    path: "/dashboard/merge-sort",
                },
            ]}
        />
    );
}

export default MergeSortVisualizer;