function solution(cards1, cards2, goal) {
    
    for(let i = 0 ; i<goal.length ; i++){
        
        if(goal[i]==cards1[0]){
            cards1.shift();
            goal.shift();
            i--;
        } else if(goal[i]==cards2[0]){
            cards2.shift();
            goal.shift();
            i--;
        } else {
            return "No"
        }
        
    }

    return "Yes";
}