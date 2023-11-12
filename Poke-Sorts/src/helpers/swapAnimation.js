function getSwapAnimation(position, index, id) {
  console.log(position);
  // Distance to move horizontally is the original position - new position
  // use Math.sign to the get sign/direction for the translate

  // use swap and coordinates to calculate animation sequence for one swap
  // return animation

  const gapY = 100;
  const gapYNeg = -100;
  const gapX = position;
  const gapXNeg = position * -1;

  const animation = 'swap 5000ms linear';

  const rule = [
    {
      transform: 'translate(0px)',
    },
    {
      transform: `translate(0px,${index === 0 ? gapY : gapYNeg}px)`,
    },
    {
      transform: `translate(${index === 0 ? gapX : gapXNeg}px, ${index === 0 ? gapY : gapYNeg}px)`,
    },
    {
      transform: `translate(${index === 0 ? gapX : gapXNeg}px, 0px)`,
    },
  ];

  const animationElement = document.getElementById(`pokemon #${id}`);
  animationElement.animate(rule, 5000);
  //const animationSheet = animationElement?.sheet?.insertRule(rule);
}

export default getSwapAnimation;
