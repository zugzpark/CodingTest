function solution(n) {
    var answer = 0;
    
    for(let i = 1; i<=n ; i++){
        i%2==0?answer+=i:0
    }
    return answer;
}