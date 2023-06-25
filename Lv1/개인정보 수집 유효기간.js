function solution(today, terms, privacies) {
  let answer = [];

  // 1년에 336일
  let splitToday = today.split(".");

  // 현재 총 날짜
  let totalToday = 0;

  // 현재 총 날짜 구하기
  for (let i = 0; i < splitToday.length; i++) {
    if (i === 0) {
      totalToday += Number(splitToday[i]) * 336;
    } else if (i === 1) {
      totalToday += Number(splitToday[i]) * 28;
    } else if (i === 2) {
      totalToday += Number(splitToday[i]);
    }
  }

  let termObj = {};

  // 개인정보 약관 마다 유효기관 객체로 보관
  for (let i = 0; i < terms.length; i++) {
    let [type, num] = [terms[i].split(" ")[0], Number(terms[i].split(" ")[1])];

    let totalDay = num * 28;
    termObj[type] = totalDay;
  }

  // 개인정보 수집 일자 반복문 돌기

  for (let i = 0; i < privacies.length; i++) {
    let totalDay = 0;
    let [yearAndMonthAndDay, type] = privacies[i].split(" ");

    let [year, month, day] = yearAndMonthAndDay
      .split(".")
      .map((str) => Number(str));

    totalDay += year * 336;
    totalDay += month * 28;
    totalDay += day;
    totalDay += termObj[type];

    // 현재 총 day는 678749
    // 총 날짜에서 -1을 해주어야지 보관 가능한 날짜를 구함
    if (totalToday > totalDay - 1) {
      answer.push(i + 1);
    }
  }

  return answer;
}
