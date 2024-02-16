function solution(number, limit, power) {
    var answer = 0;
    let temp = []
    
    //약수의 개수 혹은 제한된 power리턴
    for(let i = 1 ; i<=number ; i++){
        temp.push(measure(i,limit,power))
    }
    
    //reduce로 철 무게 리턴
    answer = temp.reduce((acc,val) => acc+=val)
    return answer;
}
// 약수의 개수와 제한 비교 공격력이 limit을 넘으면 power리턴
function measure(num,limit,power){
    let cnt = new Set()
    for(let i = 1; i<=Math.sqrt(num) ; i++){
        if(num%i==0){
            cnt.add(num/i)
            cnt.add(i)
        }
        
        if(cnt.size>limit)return power
    }
    
    return cnt.size;
}