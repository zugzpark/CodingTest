function solution(price, money, count) {
    var answer = 0;
    let m = 0;
       
    for(let i=0 ; i<count ; i++){
        m+=price;
        answer+=m;
    }
    
    
    return answer-money<=0?0:answer-money;
}