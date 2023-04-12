const babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];

function solution(babbling) {
  // forEach() 메서드로 babbling을 하나씩 확인합니다.
  for (let word of babbling) {
    // 정규식을 이용하여 연속된 같은 발음이 있는지 체크합니다.
    // 연속된 같은 발음이 있다면 continue를 통해 다음 단어로 넘어갑니다.
    if (/(aya|ye|woo|ma)\1+/g.test(word)) {
      console.log(word);
    }
  }
}

console.log(solution(babbling));
