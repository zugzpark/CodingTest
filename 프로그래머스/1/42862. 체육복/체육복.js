function solution(n, lost, reserve) {
    var answer = 0;
    let arr = new Array(n).fill(0)

    
    //체육복 잃어버린 아이 체크
    for(let i = 0 ; i<lost.length ; i++){
        arr[lost[i]-1]--
    }
    reserve.sort()
    

    //본인것 분실했는지 체크 후 lost에서 ++
    for(let j = 0 ; j<reserve.length ; j++){
    
        if(arr[reserve[j]-1]==-1){
            arr[reserve[j]-1]++
            reserve[j]=null
        }
    }
    
    //reserve중 앞뒤로 -1인것만 ++
    for(let j = 0 ; j<reserve.length ; j++){
        if(arr[reserve[j]-1-1] && arr[reserve[j]-1-1]==-1 && !reserve[j]-1){
            arr[reserve[j]-1-1]++;
        } else if(arr[reserve[j]-1+1] && arr[reserve[j]-1+1]==-1 && !reserve[j]-1){
            arr[reserve[j]-1+1]++;
        }
    }
    
    return arr.filter(v => v==0).length;
}