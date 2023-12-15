function solution(strings, n) {
    var answer = [];
    let word = [];
    
    strings.forEach(v => {
        word.push([v.slice(n,n+1),v])
    })
    
    word.sort((a,b) => {
    
        if(a[0]===b[0])return a[1]>b[1]?1:-1
        
        return a[0]>b[0]?1:-1
       
    })
    
    word.forEach(v => answer.push(v[1]))
    
    return answer;
}