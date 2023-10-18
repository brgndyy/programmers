function* myGenerator() {
  console.log("Start");
  const a = yield "yield 1";
  const b = yield "yield 2";
  return "done";
}

const gen = myGenerator();

console.log("처음 제너레이터 실행 :", gen.next()); // Start를 출력하고, { value: 'yield 1', done: false } 반환
console.log("제너레이터 실행 : ", gen.next()); // a: 10을 출력하고, { value: 'yield 2', done: false } 반환
// console.log(gen.next(20));  // b: 20을 출력하고, { value: 'done', done: true } 반환
