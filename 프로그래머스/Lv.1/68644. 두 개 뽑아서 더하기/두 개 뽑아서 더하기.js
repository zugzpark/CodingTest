function solution(numbers) {
    var answer = [];
    
    
    for(let i = 0 ; i<numbers.length ; i++){
        for(let j = i+1; j<numbers.length ; j++){
            answer.push(numbers[i]+numbers[j])
        }
    }
    // 배열안의 서로다른 인덱스 두개를 더 한 모든 값을 answer에 넣고 중복제거 후 정렬
    return [...new Set(answer)].sort((a,b) => a-b);
    
}