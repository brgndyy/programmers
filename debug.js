const N = 5;

const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];

const K = 3;

function solution(N, road, K) {
  const delTime = Array(N + 1).fill(50000);

  let roads = Array.from({ length: N + 1 }, () => []);

  road.forEach(([from, to, time]) => {
    roads[from].push({ to: to, time: time });
    roads[to].push({ to: from, time: time });
  });

  delTime[1] = 0;

  let queue = [];

  queue.push({ to: 1, time: 0 });

  while (queue.length) {
    let { to, time } = queue.shift();

    roads[to].forEach((next) => {
      if (delTime[next.to] > delTime[to] + next.time) {
        delTime[next.to] = delTime[to] + next.time;

        queue.push(next);
      }
    });
  }

  return delTime;
}

console.log(solution(N, road, K));
