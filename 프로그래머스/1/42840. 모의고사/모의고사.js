function solution(answers) {
    let temp = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    
    let num = [0,0,0]
    let answer = []
    
    //배열로 고정값으로 탐색
    for(let i = 0 ; i<answers.length ; i++){
        
        if(answers[i]==temp[0][temp[0].length<=i?i%temp[0].length:i])num[0]++
        if(answers[i]==temp[1][temp[1].length<=i?i%temp[1].length:i])num[1]++
        if(answers[i]==temp[2][temp[2].length<=i?i%temp[2].length:i])num[2]++

    }
    
    num.forEach((v,i) => {
        if(Math.max(...num)==v)answer.push(i+1)
    })
    
    return answer;
}