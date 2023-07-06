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
  // 각 지점 (1부터 N까지) 도달하는데 필요한 최소 시간.
  // 처음에는 아무런 경로 정보도 없기 때문에 필요한 최소 시간을 500000이라는 큰수로 지정
  // 또한 도시 번호는 1부터 시작하므로 N+1을 해주어서 도시번호를 직관적으로 맞춤
  const delTime = Array(N + 1).fill(500000);
  const queue = [];
  const roads = Array.from({ length: N + 1 }, () => []);
  // 도로 연결 정보 이차원 배열에 저장
  road.forEach(([v1, v2, t]) => {
    roads[v1].push({ to: v2, time: t });
    roads[v2].push({ to: v1, time: t });
  });

  // 1번 마을까지 걸리는 시간 0으로 초기화
  delTime[1] = 0;
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

  return delTime.filter((x) => x <= K).length;
}

console.log(solution(N, road, K));
