function solution(number) {
    var answer = 0;
    //완전탐색을 이용한 풀이
    for(let i=0; i<number.length ; i++){
        
        for(let j=i+1; j<number.length ; j++){
            
            for(let k=j+1; k<number.length ; k++){
                number[i]+number[j]+number[k]==0?answer++:""
            }
        }
    }
    return answer;
}