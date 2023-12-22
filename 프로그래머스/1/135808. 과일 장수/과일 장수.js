function solution(k, m, score) {
    var answer = 0;
    let apple = []
    let box = [];
   
    score.sort((a,b) => a-b)
    
    console.log(score)
    while(score.length>0){
        
        apple.push(score.pop())
        if(apple.length==m){
            box.push(apple)
            apple = [];
        }
        
    }
    
    box.forEach(v => {
        answer+=Math.min(...v)*v.length
    })
    return answer;
}