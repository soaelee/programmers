// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때,
// 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성

// 제한 사항
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
// 입출력 예
// numbers	return
// [6, 10, 2]	"6210"
// [3, 30, 34, 5, 9]	"9534330"

const solution = (numbers) => {
  const answer = numbers
    .map((num) => num + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  // let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === "0" ? 0 : answer;
};

let numbers = [6, 10, 2];
numbers = [3, 30, 34, 5, 9];
console.log(solution(numbers));

// 삽입 정렬 (항상 정렬된 left와 비교하는 알고리즘
// const solution = (numbers) => {
//   // 문자열로 바꿔서 a + b > b + a를 비교해야함
//   for (let i = 1; i < numbers.length; i++) {
//     const cur = String(numbers[i]);
//     let left = i - 1;
//     while (
//       left >= 0 &&
//       cur + String(numbers[left]) > String(numbers[left]) + cur
//     ) {
//       numbers[left + 1] = numbers[left];
//       left--;
//     }
//     numbers[left + 1] = cur;
//     console.log(`${i}회전: ${numbers}`);
//   }
//   return numbers.join("");
// };
