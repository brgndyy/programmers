const bridge_length = 100;
const weight = 100;
const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

function solution(bridge_length, weight, truck_weights) {
  let bridge = Array(bridge_length).fill(0);

  let time = 0;

  while (bridge.length) {
    bridge.shift();

    if (truck_weights.length) {
      const totalWeightOnBridge =
        truck_weights[0] + bridge.reduce((a, b) => a + b, 0);

      if (totalWeightOnBridge <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }

    time++;
  }

  return time;
}

console.log(solution(bridge_length, weight, truck_weights));

// 1. 시간은 무조건 늘어난다.

// 2. 트럭위에 다리가 존재하며, 해당 트럭이 내려가야할 시간이라면 ?
