const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

function solution(progresses, speeds) {
  let progressArr = [];
  let answerArr = [];

  for (let i = 0; i < progresses.length; i++) {
    let count = 0;

    while (progresses[i] < 100) {
      count++;
      progresses[i] += speeds[i];
    }

    progressArr.push(count);
  }

  for (let j = 0; j < progressArr.length; j++) {
    let arr = [];
    let count = 0;

    if (progressArr[j] < progressArr[j + 1]) {
      arr.push(progressArr[j]);
      progressArr.splice(j, 1);
      j = -1;
      answerArr.push(1);
    } else {
      while (progressArr[j] >= progressArr[j + 1]) {
        arr.push(progressArr[j]);
        count++;
        j++;
      }
      progressArr.splice(j, 2);
    }
  }

  return progressArr;
}

console.log(solution(progresses, speeds));
