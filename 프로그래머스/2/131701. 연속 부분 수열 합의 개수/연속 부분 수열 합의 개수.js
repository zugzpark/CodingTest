function solution(elements) {
    var answer = 0;
    let arr = []
    let cnt = 0 ;
    let len = elements.length;
   
    while(cnt!=len){
        //console.log(elements)
        elements.reduce((acc,val,i) => {
        acc+=val
        //console.log(acc ,val , i )
        arr.push(acc)
        
        return acc
    },0)
        arr.push(elements[0]+elements[elements.length-1])
        
        elements.push(elements.shift())
        cnt++
    }

    answer = new Set(arr).size
    
    return answer;
}