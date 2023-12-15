function solution(s) {

    let range = Math.floor(s.length/2)

    return s.length%2==0?s.substr(range-1,2):s.substr(range,1);
}