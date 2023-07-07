function solution(n, words) {
  let str = words[0];
  let wordsArr = [];
  let answer = [];
  wordsArr.push(str);

  for (let i = 1; i < words.length; i++) {
    if (str[str.length - 1] !== words[i][0] || wordsArr.includes(words[i])) {
      answer.push((i % n) + 1, Math.floor(i / n) + 1);
      break;
    } else {
      str = words[i];
      wordsArr.push(words[i]);
    }
  }

  return answer.length === 0 ? [0, 0] : answer;
}
