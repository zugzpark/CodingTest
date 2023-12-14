const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input.shift()

let map = new Map();
let answer = []
input.forEach(v => {
    let status = v.split(' ')[1].replace('\r','')
    let name = v.split(' ')[0]
    
    if(status=='enter'){
        map.set(name,1)
    } else {
        map.set(name,0)
    }
})

for(let [key,value] of map){
    if(value)answer.push(key)
}

console.log(answer.sort().reverse().join('\n'))