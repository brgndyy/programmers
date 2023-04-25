const s = "foobar";

function solution(s) {
  let answer = [];

  [...s].map((str, index) => {
    const count = s.slice(0, index).lastIndexOf(str);

    return count < 0 ? answer.push(-1) : answer.push(index - count);
  });

  return answer;
}

console.log(solution(s));
