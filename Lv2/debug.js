let s = 5;
let e = 14;

function solution(s, e) {
  let dis = Array(10001).fill(0);
  let checkArr = Array(10001).fill(0);
  let answer = 0;

  let queue = [];
  queue.push(s);

  checkArr[s] = 1;

  while (queue.length) {
    let pos = queue.shift(); // 5

    for (let nx of [pos - 1, pos + 1, pos + 5]) {
      if (nx === e) {
        return dis[pos] + 1;
      } else if (nx > 0 && checkArr[nx] === 0 && nx <= 10000) {
        checkArr[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[pos] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(s, e));
