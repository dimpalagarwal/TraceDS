import {Search,ArrowUpDown,Network,TreePine,Flag,Type,} from "lucide-react";

export const algorithmSections = [

  {
    title: "Searching",

    items: [
      {
        id: "linear-search",
        title: "Linear Search",
        icon: Search,
        description: "Sequentially search every element.",
        path: "/dashboard/linear-search",
      },

      {
        id: "binary-search",
        title: "Binary Search",
        icon: Search,
        description: "Fast search on sorted arrays.",
        path: "/dashboard/binary-search"
      },
    ],
  },

  {
    title: "Sorting",

    items: [
      {
        id: "bubble-sort",
        title: "Bubble Sort",
        icon: ArrowUpDown,
        description: "Repeated adjacent swaps.",
        path: "/dashboard/bubble-sort"
      },

      {
        id: "selection-sort",
        title: "Selection Sort",
        icon: ArrowUpDown,
        description: "Repeated minimum selection.",
        path: "/dashboard/selection-sort"
      },

      {
        id: "insertion-sort",
        title: "Insertion Sort",
        icon: ArrowUpDown,
        description: "Insert elements in sorted order.",
        path: "/dashboard/insertion-sort"
      },

      {
        id: "merge-sort",
        title: "Merge Sort",
        icon: ArrowUpDown,
        description: "Divide and conquer sorting.",
        path: "/dashboard/merge-sort"
      },

      {
        id: "quick-sort",
        title: "Quick Sort",
        icon: ArrowUpDown,
        description: "Partition based sorting.",
        path: "/dashboard/quick-sort"
      },

      {
        id: "heap-sort",
        title: "Heap Sort",
        icon: ArrowUpDown,
        description: "Sorting using heap.",
        path: "/dashboard/heap-sort"
      },
    ],
  },

  {
    title: "Graph Algorithms",

    items: [
      {
        id: "dijkstra",
        title: "Dijkstra",
        icon: Network,
        description: "Shortest path algorithm.",
        path: "/dashboard/dijkstra"
      },

      {
        id: "bellman",
        title: "Bellman Ford",
        icon: Network,
        description: "Shortest paths with negative edges.",
        path: "/dashboard/bellman"
      },

      {
        id: "floyd",
        title: "Floyd Warshall",
        icon: Network,
        description: "All pairs shortest paths.",
        path: "/dashboard/floyd"
      },

      {
        id: "prims",
        title: "Prim's MST",
        icon: Network,
        description: "Minimum Spanning Tree.",
        path: "/dashboard/prims"
      },

      {
        id: "krushkal",
        title: "Kruskal MST",
        icon: Network,
        description: "Greedy MST algorithm.",
        path: "/dashboard/krushkal"
      },

      {
        id: "topo-sort",
        title: "Topological Sort",
        icon: Network,
        description: "Ordering for DAGs.",
        path: "/dashboard/topo-sort"
      },
    ],
  },

  {
    title: "Greedy",

    items: [
      {
        id: "huffman",
        title: "Huffman Coding",
        icon: Flag,
        description: "Optimal prefix coding.",
        path: "/dashboard/huffman"
      },

      {
        id: "activity",
        title: "Activity Selection",
        icon: Flag,
        description: "Maximum non-overlapping activities.",
        path: "/dashboard/activity"
      },

      {
        id: "job",
        title: "Job Scheduling",
        icon: Flag,
        description: "Maximize scheduling profit.",
        path: "/dashboard/job"
      },
    ],
  },

  {
    title: "String Algorithms",

    items: [
      {
        id: "kmp",
        title: "KMP",
        icon: Type,
        description: "Efficient pattern matching.",
        path: "/dashboard/kmp"
      },

      {
        id: "rabin",
        title: "Rabin-Karp",
        icon: Type,
        description: "Rolling hash searching.",
        path: "/dashboard/rabin"
      },
    ],
  },

];