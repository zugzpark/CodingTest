function solution(strings, n) {
    var answer = [];
    let word = [];
    //첫글자 배열에 담기
    strings.forEach(v => {
        word.push([v.slice(n,n+1),v])
    })
    //첫글자 기준으로 정렬, 같으면 사전순 정렬
    word.sort((a,b) => {
    
        if(a[0]===b[0])return a[1]>b[1]?1:-1
        
        return a[0]>b[0]?1:-1
       
    })
    
    word.forEach(v => answer.push(v[1]))
    
    return answer;
}