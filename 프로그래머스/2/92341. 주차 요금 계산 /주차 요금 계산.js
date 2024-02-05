function solution(fees, records) {
    var answer = [];
    let [deMin, deFee, unitMin, unitFee] = fees
    let car = new Map()
    let sumT = new Map()
    let maxT = 1439

    for(let i = 0 ; i<records.length ; i++){
        let [t, num, inOut] = records[i].split(' ')
        let [h,m] = t.split(':')
        t = h*60+m*1
        
        if(inOut==='OUT'){
            let sum = sumT.get(num)
            sum!=undefined?sumT.set(num,sum+(t-car.get(num))):sumT.set(num,t-car.get(num))

            car.delete(num)
        } else {

            car.set(num,t)    
        }

    }
    for(let [k,v] of car){
        let temp = sumT.get(k)
        temp?sumT.set(k,temp+maxT-v):sumT.set(k,maxT-v)
    }

    let result = [...sumT].sort()
    result.forEach(v => {
        let [carNum, min] = v

        if(deMin>=min){
            answer.push(deFee)
        } else {
            answer.push(deFee+Math.ceil((min-deMin)/unitMin)*unitFee)
        }

    })
    return answer;
}
