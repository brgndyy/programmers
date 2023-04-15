const nums = [3, 1, 2, 3];

function solution(nums) {
  let maxPoketNum = nums.length / 2; // 2

  let poketmons = [...new Set(nums)].length; // 3

  return maxPoketNum < poketmons ? maxPoketNum : poketmons;
}

console.log(solution(nums));
