const array = [9, 10, 11, 8];
const newArray = [...array];
console.log(array == newArray);

function solution(array) {
  var answer = [];
  const newArr = array.slice().sort((a, b) => {
    return a - b;
  });
  const maxNum = newArr[newArr.length - 1];
  const indexNum = array.indexOf(maxNum);

  answer.push(maxNum, indexNum);

  return answer;
}

console.log(solution(array));
