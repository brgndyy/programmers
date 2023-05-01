const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

function solution(progresses, speeds) {
  let progressArr = [];

  for (let i = 0; i < progresses.length; i++) {
    let count = 0;

    while (progresses[i] <= 100) {
      count++;
      progresses[i] += speeds[i];
    }

    progressArr.push(count);
  }

  return progressArr;
}

console.log(solution(progresses, speeds));
