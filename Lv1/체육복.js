const n = 5;
const lost = [2, 4]; // 잃어버린
const reserve = [3]; // 여분 있는

function solution(n, lost, reserve) {
  let studentArr = Array(n).fill(1);

  lost.forEach((num) => (studentArr[num - 1] -= 1));
  reserve.forEach((num) => (studentArr[num - 1] += 1));

  for (let i = 0; i < studentArr.length; i++) {
    if (studentArr[i] === 0 && studentArr[i + 1] === 2) {
      studentArr[i] += 1;
      studentArr[i + 1] -= 1;
    } else if (studentArr[i] === 2 && studentArr[i + 1] === 0) {
      studentArr[i] -= 1;
      studentArr[i + 1] += 1;
    }
  }

  return studentArr.filter((stu) => stu >= 1).length;
}

console.log(solution(n, lost, reserve));
