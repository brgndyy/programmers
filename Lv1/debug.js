const nums = [1, 2, 3, 4];

function solution(nums) {
  let sumArr = [];
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];

        sumArr.push(sum);
      }
    }
  }

  for (let b = 0; b < sumArr.length; b++) {
    let count = 0;
    for (let c = 1; c <= sumArr[b]; c++) {
      if (sumArr[b] % c === 0) {
        count++;
      }
    }

    if (count === 2) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(nums));
