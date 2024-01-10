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
