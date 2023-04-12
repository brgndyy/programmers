const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may"], ["kein", "deny", "may"], ["kon", "coni"]];

function solution(name, yearning, photo) {

    let pointArr = [];
    const combined = name.reduce((arr, cur, index))


  for(let i = 0 ; i < photo.length; i++){
    for(let j = 0; j < photo[i].length; j++){
        let count = 0;
        if(photo[i][j] === 'may'){
            count+=5;
        } else if(photo[i][j] === 'kein'){
            count+=10;
        } else if(phto)
    }
  }

  return answer;
}

console.log(solution(name, yearning, photo));
