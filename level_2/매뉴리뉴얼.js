// [문제]
// 각 손님들이 주문한 단품메뉴들이 문자열 형식으로 담긴 배열 orders, "스카피"가 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열 course가 매개변수로 주어질 때,
// "스카피"가 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

// [제한사항]
// orders 배열의 크기는 2 이상 20 이하입니다.
// orders 배열의 각 원소는 크기가 2 이상 10 이하인 문자열입니다.
// 각 문자열은 알파벳 대문자로만 이루어져 있습니다.
// 각 문자열에는 같은 알파벳이 중복해서 들어있지 않습니다.
// course 배열의 크기는 1 이상 10 이하입니다.
// course 배열의 각 원소는 2 이상 10 이하인 자연수가 오름차순으로 정렬되어 있습니다.
// course 배열에는 같은 값이 중복해서 들어있지 않습니다.
// 정답은 각 코스요리 메뉴의 구성을 문자열 형식으로 배열에 담아 사전 순으로 오름차순 정렬해서 return 해주세요.
// 배열의 각 원소에 저장된 문자열 또한 알파벳 오름차순으로 정렬되어야 합니다.
// 만약 가장 많이 함께 주문된 메뉴 구성이 여러 개라면, 모두 배열에 담아 return 하면 됩니다.
// orders와 course 매개변수는 return 하는 배열의 길이가 1 이상이 되도록 주어집니다.
// [입출력 예]
// orders	course	result
// ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]	[2,3,4]	["AC", "ACDE", "BCFG", "CDE"]
// ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]	[2,3,5]	["ACD", "AD", "ADE", "CD", "XYZ"]
// ["XYZ", "XWY", "WXA"]	[2,3,4]	["WX", "XY"]
// 입출력 예에 대한 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// AD가 세 번, CD가 세 번, ACD가 두 번, ADE가 두 번, XYZ 가 두 번 주문됐습니다.
// 요리 5개를 주문한 손님이 1명 있지만, 최소 2명 이상의 손님에게서 주문된 구성만 코스요리 후보에 들어가므로, 요리 5개로 구성된 코스요리는 새로 추가하지 않습니다.

// 입출력 예 #3
// WX가 두 번, XY가 두 번 주문됐습니다.
// 3명의 손님 모두 단품메뉴를 3개씩 주문했지만, 최소 2명 이상의 손님에게서 주문된 구성만 코스요리 후보에 들어가므로, 요리 3개로 구성된 코스요리는 새로 추가하지 않습니다.
// 또, 단품메뉴를 4개 이상 주문한 손님은 없으므로, 요리 4개로 구성된 코스요리 또한 새로 추가하지 않습니다.

const solution = (orders, courses) => {
  const answers = {};
  for (let order of orders) {
    order = order.split("").sort();
    console.log(order);
    for (let i = 0; i < order.length; i++) {
      const item = order[i];
      //   console.log(item);
    }
  }
};
let orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
let courses = [2, 3, 4];
// orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]
// courses = [2,3,5]
// orders = ["XYZ", "XWY", "WXA"]
// courses = [2,3,4]
console.log(solution(orders, courses));
