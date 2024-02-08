function solution(lottos, win_nums) {
    var answer = [];
    let cnt = 0;
    
    // 1개번호 일치 = 6등 , 0개번호 일치 = 7등
    let grade = 7;
    
    // 번호가 0이면 cnt++(당첨처리) , 아니면 당첨번호에 포함인지 
    for(let i = 0 ; i<lottos.length ; i++){
        lottos[i]!=0?win_nums.indexOf(lottos[i])>=0?grade--:0:cnt++;
        
    }
    // 번호가 하나도 맞은게 없다면 6등으로 출력
    if(grade==7)grade--;
    
    // 최저등수와 0의 갯수(cnt)를 비교 , 등수-cnt(당첨처리) = 최고순위, 현재순위(최저순위)
    answer.push((grade-cnt==0?1:grade-cnt),grade)
    return answer;
}