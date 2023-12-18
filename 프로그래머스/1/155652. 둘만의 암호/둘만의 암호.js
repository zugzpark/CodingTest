function solution(s, skip, index) {
    var answer = '';
    
    s.split('').forEach(v => {
        let cnt = 1
        let num = v.charCodeAt(0)
        
        let temp = ''
        while(cnt!=index+1){    

            temp = word(++num>122?num=123-num+97:num)
            
            if(skip.includes(temp))cnt--

            cnt++
        }
        answer+=temp
    })
    
    return answer;
}

function word(num){
    
    return String.fromCharCode(num)
}