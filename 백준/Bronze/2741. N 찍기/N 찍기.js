const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v => Number(v))

let answer = ''
for(let i = 1 ; i<=input ; i++){
    answer += i+'\n'
}
console.log(answer)