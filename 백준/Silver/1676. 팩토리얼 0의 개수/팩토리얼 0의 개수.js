const input = +require("fs").readFileSync('/dev/stdin').toString().trim();
let result = 0;
for (let i = 1; i <= input; i++) {
  if (i % 125 === 0) result += 3;
  else if (i % 25 === 0) result += 2;
  else if (i % 5 === 0) result++;
}
console.log(result);