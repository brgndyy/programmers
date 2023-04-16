const s = "1234";

function solution(s) {
  const regex = /^[0-9]+$/;

  return (s.length === 4 && regex.test(s)) || (s.length === 6 && regex.test(s))
    ? true
    : false;
}

console.log(solution(s));
