function solution(N, road, K) {
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
