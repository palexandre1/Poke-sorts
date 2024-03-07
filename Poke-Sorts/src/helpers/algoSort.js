import { useState, useEffect, useRef } from 'react';
import bubbleSort from '../sorts/bubbleSort.js';
import selectionSort from '../sorts/selectionSort.js';
import insertionSort from '../sorts/insertionSort.js';

function AlgoSort(array, sort) {
  const swapCount = 0;
  const compareCount = 0;
  const isCompleted = false;

  switch (sort) {
    case 'bubble': {
      const swaps = bubbleSort(array);
      return swaps;
    }
    case 'selection': {
      const swaps = selectionSort(array);
      return swaps;
    }
    case 'insertion': {
      const swaps = insertionSort(array);
      return swaps;
    }
    default:
      console.log('That is not a valid sort');
  }
}

export default AlgoSort;
