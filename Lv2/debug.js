const cacheSize = 5;
const cities = ["a", "b", "c", "b", "a"];

function solution(cacheSize, cities) {
  const cacheArr = [];

  const cacheHit = 1;

  const cacheMiss = 5;

  let answer = 0;

  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();

    const isIncludedCityInCache = cacheArr.includes(city);

    const isValidCacheArrLength = cacheArr.length < cacheSize;

    // 캐시 사이즈가 아직 여유롭다면
    if (isValidCacheArrLength) {
      //캐시 안에 해당 도시가 존재하지 않는다면 (cacheMiss)
      if (!isIncludedCityInCache) {
        cacheArr.push(city);
        answer += cacheMiss;
      }
      //   캐시 안에 해당 도시가 존재한다면 (cacheHit);
      else {
        const foundIndex = cacheArr.indexOf(city);
        cacheArr.splice(foundIndex, 1);
        cacheArr.push(city);
        answer += cacheHit;
      }
    }
    // 캐시 사이즈가 여유롭지 않다면
    else {
      // 캐시 안에 이미 도시가 존재한다면
      if (isIncludedCityInCache) {
      }

      if (!isIncludedCityInCache) {
        cacheArr.shift();
        cacheArr.push(city);
        answer += cacheMiss;
      }
      //   캐시 안에 해당 도시가 존재한다면 (cacheHit);
      else {
        const foundIndex = cacheArr.indexOf(city);
        cacheArr.splice(cacheArr[foundIndex], 1);
        cacheArr.push(city);
        answer += cacheHit;
      }
    }
  }

  return answer;
}

console.log(solution(cacheSize, cities));
