function solution(s) {
    
    let str = s.replace(/[a-z]/gi,'')
    
    return s.length==4||s.length==6?s.length===str.length?true:false:false
}