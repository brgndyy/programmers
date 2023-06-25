function solution(s) {
  let count = 0;

  let splitS = s.split("");

  let firstStrMap = new Map();
  let differentMap = new Map();

  for (let i = 0; i < splitS.length; i++) {
    // 첫글자 아무것도 없을때
    if (firstStrMap.size === 0) {
      firstStrMap.set(splitS[i], 1);
    }
    // 첫글자가 이미 존재했을때
    else if (firstStrMap.get(splitS[i])) {
      firstStrMap.set(splitS[i], firstStrMap.get(splitS[i]) + 1);
    } else {
      differentMap.set(
        "differentStr",
        differentMap.get("differentStr") + 1 || 1
      );
    }

    let firstStrArr = [...firstStrMap];
    let differentStrArr = [...differentMap];

    if (
      firstStrArr.length > 0 &&
      differentStrArr.length > 0 &&
      firstStrArr[0][1] === differentStrArr[0][1]
    ) {
      firstStrMap.clear();
      differentMap.clear();
      count++;
    }
  }

  // 아직 남은 문자가 있다면
  count += firstStrMap.size;

  return count;
}
