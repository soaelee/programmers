// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
// 다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

// 입출력 예
// id_list	report	k	result
// ["muzi", "frodo", "apeach", "neo"]	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	2	[2,1,1,0]
// ["con", "ryan"]	["ryan con", "ryan con", "ryan con", "ryan con"]	3	[0,0]

const solution = (id_list, reports, k) => {
  reports = [...new Set(reports)];
  const reportObj = {};
  const answer = Array.from({ length: id_list.length }, () => 0);

  reports.forEach((report) => {
    const splitUser = report.split(" ");
    const reporters = reportObj[splitUser[1]];
    reportObj[splitUser[1]] = !reporters
      ? [splitUser[0]]
      : [...reporters, splitUser[0]];
  });

  Object.values(reportObj).forEach((reporter) => {
    if (reporter.length >= k) {
      reporter.forEach((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  });
  return answer;
};

let id_list = ["muzi", "frodo", "apeach", "neo"];
// id_list = ["con", "ryan"];
let reports = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
// reports = ["ryan con", "ryan con", "ryan con", "ryan con"];
let k = 2;
// k = 3;
// [2, 1, 1, 0]  [0, 0]
console.log(solution(id_list, reports, k));
