const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 3;

function solution(id_list, report, k) {
  var answer = [];
  let accountSus = [];

  let userObj = {};
  let reportedUserObj = {};

  // 신고 당한 사람 정보 담을 객체 만들어주기

  // {muzi: 0, frodo: 0, apeach: 0, neo: 0}
  id_list.forEach((id) => (reportedUserObj[id] = 0));
  id_list.forEach((id) => (userObj[id] = 0));

  // 신고자 중복 제거
  const realReport = [...new Set(report)];

  // 신고 받은 사람 카운트 해주기
  // {muzi: 1, frodo: 2, apeach: 0, neo: 2}
  realReport.forEach((user) => {
    let splitUser = user.split(" ");
    let [reporter, getReported] = [splitUser[0], splitUser[1]];

    reportedUserObj[getReported] += 1;
  });

  // 신고 받아서 정지 된사람들

  for (let x in reportedUserObj) {
    if (reportedUserObj[x] >= k) {
      accountSus.push(x);
    }
  }

  // 현재 accountSus = ['frodo', 'neo'];

  realReport.forEach((user) => {
    let splitUser = user.split(" ");
    let [reporter, getReported] = [splitUser[0], splitUser[1]];

    accountSus.forEach((user) => {
      if (getReported === user) {
        userObj[reporter] += 1;
      }
    });
  });

  for (let x in userObj) {
    answer.push(userObj[x]);
  }

  return answer;
}

console.log(solution(id_list, report, k));
