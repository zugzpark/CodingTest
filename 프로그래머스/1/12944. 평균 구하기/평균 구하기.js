function solution(arr) {
    
    let num = arr.reduce((acc,val) => {
        return acc+=val
    })
    
    return num/arr.length;
}