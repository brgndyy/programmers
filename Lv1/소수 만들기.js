const nums = [1, 2, 7, 6, 4];

function solution(nums) {
  let sumArr = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];

        sumArr.push(sum);
      }
    }
  }

  return sumArr;
}

console.log(solution(nums));
