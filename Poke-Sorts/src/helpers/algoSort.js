import { useState, useEffect, useRef } from 'react';
import bubbleSort from '../sorts/bubbleSort';

function AlgoSort(array, sort) {
  const swapCount = 0;
  const compareCount = 0;
  const isCompleted = false;

  switch (sort) {
    case 'bubble': {
      const { arr, swaps } = bubbleSort(array);
      return swaps;
    }
    default:
      console.log('That is not a valid sort');
  }
}

export default AlgoSort;
