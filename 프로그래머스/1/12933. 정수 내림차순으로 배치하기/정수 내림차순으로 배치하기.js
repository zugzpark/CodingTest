function solution(n) {
    
    
        
    return Number(n.toString().split('').map(v => Number(v)).sort((a,b) => b-a).join(''));
}