const phone_number = "01033334444";

function solution(phone_number) {
  return (
    phone_number
      .substring(0, phone_number.length - 4)
      .split("")
      .map((str) => "*")
      .join("") + phone_number.substring(phone_number.length - 4)
  );
}

console.log(solution(phone_number));
