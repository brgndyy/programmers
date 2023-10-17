const readline = require("readline");

function run(genFunc) {
  const gen = genFunc();
  function step(value) {
    console.log("gen : ", gen);
    const result = gen.next(value);
    if (result.done) {
      return;
    }
    rl.question(result.value, (input) => {
      step(input);
    });
  }
  step();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function* myGenerator() {
  console.log("반갑습니다! 나이가 어떻게 되시나요?");
  const age = yield "당신의 입력 : ";
  console.log(`당신은 ${age}살 이군요!`);
  console.log("당신의 거주지가 어떻게 되시나요?");
  const location = yield "당신의 입력 : ";
  console.log(`${location}! 좋은 곳이네요.`);
  rl.close();
}

run(myGenerator);
