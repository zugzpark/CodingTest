function solution(x) {
    
    
    
    return x%(x.toString().split('').map(v => Number(v)).reduce((acc,val) => {
        return acc+=val
    }))==0?true:false;
}