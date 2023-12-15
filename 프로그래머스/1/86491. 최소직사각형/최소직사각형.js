function solution(sizes) {
    var answer = 0;
    let empty = 0;
    let maxW = 0;
    let maxH = 0;
    
    
    for(let i = 0 ; i<sizes.length ; i++){
        let [w , h] = sizes[i]
        if(w<h){
            empty = h;
            h = w;
            w = empty;
        }
        
        if(maxW < w) maxW = w
        if(maxH < h) maxH = h
        
    }
    
    answer = maxW*maxH
    return answer;
}