const n = 5;
const lost = [2, 4]; // 잃어버린
const reserve = [3]; // 여분 있는

function solution(n, lost, reserve) {
  let stuArr = Array.from({ length: n }, (_, index) => index + 1);
  const realLost = lost.filter((num) => !reserve.includes(num)); // [2, 4];
  const realReserve = reserve.filter((num) => !lost.includes(num)); // [3];

  let canBorrowStu = [];
  realReserve.forEach((num, index) => {
    if (num === stuArr[0]) {
      canBorrowStu.push(1, 2);
    } else if (num === stuArr[stuArr.length - 1]) {
      canBorrowStu.push(
        stuArr[stuArr.length - 1] - 1,
        stuArr[stuArr.length - 1]
      );
    } else {
      canBorrowStu.push(num - 1, num, num + 1);
    }
  });

  // 총 체육복 빌려줄수 있는 학생배열
  let realCanBorrowStu = [...new Set(canBorrowStu)];

  let gotBorrowStuLength = realCanBorrowStu.filter((num) =>
    realLost.includes(num)
  ); // [2, 4]

  // 여분 체육복 있는 학생은 무조건 수업 들을 수 있음, 전체 학생에서 빼주기

  let filteredStuLength = stuArr.filter((num) =>
    realReserve.includes(num)
  ).length;

  return gotBorrowStuLength;
}

console.log(solution(n, lost, reserve));
