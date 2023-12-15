function solution(n, m) {
    var answer = [];
    
    answer.push(GCD(n,m),(n*m)/GCD(n,m))
    return answer;
}

function GCD(a,b){
    if(b%a==0) return a
    
    return GCD(b, a%b)
}