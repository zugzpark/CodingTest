function solution(left, right) {
    var answer = 0;
    let count = 0;
    
    for(var i=left ; i<=right ; i++){
        for(var j=1 ; j<=i ; j++){
            
            if(i%j==0){
                
                count++
                
            } 
            if(i==j){
                               
                if(count%2==0){
                    
                    answer+=i    
                    
                }else{
                    answer-=i;
                    
                }
                count = 0 ;
            }
            
          
        }
        
    }
    return answer;
}