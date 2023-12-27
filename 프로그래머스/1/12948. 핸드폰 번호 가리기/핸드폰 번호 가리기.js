function solution(phone_number) {
    let answer = ''
    let len = phone_number.length-4
    let num = phone_number.substr(len)
    
    while(answer.length!=len){
        answer+='*'
    }
    return answer+num;
}