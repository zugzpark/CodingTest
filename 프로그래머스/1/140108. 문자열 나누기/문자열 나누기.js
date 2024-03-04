function solution(s) {
    var answer = [];
    let word = ""
    let str = ""
    let first = true
    let wordCnt = 0;
    let differCnt = 0;
    
    
    for(let i = 0; i<s.length; i++){
    //문자열을 하나씩 읽고 처음나왔으면 str에 추가 
        word+=s[i]
        
        if(first){
            str=s[i]
            wordCnt++
            first=false
            
        } else {
            //문자열이 같거나 다르면 변수컨트롤 후 초기화
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