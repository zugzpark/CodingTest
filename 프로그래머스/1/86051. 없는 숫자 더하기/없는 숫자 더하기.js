function solution(numbers) {
    

    let answer = (45-numbers.reduce((acc,val) => acc+=val))
    return answer;
}