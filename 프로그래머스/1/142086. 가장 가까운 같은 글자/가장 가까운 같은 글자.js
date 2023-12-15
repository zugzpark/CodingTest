function solution(s) {
    var answer = [];
    for(let i = 0 ; i<s.length ; i++){
    
        let str = s.slice(0,i).split('').reverse().join('').indexOf(s[i]);
        if(s.slice(0,i).split('').reverse().join('').indexOf(s[i])>=0){
            answer.push(str+1)
        } else {
            answer.push(str)
        }
        
    }
    
    return answer;
}