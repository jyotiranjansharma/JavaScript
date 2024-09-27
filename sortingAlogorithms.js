// 1. Bubble Sort
// Description: Bubble sort is a simple comparison-based algorithm that repeatedly steps through the list, 
// compares adjacent elements, and swaps them if they are in the wrong order.
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
                swapped = true;
            }
        }
        if (!swapped) break; // Optimization: Stop if no swaps were made
    }
    return arr;
}

// Example usage:
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// 2. Selection Sort
// Description: Selection sort works by selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. 
// This is repeated for each position in the array.
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
    }
    return arr;
}

// Example usage:
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));

// 3. Insertion Sort
// Description: Insertion sort builds the final sorted array one item at a time. 
// It picks elements from the unsorted portion and inserts them into their correct position in the sorted portion.
function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));

// 4. Merge Sort
// Description: Merge sort is a divide-and-conquer algorithm that divides the array into halves, 
// recursively sorts each half, and then merges the sorted halves back together.
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));

// 5. Quick Sort
// Description: Quick sort is a divide-and-conquer algorithm that selects a 'pivot' element, 
// partitions the array into elements less than and greater than the pivot, and recursively sorts the partitions.
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage:
console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));

// 6. Heap Sort
// Description: Heap sort builds a max heap from the input data, 
// then repeatedly extracts the maximum element from the heap and rebuilds the heap until all elements are sorted.
function heapSort(arr) {
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to end
        heapify(arr, i, 0); // Call heapify on the reduced heap
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Example usage:
console.log(heapSort([64, 34, 25, 12, 22, 11, 90]));

// 7. Radix Sort
// Description: Radix sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits. 
// It processes digits from the least significant to the most significant.
function radixSort(arr) {
    const max = Math.max(...arr);
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
        countingSortByDigit(arr, exp);
        exp *= 10;
    }

    return arr;
}

function countingSortByDigit(arr, exp) {
    let output = new Array(arr.length);
    let count = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
        count[Math.floor((arr[i] / exp) % 10)]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[Math.floor((arr[i] / exp) % 10)] - 1] = arr[i];
        count[Math.floor((arr[i] / exp) % 10)]--;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

// Example usage:
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));


  
  
  
  
  
  