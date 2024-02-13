function solution(id_list, report, k) {
        
    let reportObj = new Map();
    
    //신고, 신고당한횟수, 이용정지 내역 생성
    id_list.forEach(val => {
     (reportObj[val] = {
        report: [],
        reported: 0,
        isStoppedId: false,
         });
    });
    
    //정제
    report.forEach(val => {
    let [reportPerson, reportedPerson] = val.split(' ');

    //신고한 사람이 목록에 없으면 +1
    if (reportObj[reportPerson].report.indexOf(reportedPerson) === -1) {
      reportObj[reportPerson].report.push(reportedPerson);
      reportObj[reportedPerson].reported += 1;
      
      //신고 횟수가 k 이상이면 이용정지
      if (reportObj[reportedPerson].reported >= k) {
        reportObj[reportedPerson].isStoppedId = true;
      }
    }
  });

  //id_list에 결과 메일리턴 
  let answer = id_list.map(val => {
  return reportObj[val].report.filter((reportId) => reportObj[reportId].isStoppedId).length;
  });
 
    
    
    return answer;
}