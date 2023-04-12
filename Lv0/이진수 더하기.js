let bin1 = "10";
let bin2 = "11";

function solution(bin1, bin2) {
  let bin1ToTen = parseInt(bin1, 2);
  let bin2ToTen = parseInt(bin2, 2);

  let total = (bin1ToTen + bin2ToTen).toString(2);

  return total;
}

console.log(solution(bin1, bin2));
