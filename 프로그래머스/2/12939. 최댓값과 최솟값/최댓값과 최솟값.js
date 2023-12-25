function solution(s) {
    var answer = '';
    let word = s.split(' ').map(v => Number(v))
    answer = `${Math.min(...word)} ${Math.max(...word)}`
    
    return answer;
}