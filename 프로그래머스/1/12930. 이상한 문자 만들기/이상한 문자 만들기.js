function solution(s) {
    let answer = []
    
    s.split(' ').forEach(v => {
        v.split('').forEach((w,i) =>{
            
            if(i%2==0){
                
                answer.push(w.toUpperCase())
            } else {
                
                answer.push(w.toLowerCase())
            }
            
        })
        
        answer.push(' ')
    })
    answer.pop()
    return answer.join('');
}