function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substring(i, i + 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let intersection = 0;
  let union = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    intersection += Math.min(has1, has2);
    union += Math.max(has1, has2);
  });

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

function solution(str1, str2) {
  let strOne = str1.toLowerCase();
  let strTwo = str2.toLowerCase();

  let str1Map = new Map();
  let str2Map = new Map();

  let intersection = 0;
  let union = 0;

  for (let i = 0; i < strOne.length - 1; i++) {
    let str = strOne[i] + strOne[i + 1];
    if (/^[a-z]+$/.test(str)) {
      // 문자가 a-z 사이의 소문자 알파벳인 경우에만 실행
      str1Map.set(str, str1Map.get(str) + 1 || 1);
    }
  }

  for (let j = 0; j < strTwo.length - 1; j++) {
    let str = strTwo[j] + strTwo[j + 1];
    if (/^[a-z]+$/.test(str)) {
      // 문자가 a-z 사이의 소문자 알파벳인 경우에만 실행
      str2Map.set(str, str2Map.get(str) + 1 || 1);
    }
  }

  str1Map.forEach((value, key) => {
    // str1Map과 str2Map 둘다 가지고 있다면
    if (str2Map.has(key)) {
      // 만약 key 값의 value가 둘이 같다면
      if (value === str2Map.get(key)) {
        intersection += value;
        union += value;
        str2Map.delete(key);
      } else if (value > str2Map.get(key)) {
        intersection += str2Map.get(key);
        union += value;
        str2Map.delete(key);
      } else if (value < str2Map.get(key)) {
        intersection += value;
        union += str2Map.get(key);
        str2Map.delete(key);
      }
    }
    // 만약 둘다 서로 같고 있지 않다면
    else {
      union += value;
    }
  });

  str2Map.forEach((value, key) => {
    union += value;
  });

  // 만약 union이 0이면 1을 반환 (두 문자열이 모두 공백이거나 특수문자로만 이루어진 경우를 처리)
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
