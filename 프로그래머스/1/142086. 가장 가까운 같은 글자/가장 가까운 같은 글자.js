function solution(s) {
    var answer = [];
    
    
    for(let i = 0 ; i<s.length ; i++){
        //문자열로 판별, 왼쪽부터 오른쪽이기 때문에 reverse 후 글자의 index를 찾는다
        let str = s.slice(0,i).split('').reverse().join('').indexOf(s[i]);
      
        //글자의 인덱스가 있으면 위치를 push, 없으면 -1 그대로 push
        if(s.slice(0,i).split('').reverse().join('').indexOf(s[i])>=0){
            answer.push(str+1)
        } else {
            answer.push(str)
        }
        
    }
    
    return answer;
}