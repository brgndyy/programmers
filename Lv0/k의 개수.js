const i = 10;
const j = 50;
const k = 5;

function solution(i, j, k) {
  let arr = [];
  var answer = 0;

  for (let a = i; a <= j; a++) {
    arr.push(a.toString());
  }

  for (let b = 0; b < arr.length; b++) {
    let num = arr[b].split("");

    for (let c = 0; c < num.length; c++) {
      if (Number(num[c]) === k) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(i, j, k));

// function solution(i, j, k) {
//   let a ='';
//   for(i;i<=j;i++){
//       a += i;
//   }

//   return a.split(k).length-1;
// }
