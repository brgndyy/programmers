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
  // 각 도시가 갈수 있는 다른 도시들, 그리고 이동 시간을 담은 객체
  const roads = Array.from({ length: N + 1 }, () => []);
  // 도로 연결 정보 양 방향 그래프로 만들어주기
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
      // 현재 위치에서 다음 위치까지 가는 시간(delTime[to] + next.time)이
      // 기존에 알고 있던 최소 시간 (delTime[next.to])보다 작은 경우
      if (delTime[next.to] > delTime[to] + next.time) {
        delTime[next.to] = delTime[to] + next.time;
        queue.push(next);
      }
    });
  }

  return delTime.filter((x) => x <= K).length;
}

console.log(solution(N, road, K));
