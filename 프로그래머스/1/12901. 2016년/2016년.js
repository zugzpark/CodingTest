function solution(a, b) {

    let sum = 0;
    let index = 0;
    let day = ['FRI','SAT','SUN','MON','TUE','WED','THU']
    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    
    for(let i = 0 ; i<month.length ; i++){
        
        if(i==(a-1)){
            sum+=b;
            break;
        } else {
            sum+=month[i]
        };
    }
    index=(sum%7)-1
    return day[index>=0?index:6];
}