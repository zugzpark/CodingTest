function solution(food) {
    let answer = [];
    let temp = []
    
    for(let i = 1 ; i<food.length ; i++){
        
        let kind = food[i]
            
        kind%2!=0?kind--:0
        
        for(let j = 0 ; j<kind/2 ; j++)temp.push(i)
    }
    
    
    answer.push(temp.join(),0,temp.reverse().join())
    
    return answer.join().replaceAll(',','');
}