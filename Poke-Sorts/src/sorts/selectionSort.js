const selectionSort = (arr) => {
  let swaps = [];
  const sortedArr = arr.slice();
  for (let i = 0; i < sortedArr.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < sortedArr.length; j += 1) {
      if (sortedArr[j] < sortedArr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      // SWAP
      swaps.push([sortedArr[i], sortedArr[min]]);
      const temp = sortedArr[i];
      sortedArr[i] = sortedArr[min];
      sortedArr[min] = temp;
    }
  }
  return { sortedArr, swaps };
};

export default selectionSort;
