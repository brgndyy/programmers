const A = "hello";
const B = "lohel";

function solution(A, B) {
  let splitA = A.split("");

  if (A === B) {
    return 0;
  }

  for (let i = 0; i < splitA.length; i++) {
    //unshift 자체만으로는 해당 요소의 갯수를 반환함. 함수 실행만 해주어야한다.
    splitA.unshift(splitA.pop());
    const newWord = splitA.join("");

    if (newWord === B) {
      return i + 1;
    }
  }

  return -1;
}

console.log(solution(A, B));
