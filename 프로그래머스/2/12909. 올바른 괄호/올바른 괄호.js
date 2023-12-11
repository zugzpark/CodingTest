function solution(s){
    
    let word = s.split('')
    let temp = []
    
    if(word[0]=='\)' || 
       word[word.length-1]=='\(' || 
       word.length%2==1) return false
    
    for(let i = 0 ; i<word.length; i++){

        temp.push(word[i])
        
        if(temp[temp.length-2]!=undefined &
           temp[temp.length-2]=='\(' &
           temp[temp.length-1]=='\)'){
            temp.pop()
            temp.pop()
        }
        
    }


    return temp.length!=0?false:true;
}