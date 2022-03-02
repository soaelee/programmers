// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
// 입출력 예
// a	b	result
// [1,2,3,4]	[-3,-1,0,2]	3
// [-1,0,1]	[1,0,-1]	-2

const solution = (a, b) => {
  const len = a.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += a[i] * b[i];
  }
  return sum;
};

// 이해하기 쉬운 한줄코드
const solutionWithReduce = (a, b) => {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
};
let a = [1, 2, 3, 4];
a = [-1, 0, 1];
let b = [-3, -1, 0, 2];
b = [1, 0, -1];

// 3
console.log(solution(a, b));
