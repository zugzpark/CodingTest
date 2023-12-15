function solution(n) {
    let su = '수'
    let bak = '박'
    let answer = ''
    let i = 0;
    
    while(i<n){
        i%2==0?answer+=su:answer+=bak
        i++
    }
    
    return answer;
}