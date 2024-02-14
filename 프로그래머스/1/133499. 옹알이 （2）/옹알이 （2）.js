function solution(babbling) {
    let answer = 0;
    let word = ['aya','ye','woo','ma']
    let temp = ''
    
    for(let i =0; i<babbling.length ; i++){
        
        temp=babbling[i]
        
        for(let j=0; j<word.length;j++){
            let str = word[j]+word[j]
            //두번 연속 발음이면 제거 하지않음
            if(temp.indexOf(str)>=0)continue
            //포함된 발음 전부 제거
            let regex = new RegExp(`${word[j]}`, 'gi');
            temp = temp.replace(regex,' ')
            
            //발음이 가능하면 ++ 후 반복문 탈출
            if(temp.trim()==''){
                answer++
                break;
            }
            
        }
        
        
        
    }
    
   
    
    return answer;
}