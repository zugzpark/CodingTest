function solution(phone_number) {
    
    let answer = ''
    let num = phone_number.substr(phone_number.length-4)
    
    while(answer.length!=phone_number.length-4){
        answer+='*'
    }
    
    return answer+num;
}