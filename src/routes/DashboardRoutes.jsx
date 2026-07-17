import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Algorithms from "../pages/Dashboard/Algorithms";
import ArrayVisualizer from "../pages/Dashboard/Visualizers/ArrayVisualizer";
import LinkedListVisualizer from "../pages/Dashboard/Visualizers/LinkedListVisualizer";
import StackVisualizer from "../pages/Dashboard/Visualizers/StackVisualizer";
import QueueVisualizer from "../pages/Dashboard/Visualizers/QueueVisualizer";
import DequeVisualizer from "../pages/Dashboard/Visualizers/DequeVisualizer";
import HeapVisualizer from "../pages/Dashboard/Visualizers/HeapVisualizer";
import BSTVisualizer from "../pages/Dashboard/Visualizers/BSTVisualizer";
import TrieVisualizer from "../pages/Dashboard/Visualizers/TrieVisualizer";
import AVLVisualizer from "../pages/Dashboard/Visualizers/AVLVisualizer";
import SegmentTreeVisualizer from "../pages/Dashboard/Visualizers/SegmentTreeVisualizer";
import HashTableVisualizer from "../pages/Dashboard/Visualizers/HashTableVisualizer";
import GraphVisualizer from "../pages/Dashboard/Visualizers/GraphVisualizer";
import LinearSearchVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/LinearSearchVisualizer";
import BinarySearchVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/BinarySearchVisualizer";
import BubbleSortVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/BubbleSortVisualizer";
import InsertionSortVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/InsertionSortVisualizer";
import SelectionSortVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/SelectionSortVisualizer";
import MergeSortVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/MergeSortVisualizer";
import QuickSortVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/QuickSortVisualizer";
import HeapSortVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/HeapSortVisualizer";
import TopologicalSortVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/TopologicalSortVisualizer";
import PrimVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/PrimVisualizer";
import KruskalVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/KruskalVisualizer";
import DijkstraVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/DijkstraVisualizer";
import BellmanFordVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/BellmanFordVisualizer";
import FloydWarshallVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/FloydWarshallVisualizer";
import ActivitySelectionVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/ActivitySelectionVisualizer";
import JobSchedulingVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/JobSchedulingVisualizer";
import KMPVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/KMPVisualizer";
import RabinKarpVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/RabinKarpVisualizer";
import HuffmanVisualizer from "../pages/Dashboard/AlgorithmsVisualizer/HuffmanVisualizer";
import Favorites from "../pages/Dashboard/Favorites";
import History from "../pages/Dashboard/History";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/algorithms" element={<Algorithms />}/>
      <Route path="/array" element={<ArrayVisualizer />}/>
      <Route path="/linked-list" element={<LinkedListVisualizer />}/>
      <Route path="/stack" element={<StackVisualizer />}/>
      <Route path="/queue" element={<QueueVisualizer />}/>
      <Route path="/deque" element={<DequeVisualizer />}/>
      <Route path="/heap" element={<HeapVisualizer />}/>
      <Route path="/bst" element={<BSTVisualizer />}/>
      <Route path="/avl-tree" element={<AVLVisualizer />}/>
      <Route path="/trie" element={<TrieVisualizer />}/>
      <Route path="/segment-tree" element={<SegmentTreeVisualizer />}/>
      <Route path="/hash-table" element={<HashTableVisualizer />}/>
      <Route path="/graph" element={<GraphVisualizer />}/>
      <Route path="/linear-search" element={<LinearSearchVisualizer/>}/>
      <Route path="/binary-search" element={<BinarySearchVisualizer/>}/>
      <Route path="/bubble-sort" element={<BubbleSortVisualizer/>}/>
      <Route path="/insertion-sort" element={<InsertionSortVisualizer/>}/>
      <Route path="/selection-sort" element={<SelectionSortVisualizer/>}/>
      <Route path="/merge-sort" element={<MergeSortVisualizer/>}/>
      <Route path="/quick-sort" element={<QuickSortVisualizer/>}/>
      <Route path="/heap-sort" element={<HeapSortVisualizer/>}/>
      <Route path="/topo-sort" element={<TopologicalSortVisualizer/>}/>
      <Route path="/prims" element={<PrimVisualizer/>}/>
      <Route path="/krushkal" element={<KruskalVisualizer/>}/>
      <Route path="/dijkstra" element={<DijkstraVisualizer/>}/>
      <Route path="/bellman" element={<BellmanFordVisualizer/>}/>
      <Route path="/floyd" element={<FloydWarshallVisualizer/>}/>
      <Route path="/activity" element={<ActivitySelectionVisualizer/>}/>
      <Route path="/job" element={<JobSchedulingVisualizer/>}/>
      <Route path="/kmp" element={<KMPVisualizer/>}/>
      <Route path="/rabin" element={<RabinKarpVisualizer/>}/>
      <Route path="favorites" element={<Favorites />}/>
      <Route path="history" element={<History  />}/>
      <Route path="huffman" element={<HuffmanVisualizer  />}/>
    </Routes>
  );
}

export default DashboardRoutes;