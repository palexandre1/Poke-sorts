import { useState, useEffect, useRef } from 'react';
import bubbleSort from '../sorts/bubbleSort';
import selectionSort from '../sorts/selectionSort';
import insertionSort from '../sorts/insertionSort';

function AlgoSort(array, sort) {
  const swapCount = 0;
  const compareCount = 0;
  const isCompleted = false;

  switch (sort) {
    case 'bubble': {
      const { arr, swaps } = bubbleSort(array);
      return swaps;
    }
    case 'selection': {
      const {arr, swaps } = selectionSort(array);
      return swaps;
    }
    case 'insertion': {
      const swaps = insertionSort(array);
      console.log(swaps)
      return swaps;
    }
    default:
      console.log('That is not a valid sort');
  }
}

export default AlgoSort;
