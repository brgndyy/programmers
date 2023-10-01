const bridge_length = 100;
const weight = 100;
const truck_weights = [10];

function solution(bridge_length, weight, truck_weights) {
  const answer = 0;
  const trucks = [...truck_weights];

  // 다리에 올라온 트럭 담을 배열
  let queue = [];

  while (trucks.length) {
    // 다리에 올라온 트럭들의 무게 합이 weight보다 작을경우
    let sum = queue.reduce((a, b) => {
      return a + b;
    }, 0);

    if (sum < weight) {
      queue.push(trucks.shift());
    }
  }

  return queue;
}
