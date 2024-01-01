function solution(s) {
    var answer = [];
    let str = 0
    let len = 0;
    let sum = 0;
    let cnt = 0;

    while(s!=1){
            
        str = s.replace(/0/g,'')
        len = str.toString().length
        sum += s.length-len
    
        s = len.toString(2)
    
        cnt++
    }
    
    answer.push(cnt,sum)
    return answer;
}

