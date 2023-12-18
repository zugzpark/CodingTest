function solution(X, Y) {
    var answer = [];
    let arrX = X.split('').sort().map(v => Number(v))
    let arrY = Y.split('').sort().map(v => Number(v))
    
    for(let i=arrX.length-1 ; i>=0; i--){
        if(arrX.length==0||arrY.length==0)break;
        if(arrX[i]<arrY[arrY.length-1]){
            arrY.pop()
            i++;
            
        } else if(arrX[i]>arrY[arrY.length-1]){
            arrX.pop()
            
        } else {
            answer.push(arrX.pop())
            arrY.pop()
        }

    }
    return answer.length!=0?answer[0]==0?"0":answer.join(''):"-1";
}