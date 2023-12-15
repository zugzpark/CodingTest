function solution(s) {
    let answer = '';
    let empty = []
    const map = new Map();
    const obj = {
        "zero": "0",
        "one" : "1",
        "two" : "2",
        "three" : "3",
        "four" : "4",
        "five" : "5",
        "six" : "6",
        "seven" : "7",
        "eight" : "8",
        "nine" : "9"
    }

    for(let key in obj){
        let value = obj[key]
        map.set(key,value)
    }
    
    //console.log(map.get('one'))
    
    const word = s.split('')
    for(let i = 0 ; i<s.length ; i++){
        
        let num = Number(word[i]);
        
        if(!isNaN(num)){
            answer+=num;
        } else {
            empty.push(word[i])
            
            if(map.get(empty.join(''))){
                answer+=map.get(empty.join(''));
                empty = [];
            };
        }
        
        
    }
    
    //console.log(answer)
    return Number(answer);
}
