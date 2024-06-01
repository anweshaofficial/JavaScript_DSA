//Merge two sorted Arrays 

function mergeArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

//Test Cases


// Test cases for mergeArrays function
console.log("Test Case 1: ", mergeArrays([1, 3, 5], [2, 4, 6])); // Expected Output: [1, 2, 3, 4, 5, 6]
console.log("Test Case 2: ", mergeArrays([1, 2, 3], [4, 5, 6])); // Expected Output: [1, 2, 3, 4, 5, 6]
console.log("Test Case 3: ", mergeArrays([], [2, 4, 6]));        // Expected Output: [2, 4, 6]
console.log("Test Case 4: ", mergeArrays([1, 3, 5], []));        // Expected Output: [1, 3, 5]
console.log("Test Case 5: ", mergeArrays([-1, 0, 2], [-2, 1, 3])); // Expected Output: [-2, -1, 0, 1, 2, 3]
