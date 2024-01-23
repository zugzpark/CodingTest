function solution(food) {
    let answer = [];
    let temp = []
    //음식의 종류과 개수가 같아야 하므로 짝수 갯수만큼 배열에 넣어준다
    //단 짝수가 아닐경우는 패스
    for(let i = 1 ; i<food.length ; i++){
        
        let kind = food[i]
            
        kind%2!=0?kind--:0
        
        for(let j = 0 ; j<kind/2 ; j++)temp.push(i)
    }
    
    
    answer.push(temp.join(),0,temp.reverse().join())
    
    return answer.join().replaceAll(',','');
}