const bubbleSort = (arr) => {
  let swaps = [];
  let noSwaps;
  for (let i = arr.length; i > 0; i -= 1) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        swaps.push([arr[j], arr[j + 1]]);
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return { arr, swaps };
};

export default bubbleSort;
