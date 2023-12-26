function solution(s) {
    var answer = 0;
    let arr = s.split('')
    let len = arr.length
    let cnt = 0;
    
    while(cnt!=len){
        let arr2 = []
        let temp = []
    
        for(let i = 0 ; i<arr.length ; i++){
            if(arr[0]=='\)' || arr[0]=='\}' || arr[0]=='\]')break

            temp.push(arr[i])
         
            if(temp.join('').match(/\(\)/gi) || 
               temp.join('').match(/\{\}/gi) || 
               temp.join('').match(/\[\]/gi)){
                
                temp.pop()
                temp.pop()
            }
            if(i==arr.length-1 && temp.length==0)answer++
        }
        
        arr2.push(arr.shift())
        arr.push(arr2.join(''))
        
        arr2.pop()
        cnt++
        
        
    }
    return answer;
}


