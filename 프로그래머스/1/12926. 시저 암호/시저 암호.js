function solution(s, n) {
    var answer = [];
    // 대문자 65~90
    // 소문자 97~122
    s.split('').forEach(v => {
        
        let num = v.charCodeAt()
        
        if(num>=65 && num<=90){
            num+=n
            if(num>90)num=64+(num-90)
        
        } else if(num>=97 && num<=122){
            num+=n
            if(num>122)num=96+(num-122)
        }
        
        answer.push(String.fromCharCode(num))
        
    })
    
    return answer.join('');
}