import {Boxes,Link2,Layers3,ArrowUpDown,Repeat2,Binary,GitBranch,TreePine,Waypoints,Network,Hash,Share2,} from "lucide-react";

export const dsSections = [
  {
    title: "Linear Structures",

    items: [
      {
        id: "array",
        title: "Array",
        icon: Boxes,
        description:
          "Contiguous memory with constant-time indexing.",
        path: "/dashboard/array",
      },

      {
        id: "linked-list",
        title: "Linked List",
        icon: Link2,
        description:
          "Nodes connected using pointers.",
        path: "/dashboard/linked-list",
      },

      {
        id: "stack",
        title: "Stack",
        icon: Layers3,
        description:
          "Last-In First-Out data structure.",
        path: "/dashboard/stack",
      },

      {
        id: "queue",
        title: "Queue",
        icon: ArrowUpDown,
        description:
          "First-In First-Out data structure.",
        path: "/dashboard/queue",
      },

      {
        id: "deque",
        title: "Deque",
        icon: Repeat2,
        description:
          "Insertion and deletion from both ends.",
        path: "/dashboard/deque",
      },
    ],
  },

  {
    title: "Tree Structures",

    items: [
      {
        id: "heap",
        title: "Heap",
        icon: Binary,
        description:
          "Priority based binary tree.",
        path: "/dashboard/heap",
      },

      {
        id: "bst",
        title: "Binary Search Tree",
        icon: GitBranch,
        description:
          "Ordered binary search tree.",
        path: "/dashboard/bst",
      },

      {
        id: "avl-tree",
        title: "AVL Tree",
        icon: TreePine,
        description:
          "Self-balancing BST.",
        path: "/dashboard/avl-tree",
      },

      {
        id: "trie",
        title: "Trie",
        icon: Waypoints,
        description:
          "Efficient prefix searching.",
        path: "/dashboard/trie",
      },

      {
        id: "segment-tree",
        title: "Segment Tree",
        icon: Network,
        description:
          "Fast range query structure.",
        path: "/dashboard/segment-tree",
      },
    ],
  },

  {
    title: "Hash Structures",

    items: [
      {
        id: "hash-table",
        title: "Hash Table",
        icon: Hash,
        description:
          "Key-value lookup in O(1) average.",
        path: "/dashboard/hash-table",
      },
    ],
  },

  {
    title: "Graph Structures",

    items: [
      {
        id: "graph",
        title: "Graph",
        icon: Share2,
        description:
          "Vertices connected using edges.",
        path: "/dashboard/graph",
      },
    ],
  },
];