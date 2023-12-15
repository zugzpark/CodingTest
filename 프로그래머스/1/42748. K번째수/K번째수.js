function solution(array, commands) {
    var answer = [];
    let count=0;
    let startIndex=0;
    let endIndex=0;
    let commandsNum=0;
    commands.forEach(val => val.forEach(v => 
                                        {
                                        count++;
                                        switch(count){
                                           
                                            case 1:
                                                startIndex=v;
                                                break;
                                            case 2:
                                                endIndex=v;
                                                break;
                                            case 3:
                                                commandsNum=v;
                                               
                                                answer.push(array.slice(startIndex-1,endIndex).
                                                sort((a,b)=>a-b)[commandsNum-1])    
                                                count=0;
                                                break;
                                        }
                                        
                                        })
                    )
    return answer;
}