function solution(s) {
    var answer = [];
    let word = ""
    let str = ""
    let first = true
    let wordCnt = 0;
    let differCnt = 0;
    
    
    for(let i = 0; i<s.length; i++){
        word+=s[i]
        
        if(first){
            str=s[i]
            wordCnt++
            first=false
            
        } else {
            
            str==s[i]?wordCnt++:differCnt++;
            
            if(wordCnt==differCnt){
                answer.push(word)
                word = ""
                first=true;
            }
        }
        
    }
    if(word!="")answer.push(word)
    return answer.length;
}