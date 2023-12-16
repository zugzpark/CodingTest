function solution(lottos, win_nums) {
    var answer = [];
    let cnt = 0;
    let grade = 7;
    for(let i = 0 ; i<lottos.length ; i++){
        lottos[i]!=0?win_nums.indexOf(lottos[i])>=0?grade--:0:cnt++;
        
    }
    
    if(grade==7)grade--;
    
    answer.push((grade-cnt==0?1:grade-cnt),grade)
    return answer;
}