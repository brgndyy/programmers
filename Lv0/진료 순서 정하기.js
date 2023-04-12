const emergency = [1, 2, 3, 4, 5, 6, 7];

function solution(emergency) {
  var answer = [];

  let emer = [...emergency];

  let sortEmergency = emergency.sort((a, b) => b - a); // [7, 6, 5, 4, 3, 2, 1];

  emer.forEach((num) => answer.push(sortEmergency.indexOf(num) + 1));

  return answer;
}

console.log(solution(emergency));
