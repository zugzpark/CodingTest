function solution(arr) {
    var answer = [];
    let idx = -1;
    
    if(arr.length>1){
        
        idx = arr.indexOf(Math.min(...arr))
        let a = arr.slice(0,idx)
        let b = arr.slice(idx+1,arr.length)
        
        arr = a.concat(b)
    
    } else {
        return [-1]
    }
    
    return arr
}