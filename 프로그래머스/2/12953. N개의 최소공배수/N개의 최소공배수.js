function solution(arr) {
    
    let answer = arr[0]
    
    //두 수끼리 최소공배수 구하기
    for(let i = 1 ; i<arr.length ; i++){
        answer = LCM(answer,arr[i])
    }
    
    return answer;
}

//최소공배수
function LCM(a,b) {
    return (a*b) / GCD(a,b)
}

//최대공약수
function GCD(a,b){
    let r;
    while(b!=0){
        r=a%b
        a=b
        b=r
    }
    return a
}

