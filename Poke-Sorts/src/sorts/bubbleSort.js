const bubbleSort = (arr) => {
  const swaps = [];
  let noSwaps;
  const sortedArr = arr.slice();
  for (let i = sortedArr.length; i > 0; i -= 1) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j += 1) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        // SWAP
        swaps.push([sortedArr[j], sortedArr[j + 1]]);
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return { sortedArr, swaps };
};

export default bubbleSort;
