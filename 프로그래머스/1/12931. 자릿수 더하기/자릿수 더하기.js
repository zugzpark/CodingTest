function solution(n)
{
    let arr = n.toString().split('').map(v => Number(v))
    
    let answer = arr.reduce((acc,val) => {
        return acc+=val
    })

    return answer;
}