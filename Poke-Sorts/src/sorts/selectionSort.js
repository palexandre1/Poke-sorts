const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      // SWAP
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};
