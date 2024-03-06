const insertionSort = (arr) => {
  const swaps = [];
  const sortedArr = arr.slice();

  for (let i = 1; i < sortedArr.length; i += 1) {
    const key = sortedArr[i];
    let j = i - 1;
    while (j >= 0 && sortedArr[j] > key) {
      // SWAP
      swaps.push([sortedArr[j], key]);
      sortedArr[j + 1] = sortedArr[j];
      j -= 1;
    }
    sortedArr[j + 1] = key;
  }
  return swaps;
};

export default insertionSort;
