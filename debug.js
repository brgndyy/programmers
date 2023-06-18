const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

function solution(fees, records) {
  const carRecords = {};
  const carFees = {};

  records.forEach((record) => {
    const [time, number, status] = record.split(" ");
    if (!carRecords[number]) {
      carRecords[number] = [];
    }
    carRecords[number].push({ time: timeToMinutes(time), status });
  });

  Object.keys(carRecords).forEach((carNumber) => {
    const timeLogs = carRecords[carNumber];
    let totalTime = 0;
    let inTime = null;

    timeLogs.forEach((log) => {
      if (log.status === "IN") {
        inTime = log.time;
      } else if (log.status === "OUT") {
        totalTime += log.time - inTime;
        inTime = null;
      }
    });

    // 차가 아직 출차가 안됐다면
    if (inTime !== null) {
      totalTime += 23 * 60 + 59 - inTime;
    }

    let fee = fees[1];
    if (totalTime > fees[0]) {
      fee += Math.ceil((totalTime - fees[0]) / fees[2]) * fees[3];
    }

    carFees[carNumber] = fee;
  });

  const sortedCarNumbers = Object.keys(carFees).sort((a, b) => a - b);
  return sortedCarNumbers.map((number) => carFees[number]);
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

console.log(solution(fees, records));
