const s = "2three45sixseven";

function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < words.length; i++) {
    s = s.split(words[i]).join(i);
  }

  return Number(s);
}

console.log(solution(s));
