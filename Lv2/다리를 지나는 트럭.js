function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = [];
  let weightOnBridge = 0;

  while (truck_weights.length || bridge.length) {
    time++;
    // 다리에 트럭이 올라가있다면
    if (bridge.length > 0) {
      //  time - bridge[0].time은 해당 트럭이 다리위에 있었던 시간이다.
      // 그 시간이 bride의 길이와 똑같다면 그 트럭은 다리위에서 내려와야하는 것이므로
      // 다리에서 해당 트럭의 무게를 빼준다.
      if (time - bridge[0].time === bridge_length) {
        let truck = bridge.shift();

        weightOnBridge -= truck.weight;
      }
    }

    // 아직 다리를 안건넌 트럭이 있다면
    if (truck_weights.length > 0) {
      if (
        // 다리위에 있던 트럭과, 새롭게 다리로 이동할 트럭의 무게가 weight보다 작고, 트럭들의 갯수합이 다리에 다 올라갈수 있다면
        weightOnBridge + truck_weights[0] <= weight &&
        bridge.length < bridge_length
      ) {
        let truckWeight = truck_weights.shift();

        bridge.push({ weight: truckWeight, time: time });

        weightOnBridge += truckWeight;
      }
    }
  }

  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
