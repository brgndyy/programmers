const rsp = "205";

function solution(rsp) {
  var answer = "";

  let splitRsp = rsp.split("");

  splitRsp.forEach((rsp) => {
    if (rsp === "2") {
      answer += "0";
    } else if (rsp === "0") {
      answer += "5";
    } else {
      answer += "2";
    }
  });

  return answer;
}

console.log(solution(rsp));
