function solution(arr, divisor) {
    let answer = [];
    
    arr.reduce((acc,val) =>{
        if(val%divisor==0)answer.push(val)
    },0)
    
    answer.length==0?answer.push(-1):answer.sort((a,b) => a-b)
    
    return answer
}