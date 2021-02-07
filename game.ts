/**
 * Let's make a game 🕹
 */
const position = { x: 0, y: 0 };
type Direaction = 'up' | 'down' | 'left' | 'right';

function move(direction: Direaction) {
  switch (direction) {
    case 'up':
      position.y += 1;
      break; // return 되지 않을 때는 다음 case도 실행되기 때문에 switch 문에 break를 넣어준다.
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw new Error(`unknown direction: ${direction}`);
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
