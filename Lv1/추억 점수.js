const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may"], ["kein", "deny", "may"], ["kon", "coni"]];

function solution(name, yearning, photo) {
  const hash = new Map();
  let result = [];

  name.forEach((name, index) => {
    hash.set(name, yearning[index]);
  });

  photo.forEach((name) => {
    let arr = [];
    arr.push(hash.get(name));

    let sum = arr.reduce((a, b) => {
      return a + b;
    }, 0);

    result.push(sum);
  });

  return result;
}

console.log(solution(name, yearning, photo));
