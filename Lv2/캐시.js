function solution(cacheSize, cities) {
  var answer = 0;

  let cache = [];

  let hit = 1;
  let miss = 5;

  if (cacheSize === 0) {
    return cities.length * miss;
  }

  for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toLowerCase();

    // 만약 캐시에서 해당 도시를 갖고 있다면
    if (cache.includes(city)) {
      let idx = cache.indexOf(city);
      cache.splice(idx, 1);
      answer += hit;
    }
    // 만약 캐시에서 해당 도시를 갖고 있지 않다면
    else {
      // 캐시 길이가 캐시사이즈보다 크다면
      if (cache.length > cacheSize) {
        cache.shift();
      }
      answer += miss;
    }

    cache.push(city);
  }

  return answer;
}
