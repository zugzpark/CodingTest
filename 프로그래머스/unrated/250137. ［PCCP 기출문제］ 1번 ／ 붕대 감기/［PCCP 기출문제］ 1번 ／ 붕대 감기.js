function solution(bandage, health, attacks) {
        
    let [t, x ,y] = bandage
    let tCount = 0;
    let nowLife = health
    let map = new Map()
    //console.log(t , x , y)
    
    attacks.forEach(v => {
        map.set(v[0],v[1])
    })
    
    for(let i = 0 ; i<=attacks[attacks.length-1][0] ; i++){
        
        if(map.get(i)!=undefined){     
            nowLife-=map.get(i);
            tCount=0;
        } else {
            nowLife+=x;
            tCount++              
        }
        
        if(tCount===t){
            nowLife+=y
            tCount=0;
        }
        if(nowLife>=health)nowLife=health
        
        //console.log(`${i}     ${nowLife}  ${tCount} == ${t}  공격 -> ${map.get(i)}`)
        if(nowLife<=0)return -1
        
    }
    return nowLife;
}