const keymap = ["BCD", "ABC"];
const targets = ["CAD", "BC"];

function solution(keymap, targets) {
  const answer = [];
  const map = new Map();

  for (const key of keymap) {
    for (let i = 0; i < key.length; i++) {
      if (!map.has(key[i]) || i + 1 < map.get(key[i])) {
        map.set(key[i], i + 1);
      }
    }
  }

  return map;
}

console.log(solution(keymap, targets));

// 5
// 1
// 2  => 5
// 1, 4  => 1 ,3 ,4
// 2
// 1
//        => 2, 4, 5
// 1
//  1개
//

function draw1(number) {
  if (number === 0) {
    return;
  }

  draw1(number - 1);

  for (let i = 0; i < number; i++) {
    console.log("*");
  }
  console.log("\n");
}

function draw2(number) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < i; j++) {
      console.log("*");
    }
    console.log("\n");
  }
}

draw1(5);
draw2(5);
