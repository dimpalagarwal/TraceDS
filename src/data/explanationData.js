export const explanationData = {

    array: {
        title: "Array",
        introduction: "An Array is one of the most fundamental and widely used data structures in computer science. It is a collection of elements stored in contiguous memory locations, where each element can be accessed directly using its index. Arrays allow us to store multiple values of the same data type under a single variable name, making data management more organized and efficient.",
        whyNeeded: "Imagine a classroom with 100 students. If we had to create a separate variable for every student's marks, managing the data would become extremely difficult. Arrays solve this problem by allowing us to store all marks in a single structure and access any student's marks using an index.",
        realWorldAnalogy: "Think of an array as a row of lockers in a school. Every locker has a unique number (index), and you can directly access any locker if you know its number. Similarly, every element in an array has a unique index that allows quick access.",
        memoryRepresentation: "Arrays store elements in contiguous memory locations. This means all elements are placed one after another in memory. Because of this continuous storage, the computer can calculate the exact location of any element using its index, making access extremely fast.",
        working: [
            "An array stores multiple elements of the same data type.",
            "Each element is assigned an index starting from 0.",
            "The first element is stored at index 0, the second at index 1, and so on.",
            "Elements can be accessed directly using their index.",
            "Since memory locations are contiguous, accessing any element takes constant time.",
            "The size of a static array is usually fixed once created."
        ],
        example: "Consider the array: [10, 20, 30, 40, 50]. Here, 10 is stored at index 0, 20 at index 1, 30 at index 2, 40 at index 3, and 50 at index 4. If we want to access the value 30, we simply use array[2]. The computer directly jumps to that location without checking previous elements.",
        stepByStepExample: [
            "Array = [10, 20, 30, 40, 50]",
            "Access array[2]",
            "Index 2 contains value 30",
            "Output = 30"
        ],
        insertionExplanation: "Insertion depends on the position. Adding an element at the end is simple if space is available. However, inserting an element in the middle requires shifting all subsequent elements one position to the right.",
        deletionExplanation: "Deleting an element from the middle requires shifting all elements after it one position to the left to fill the gap.",
        visualizationGuide: "Observe how each box represents a memory location and every box has an index. During insertion or deletion, notice how elements shift. During traversal, watch how the pointer moves from one index to the next.",
        advantages: [
            "Fast access to elements using indices",
            "Simple and easy to implement",
            "Efficient memory usage",
            "Useful for storing large collections of similar data"
        ],
        disadvantages: [
            "Fixed size in static arrays",
            "Insertion and deletion can be expensive",
            "Requires contiguous memory allocation",
            "May waste memory if allocated size is larger than needed"
        ],
        complexity: [
            {
                operation: "Access",
                value: "O(1)"
            },
            {
                operation: "Search",
                value: "O(n)"
            },
            {
                operation: "Insertion",
                value: "O(n)"
            },
            {
                operation: "Deletion",
                value: "O(n)"
            },
            {
                operation: "Space Complexity",
                value: "O(n)"
            }
        ],
        applications: [
            "Storing marks of students",
            "Image processing (pixels stored in arrays)",
            "Databases and record management",
            "Implementing other data structures like Stacks, Queues, and Heaps",
            "Game development and simulations"
        ],
        keyTakeaways: [
            "Arrays store elements in contiguous memory locations.",
            "Indexing starts from 0 in most programming languages.",
            "Accessing elements is extremely fast.",
            "Insertion and deletion in the middle require shifting elements.",
            "Arrays form the foundation of many advanced data structures."
        ]
    },

    linked: {
        title: "Linked-list",
        introduction: "A Linked List is a linear data structure where elements are stored in separate nodes rather than contiguous memory locations. Each node contains two parts: the data itself and a pointer (or reference) to the next node in the sequence. Unlike arrays, linked lists do not require elements to be stored next to each other in memory, making them highly flexible and dynamic.",
        whyNeeded: "Consider a music playlist where songs are constantly being added, removed, or reordered. Using an array would require shifting many elements whenever a change occurs. A Linked List makes these operations more efficient because nodes can be connected or disconnected simply by updating pointers without moving other elements.",
        realWorldAnalogy: "Imagine a treasure hunt where each clue points to the location of the next clue. You cannot directly jump to the fifth clue without following the chain from the beginning. A Linked List works in a similar way—each node knows where the next node is located, creating a chain of connected elements.",
        working: [
            "A Linked List is made up of individual nodes.",
            "Each node contains data and a pointer to the next node.",
            "The first node is called the Head.",
            "The last node points to NULL, indicating the end of the list.",
            "To access a particular element, we start from the Head and follow the links one by one.",
            "New nodes can be inserted by updating pointers rather than shifting elements."
        ],
        example: "Consider a Linked List containing the values 10, 20, 30, and 40. The Head node stores 10 and points to the node containing 20. The node containing 20 points to 30, and 30 points to 40. The last node points to NULL, indicating that there are no more nodes after it.",
        visualizationGuide: "Observe how each node contains both a value and a pointer. Watch how the links connect nodes together. During traversal, notice how the current pointer moves from one node to the next. During insertion and deletion, focus on how the connections between nodes change instead of shifting elements.",
        advantages: [
            "Dynamic size that can grow or shrink during runtime",
            "Efficient insertion and deletion operations",
            "Does not require contiguous memory allocation",
            "Easy to implement stacks, queues, and other dynamic data structures"
        ],
        disadvantages: [
            "No direct access to elements using an index",
            "Traversal is required to reach a specific node",
            "Extra memory is needed to store pointers",
            "Cache performance is generally lower than arrays"
        ],
        complexity: [
            { operation: "Access", value: "O(n)" },
            { operation: "Search", value: "O(n)" },
            { operation: "Insertion (Beginning)", value: "O(1)" },
            { operation: "Deletion (Beginning)", value: "O(1)" },
            { operation: "Space Complexity", value: "O(n)" }
        ],
        applications: [
            "Music playlists and media queues",
            "Browser history navigation",
            "Undo and redo functionality in editors",
            "Implementation of stacks and queues",
            "Dynamic memory management systems",
            "Graph adjacency list representation"
        ],
        keyTakeaways: [
            "Linked Lists store elements as connected nodes rather than contiguous memory blocks.",
            "Each node contains data and a pointer to the next node.",
            "Insertion and deletion are more efficient than arrays in many cases.",
            "Random access is not possible because nodes must be traversed sequentially.",
            "Linked Lists are useful when the size of data changes frequently."
        ]
    },

    stack: {
        title: "Stack",

        introduction:
            "A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means that the element added most recently is the first one to be removed. You can think of a stack as a collection of elements where all insertions and deletions take place from one end called the Top. Stacks are widely used in programming because they provide an efficient way to manage data that needs to be processed in reverse order.",

        whyNeeded:
            "Imagine working on a document and making multiple changes. When you press the Undo button, the most recent action is reversed first. This behavior follows the LIFO principle. Stacks are designed for situations where the latest item added should be the first item removed, making them useful in many real-world and software applications.",

        realWorldAnalogy:
            "Think of a stack of plates in a cafeteria. New plates are placed on the top of the stack, and plates are also removed from the top. The last plate placed on the stack becomes the first plate to be taken off. A Stack data structure behaves exactly the same way.",

        working: [
            "A Stack maintains a pointer called Top that refers to the most recently added element.",
            "When a new element is added, it is placed on the top of the stack using the Push operation.",
            "When an element is removed, the top element is removed using the Pop operation.",
            "The Peek operation allows us to view the top element without removing it.",
            "All insertions and deletions happen only at the Top.",
            "Because operations occur at one end, stacks provide very efficient insertion and deletion."
        ],

        example:
            "Consider an empty stack. First, push 10, then push 20, then push 30. The stack now contains [10, 20, 30], where 30 is at the top. If we perform a Pop operation, 30 is removed first. Another Pop removes 20, leaving only 10 in the stack. This demonstrates the Last In, First Out behavior.",

        visualizationGuide:
            "Observe how new elements are always added to the top of the stack. During a Push operation, notice how the Top pointer moves upward. During a Pop operation, watch how the top element is removed and the Top pointer moves downward. Pay attention to how only the top element is accessible at any given time.",

        advantages: [
            "Simple and easy to implement",
            "Efficient insertion and deletion operations",
            "Useful for managing function calls and recursion",
            "Provides an organized way to process data in reverse order"
        ],

        disadvantages: [
            "Access is limited to the top element only",
            "Searching for an element may require traversing the entire stack",
            "Not suitable when random access is required",
            "Can lead to overflow if the stack size is fixed"
        ],

        complexity: [
            {
                operation: "Push",
                value: "O(1)"
            },
            {
                operation: "Pop",
                value: "O(1)"
            },
            {
                operation: "Peek / Top",
                value: "O(1)"
            },
            {
                operation: "Search",
                value: "O(n)"
            },
            {
                operation: "Space Complexity",
                value: "O(n)"
            }
        ],

        applications: [
            "Undo and Redo operations in editors",
            "Browser history navigation",
            "Function call management in programming",
            "Expression evaluation and syntax parsing",
            "Backtracking algorithms",
            "Depth First Search (DFS) traversal"
        ],

        keyTakeaways: [
            "A Stack follows the Last In, First Out (LIFO) principle.",
            "All insertions and deletions occur at the Top.",
            "Push adds an element, Pop removes an element, and Peek views the top element.",
            "Stack operations are highly efficient with O(1) time complexity.",
            "Stacks are commonly used in recursion, undo systems, and expression evaluation."
        ]
    },

    queue: {
        title: "Queue",

        introduction:
            "A Queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means that the element inserted first is the first one to be removed. Unlike a Stack, where operations occur at the same end, a Queue performs insertion at the Rear and deletion at the Front. Queues are commonly used when tasks need to be processed in the exact order they arrive.",

        whyNeeded:
            "Imagine standing in a line at a ticket counter. The person who joins the line first gets served first, while new people join at the back of the line. If people were allowed to leave the line in a random order, the system would become unfair and disorganized. A Queue ensures that requests, tasks, or data are processed in the same order in which they arrive.",

        realWorldAnalogy:
            "Think of a queue at a supermarket checkout. Customers join the line from the rear and leave from the front after being served. The first customer to enter the line is the first customer to leave it. A Queue data structure works in exactly the same way.",

        working: [
            "A Queue has two important positions: Front and Rear.",
            "New elements are inserted at the Rear using the Enqueue operation.",
            "Elements are removed from the Front using the Dequeue operation.",
            "The first element inserted remains at the Front until it is removed.",
            "The Front pointer tracks the next element to be removed.",
            "The Rear pointer tracks the most recently added element.",
            "Because elements are processed in arrival order, a Queue follows the FIFO principle."
        ],

        example:
            "Consider an empty queue. First, enqueue 10, then enqueue 20, and finally enqueue 30. The queue now contains [10, 20, 30], where 10 is at the Front and 30 is at the Rear. If we perform a Dequeue operation, 10 is removed first because it entered the queue before the others. The queue then becomes [20, 30].",

        visualizationGuide:
            "Observe how elements always enter from the Rear and leave from the Front. During an Enqueue operation, notice how the Rear pointer moves to the newly added element. During a Dequeue operation, watch how the Front pointer moves forward after removing an element. Pay attention to how the order of elements is preserved throughout the process.",

        advantages: [
            "Maintains the order of processing",
            "Efficient insertion and deletion operations",
            "Simple and easy to implement",
            "Ideal for scheduling and task management systems"
        ],

        disadvantages: [
            "Random access is not possible",
            "Searching for an element may require traversing the queue",
            "Fixed-size implementations can lead to overflow",
            "Less flexible than some dynamic data structures"
        ],

        complexity: [
            {
                operation: "Enqueue",
                value: "O(1)"
            },
            {
                operation: "Dequeue",
                value: "O(1)"
            },
            {
                operation: "Front",
                value: "O(1)"
            },
            {
                operation: "Search",
                value: "O(n)"
            },
            {
                operation: "Space Complexity",
                value: "O(n)"
            }
        ],

        applications: [
            "CPU and process scheduling",
            "Printer task management",
            "Customer service systems",
            "Network packet handling",
            "Breadth First Search (BFS)",
            "Task queues and job scheduling systems"
        ],

        keyTakeaways: [
            "A Queue follows the First In, First Out (FIFO) principle.",
            "Elements are inserted at the Rear and removed from the Front.",
            "Enqueue adds an element, while Dequeue removes an element.",
            "Queue operations are highly efficient with O(1) time complexity.",
            "Queues are widely used in scheduling, networking, and graph algorithms."
        ]
    },

    deque: {
        title: "Deque (Double Ended Queue)",

        introduction:
            "A Deque, short for Double Ended Queue, is a linear data structure that allows insertion and deletion of elements from both the Front and the Rear. It combines the flexibility of both Stacks and Queues, making it useful in situations where data needs to be processed from either end. Unlike a standard Queue, which restricts insertion and deletion to specific ends, a Deque provides efficient access and modification from both sides.",

        whyNeeded:
            "Consider a train where passengers can enter or exit from either end of a compartment. Restricting movement to only one side would make the process less flexible and efficient. Similarly, many applications require adding or removing data from both ends depending on the situation. A Deque solves this problem by allowing operations at both the Front and the Rear.",

        realWorldAnalogy:
            "Imagine a line of people where new people can join from either the front or the back, and people can also leave from either side. Unlike a regular queue, which only allows movement in one direction, a Deque offers complete flexibility at both ends.",

        working: [
            "A Deque maintains two important positions: Front and Rear.",
            "Elements can be inserted at the Front using the Push Front operation.",
            "Elements can be inserted at the Rear using the Push Back operation.",
            "Elements can be removed from the Front using the Pop Front operation.",
            "Elements can be removed from the Rear using the Pop Back operation.",
            "The Front pointer tracks the first element, while the Rear pointer tracks the last element.",
            "Because operations are allowed at both ends, a Deque is more flexible than a standard Queue."
        ],

        example:
            "Consider an empty deque. First, insert 20 at the Rear. The deque becomes [20]. Then insert 10 at the Front, resulting in [10, 20]. Next, insert 30 at the Rear, making the deque [10, 20, 30]. If we remove an element from the Front, 10 is removed. If we then remove an element from the Rear, 30 is removed. The deque is left with [20].",

        visualizationGuide:
            "Observe how elements can enter and leave from both ends. During Push Front and Push Back operations, notice how new elements appear at the corresponding side. During Pop Front and Pop Back operations, watch how elements are removed from the chosen end. Pay attention to how the Front and Rear pointers update after every operation.",

        advantages: [
            "Supports insertion and deletion from both ends",
            "Highly flexible compared to Stacks and Queues",
            "Efficient O(1) operations at both ends",
            "Can be used to implement both Stacks and Queues",
            "Useful for sliding window and optimization problems"
        ],

        disadvantages: [
            "More complex to implement than a simple Queue",
            "Random access is generally not supported efficiently",
            "Searching for elements still requires traversal",
            "Can consume additional memory in dynamic implementations"
        ],

        complexity: [
            {
                operation: "Push Front",
                value: "O(1)"
            },
            {
                operation: "Push Back",
                value: "O(1)"
            },
            {
                operation: "Pop Front",
                value: "O(1)"
            },
            {
                operation: "Pop Back",
                value: "O(1)"
            },
            {
                operation: "Search",
                value: "O(n)"
            },
            {
                operation: "Space Complexity",
                value: "O(n)"
            }
        ],

        applications: [
            "Sliding Window Maximum and Minimum problems",
            "Palindrome checking algorithms",
            "Browser history management",
            "Task scheduling systems",
            "Implementing Stacks and Queues",
            "Caching and memory management systems"
        ],

        keyTakeaways: [
            "Deque stands for Double Ended Queue.",
            "Insertion and deletion can occur at both the Front and Rear.",
            "It is more flexible than a standard Queue.",
            "All major insertion and deletion operations take O(1) time.",
            "Deque is widely used in sliding window and optimization algorithms."
        ]
    },

    heap: {
        title: "Heap",

        introduction:
            "A Heap is a specialized tree-based data structure that follows a specific ordering property. It is commonly implemented as a Complete Binary Tree and is usually stored using an array. In a Max Heap, every parent node is greater than or equal to its children, while in a Min Heap, every parent node is smaller than or equal to its children. Heaps are widely used when we need efficient access to the largest or smallest element in a collection of data.",

        whyNeeded:
            "Imagine managing a hospital emergency room where patients with the most critical conditions should be treated first. Searching through all patients every time would be inefficient. A Heap allows the highest-priority patient to always remain easily accessible, making insertions and removals efficient even when the number of patients grows large.",

        realWorldAnalogy:
            "Think of a priority-based waiting line at an airport security checkpoint. Instead of serving people strictly in arrival order, passengers with higher priority are processed first. A Heap works similarly by ensuring that the most important element is always available at the top.",

        working: [
            "A Heap is a Complete Binary Tree, meaning all levels are completely filled except possibly the last level, which is filled from left to right.",
            "In a Max Heap, every parent node has a value greater than or equal to its children.",
            "In a Min Heap, every parent node has a value smaller than or equal to its children.",
            "The root node always contains the maximum element in a Max Heap or the minimum element in a Min Heap.",
            "When a new element is inserted, it is first placed at the next available position.",
            "The element is then moved upward using Heapify Up until the Heap property is restored.",
            "When the root element is removed, the last element replaces it and Heapify Down is performed to restore the Heap property."
        ],

        example:
            "Consider a Max Heap containing the values [50, 30, 40, 10, 20, 35]. The root node contains 50 because it is the largest value. If we insert 60, it is first placed at the next available position. Since 60 is greater than its parent, it moves upward until it becomes the new root. The Heap property is preserved throughout the process.",

        visualizationGuide:
            "Observe how the Heap maintains its complete tree structure after every operation. During insertion, watch the new element move upward through Heapify Up. During deletion, notice how the last element replaces the root and then moves downward through Heapify Down. Pay attention to how the Heap property is restored after each modification.",

        advantages: [
            "Provides quick access to the maximum or minimum element",
            "Efficient insertion and deletion operations",
            "Well suited for priority-based processing",
            "Can be efficiently represented using arrays",
            "Forms the foundation of Priority Queues"
        ],

        disadvantages: [
            "Searching for an arbitrary element is inefficient",
            "More complex than basic linear data structures",
            "Does not maintain sorted order among all elements",
            "Traversal is less intuitive compared to trees like BSTs"
        ],

        complexity: [
            {
                operation: "Access Max/Min",
                value: "O(1)"
            },
            {
                operation: "Insertion",
                value: "O(log n)"
            },
            {
                operation: "Deletion",
                value: "O(log n)"
            },
            {
                operation: "Search",
                value: "O(n)"
            },
            {
                operation: "Build Heap",
                value: "O(n)"
            },
            {
                operation: "Space Complexity",
                value: "O(n)"
            }
        ],

        applications: [
            "Priority Queues",
            "CPU scheduling systems",
            "Task scheduling applications",
            "Dijkstra's Shortest Path Algorithm",
            "Prim's Minimum Spanning Tree Algorithm",
            "Heap Sort",
            "Network routing systems",
            "Event-driven simulations"
        ],

        keyTakeaways: [
            "A Heap is a Complete Binary Tree that follows a Heap property.",
            "Max Heaps keep the largest element at the root, while Min Heaps keep the smallest element at the root.",
            "Insertion and deletion require Heapify operations to maintain the Heap structure.",
            "Accessing the maximum or minimum element takes O(1) time.",
            "Heaps are widely used in Priority Queues and graph algorithms."
        ]
    },
    bst: {
        title: "Binary Search Tree (BST)",

        introduction:
            "A Binary Search Tree (BST) is a hierarchical data structure in which each node contains a value and has at most two children: a left child and a right child. What makes a BST special is its ordering property: all values in the left subtree of a node are smaller than the node's value, and all values in the right subtree are greater. This property allows searching, insertion, and deletion operations to be performed efficiently.",

        whyNeeded:
            "Imagine managing a large collection of books in a library. If the books are arranged randomly, finding a particular book can take a long time. A Binary Search Tree organizes data in a way that allows us to quickly decide whether to move left or right while searching, reducing the number of comparisons needed. This makes BSTs much more efficient than searching through unsorted data.",

        realWorldAnalogy:
            "Think of a guessing game where you have to guess a number between 1 and 100. If your guess is too high, you are told to look lower. If your guess is too low, you are told to look higher. Each decision eliminates a large portion of the possibilities. A BST works in a similar way by directing searches either left or right based on comparisons.",

        working: [
            "The first inserted node becomes the Root of the tree.",
            "For every new value, compare it with the current node.",
            "If the value is smaller, move to the left child.",
            "If the value is greater, move to the right child.",
            "Repeat the process until an empty position is found.",
            "Insert the new node at that position.",
            "Searching follows the same comparison process until the target is found or a NULL node is reached."
        ],

        example:
            "Consider inserting the values 50, 30, 70, 20, 40, 60, and 80 into an empty BST. The first value, 50, becomes the root. Since 30 is smaller than 50, it is placed on the left. Since 70 is greater than 50, it is placed on the right. Continuing this process creates a tree where smaller values remain on the left side and larger values remain on the right side.",

        visualizationGuide:
            "Observe how each inserted value follows a path from the root to its correct position. During searching, notice how comparisons help eliminate half of the remaining possibilities at each step. During deletion, watch how nodes are rearranged to preserve the BST property after a node is removed.",

        advantages: [
            "Efficient searching, insertion, and deletion in balanced trees",
            "Maintains data in sorted order through in-order traversal",
            "Easy to perform range-based queries",
            "Provides faster operations than linear data structures in many cases",
            "Serves as the foundation for advanced tree structures"
        ],

        disadvantages: [
            "Performance degrades if the tree becomes skewed",
            "Worst-case operations can become O(n)",
            "Requires additional memory for pointers",
            "Balancing is not automatic in a standard BST"
        ],

        complexity: [
            {
                operation: "Search",
                value: "O(log n) Average, O(n) Worst"
            },
            {
                operation: "Insertion",
                value: "O(log n) Average, O(n) Worst"
            },
            {
                operation: "Deletion",
                value: "O(log n) Average, O(n) Worst"
            },
            {
                operation: "Traversal",
                value: "O(n)"
            },
            {
                operation: "Space Complexity",
                value: "O(n)"
            }
        ],

        applications: [
            "Database indexing systems",
            "Dictionary and symbol table implementations",
            "Maintaining sorted datasets",
            "Range searching operations",
            "Autocomplete and search suggestions",
            "File and directory management systems"
        ],

        keyTakeaways: [
            "A BST is a binary tree that maintains an ordering property.",
            "Values smaller than a node are stored in its left subtree.",
            "Values greater than a node are stored in its right subtree.",
            "Searching, insertion, and deletion are efficient in balanced BSTs.",
            "A skewed BST can perform as poorly as a linked list.",
            "Balanced variants such as AVL Trees and Red-Black Trees solve the skewness problem."
        ]
    },
    avl: {
        title: "AVL Tree",

        introduction:
            "An AVL Tree is a self-balancing Binary Search Tree (BST) in which the difference between the heights of the left and right subtrees of any node is at most 1. This difference is known as the Balance Factor. AVL Trees automatically perform rotations whenever they become unbalanced, ensuring that operations such as searching, insertion, and deletion remain efficient even as the tree grows.",

        whyNeeded:
            "A standard Binary Search Tree works efficiently only when it remains balanced. However, if elements are inserted in sorted order, the BST can become skewed and behave like a Linked List, causing search operations to take O(n) time. AVL Trees solve this problem by automatically maintaining balance after every insertion and deletion, ensuring consistently fast performance.",

        realWorldAnalogy:
            "Imagine stacking books on a shelf. If all books are placed on one side, the shelf becomes unstable and may collapse. To keep the shelf balanced, books must be distributed evenly. Similarly, an AVL Tree continuously adjusts itself to maintain balance, ensuring that no side becomes significantly heavier than the other.",

        working: [
            "An AVL Tree follows all the properties of a Binary Search Tree.",
            "Each node maintains a Balance Factor, calculated as Height(Left Subtree) - Height(Right Subtree).",
            "A node is considered balanced if its Balance Factor is -1, 0, or 1.",
            "After every insertion or deletion, the Balance Factors of affected nodes are updated.",
            "If any node becomes unbalanced, rotations are performed to restore balance.",
            "The four possible balancing cases are LL Rotation, RR Rotation, LR Rotation, and RL Rotation.",
            "These rotations preserve the BST property while restoring balance."
        ],

        example:
            "Consider inserting the values 30, 20, and 10 into an empty AVL Tree. After inserting 30 and 20, the tree remains balanced. However, inserting 10 makes the left subtree much deeper than the right subtree, creating an imbalance. To fix this, a Right Rotation is performed around 30, resulting in a balanced tree with 20 as the root.",

        visualizationGuide:
            "Observe the Balance Factor of each node after every insertion or deletion. Watch how the tree becomes temporarily unbalanced and then performs rotations to restore balance. Pay special attention to how LL, RR, LR, and RL rotations restructure the tree while preserving the Binary Search Tree property.",

        advantages: [
            "Maintains a balanced tree automatically",
            "Guarantees O(log n) search, insertion, and deletion operations",
            "Prevents the tree from becoming skewed",
            "Provides faster lookups than an unbalanced BST",
            "Suitable for applications requiring frequent searches"
        ],

        disadvantages: [
            "More complex to implement than a standard BST",
            "Requires additional memory to store height or balance information",
            "Insertion and deletion involve extra balancing operations",
            "Rotations introduce additional computational overhead"
        ],

        complexity: [
            {
                operation: "Search",
                value: "O(log n)"
            },
            {
                operation: "Insertion",
                value: "O(log n)"
            },
            {
                operation: "Deletion",
                value: "O(log n)"
            },
            {
                operation: "Traversal",
                value: "O(n)"
            },
            {
                operation: "Space Complexity",
                value: "O(n)"
            }
        ],

        applications: [
            "Database indexing systems",
            "File system organization",
            "Memory management systems",
            "Dictionary and symbol table implementations",
            "Applications requiring frequent searches",
            "Real-time systems where predictable performance is important"
        ],

        keyTakeaways: [
            "An AVL Tree is a self-balancing Binary Search Tree.",
            "The Balance Factor of every node must remain between -1 and 1.",
            "Rotations are used to restore balance after insertions and deletions.",
            "AVL Trees guarantee O(log n) search, insertion, and deletion operations.",
            "They provide better worst-case performance than a standard BST."
        ]
    },
    trie: {
        title: "Trie (Prefix Tree)",

        introduction:
            "A Trie, also known as a Prefix Tree, is a specialized tree-based data structure used for storing and searching strings efficiently. Unlike other data structures that store complete words as individual entries, a Trie stores words character by character. Common prefixes are shared among words, which makes Trie highly efficient for prefix-based searches, autocomplete systems, and dictionary applications.",

        whyNeeded:
            "Imagine building a search engine that provides suggestions while a user types. Searching through thousands or millions of words one by one would be slow and inefficient. A Trie allows us to quickly find all words that start with a given prefix by following the path of characters in the tree, making searches extremely fast.",

        realWorldAnalogy:
            "Think of a dictionary organized by prefixes. If you want to find words starting with 'app', you don't need to scan the entire dictionary. Instead, you navigate directly to the section where words beginning with 'app' are stored. A Trie works similarly by organizing words based on their shared prefixes.",

        working: [
            "Each node in a Trie represents a character.",
            "The root node is usually empty and serves as the starting point.",
            "Characters of a word are inserted one by one from the root.",
            "Words with common prefixes share the same path in the Trie.",
            "A special marker is used to indicate the end of a valid word.",
            "To search for a word, we follow the path of its characters from the root.",
            "If all characters are found and the end-of-word marker exists, the word is present in the Trie."
        ],

        example:
            "Consider inserting the words 'cat', 'car', and 'care'. The characters 'c' and 'a' are shared by all three words. After reaching 'ca', the Trie branches into different paths. The word 'cat' ends at 't', while 'car' ends at 'r', and 'care' continues further to 'e'. This sharing of prefixes reduces redundancy and makes searches efficient.",

        visualizationGuide:
            "Observe how words with common prefixes share the same path. Watch how new nodes are created only when a character does not already exist. During a search operation, notice how traversal follows the sequence of characters. Pay attention to the end-of-word markers because reaching a node does not necessarily mean a complete word exists.",

        advantages: [
            "Extremely efficient for prefix-based searching",
            "Fast insertion and lookup of strings",
            "Shared prefixes reduce redundant storage",
            "Ideal for autocomplete and suggestion systems",
            "Can retrieve all words with a given prefix efficiently"
        ],

        disadvantages: [
            "Consumes more memory than some alternatives",
            "Implementation is more complex than arrays or hash tables",
            "May contain many nodes when storing large datasets",
            "Less efficient for non-string data"
        ],

        complexity: [
            {
                operation: "Insertion",
                value: "O(L)"
            },
            {
                operation: "Search",
                value: "O(L)"
            },
            {
                operation: "Prefix Search",
                value: "O(L)"
            },
            {
                operation: "Deletion",
                value: "O(L)"
            },
            {
                operation: "Space Complexity",
                value: "O(N × L)"
            }
        ],

        applications: [
            "Autocomplete and search suggestions",
            "Spell checking systems",
            "Dictionary implementations",
            "Search engines",
            "IP routing and network lookups",
            "Word games and text processing applications"
        ],

        keyTakeaways: [
            "A Trie stores strings character by character.",
            "Words with common prefixes share the same path.",
            "Search, insertion, and prefix queries take O(L) time, where L is the length of the word.",
            "Trie is one of the most efficient data structures for autocomplete systems.",
            "End-of-word markers are used to distinguish complete words from prefixes."
        ]
    },
    segment: {
        title: "Segment Tree",

        introduction:
            "A Segment Tree is a tree-based data structure used for efficiently answering range queries and performing updates on an array. Instead of recalculating results for an entire range every time a query is made, a Segment Tree stores information about different segments (ranges) of the array in a hierarchical structure. This allows both range queries and updates to be performed much faster than a normal array.",

        whyNeeded:
            "Imagine managing the daily sales of a company for an entire year. If you need to repeatedly find the total sales between different dates, calculating the sum every time by traversing the array would be slow. A Segment Tree preprocesses the data so that range queries can be answered efficiently, even when the array values change frequently.",

        realWorldAnalogy:
            "Think of a large library where books are organized by sections, floors, and buildings. Instead of counting books individually every time someone asks for the total number of books in a section, the library maintains counts for each level. A Segment Tree works similarly by storing information for small ranges and combining them to answer larger range queries quickly.",

        working: [
            "The array is divided into smaller segments recursively.",
            "Each node of the tree represents a specific range of the array.",
            "Leaf nodes represent individual elements.",
            "Internal nodes store combined information from their child nodes, such as sum, minimum, or maximum.",
            "To answer a range query, only the relevant segments are visited instead of traversing the entire array.",
            "When an element is updated, only the nodes affected by that change are updated.",
            "This hierarchical structure significantly reduces query and update times."
        ],

        example:
            "Consider the array [2, 4, 6, 8, 10, 12]. The root node stores the sum of all elements, which is 42. The left child stores the sum of the first half, and the right child stores the sum of the second half. If we want the sum of elements from index 1 to index 4, the Segment Tree combines information from only the relevant nodes instead of adding each element individually.",

        visualizationGuide:
            "Observe how the array is divided into smaller ranges at each level of the tree. Watch how internal nodes store aggregated information such as sums. During a query, notice that only specific nodes are visited rather than every element. During an update, pay attention to how changes propagate upward from a leaf node to the root.",

        advantages: [
            "Efficient range queries",
            "Efficient updates on array elements",
            "Supports various operations such as sum, minimum, maximum, and GCD",
            "Much faster than repeatedly traversing the entire array",
            "Widely used in competitive programming and real-time systems"
        ],

        disadvantages: [
            "Requires additional memory compared to a normal array",
            "More complex to implement",
            "Building the tree introduces preprocessing overhead",
            "Can be unnecessary for small datasets with few queries"
        ],

        complexity: [
            {
                operation: "Build Tree",
                value: "O(n)"
            },
            {
                operation: "Range Query",
                value: "O(log n)"
            },
            {
                operation: "Point Update",
                value: "O(log n)"
            },
            {
                operation: "Access Element",
                value: "O(log n)"
            },
            {
                operation: "Space Complexity",
                value: "O(4n)"
            }
        ],

        applications: [
            "Range Sum Queries",
            "Range Minimum Queries (RMQ)",
            "Range Maximum Queries",
            "Competitive Programming",
            "Database and analytics systems",
            "Financial data analysis",
            "Gaming leaderboards and score tracking",
            "Real-time monitoring systems"
        ],

        keyTakeaways: [
            "A Segment Tree is designed for efficient range queries and updates.",
            "Each node represents a range of the array.",
            "Leaf nodes represent individual elements.",
            "Range queries and updates take O(log n) time.",
            "The tree stores aggregated information such as sums, minimums, or maximums.",
            "Segment Trees are one of the most important advanced data structures for query processing."
        ]
    },
    hash: {
        title: "Hash Table",

        introduction:
            "A Hash Table is a data structure that stores data in the form of key-value pairs and provides extremely fast insertion, deletion, and search operations. Instead of searching through all stored elements one by one, a Hash Table uses a special function called a Hash Function to determine where data should be stored. This allows data to be accessed almost instantly in most cases.",

        whyNeeded:
            "Imagine a library with thousands of books. If books were placed randomly, finding a particular book would require checking many shelves. Instead, libraries organize books using unique identifiers so they can be located quickly. A Hash Table works similarly by using a key to determine the storage location of data, making retrieval much faster than linear searching.",

        realWorldAnalogy:
            "Think of a locker room where each student is assigned a locker number. If you know the locker number, you can directly go to the correct locker without checking every locker in the room. A Hash Table behaves in the same way by converting a key into an index where the data is stored.",

        working: [
            "A Hash Table stores data as key-value pairs.",
            "A Hash Function takes a key and converts it into an array index.",
            "The generated index determines where the data will be stored.",
            "When searching for a value, the same Hash Function is applied to the key.",
            "The Hash Table directly jumps to the calculated index and retrieves the value.",
            "Sometimes different keys may produce the same index, causing a collision.",
            "Collisions are handled using techniques such as Chaining or Open Addressing."
        ],

        example:
            "Suppose we want to store student records using their roll numbers as keys. If the Hash Function calculates index = key % 10, then roll number 25 is stored at index 5. To find the record later, we again compute 25 % 10 = 5 and directly access that location without searching through all records.",

        visualizationGuide:
            "Observe how keys are passed through the Hash Function to generate indices. Watch how values are placed into the corresponding buckets. During collisions, notice how multiple elements are handled within the same location using collision resolution techniques. Pay attention to how searches directly access the calculated index rather than traversing the entire structure.",

        advantages: [
            "Very fast search, insertion, and deletion operations",
            "Average-case O(1) access time",
            "Efficient storage and retrieval of key-value pairs",
            "Widely used in real-world applications",
            "Easy to implement using arrays and hash functions"
        ],

        disadvantages: [
            "Performance depends heavily on the quality of the Hash Function",
            "Collisions can reduce efficiency",
            "Requires additional memory for handling collisions",
            "Does not maintain data in sorted order"
        ],

        complexity: [
            {
                operation: "Search",
                value: "O(1) Average, O(n) Worst"
            },
            {
                operation: "Insertion",
                value: "O(1) Average, O(n) Worst"
            },
            {
                operation: "Deletion",
                value: "O(1) Average, O(n) Worst"
            },
            {
                operation: "Traversal",
                value: "O(n)"
            },
            {
                operation: "Space Complexity",
                value: "O(n)"
            }
        ],

        applications: [
            "Database indexing",
            "Caching systems",
            "Password verification systems",
            "Symbol tables in compilers",
            "Dictionary and map implementations",
            "URL shortening services",
            "Session management systems",
            "Search engines and web applications"
        ],

        keyTakeaways: [
            "A Hash Table stores data as key-value pairs.",
            "A Hash Function converts keys into array indices.",
            "Search, insertion, and deletion are O(1) on average.",
            "Collisions occur when multiple keys map to the same index.",
            "Collision handling techniques include Chaining and Open Addressing.",
            "Hash Tables are among the most widely used data structures in software development."
        ]
    },
    graph: {
        title: "Graph",

        introduction:
            "A Graph is a non-linear data structure used to represent relationships between different entities. It consists of a collection of Vertices (also called Nodes) and Edges that connect these vertices. Unlike trees, graphs do not have a strict hierarchical structure, making them suitable for modeling complex real-world networks such as social media connections, road maps, computer networks, and flight routes.",

        whyNeeded:
            "Many real-world problems involve relationships between objects rather than simple sequences of data. For example, in a social network, users are connected to other users, in a road map cities are connected by roads, and in the internet computers are connected through networks. Graphs provide an efficient way to represent and process such interconnected data.",

        realWorldAnalogy:
            "Imagine a map of cities connected by roads. Each city can be represented as a vertex, and each road can be represented as an edge connecting two cities. If you want to travel from one city to another, you can follow these connections. A Graph works in exactly the same way by modeling relationships between different entities.",

        working: [
            "A Graph consists of Vertices (Nodes) and Edges (Connections).",
            "Vertices represent entities or objects.",
            "Edges represent relationships between vertices.",
            "Graphs can be Directed, where edges have a specific direction.",
            "Graphs can be Undirected, where connections work both ways.",
            "Graphs can also be Weighted, where edges carry additional information such as distance or cost.",
            "Traversal algorithms like BFS and DFS are used to explore graphs efficiently."
        ],

        example:
            "Consider four cities: Delhi, Mumbai, Jaipur, and Agra. If roads connect Delhi to Mumbai, Delhi to Jaipur, and Jaipur to Agra, we can represent each city as a vertex and each road as an edge. This graph helps us understand how cities are connected and how we can travel between them.",

        visualizationGuide:
            "Observe how vertices represent individual entities and edges represent their relationships. Watch how new connections are added between nodes. During graph traversal, notice how algorithms move through connected vertices and keep track of visited nodes to avoid unnecessary repetitions.",

        advantages: [
            "Efficiently represents complex relationships",
            "Can model real-world networks naturally",
            "Supports powerful traversal and pathfinding algorithms",
            "Flexible structure that can represent many different problems",
            "Foundation of many advanced algorithms and systems"
        ],

        disadvantages: [
            "Can consume significant memory for large networks",
            "Implementation is more complex than linear data structures",
            "Traversal logic can become complicated in dense graphs",
            "Certain graph algorithms can be computationally expensive"
        ],

        complexity: [
            {
                operation: "Add Vertex",
                value: "O(1)"
            },
            {
                operation: "Add Edge",
                value: "O(1)"
            },
            {
                operation: "Remove Edge",
                value: "O(1)"
            },
            {
                operation: "Traversal (BFS/DFS)",
                value: "O(V + E)"
            },
            {
                operation: "Space Complexity",
                value: "O(V + E)"
            }
        ],

        applications: [
            "Social media networks",
            "Google Maps and navigation systems",
            "Computer and communication networks",
            "Recommendation systems",
            "Flight and railway route planning",
            "Dependency management in software projects",
            "Web page linking and search engines",
            "Network routing protocols"
        ],

        keyTakeaways: [
            "A Graph consists of Vertices (Nodes) and Edges (Connections).",
            "Graphs are used to represent relationships between entities.",
            "Graphs can be Directed, Undirected, Weighted, or Unweighted.",
            "Traversal algorithms such as BFS and DFS are used to explore graphs.",
            "Graphs are one of the most versatile and widely used data structures.",
            "Many advanced algorithms like Dijkstra's and Prim's operate on graphs."
        ]
    },
    linear: {
        title: "Linear Search",

        introduction:
            "Linear Search is one of the simplest searching algorithms. It searches for a target element by checking each element of the collection one by one from the beginning until the target is found or the entire collection has been examined. Since it does not require the data to be sorted, Linear Search can be used on any list, array, or sequence of elements.",

        whyNeeded:
            "Imagine looking for a specific book on a shelf where the books are arranged randomly. Since there is no particular order, you have no choice but to check each book one by one until you find the desired one. Linear Search follows the same approach and is especially useful when the dataset is small or unsorted.",

        realWorldAnalogy:
            "Think of searching for your friend in a group photo. You start from one side and examine each person until you recognize your friend. If your friend is not present, you eventually inspect everyone in the photo. Linear Search works exactly the same way by checking elements sequentially.",

        working: [
            "Start from the first element of the array or collection.",
            "Compare the current element with the target value.",
            "If the current element matches the target, stop the search.",
            "If the current element does not match, move to the next element.",
            "Repeat the process until the target is found or all elements have been checked.",
            "If the end of the collection is reached without finding the target, report that the element does not exist."
        ],

        example:
            "Consider the array [12, 7, 25, 18, 30, 5] and suppose we want to find 18. The algorithm first checks 12, then 7, then 25. Since none of these match the target, it continues. When it reaches 18, the search stops and returns its position in the array.",

        visualizationGuide:
            "Observe how the search pointer moves from left to right through the array. Watch each comparison between the current element and the target value. Notice that every element before the target must be checked. If the target does not exist, the visualization will eventually examine every element in the array.",

        advantages: [
            "Simple and easy to understand",
            "Works on both sorted and unsorted data",
            "Requires no preprocessing or special arrangement of data",
            "Suitable for small datasets",
            "Easy to implement in any programming language"
        ],

        disadvantages: [
            "Inefficient for large datasets",
            "May need to examine every element before finding the target",
            "Much slower than Binary Search on sorted data",
            "Performance degrades as the size of the dataset increases"
        ],

        complexity: [
            {
                operation: "Best Case",
                value: "O(1)"
            },
            {
                operation: "Average Case",
                value: "O(n)"
            },
            {
                operation: "Worst Case",
                value: "O(n)"
            },
            {
                operation: "Space Complexity",
                value: "O(1)"
            }
        ],

        applications: [
            "Searching in small datasets",
            "Searching unsorted arrays",
            "Finding items in lists and collections",
            "Basic data validation tasks",
            "Simple lookup operations",
            "Educational introduction to searching algorithms"
        ],

        keyTakeaways: [
            "Linear Search checks elements one by one until the target is found.",
            "It works on both sorted and unsorted data.",
            "No preprocessing or sorting is required.",
            "The worst-case time complexity is O(n).",
            "It is simple but becomes inefficient for large datasets.",
            "Linear Search is often the first searching algorithm students learn."
        ]
    },
    binarySearch: {
        title: "Binary Search",

        introduction:
            "Binary Search is an efficient searching algorithm that works on sorted data. Instead of checking every element one by one, it repeatedly divides the search space into two halves and eliminates the half that cannot contain the target. This divide-and-conquer approach allows Binary Search to locate elements much faster than Linear Search, especially in large datasets.",

        whyNeeded:
            "Imagine searching for a word in a dictionary containing thousands of pages. You would not start from the first page and read every word. Instead, you would open the dictionary near the middle and decide whether to move left or right based on the word you are searching for. Binary Search follows the same strategy, making searches extremely efficient.",

        realWorldAnalogy:
            "Think of guessing a number between 1 and 100. If someone tells you whether your guess is too high or too low, you can eliminate half of the possible numbers after each guess. Binary Search works exactly the same way by repeatedly cutting the search space in half.",

        working: [
            "Binary Search requires the array or collection to be sorted.",
            "Start with two pointers: Low and High.",
            "Find the middle element using Mid = (Low + High) / 2.",
            "Compare the middle element with the target value.",
            "If the middle element equals the target, the search is successful.",
            "If the target is smaller than the middle element, search only the left half.",
            "If the target is greater than the middle element, search only the right half.",
            "Repeat the process until the target is found or the search space becomes empty."
        ],

        example:
            "Consider the sorted array [2, 5, 8, 12, 16, 23, 38] and suppose we want to find 16. First, we check the middle element 12. Since 16 is greater than 12, we ignore the left half. Next, we check 23. Since 16 is smaller than 23, we ignore the right half. Finally, we reach 16 and successfully locate the target.",

        visualizationGuide:
            "Observe how the Low, Mid, and High pointers move after each comparison. Watch how half of the remaining elements are discarded at every step. Notice that the search area becomes smaller and smaller until the target is found or no elements remain to be checked.",

        advantages: [
            "Much faster than Linear Search for large datasets",
            "Reduces the search space by half after every comparison",
            "Efficient for repeated searches on sorted data",
            "Requires only constant extra memory in iterative implementations",
            "Widely used in databases and search systems"
        ],

        disadvantages: [
            "Works only on sorted data",
            "Sorting may introduce additional overhead",
            "Less suitable for frequently changing datasets",
            "Implementation is slightly more complex than Linear Search"
        ],

        complexity: [
            {
                operation: "Best Case",
                value: "O(1)"
            },
            {
                operation: "Average Case",
                value: "O(log n)"
            },
            {
                operation: "Worst Case",
                value: "O(log n)"
            },
            {
                operation: "Space Complexity",
                value: "O(1)"
            }
        ],

        applications: [
            "Searching in sorted arrays",
            "Database indexing systems",
            "Dictionary and phonebook lookups",
            "Library management systems",
            "Searching in large datasets",
            "Competitive programming and algorithm design",
            "Finding insertion positions in sorted collections"
        ],

        keyTakeaways: [
            "Binary Search works only on sorted data.",
            "It follows the Divide and Conquer strategy.",
            "After each comparison, half of the search space is eliminated.",
            "The worst-case time complexity is O(log n).",
            "Binary Search is significantly faster than Linear Search for large datasets.",
            "Low, Mid, and High pointers are used to control the search range."
        ]
    },
    bubble: {
        title: "Bubble Sort",

        introduction:
            "Bubble Sort is one of the simplest sorting algorithms. It repeatedly compares adjacent elements and swaps them if they are in the wrong order. After each pass through the array, the largest unsorted element 'bubbles up' to its correct position at the end of the array. This process continues until the entire array becomes sorted.",

        whyNeeded:
            "Imagine arranging a group of students according to their heights. If two neighboring students are standing in the wrong order, you ask them to swap places. By repeatedly doing this from left to right, the tallest student gradually moves to the end. Bubble Sort follows the same principle to sort data.",

        realWorldAnalogy:
            "Think of bubbles rising in water. Larger bubbles naturally float upward and reach the surface. Similarly, during Bubble Sort, larger elements gradually move toward the end of the array after each pass, giving the algorithm its name.",

        working: [
            "Start from the beginning of the array.",
            "Compare each pair of adjacent elements.",
            "If the left element is greater than the right element, swap them.",
            "Continue comparing and swapping until the end of the array is reached.",
            "After one complete pass, the largest unsorted element reaches its correct position.",
            "Repeat the process for the remaining unsorted portion of the array.",
            "Stop when no swaps are needed or when all passes are completed."
        ],

        example:
            "Consider the array [5, 3, 8, 4, 2]. First, compare 5 and 3 and swap them. Then compare 5 and 8, which are already in order. Next compare 8 and 4 and swap them, followed by 8 and 2 and swap them. After the first pass, 8 reaches its correct position at the end. Repeating this process eventually sorts the entire array.",

        visualizationGuide:
            "Observe the two elements currently being compared. Watch how swaps occur whenever adjacent elements are in the wrong order. Notice that after every pass, one more element becomes fixed in its final position. Pay attention to how the sorted portion gradually grows from the right side of the array.",

        advantages: [
            "Easy to understand and implement",
            "Requires no additional memory",
            "Suitable for educational purposes",
            "Can detect an already sorted array with optimization",
            "Works well for very small datasets"
        ],

        disadvantages: [
            "Very inefficient for large datasets",
            "Requires many comparisons and swaps",
            "Much slower than advanced sorting algorithms",
            "Worst-case performance is poor"
        ],

        complexity: [
            {
                operation: "Best Case",
                value: "O(n)"
            },
            {
                operation: "Average Case",
                value: "O(n²)"
            },
            {
                operation: "Worst Case",
                value: "O(n²)"
            },
            {
                operation: "Space Complexity",
                value: "O(1)"
            }
        ],

        applications: [
            "Teaching sorting concepts",
            "Small datasets",
            "Detecting whether a list is already sorted",
            "Educational visualizations of sorting algorithms",
            "Simple sorting tasks where efficiency is not critical"
        ],

        keyTakeaways: [
            "Bubble Sort repeatedly compares adjacent elements.",
            "Elements are swapped when they are in the wrong order.",
            "The largest unsorted element reaches its correct position after each pass.",
            "The sorted portion grows from right to left.",
            "Bubble Sort has O(n²) average and worst-case complexity.",
            "It is simple but inefficient for large datasets."
        ]
    },
    insertion: {
        title: "Insertion Sort",

        introduction:
            "Insertion Sort is a simple and intuitive sorting algorithm that builds the sorted array one element at a time. It works by taking each element from the unsorted portion and inserting it into its correct position within the already sorted portion. The algorithm is inspired by the way people often sort playing cards in their hands.",

        whyNeeded:
            "Imagine arranging a deck of cards while holding them in your hand. You pick one card at a time and place it in its correct position among the cards already sorted. This approach allows you to gradually build a completely sorted collection. Insertion Sort follows the same strategy and is particularly efficient for small or nearly sorted datasets.",

        realWorldAnalogy:
            "Think of organizing exam papers by roll number. You start with one paper, then pick the next paper and insert it into the correct position among the papers already arranged. By repeating this process, the entire stack becomes sorted. Insertion Sort works exactly like this.",

        working: [
            "Assume the first element is already sorted.",
            "Select the next element, known as the Key.",
            "Compare the Key with elements in the sorted portion from right to left.",
            "Shift all larger elements one position to the right.",
            "Insert the Key into its correct position.",
            "Repeat the process for all remaining elements.",
            "After every iteration, the sorted portion grows by one element."
        ],

        example:
            "Consider the array [5, 3, 8, 4, 2]. Initially, 5 is considered sorted. The next element, 3, is compared with 5 and inserted before it. Then 8 is inserted into its correct position. Next, 4 is compared with larger elements and inserted between 3 and 5. Finally, 2 is inserted at the beginning. The array gradually becomes sorted after each insertion.",

        visualizationGuide:
            "Observe how the sorted portion grows from left to right. Watch how the current Key element is selected and compared with previously sorted elements. Notice how larger elements shift to create space for the Key. Pay attention to the insertion process because that is the core idea behind the algorithm.",

        advantages: [
            "Easy to understand and implement",
            "Efficient for small datasets",
            "Performs very well on nearly sorted arrays",
            "Requires only constant extra memory",
            "Stable sorting algorithm"
        ],

        disadvantages: [
            "Inefficient for large datasets",
            "Requires many shifts in the worst case",
            "Slower than advanced sorting algorithms such as Merge Sort and Quick Sort",
            "Worst-case performance is O(n²)"
        ],

        complexity: [
            {
                operation: "Best Case",
                value: "O(n)"
            },
            {
                operation: "Average Case",
                value: "O(n²)"
            },
            {
                operation: "Worst Case",
                value: "O(n²)"
            },
            {
                operation: "Space Complexity",
                value: "O(1)"
            }
        ],

        applications: [
            "Sorting small datasets",
            "Nearly sorted data",
            "Online sorting applications",
            "Educational demonstrations of sorting",
            "Hybrid sorting algorithms such as TimSort"
        ],

        keyTakeaways: [
            "Insertion Sort builds the sorted array one element at a time.",
            "Each new element is inserted into its correct position within the sorted portion.",
            "The sorted region grows from left to right.",
            "It performs exceptionally well on nearly sorted data.",
            "The algorithm is stable and in-place.",
            "Worst-case time complexity is O(n²)."
        ]
    },
    selection: {
        title: "Selection Sort",

        introduction:
            "Selection Sort is a simple comparison-based sorting algorithm that repeatedly finds the smallest element from the unsorted portion of the array and places it in its correct position. Instead of performing many swaps like Bubble Sort, Selection Sort selects the minimum element and performs only one swap per pass. Over time, the sorted portion grows from left to right until the entire array becomes sorted.",

        whyNeeded:
            "Imagine arranging students by height for a class photograph. Instead of repeatedly swapping neighboring students, you first find the shortest student and place them in the first position. Then you find the second shortest student and place them in the second position, and so on. Selection Sort follows exactly this approach.",

        realWorldAnalogy:
            "Think of organizing books on a shelf by their serial numbers. First, you search the entire shelf for the smallest serial number and place that book at the beginning. Then you search the remaining books for the next smallest serial number and place it next. Repeating this process eventually sorts all the books.",

        working: [
            "Divide the array into a sorted and an unsorted portion.",
            "Initially, the sorted portion is empty and the unsorted portion contains all elements.",
            "Find the smallest element in the unsorted portion.",
            "Swap it with the first element of the unsorted portion.",
            "The sorted portion now grows by one element.",
            "Repeat the process for the remaining unsorted elements.",
            "Continue until all elements are placed in their correct positions."
        ],

        example:
            "Consider the array [64, 25, 12, 22, 11]. During the first pass, the smallest element is 11. It is swapped with 64 and placed at the beginning. In the second pass, the smallest remaining element is 12, which is swapped into the second position. This process continues until the entire array becomes sorted.",

        visualizationGuide:
            "Observe how the algorithm scans the unsorted portion to find the minimum element. Watch the minimum element marker move whenever a smaller value is found. Notice that only one swap occurs at the end of each pass. Pay attention to how the sorted portion gradually grows from left to right.",

        advantages: [
            "Easy to understand and implement",
            "Performs fewer swaps compared to Bubble Sort",
            "Works well for small datasets",
            "Requires only constant extra memory",
            "Useful when swap operations are expensive"
        ],

        disadvantages: [
            "Inefficient for large datasets",
            "Always performs O(n²) comparisons",
            "Does not take advantage of partially sorted data",
            "Generally slower than advanced sorting algorithms"
        ],

        complexity: [
            {
                operation: "Best Case",
                value: "O(n²)"
            },
            {
                operation: "Average Case",
                value: "O(n²)"
            },
            {
                operation: "Worst Case",
                value: "O(n²)"
            },
            {
                operation: "Space Complexity",
                value: "O(1)"
            }
        ],

        applications: [
            "Educational demonstrations of sorting",
            "Small datasets",
            "Situations where memory usage must be minimal",
            "Systems where swap operations are costly",
            "Teaching comparison-based sorting techniques"
        ],

        keyTakeaways: [
            "Selection Sort repeatedly finds the smallest element.",
            "The minimum element is placed into its correct position after each pass.",
            "The sorted portion grows from left to right.",
            "Only one swap is performed per pass.",
            "The algorithm always performs O(n²) comparisons.",
            "It is simple but inefficient for large datasets."
        ]
    },
    heapSort: {
        title: "Heap Sort",

        introduction:
            "Heap Sort is an efficient comparison-based sorting algorithm that uses a Heap data structure to sort elements. It first converts the array into a Max Heap, where the largest element is always at the root. The largest element is then repeatedly removed and placed at the end of the array. By continuously rebuilding the Heap and extracting the maximum element, the entire array becomes sorted in ascending order.",

        whyNeeded:
            "Imagine organizing students by height. Instead of repeatedly searching through the entire group for the tallest student, you maintain a structure where the tallest student is always easy to identify. After placing the tallest student in the correct position, you repeat the process for the remaining students. Heap Sort follows this approach and achieves efficient sorting even for large datasets.",

        realWorldAnalogy:
            "Think of a tournament where the strongest player always reaches the top position. Once the winner is identified, they are removed from the competition, and the next strongest player rises to the top. Repeating this process produces a ranking of all players. Heap Sort works similarly by repeatedly extracting the largest element from a Max Heap.",

        working: [
            "Convert the input array into a Max Heap.",
            "The largest element is now stored at the root of the Heap.",
            "Swap the root element with the last element of the Heap.",
            "Reduce the Heap size by one because the last position is now sorted.",
            "Perform Heapify to restore the Max Heap property.",
            "Repeat the process until only one element remains in the Heap.",
            "The array becomes completely sorted in ascending order."
        ],

        example:
            "Consider the array [4, 10, 3, 5, 1]. First, it is converted into a Max Heap. The largest element, 10, becomes the root. Next, 10 is swapped with the last element and removed from the Heap. The Heap is rebuilt, and the next largest element moves to the root. Repeating this process eventually produces the sorted array [1, 3, 4, 5, 10].",

        visualizationGuide:
            "Observe how the array is first transformed into a Max Heap. Watch how the root node always contains the largest remaining element. During each iteration, notice the swap between the root and the last unsorted element. Pay attention to the Heapify process, which restores the Heap property after every extraction.",

        advantages: [
            "Efficient O(n log n) sorting performance",
            "Does not require additional memory",
            "Consistent performance in all cases",
            "Suitable for large datasets",
            "Based on the powerful Heap data structure"
        ],

        disadvantages: [
            "More complex to understand than simple sorting algorithms",
            "Not a stable sorting algorithm",
            "Heap construction and maintenance add implementation complexity",
            "May have slightly worse cache performance than some alternatives"
        ],

        complexity: [
            {
                operation: "Best Case",
                value: "O(n log n)"
            },
            {
                operation: "Average Case",
                value: "O(n log n)"
            },
            {
                operation: "Worst Case",
                value: "O(n log n)"
            },
            {
                operation: "Space Complexity",
                value: "O(1)"
            }
        ],

        applications: [
            "Large-scale data sorting",
            "Priority-based processing systems",
            "Operating system scheduling",
            "Database management systems",
            "Event-driven simulations",
            "Competitive programming"
        ],

        keyTakeaways: [
            "Heap Sort uses a Max Heap to sort data.",
            "The largest element is repeatedly extracted and placed in its final position.",
            "Heapify is used to maintain the Heap property.",
            "Heap Sort guarantees O(n log n) performance in all cases.",
            "It is an in-place sorting algorithm.",
            "Heap Sort is not stable."
        ]
    },
    merge: {
        title: "Merge Sort",

        introduction:
            "Merge Sort is an efficient Divide and Conquer sorting algorithm that works by repeatedly dividing an array into smaller halves until each subarray contains only one element. These smaller subarrays are then merged back together in sorted order to produce the final sorted array. Because it consistently divides the problem into smaller parts, Merge Sort guarantees efficient performance even for large datasets.",

        whyNeeded:
            "Imagine sorting a huge stack of exam papers. Instead of trying to sort the entire stack at once, you first divide it into smaller piles, sort each pile separately, and then merge the sorted piles together. This approach is often much easier and more efficient than directly sorting the entire collection. Merge Sort follows the same strategy.",

        realWorldAnalogy:
            "Think of organizing a large collection of books. You first split the books into smaller groups, sort each group individually, and then combine the sorted groups while maintaining order. Merge Sort works exactly this way by dividing and then merging.",

        working: [
            "Divide the array into two equal halves.",
            "Recursively divide each half until only single elements remain.",
            "A single element is already considered sorted.",
            "Merge neighboring subarrays by comparing their elements.",
            "While merging, always place the smaller element first.",
            "Continue merging larger and larger sorted subarrays.",
            "Repeat until the entire array becomes one sorted array."
        ],

        example:
            "Consider the array [38, 27, 43, 3, 9, 82, 10]. First, the array is divided into two halves. Each half is further divided until every subarray contains only one element. The algorithm then starts merging sorted subarrays step by step. Eventually, all subarrays combine to form the sorted array [3, 9, 10, 27, 38, 43, 82].",

        visualizationGuide:
            "Observe how the array is repeatedly divided into smaller parts. Watch the recursive breakdown until individual elements are reached. During the merge phase, notice how two sorted subarrays are combined into a larger sorted subarray. Pay special attention to the comparison process during merging because this is where the actual sorting happens.",

        advantages: [
            "Guaranteed O(n log n) performance",
            "Very efficient for large datasets",
            "Stable sorting algorithm",
            "Works well with linked lists",
            "Suitable for external sorting and large files"
        ],

        disadvantages: [
            "Requires additional memory for merging",
            "Implementation is more complex than simple sorting algorithms",
            "Not an in-place sorting algorithm",
            "Extra memory usage can be significant for large datasets"
        ],

        complexity: [
            {
                operation: "Best Case",
                value: "O(n log n)"
            },
            {
                operation: "Average Case",
                value: "O(n log n)"
            },
            {
                operation: "Worst Case",
                value: "O(n log n)"
            },
            {
                operation: "Space Complexity",
                value: "O(n)"
            }
        ],

        applications: [
            "Sorting large datasets",
            "External sorting systems",
            "Database management systems",
            "Linked List sorting",
            "Distributed computing systems",
            "Big data processing"
        ],

        keyTakeaways: [
            "Merge Sort follows the Divide and Conquer strategy.",
            "The array is repeatedly divided into smaller subarrays.",
            "Sorting happens during the merge phase.",
            "Merge Sort guarantees O(n log n) performance.",
            "It is a stable sorting algorithm.",
            "Additional memory is required for merging."
        ]
    },
    quick: {
        title: "Quick Sort",

        introduction:
            "Quick Sort is one of the fastest and most widely used sorting algorithms. It follows the Divide and Conquer strategy by selecting a special element called the Pivot and partitioning the array around it. Elements smaller than the pivot are placed on one side, while elements larger than the pivot are placed on the other. The same process is then applied recursively to the resulting subarrays until the entire array becomes sorted.",

        whyNeeded:
            "Imagine organizing a group of students by height. Instead of repeatedly comparing every pair of students, you choose one student as a reference point. Then you move all shorter students to one side and all taller students to the other. Once this is done, you repeat the same process for the smaller groups. Quick Sort follows this exact idea and can sort large datasets very efficiently.",

        realWorldAnalogy:
            "Think of organizing books around a reference book. All books with lower serial numbers are placed to the left, and all books with higher serial numbers are placed to the right. Once the reference book reaches its correct position, the same process is applied to the left and right groups. Quick Sort works in a very similar way using a Pivot element.",

        working: [
            "Choose a Pivot element from the array.",
            "Partition the array so that all elements smaller than the Pivot move to its left.",
            "Move all elements greater than the Pivot to its right.",
            "After partitioning, the Pivot reaches its correct sorted position.",
            "Recursively apply Quick Sort to the left subarray.",
            "Recursively apply Quick Sort to the right subarray.",
            "Continue until every subarray contains zero or one element."
        ],

        example:
            "Consider the array [10, 7, 8, 9, 1, 5]. Suppose we choose 5 as the Pivot. After partitioning, all elements smaller than 5 move to its left and larger elements move to its right. The Pivot reaches its correct position. The algorithm then recursively sorts the left and right partitions until the entire array becomes sorted.",

        visualizationGuide:
            "Observe how the Pivot is selected during each recursive call. Watch how elements are rearranged around the Pivot during partitioning. Notice that after partitioning, the Pivot is always in its final sorted position. Pay attention to how the array gets divided into smaller subproblems after each partition.",

        advantages: [
            "Very fast in practice",
            "Average-case complexity of O(n log n)",
            "Works in-place with minimal extra memory",
            "Widely used in real-world sorting libraries",
            "Efficient for large datasets"
        ],

        disadvantages: [
            "Worst-case complexity is O(n²)",
            "Performance depends on Pivot selection",
            "Not a stable sorting algorithm",
            "Recursive implementation can lead to deep call stacks"
        ],

        complexity: [
            {
                operation: "Best Case",
                value: "O(n log n)"
            },
            {
                operation: "Average Case",
                value: "O(n log n)"
            },
            {
                operation: "Worst Case",
                value: "O(n²)"
            },
            {
                operation: "Space Complexity",
                value: "O(log n)"
            }
        ],

        applications: [
            "General-purpose sorting",
            "Programming language sorting libraries",
            "Database systems",
            "Large-scale data processing",
            "Competitive programming",
            "Real-time applications requiring fast sorting"
        ],

        keyTakeaways: [
            "Quick Sort follows the Divide and Conquer approach.",
            "A Pivot element is used to partition the array.",
            "After partitioning, the Pivot reaches its final sorted position.",
            "Average-case performance is O(n log n).",
            "Worst-case performance can degrade to O(n²).",
            "Choosing a good Pivot is critical for efficiency."
        ]
    },
    dijkstra: {
        title: "Dijkstra's Shortest Path Algorithm",

        introduction:
            "Dijkstra's Algorithm is a graph algorithm used to find the shortest path from a source vertex to all other vertices in a weighted graph with non-negative edge weights. It works by repeatedly selecting the vertex with the smallest known distance and updating the distances of its neighboring vertices. Because of its efficiency and reliability, Dijkstra's Algorithm is widely used in navigation systems, network routing, and pathfinding applications.",

        whyNeeded:
            "Imagine using Google Maps to find the shortest route from your home to a destination. Instead of checking every possible route, the system continuously explores the most promising paths and updates the shortest known distances. Dijkstra's Algorithm follows a similar approach to efficiently determine the shortest path between locations.",

        realWorldAnalogy:
            "Think of planning a road trip between cities. Starting from your current city, you first identify the nearest reachable city. Then, from that city, you update your knowledge about the shortest routes to other cities. By repeatedly choosing the closest unexplored city, you gradually discover the shortest route to every destination.",

        working: [
            "Assign a distance of 0 to the source vertex and Infinity to all other vertices.",
            "Mark all vertices as unvisited.",
            "Select the unvisited vertex with the smallest known distance.",
            "Explore all its neighboring vertices.",
            "For each neighbor, calculate the distance through the current vertex.",
            "If the newly calculated distance is shorter, update the neighbor's distance.",
            "Mark the current vertex as visited.",
            "Repeat until all vertices are visited or no reachable vertices remain."
        ],

        example:
            "Consider a graph where A is connected to B with weight 4 and to C with weight 2. C is connected to B with weight 1. Starting from A, the shortest known distances are updated as vertices are explored. Eventually, Dijkstra's Algorithm determines that the shortest path from A to B is A → C → B with a total cost of 3 instead of the direct path with cost 4.",

        visualizationGuide:
            "Observe how the shortest known distance of each vertex changes during execution. Watch how the algorithm always chooses the unvisited vertex with the smallest distance. Notice how neighboring vertices are relaxed whenever a shorter path is discovered. Pay attention to the priority queue or selected vertex because it drives the entire algorithm.",

        advantages: [
            "Efficiently finds shortest paths in weighted graphs",
            "Guarantees the optimal solution for non-negative edge weights",
            "Widely used in real-world applications",
            "Works well with large networks",
            "Can be optimized using Priority Queues and Heaps"
        ],

        disadvantages: [
            "Cannot handle negative edge weights",
            "More complex than basic graph traversals",
            "Requires additional memory for distance tracking",
            "May be slower than specialized algorithms in certain scenarios"
        ],

        complexity: [
            {
                operation: "Using Priority Queue",
                value: "O((V + E) log V)"
            },
            {
                operation: "Using Array",
                value: "O(V²)"
            },
            {
                operation: "Distance Update (Relaxation)",
                value: "O(log V)"
            },
            {
                operation: "Space Complexity",
                value: "O(V)"
            }
        ],

        applications: [
            "GPS and navigation systems",
            "Google Maps route planning",
            "Network routing protocols",
            "Transportation and logistics systems",
            "Game pathfinding",
            "Telecommunication networks",
            "Robot navigation systems"
        ],

        keyTakeaways: [
            "Dijkstra's Algorithm finds the shortest path from a source vertex.",
            "It works only with non-negative edge weights.",
            "The algorithm repeatedly selects the nearest unvisited vertex.",
            "Distance updates are performed through a process called Relaxation.",
            "Priority Queues significantly improve performance.",
            "It is one of the most important graph algorithms in computer science."
        ]
    },
    prims: {
        title: "Prim's Algorithm",

        introduction:
            "Prim's Algorithm is a greedy graph algorithm used to find the Minimum Spanning Tree (MST) of a weighted, connected, and undirected graph. A Minimum Spanning Tree is a subset of edges that connects all vertices in the graph without forming any cycles and with the minimum possible total edge weight. Prim's Algorithm builds the MST step by step by always choosing the smallest edge that connects a visited vertex to an unvisited vertex.",

        whyNeeded:
            "Imagine a company wants to connect several cities using cables. Installing cables between every pair of cities would be extremely expensive. Instead, the goal is to connect all cities using the minimum amount of cable while ensuring that every city remains reachable. Prim's Algorithm helps find this minimum-cost network efficiently.",

        realWorldAnalogy:
            "Think of building roads to connect multiple villages. You start from one village and repeatedly build the cheapest road that connects a new village to the existing network. Over time, all villages become connected while minimizing construction costs. Prim's Algorithm follows this exact strategy.",

        working: [
            "Choose any vertex as the starting point.",
            "Mark the starting vertex as part of the Minimum Spanning Tree.",
            "Identify all edges connecting visited vertices to unvisited vertices.",
            "Select the edge with the smallest weight among them.",
            "Add that edge and its destination vertex to the MST.",
            "Repeat the process until all vertices are included in the MST.",
            "The resulting set of edges forms the Minimum Spanning Tree."
        ],

        example:
            "Consider a graph with vertices A, B, C, and D. Starting from A, suppose the smallest edge connected to A is A-C with weight 2. This edge is added to the MST. Next, among all edges connecting visited vertices to unvisited vertices, the smallest edge is selected. The process continues until all vertices are connected, producing the Minimum Spanning Tree with the lowest possible total cost.",

        visualizationGuide:
            "Observe how the MST grows one vertex at a time. Watch how only edges connecting visited and unvisited vertices are considered. Notice that the algorithm always selects the smallest valid edge. Pay attention to how cycles are naturally avoided because only new vertices are added to the tree.",

        advantages: [
            "Efficiently finds the Minimum Spanning Tree",
            "Guarantees the minimum total edge weight",
            "Works well on dense graphs",
            "Can be optimized using Priority Queues",
            "Widely used in network design problems"
        ],

        disadvantages: [
            "Works only on connected graphs",
            "Requires weighted edges",
            "Not suitable for shortest path problems",
            "Implementation becomes more complex with advanced optimizations"
        ],

        complexity: [
            {
                operation: "Using Priority Queue",
                value: "O((V + E) log V)"
            },
            {
                operation: "Using Adjacency Matrix",
                value: "O(V²)"
            },
            {
                operation: "Add Vertex to MST",
                value: "O(log V)"
            },
            {
                operation: "Space Complexity",
                value: "O(V)"
            }
        ],

        applications: [
            "Network cable design",
            "Road and railway planning",
            "Electrical grid construction",
            "Telecommunication networks",
            "Water supply systems",
            "Computer network design",
            "Cluster analysis"
        ],

        keyTakeaways: [
            "Prim's Algorithm finds a Minimum Spanning Tree (MST).",
            "It follows a greedy approach by selecting the smallest valid edge.",
            "The MST connects all vertices without forming cycles.",
            "The goal is to minimize the total edge weight.",
            "Prim's Algorithm is different from Dijkstra's Algorithm because it minimizes total network cost, not shortest paths.",
            "A Priority Queue is commonly used to improve efficiency."
        ]
    },
    krushkal: {
        title: "Kruskal's Algorithm",

        introduction:
            "Kruskal's Algorithm is a greedy graph algorithm used to find the Minimum Spanning Tree (MST) of a weighted, connected, and undirected graph. Instead of growing the tree from a single starting vertex like Prim's Algorithm, Kruskal's Algorithm considers all edges in increasing order of weight and repeatedly selects the smallest edge that does not create a cycle. The process continues until all vertices become connected.",

        whyNeeded:
            "Imagine a company wants to connect multiple cities using cables while minimizing installation costs. Since every cable connection has a different cost, the company wants to choose the cheapest possible set of connections that still allows every city to communicate. Kruskal's Algorithm helps achieve this by always selecting the least expensive valid connection.",

        realWorldAnalogy:
            "Think of building roads between villages. Instead of starting from one village and expanding outward, you examine all possible roads and continuously choose the cheapest road available. However, you avoid selecting roads that would create unnecessary loops. Eventually, all villages become connected using the minimum total cost.",

        working: [
            "Sort all edges of the graph in ascending order of weight.",
            "Start with an empty Minimum Spanning Tree.",
            "Select the edge with the smallest weight.",
            "Check whether adding the edge creates a cycle.",
            "If no cycle is formed, add the edge to the MST.",
            "If a cycle would be created, discard the edge.",
            "Repeat until the MST contains exactly V - 1 edges.",
            "The selected edges form the Minimum Spanning Tree."
        ],

        example:
            "Consider a graph with vertices A, B, C, and D. First, all edges are sorted by weight. The algorithm selects the smallest edge and adds it to the MST. It then continues selecting the next smallest valid edge. If an edge would create a cycle among already connected vertices, it is skipped. The process continues until all vertices become connected with the minimum possible total weight.",

        visualizationGuide:
            "Observe how edges are processed in ascending order of weight. Watch how accepted edges become part of the MST. Notice how cycle detection prevents invalid edges from being added. Pay attention to the connected components because Kruskal's Algorithm gradually merges them into a single spanning tree.",

        advantages: [
            "Efficiently finds the Minimum Spanning Tree",
            "Simple greedy approach",
            "Works well on sparse graphs",
            "Guaranteed to produce an optimal MST",
            "Can be efficiently implemented using Disjoint Set Union (DSU)"
        ],

        disadvantages: [
            "Requires sorting all edges before processing",
            "Needs cycle detection mechanisms",
            "Less intuitive than Prim's for some applications",
            "Not suitable for shortest path problems"
        ],

        complexity: [
            {
                operation: "Sorting Edges",
                value: "O(E log E)"
            },
            {
                operation: "Union-Find Operations",
                value: "O(E α(V))"
            },
            {
                operation: "Overall Complexity",
                value: "O(E log E)"
            },
            {
                operation: "Space Complexity",
                value: "O(V)"
            }
        ],

        applications: [
            "Network cable design",
            "Road and railway planning",
            "Electrical grid construction",
            "Telecommunication systems",
            "Cluster analysis",
            "Image segmentation",
            "Minimum cost infrastructure planning"
        ],

        keyTakeaways: [
            "Kruskal's Algorithm finds a Minimum Spanning Tree (MST).",
            "Edges are processed in increasing order of weight.",
            "An edge is selected only if it does not create a cycle.",
            "The algorithm continues until V - 1 edges are selected.",
            "Disjoint Set Union (DSU) is commonly used for cycle detection.",
            "Kruskal's Algorithm is particularly effective for sparse graphs."
        ]
    },
    bellman: {
        title: "Bellman-Ford Algorithm",

        introduction:
            "Bellman-Ford Algorithm is a graph algorithm used to find the shortest path from a source vertex to all other vertices in a weighted graph. Unlike Dijkstra's Algorithm, Bellman-Ford can handle graphs containing negative edge weights. It works by repeatedly relaxing all edges in the graph, gradually improving the shortest known distances until the optimal solution is found.",

        whyNeeded:
            "Imagine a transportation network where some routes provide discounts or rewards, effectively creating negative costs. Algorithms like Dijkstra cannot correctly handle such situations. Bellman-Ford was designed specifically to find shortest paths even when negative edge weights exist, making it more versatile than Dijkstra's Algorithm.",

        realWorldAnalogy:
            "Think of planning a journey where certain routes offer cashback or discounts. Initially, you may know only expensive routes, but as you discover discounted paths, your total travel cost decreases. By repeatedly checking all available routes, you eventually determine the cheapest possible way to reach every destination.",

        working: [
            "Assign a distance of 0 to the source vertex and Infinity to all other vertices.",
            "Process every edge in the graph and attempt to improve known distances.",
            "For an edge (u, v) with weight w, check if distance[u] + w is smaller than distance[v].",
            "If a shorter path is found, update distance[v]. This process is called Relaxation.",
            "Repeat the relaxation process exactly V - 1 times, where V is the number of vertices.",
            "After V - 1 iterations, all shortest paths should be found.",
            "Perform one additional iteration to check for negative weight cycles.",
            "If any distance can still be reduced, a negative cycle exists in the graph."
        ],

        example:
            "Consider a graph where A connects to B with weight 4, A connects to C with weight 5, and B connects to C with weight -2. Initially, the shortest distance to C is 5 through A. However, after relaxing the edge B → C, a shorter path A → B → C with total cost 2 is discovered. Bellman-Ford repeatedly performs such updates until all shortest distances are finalized.",

        visualizationGuide:
            "Observe how distances are updated during each iteration. Watch how every edge is examined repeatedly. Notice that distances gradually decrease as shorter paths are discovered. Pay special attention to the final iteration used for detecting negative weight cycles, because this is what makes Bellman-Ford unique compared to Dijkstra's Algorithm.",

        advantages: [
            "Handles graphs with negative edge weights",
            "Can detect negative weight cycles",
            "Guaranteed to find shortest paths if no negative cycle exists",
            "Works on both directed and undirected weighted graphs",
            "More versatile than Dijkstra's Algorithm"
        ],

        disadvantages: [
            "Slower than Dijkstra's Algorithm",
            "Requires multiple iterations over all edges",
            "Less efficient for large graphs",
            "Can be computationally expensive when the graph is dense"
        ],

        complexity: [
            {
                operation: "Shortest Path Computation",
                value: "O(V × E)"
            },
            {
                operation: "Negative Cycle Detection",
                value: "O(E)"
            },
            {
                operation: "Overall Complexity",
                value: "O(V × E)"
            },
            {
                operation: "Space Complexity",
                value: "O(V)"
            }
        ],

        applications: [
            "Currency exchange systems",
            "Transportation and logistics networks",
            "Financial and arbitrage detection systems",
            "Network routing protocols",
            "Graphs containing negative edge weights",
            "Shortest path problems where Dijkstra cannot be used"
        ],

        keyTakeaways: [
            "Bellman-Ford finds shortest paths from a source vertex.",
            "It can handle negative edge weights.",
            "The algorithm repeatedly relaxes all edges.",
            "Relaxation is performed V - 1 times.",
            "It can detect negative weight cycles.",
            "Bellman-Ford is slower than Dijkstra but more versatile."
        ]
    },
    floyd: {
        title: "Floyd-Warshall Algorithm",

        introduction:
            "Floyd-Warshall Algorithm is a dynamic programming algorithm used to find the shortest paths between every pair of vertices in a weighted graph. Unlike Dijkstra's and Bellman-Ford, which focus on a single source vertex, Floyd-Warshall computes the shortest distance between all possible pairs of vertices. It works with both positive and negative edge weights, provided that the graph does not contain negative weight cycles.",

        whyNeeded:
            "Imagine managing a network of cities where you want to know the shortest route between every pair of cities, not just from one starting city. Running a single-source shortest path algorithm repeatedly would be inefficient. Floyd-Warshall solves this problem by computing all shortest paths simultaneously using dynamic programming.",

        realWorldAnalogy:
            "Think of a travel agency that wants to create a complete guide showing the cheapest route between every pair of cities. Instead of calculating routes one city at a time, the agency continuously improves its route table by considering intermediate cities that may provide shorter connections. Floyd-Warshall follows the same idea.",

        working: [
            "Represent the graph using a distance matrix.",
            "Initialize the matrix with edge weights.",
            "Set the distance from every vertex to itself as 0.",
            "Treat each vertex one by one as an intermediate vertex.",
            "For every pair of vertices (i, j), check whether passing through the intermediate vertex k provides a shorter path.",
            "Update the distance if a shorter path is found.",
            "Repeat the process for all vertices as intermediates.",
            "After all iterations, the matrix contains the shortest distances between every pair of vertices."
        ],

        example:
            "Suppose there is a path from A to C with cost 10 and a path from A to B with cost 3 and B to C with cost 2. Initially, the shortest known distance from A to C is 10. When B is considered as an intermediate vertex, the algorithm discovers a shorter path A → B → C with total cost 5 and updates the distance matrix accordingly.",

        visualizationGuide:
            "Observe the distance matrix after each iteration. Watch how each vertex is considered as an intermediate point. Notice how distances between vertex pairs become smaller whenever a shorter route is discovered through the current intermediate vertex. Pay attention to the matrix updates because they are the core of the algorithm.",

        advantages: [
            "Finds shortest paths between all pairs of vertices",
            "Works with negative edge weights",
            "Simple dynamic programming approach",
            "Easy to implement using matrices",
            "Can detect negative weight cycles"
        ],

        disadvantages: [
            "High time complexity for large graphs",
            "Requires O(V²) memory",
            "Less efficient than Dijkstra for single-source problems",
            "Not suitable for very large sparse graphs"
        ],

        complexity: [
            {
                operation: "All-Pairs Shortest Path",
                value: "O(V³)"
            },
            {
                operation: "Matrix Initialization",
                value: "O(V²)"
            },
            {
                operation: "Negative Cycle Detection",
                value: "O(V)"
            },
            {
                operation: "Space Complexity",
                value: "O(V²)"
            }
        ],

        applications: [
            "Network routing systems",
            "Transportation and traffic analysis",
            "Airline route optimization",
            "Social network analysis",
            "Graph theory research",
            "All-pairs shortest path problems",
            "Telecommunication systems"
        ],

        keyTakeaways: [
            "Floyd-Warshall computes shortest paths between every pair of vertices.",
            "It uses dynamic programming.",
            "Each vertex is considered as an intermediate point.",
            "The algorithm works with negative edge weights.",
            "Time complexity is O(V³).",
            "It can detect negative weight cycles by examining the diagonal of the distance matrix."
        ]
    },
    topo: {
        title: "Topological Sort",

        introduction:
            "Topological Sort is a graph algorithm that produces a linear ordering of vertices in a Directed Acyclic Graph (DAG). In this ordering, for every directed edge U → V, vertex U appears before vertex V. In simple terms, it arranges tasks in an order that respects all dependency relationships. Topological Sorting is only possible for graphs that do not contain cycles.",

        whyNeeded:
            "Imagine planning a project where certain tasks must be completed before others can begin. For example, you must gather ingredients before cooking, and you must write code before testing it. If dependencies are not respected, the workflow breaks down. Topological Sort helps determine a valid order in which tasks should be performed.",

        realWorldAnalogy:
            "Think of preparing for an exam. You must first learn basic concepts before studying advanced topics. Similarly, in a university, students must complete prerequisite courses before taking higher-level courses. Topological Sort organizes tasks or courses in an order that satisfies all prerequisites.",

        working: [
            "Represent dependencies as a Directed Acyclic Graph (DAG).",
            "Identify vertices with no incoming edges (Indegree = 0).",
            "Add these vertices to the ordering.",
            "Remove the selected vertex and its outgoing edges from the graph.",
            "Update the indegree of neighboring vertices.",
            "If a neighbor's indegree becomes 0, add it to the processing queue.",
            "Repeat until all vertices are processed.",
            "The resulting sequence is a valid Topological Ordering."
        ],

        example:
            "Suppose we have tasks A, B, C, and D where A must be completed before B and C, and both B and C must be completed before D. A valid topological ordering is A → B → C → D. Another valid ordering is A → C → B → D because all dependencies are still satisfied.",

        visualizationGuide:
            "Observe how vertices with indegree 0 are selected first. Watch how removing a vertex reduces the indegree of its neighbors. Notice that multiple valid topological orderings may exist. Pay attention to the dependency edges because they determine the order in which vertices can be processed.",

        advantages: [
            "Efficiently handles dependency-based problems",
            "Provides a valid execution order for tasks",
            "Widely used in scheduling systems",
            "Simple to implement using BFS or DFS",
            "Helps detect cycles in dependency graphs"
        ],

        disadvantages: [
            "Works only on Directed Acyclic Graphs (DAGs)",
            "Cannot be applied to graphs containing cycles",
            "Multiple valid orderings may exist",
            "Requires dependency information beforehand"
        ],

        complexity: [
            {
                operation: "Kahn's Algorithm (BFS)",
                value: "O(V + E)"
            },
            {
                operation: "DFS-Based Approach",
                value: "O(V + E)"
            },
            {
                operation: "Indegree Computation",
                value: "O(E)"
            },
            {
                operation: "Space Complexity",
                value: "O(V)"
            }
        ],

        applications: [
            "Task scheduling systems",
            "Course prerequisite planning",
            "Build systems and compilers",
            "Project management",
            "Dependency resolution in software packages",
            "Workflow management systems",
            "Job scheduling"
        ],

        keyTakeaways: [
            "Topological Sort produces an ordering of vertices in a DAG.",
            "For every edge U → V, U appears before V.",
            "It works only on Directed Acyclic Graphs.",
            "Vertices with indegree 0 are processed first in Kahn's Algorithm.",
            "Multiple valid topological orderings may exist.",
            "A cycle in the graph makes Topological Sorting impossible."
        ]
    },
    huffman: {
        title: "Huffman Coding",

        introduction:
            "Huffman Coding is a lossless data compression algorithm used to reduce the amount of storage required for data. It works by assigning shorter binary codes to frequently occurring characters and longer binary codes to less frequent characters. This variable-length encoding minimizes the total number of bits needed to represent the data while ensuring that the original information can be perfectly reconstructed.",

        whyNeeded:
            "Imagine sending a very large text file over the internet. If every character is stored using the same number of bits, a lot of storage and bandwidth may be wasted. Since some characters appear much more frequently than others, it makes sense to represent common characters with shorter codes and rare characters with longer codes. Huffman Coding achieves this efficiently and is widely used in data compression systems.",

        realWorldAnalogy:
            "Think of frequently used words in daily conversation. Common words like 'the', 'is', and 'and' are used much more often than rare words. If we could represent common words using shorter symbols and rare words using longer symbols, communication would become more efficient. Huffman Coding follows the same idea for characters and data.",

        working: [
            "Calculate the frequency of every character in the input data.",
            "Create a leaf node for each character and store them in a Min Heap.",
            "Remove the two nodes with the smallest frequencies.",
            "Create a new parent node whose frequency is the sum of the two nodes.",
            "Insert the new node back into the Min Heap.",
            "Repeat the process until only one node remains.",
            "The remaining node becomes the root of the Huffman Tree.",
            "Assign 0 to every left edge and 1 to every right edge.",
            "The path from the root to a character forms its Huffman Code."
        ],

        example:
            "Suppose the characters A, B, C, and D have frequencies 5, 9, 12, and 13 respectively. The algorithm repeatedly combines the two least frequent characters into larger nodes until a Huffman Tree is formed. Characters with higher frequencies end up closer to the root and receive shorter binary codes, while less frequent characters receive longer codes.",

        visualizationGuide:
            "Observe how characters are repeatedly combined based on their frequencies. Watch the Min Heap select the two smallest nodes at each step. Notice how the Huffman Tree grows from the bottom upward. Pay attention to the final binary codes generated from root-to-leaf paths because these codes are used for compression.",

        advantages: [
            "Provides efficient lossless compression",
            "Reduces storage and transmission costs",
            "Frequently occurring characters receive shorter codes",
            "Guarantees optimal prefix codes",
            "Widely used in real-world compression systems"
        ],

        disadvantages: [
            "Requires frequency analysis before encoding",
            "Additional overhead for storing the Huffman Tree",
            "Less effective when character frequencies are similar",
            "Encoding and decoding add computational complexity"
        ],

        complexity: [
            {
                operation: "Build Frequency Table",
                value: "O(n)"
            },
            {
                operation: "Build Huffman Tree",
                value: "O(n log n)"
            },
            {
                operation: "Encoding",
                value: "O(n)"
            },
            {
                operation: "Decoding",
                value: "O(n)"
            },
            {
                operation: "Space Complexity",
                value: "O(n)"
            }
        ],

        applications: [
            "File compression",
            "ZIP archives",
            "JPEG image compression",
            "PNG image compression",
            "Data transmission systems",
            "Multimedia compression",
            "Text compression utilities"
        ],

        keyTakeaways: [
            "Huffman Coding is a lossless compression algorithm.",
            "Frequently occurring characters receive shorter binary codes.",
            "Rare characters receive longer binary codes.",
            "A Min Heap is used to build the Huffman Tree.",
            "The generated codes are Prefix Codes, meaning no code is a prefix of another.",
            "Huffman Coding is widely used in compression technologies."
        ]
    },
    activity: {
        title: "Activity Selection Problem",

        introduction:
            "The Activity Selection Problem is a classic Greedy Algorithm problem in which we must select the maximum number of non-overlapping activities from a given set of activities. Each activity has a start time and a finish time. The goal is to choose activities in such a way that no selected activities overlap while maximizing the total number of activities performed.",

        whyNeeded:
            "Imagine a conference room that can host only one event at a time. Many events are scheduled throughout the day, but some overlap with each other. Since overlapping events cannot be conducted simultaneously, we need an efficient way to select the maximum number of events that can be accommodated. The Activity Selection Algorithm solves this problem optimally using a greedy strategy.",

        realWorldAnalogy:
            "Think of a student trying to attend the maximum number of workshops in a day. Since some workshops overlap, the student cannot attend all of them. By always choosing the workshop that finishes earliest, the student maximizes the chances of attending more workshops later. This is exactly the idea behind the Activity Selection Problem.",

        working: [
            "Sort all activities according to their finishing times in ascending order.",
            "Select the activity that finishes first.",
            "Move through the remaining activities one by one.",
            "If an activity starts after or exactly when the previously selected activity finishes, select it.",
            "Otherwise, skip the activity because it overlaps.",
            "Continue until all activities have been processed.",
            "The selected activities form the optimal solution."
        ],

        example:
            "Suppose we have activities with start and finish times: (1,4), (3,5), (0,6), (5,7), (8,9), and (5,9). First, the activities are sorted by finish time. The activity (1,4) is selected because it finishes first. Next, (5,7) is selected because it starts after 4. Finally, (8,9) is selected because it starts after 7. Thus, three non-overlapping activities are chosen.",

        visualizationGuide:
            "Observe how activities are arranged according to their finish times. Watch how the algorithm always selects the earliest finishing activity first. Notice that overlapping activities are skipped. Pay attention to the timeline because it clearly shows why selecting the earliest finishing activity leaves more room for future activities.",

        advantages: [
            "Simple and efficient greedy solution",
            "Produces an optimal result",
            "Easy to implement",
            "Runs very quickly even for large inputs",
            "Demonstrates the power of greedy algorithms"
        ],

        disadvantages: [
            "Works only because the greedy choice property holds",
            "Not all scheduling problems can be solved greedily",
            "Requires sorting before processing",
            "Cannot handle weighted activity scheduling optimally"
        ],

        complexity: [
            {
                operation: "Sorting Activities",
                value: "O(n log n)"
            },
            {
                operation: "Selecting Activities",
                value: "O(n)"
            },
            {
                operation: "Overall Complexity",
                value: "O(n log n)"
            },
            {
                operation: "Space Complexity",
                value: "O(1)"
            }
        ],

        applications: [
            "Meeting room scheduling",
            "Workshop and event planning",
            "CPU task scheduling",
            "Resource allocation problems",
            "Project management systems",
            "Reservation systems"
        ],

        keyTakeaways: [
            "The Activity Selection Problem is solved using a Greedy Algorithm.",
            "Activities are sorted by finishing time.",
            "Always choose the activity that finishes earliest.",
            "Selecting the earliest finishing activity maximizes future opportunities.",
            "The algorithm guarantees the maximum number of non-overlapping activities.",
            "Time complexity is O(n log n) due to sorting."
        ]
    },
    job: {
        title: "Job Scheduling Problem",

        introduction:
            "The Job Scheduling Problem is a classic Greedy Algorithm problem where each job has a deadline and a profit. Every job takes exactly one unit of time to complete, and a job must be finished before or on its deadline to earn its profit. The objective is to schedule jobs in such a way that the total profit is maximized while respecting all deadlines.",

        whyNeeded:
            "Imagine a freelancer who has multiple projects to complete. Each project has a deadline and offers a certain payment. Since the freelancer can work on only one project at a time, it may not be possible to complete every project. The challenge is to choose and schedule projects in a way that maximizes total earnings. The Job Scheduling Algorithm helps solve this problem efficiently.",

        realWorldAnalogy:
            "Think of a student preparing assignments before exam week. Each assignment has a submission deadline and contributes different marks. Since time is limited, the student should prioritize assignments that provide the highest benefit while still meeting their deadlines. This is exactly how the Job Scheduling Problem works.",

        working: [
            "Each job is represented by an ID, a deadline, and a profit.",
            "Sort all jobs in descending order of profit.",
            "Select the job with the highest profit first.",
            "Try to place the job in the latest available time slot before its deadline.",
            "If a slot is available, schedule the job and earn its profit.",
            "If no slot is available, skip the job.",
            "Continue until all jobs have been processed.",
            "The scheduled jobs produce the maximum possible profit."
        ],

        example:
            "Suppose we have four jobs: J1(deadline=4, profit=20), J2(deadline=1, profit=10), J3(deadline=2, profit=40), and J4(deadline=2, profit=30). After sorting by profit, J3 is scheduled first, followed by J4, J1, and J2 whenever valid slots are available. The final schedule maximizes the total profit earned.",

        visualizationGuide:
            "Observe how jobs are first sorted according to profit. Watch how the algorithm attempts to place each job into the latest possible free slot before its deadline. Notice that highly profitable jobs are prioritized, while less profitable jobs may be rejected if no suitable slot remains. Pay attention to the timeline because it shows how scheduling decisions affect future opportunities.",

        advantages: [
            "Efficient greedy solution",
            "Maximizes total profit",
            "Simple and easy to understand",
            "Widely applicable to scheduling problems",
            "Demonstrates the power of greedy strategies"
        ],

        disadvantages: [
            "Assumes each job requires exactly one unit of time",
            "Not suitable for all scheduling scenarios",
            "Requires sorting before scheduling",
            "More complex variants need advanced techniques"
        ],

        complexity: [
            {
                operation: "Sorting Jobs",
                value: "O(n log n)"
            },
            {
                operation: "Scheduling Jobs",
                value: "O(n²)"
            },
            {
                operation: "Overall Complexity",
                value: "O(n²)"
            },
            {
                operation: "Space Complexity",
                value: "O(n)"
            }
        ],

        applications: [
            "Project management",
            "CPU task scheduling",
            "Manufacturing systems",
            "Production planning",
            "Resource allocation",
            "Business workflow optimization",
            "Cloud computing task management"
        ],

        keyTakeaways: [
            "Each job has a deadline and a profit.",
            "The goal is to maximize total profit.",
            "Jobs are processed in decreasing order of profit.",
            "A job is scheduled in the latest available slot before its deadline.",
            "Some jobs may be skipped if no valid slot exists.",
            "This is one of the most important greedy scheduling problems."
        ]
    },
    kmp: {
        title: "Knuth-Morris-Pratt (KMP) Algorithm",
        introduction:
            "The Knuth-Morris-Pratt (KMP) Algorithm is an efficient string matching algorithm used to find occurrences of a pattern within a text. Unlike the Naive String Matching Algorithm, which may repeatedly compare the same characters, KMP intelligently avoids unnecessary comparisons by using information gathered from previous matches. This allows it to search for patterns in linear time.",
        whyNeeded:
            "Imagine searching for a specific word in a very large document. If a mismatch occurs after several successful matches, restarting the search from the next character would waste time because some information about the matched characters is already known. KMP avoids this repetition by reusing previously computed information, making pattern searching much faster.",
        realWorldAnalogy:
            "Think of solving a puzzle where part of the solution has already been verified. Instead of starting from the beginning after every mistake, you continue from the furthest point that is still valid. KMP works in the same way by remembering useful matching information and avoiding redundant work.",
        working: [
            "Construct the Longest Proper Prefix which is also Suffix (LPS) array for the pattern.",
            "The LPS array stores the length of the longest prefix that is also a suffix for every position.",
            "Start comparing characters of the text and pattern.",
            "If characters match, move both pointers forward.",
            "If a mismatch occurs after some matches, use the LPS array to determine where to continue matching.",
            "Do not move the text pointer backward.",
            "Continue until the entire text has been processed.",
            "Every occurrence of the pattern is reported when all pattern characters match."
        ],
        example:
            "Consider Text = 'ABABDABACDABABCABAB' and Pattern = 'ABABCABAB'. During matching, if a mismatch occurs after several successful comparisons, the LPS array tells us how many characters can still be considered matched. Instead of restarting the comparison from scratch, KMP jumps directly to the next valid position, significantly reducing unnecessary work.",
        visualizationGuide:
            "Observe how the pattern pointer moves during matching. Watch the LPS array values and notice how they determine the next comparison position after a mismatch. Pay attention to the fact that the text pointer never moves backward, which is the key reason behind KMP's efficiency.",
        advantages: [
            "Efficient linear-time pattern matching",
            "Avoids redundant comparisons",
            "Works well on large texts",
            "Guarantees predictable performance",
            "Widely used in text processing applications"
        ],
        disadvantages: [
            "More complex than the naive approach",
            "Requires preprocessing of the pattern",
            "Understanding the LPS array can be challenging for beginners",
            "Less intuitive than simple string matching methods"
        ],
        complexity: [
            {
                operation: "LPS Construction",
                value: "O(m)"
            },
            {
                operation: "Pattern Matching",
                value: "O(n)"
            },
            {
                operation: "Overall Complexity",
                value: "O(n + m)"
            },
            {
                operation: "Space Complexity",
                value: "O(m)"
            }
        ],
        applications: [
            "Text editors and search tools",
            "DNA sequence matching",
            "Plagiarism detection systems",
            "Search engines",
            "Compiler design",
            "Pattern recognition",
            "Bioinformatics applications"
        ],
        keyTakeaways: [
            "KMP is an efficient string matching algorithm.",
            "It uses an LPS (Longest Prefix Suffix) array.",
            "The text pointer never moves backward.",
            "Redundant comparisons are avoided using previously matched information.",
            "The overall complexity is O(n + m).",
            "KMP is significantly faster than naive string matching for large inputs."
        ]
    },
    rabin: {
        title: "Rabin-Karp Algorithm",
        introduction:
            "Rabin-Karp Algorithm is a string matching algorithm used to find occurrences of a pattern within a larger text. Instead of comparing characters one by one for every possible position, Rabin-Karp uses a Hash Function to convert strings into numerical values called Hashes. By comparing hash values first, the algorithm can quickly eliminate many unnecessary comparisons and efficiently search for patterns in large texts.",
        whyNeeded:
            "Imagine searching for a specific word in a huge document containing millions of characters. Comparing every character of the pattern with every possible position in the text would be slow and inefficient. Rabin-Karp speeds up this process by comparing compact numerical fingerprints (hashes) of strings before performing detailed character comparisons.",
        realWorldAnalogy:
            "Think of checking fingerprints at an airport. Instead of manually comparing every detail of every passenger, the system first compares quick digital fingerprints. Only when fingerprints match does it perform a more detailed verification. Rabin-Karp follows the same idea using hash values of strings.",
        working: [
            "Compute the hash value of the pattern.",
            "Compute the hash value of the first window of the text having the same length as the pattern.",
            "Compare the pattern hash with the current window hash.",
            "If the hashes do not match, move to the next window.",
            "If the hashes match, perform character-by-character verification.",
            "Use a Rolling Hash to efficiently calculate the hash of the next window.",
            "Repeat the process until all windows in the text have been examined.",
            "Report every valid occurrence of the pattern."
        ],
        example:
            "Consider Text = 'AABAACAADAABAABA' and Pattern = 'AABA'. First, the hash of the pattern and the first window of the text are computed. Since the hashes match, character-by-character verification confirms a match. The window then slides one position forward, and the rolling hash updates the hash efficiently without recalculating it from scratch.",
        visualizationGuide:
            "Observe how the text is divided into sliding windows equal to the pattern length. Watch the hash value of each window and compare it with the pattern hash. Notice that most windows are rejected using only hash comparisons. Pay attention to how the rolling hash updates efficiently when the window moves.",
        advantages: [
            "Efficient for multiple pattern searches",
            "Uses hashing to reduce unnecessary comparisons",
            "Rolling Hash enables fast window updates",
            "Works well for plagiarism detection and document matching",
            "Average-case performance is very good"
        ],
        disadvantages: [
            "Hash collisions can occur",
            "Character verification is still needed after hash matches",
            "Worst-case performance can degrade",
            "Choosing a good hash function is important"
        ],
        complexity: [
            {
                operation: "Best Case",
                value: "O(n + m)"
            },
            {
                operation: "Average Case",
                value: "O(n + m)"
            },
            {
                operation: "Worst Case",
                value: "O(n × m)"
            },
            {
                operation: "Space Complexity",
                value: "O(1)"
            }
        ],
        applications: [
            "Plagiarism detection",
            "Document similarity analysis",
            "DNA sequence matching",
            "Search engines",
            "Cybersecurity and malware detection",
            "Pattern matching in large datasets",
            "Digital forensics"
        ],
        keyTakeaways: [
            "Rabin-Karp uses hashing for string matching.",
            "A pattern hash is compared with text window hashes.",
            "Rolling Hash allows efficient window movement.",
            "Hash matches require character verification.",
            "Hash collisions are possible.",
            "The algorithm is particularly useful when searching for multiple patterns."
        ]
    },
};