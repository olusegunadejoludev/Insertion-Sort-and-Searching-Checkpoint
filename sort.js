//Declare function
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;

      // Move elements of arr[0..i-1] that are greater than key
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
      }

      // Insert the key into its correct position
      arr[j + 1] = key;
  }
}

// Example usage:
const arrayToSort = [12, 11, 13, 5, 6];
insertionSort(arrayToSort);
console.log("Sorted Array:", arrayToSort);
