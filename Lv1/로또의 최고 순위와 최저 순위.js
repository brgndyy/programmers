const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [20, 9, 3, 45, 4, 35];

function solution(lottos, win_nums) {
  let hash = new Map();
  hash.set(0, 6);
  hash.set(1, 6);
  hash.set(2, 5);
  hash.set(3, 4);
  hash.set(4, 3);
  hash.set(5, 2);
  hash.set(6, 1);

  var answer = [];

  let 이미맞춘로또번호 = lottos.filter((num) => win_nums.includes(num)); // [];

  let 최소맞춘로또번호길이 = 이미맞춘로또번호.length; // 0

  let 낙서된로또 = lottos.filter((num) => num === 0); // 6

  let 낙서된로또길이 = 낙서된로또.length;
  6;

  let maxRank = hash.get(최소맞춘로또번호길이 + 낙서된로또길이);
  let minRank = hash.get(최소맞춘로또번호길이);

  return [maxRank, minRank];
}

console.log(solution(lottos, win_nums));
