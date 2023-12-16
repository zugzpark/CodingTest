function solution(number, limit, power) {
    var answer = 0;
    let temp = []

    for(let i = 1 ; i<=number ; i++){
        temp.push(measure(i,limit,power))
    }
    
    answer = temp.reduce((acc,val) => acc+=val)
    return answer;
}

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