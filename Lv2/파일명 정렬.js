const files = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];

function solution(files) {
  let fileArr = files.map((file, index) => {
    const matched = file.match(/([^0-9]+)([0-9]+)(.*)/);

    //([^0-9]+) => 숫자가 아닌 문자열이 한개 이상 나오는 부분
    // ([0-9]+) => 숫자가 한개 이상 나오는 부분
    // (.*) => 모든 문자열 (TAIL 부분)

    return {
      HEAD: matched[1],
      originalHEAD: matched[1],
      originalNUMBER: matched[2], // 원본 숫자 문자열 저장
      NUMBER: parseInt(matched[2], 10),
      TAIL: matched[3],
      INDEX: index,
    };
  });

  fileArr.sort((a, b) => {
    if (a.HEAD !== b.HEAD) {
      return a.HEAD.localeCompare(b.HEAD);
    }
    if (a.NUMBER !== b.NUMBER) {
      return a.NUMBER - b.NUMBER;
    }
    return a.INDEX - b.INDEX;
  });

  // 파일명을 완전히 재조합하면서 원본 숫자 문자열을 사용
  return fileArr.map(
    (item) => item.originalHEAD + item.originalNUMBER + item.TAIL
  );
}

console.log(solution(files));
