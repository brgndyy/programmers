const array = [1, 2, 3, 3, 3, 4];

function solution(array) {
  var answer = 0;
  let arr = [];

  for(let i = 0; i < array.length; i++){
        if(!arr.includes(array[i])){
            arr.push({array[i] : array[i]});
        }
  }

  return answer;
}

console.log(solution(array));

// 나와야하는 결과값

// let arr = [{ 1: 1 }, { 2: 1 }, { 3: 3 }, { 4: 1 }];




