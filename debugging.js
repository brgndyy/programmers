const s = "-1 -2 -3 Z";

function solution(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z")
      stack.pop(); // 만약에 Z가 등장했다면, stack에서 맨 뒤에 요소를 제거
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}

console.log(solution(s));
