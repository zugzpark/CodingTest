function solution(t, p) {
    var answer = 0;
    for(let i = 0 ; i< t.length ; i++){
        
        let str = t.slice(i,i+p.length)
        str.length==p.length?str<=p?answer++:0:0;
        
    }
    
    return answer;
}