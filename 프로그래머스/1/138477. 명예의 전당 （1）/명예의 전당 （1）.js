function solution(k, score) {
    var answer = [];
    let lank = []
    
    for(let i=0; i<score.length ; i++){
        lank.push(score[i])
        lank.sort((a,b) => b-a)
        
        if(lank.length>k){
            lank.pop()
        }
        
        answer.push(Math.min(...lank))
    }
    
        
    return answer;
}