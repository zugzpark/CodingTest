function solution(a, b) {
    let sum = 0;

    let [num1, num2] = a<b?[a,b] :[b,a]
    
    for(let i = num1 ; i<=num2 ; i++){
        sum+=i
    }    
    
    return a===b?a:sum
}