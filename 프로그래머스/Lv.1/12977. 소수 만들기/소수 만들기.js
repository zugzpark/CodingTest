function solution(nums) {
    var answer = 0;
    let sum = 0;
    
    for(let i=0 ; i<nums.length ; i++){
        for(let j=i+1 ; j<nums.length ; j++){
            for(let k=j+1; k<nums.length ; k++){
                
                sum=nums[i]+nums[j]+nums[k]
                
                isPrime(sum)?answer++:0
                
            }
            
        }
    }
    
    
    return answer;
}

function isPrime(n){
    
    for(let i=2 ; i<=Math.sqrt(n) ; i++){
        if(n%i==0) return false
    }
    
    return true
}