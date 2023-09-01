const m = "ABCDEFG";
const musicInfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"];

function solution(m, musicinfos) {
  let answer = {
    playingTime: -1,
    songTitle: "(None)",
  };

  // # 문자를 처리하기 위해 변환
  m = m
    .replace(/C#/g, "c")
    .replace(/D#/g, "d")
    .replace(/F#/g, "f")
    .replace(/G#/g, "g")
    .replace(/A#/g, "a");

  for (let i = 0; i < musicinfos.length; i++) {
    let [startTime, endTime, songTitle, scoreInfo] = musicinfos[i].split(",");

    // # 문자를 처리하기 위해 변환
    scoreInfo = scoreInfo
      .replace(/C#/g, "c")
      .replace(/D#/g, "d")
      .replace(/F#/g, "f")
      .replace(/G#/g, "g")
      .replace(/A#/g, "a");

    let [startHour, startMinute] = startTime.split(":").map(Number);
    let [endHour, endMinute] = endTime.split(":").map(Number);

    let playingTime = (endHour - startHour) * 60 + (endMinute - startMinute);

    // 재생 시간만큼의 악보 정보 생성
    let totalStr =
      scoreInfo.repeat(Math.floor(playingTime / scoreInfo.length)) +
      scoreInfo.substring(0, playingTime % scoreInfo.length);

    if (totalStr.includes(m)) {
      if (playingTime > answer.playingTime) {
        answer.playingTime = playingTime;
        answer.songTitle = songTitle;
      }
    }
  }

  return answer.songTitle;
}

console.log(solution(m, musicInfos)); // Should print "WORLD"
