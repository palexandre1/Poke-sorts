import anime from 'animejs/lib/anime.es';

function getSwapAnimation(swaps, original, animation) {
  const positionTracker = {};
  const swapCount = {};

  for (let i = 0; i < original.length; i += 1) {
    const currentElement = document.getElementById(`pokemon #${original[i]}`);
    positionTracker[original[i]] = currentElement.getBoundingClientRect().x;
  }

  for (let i = 0; i < swaps.length; i += 1) {
    const animeElementA = document.getElementById(`pokemon #${swaps[i][0]}`);
    const animeElementB = document.getElementById(`pokemon #${swaps[i][1]}`);

    const gapA = positionTracker[swaps[i][1]] - positionTracker[swaps[i][0]];
    const gapB = positionTracker[swaps[i][0]] - positionTracker[swaps[i][1]];

    positionTracker[swaps[i][0]] += 128;
    if (swapCount[swaps[i][0]] !== undefined) {
      swapCount[swaps[i][0]] += 1;
    } else {
      swapCount[swaps[i][0]] = 1;
    }
    positionTracker[swaps[i][1]] -= 128;
    if (swapCount[swaps[i][1]] !== undefined) {
      swapCount[swaps[i][1]] -= 1;
    } else {
      swapCount[swaps[i][1]] = -1;
    }

    const swapA = [
      {
        translate: 0,
      },
      {
        translateY: 125,
      },
      {
        translateX: gapA * (swapCount[swaps[i][0]]),
      },
      {
        translateY: 0,
      },
    ];
    const swapB = [
      {
        translate: 0,
      },
      {
        translateY: -125,
      },
      {
        translateX: gapB * (swapCount[swaps[i][1]] * -1),
      },
      {
        translateY: 0,
      },
    ];

    animation.add({
      targets: animeElementA,
      keyframes: swapA,
    });
    animation.add({
      targets: animeElementB,
      keyframes: swapB,
    });
  }
}

export default getSwapAnimation;
