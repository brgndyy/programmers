function deepFreeze(object) {
  // 객체에 정의된 속성명을 추출
  var propNames = Object.getOwnPropertyNames(object);

  // 스스로를 동결하기 전에 속성을 동결

  for (let name of propNames) {
    let value = object[name];

    object[name] =
      value && typeof value === "object" ? deepFreeze(value) : value;
  }

  return Object.freeze(object);
}

const obj = {
  a: {
    b: 1,
  },
};

deepFreeze(obj);

console.log(obj.a); // { b: 1 }

obj.a.b = 2;
console.log(obj.a); // { b: 1 }
